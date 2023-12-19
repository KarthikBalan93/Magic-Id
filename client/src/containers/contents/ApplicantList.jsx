import React, { useEffect, useState } from 'react';
import '../../css/applicantList.css'
import { CiSearch } from "react-icons/ci";
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import { GoWorkflow } from 'react-icons/go';
import { CiCalendar } from "react-icons/ci";
import { TbProgressCheck } from "react-icons/tb";
import Table from '../../components/Table';
import IconText from '../../components/IconText';
import { FiUser } from "react-icons/fi";
import CustomButton from '../../components/CustomButton';
import { TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import api from '../../api';
import { setLoader } from '../../redux/actions/ui/loaderAction';
import { useDispatch } from 'react-redux';
import { formatUTCDate } from '../../helpers/utils';


export default function ApplicantList() {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const [closeSearch, setCloseSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    
    const [error, setError] = useState({ status: false, message: '' });
    const columns = ['Applicant Name', 'Verification Flow', 'Last Updated', 'Status'];

    const componentData = async (term = '') => {
        dispatch(setLoader(true))
        await api.get('/applicants', {
            params: { search: term }
        }).then(res => {
            console.log(res)
            setData(res)
        }).catch(err => {
            setError({ error: true, message: err.message })
        })
        dispatch(setLoader(false))
    }
    useEffect(() => {
        let isMount = true;
        if (isMount) componentData();
        return () => {
            isMount = false;
        };
    }, [])

    const handleSearch = (text) => {
        setSearchTerm(text)
        debouncedFetchSearchResults(text)
    }

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const fetchSearchResults = async (term) => {
        try {
            if (term.length) {
                setCloseSearch(true)
                await componentData(term)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const clearSearch = async() => {
        setCloseSearch(false);
        setSearchTerm('')
        await componentData()
    }

    const debouncedFetchSearchResults = debounce((term) => {
        fetchSearchResults(term);
      }, 1000);

    const columnComponent = (data, column) => {
        let componentData = data;
        if (column === 'Applicant Name') {
            componentData = (<IconText text={data} icon={<FiUser />} color={'darkblue'} fontWeight={500} />)
        } else if (column === 'Last Updated') {
            componentData = formatUTCDate(data)
        } else if (column === 'Status') {
            let icon, bgColor = '#fff', color = '#fff', borderColor = 'none';
            if (data === 'Approved') {
                icon = <TiTick />;
                bgColor = '#E6F0ED';
                color = '#A0BFB4'
            } else if (data === 'Declined') {
                icon = <AiOutlineClose />
                color = '#000';
                borderColor = '1px solid #ccc'
            } else if (data === 'Needs Review') {
                bgColor = 'darkblue'
            } else if (data === 'Awaiting Applicant') {
                bgColor = '#ccc'
            }
            componentData = <CustomButton text={data} borderColor={borderColor} icon={icon} textColor={color} backgroundColor={bgColor} />
        }
        return (<>{componentData}</>)
    }

    const addAditionalComponent = (row) => {
        return (<tr className="details-row open">
            <td colSpan={columns.length}>
                <div className="details-content">
                    <div className="details-item">
                        <span className="details-label">D.O.B</span>
                        <span className="details-value">{formatUTCDate(row.dob, false)}</span>
                    </div>
                    <div className="details-item">
                        <span className="details-label">Address</span>
                        <span className="details-value">{row.address}</span>
                    </div>
                    <div className="details-item">
                        <span className="details-label">Contact</span>
                        <span className="details-value">{row.contact}</span>
                    </div>
                </div>
            </td>
        </tr>)
    }

    return (
        <div className='applicant-list'>
            <div className='filter-component'>
                <span>Filter By</span>
                <span style={{ width: '17%' }}>
                    <Input icon={<CiSearch />} close={closeSearch} clearSearch={clearSearch} placeholder={'Search Name'} onChange={(e) => handleSearch(e.target.value)} value={searchTerm} />
                </span>
                <span>
                    <Dropdown options={['Full Kyc', 'Core verification with watchlist']} icon={<GoWorkflow size={18} color='grey' />} name={'Workflow'} />
                </span>
                <span>
                    <Dropdown options={['Full Kyc', 'Core verification with watchlist']} icon={<CiCalendar size={18} color='grey' />} name={'Last Updated'} />
                </span>
                <span>
                    <Dropdown options={['Full Kyc', 'Core verification with watchlist']} icon={<TbProgressCheck size={18} color='grey' />} name={'Status'} />
                </span>
            </div>
            <Table data={data} columnOperation={columnComponent} addOnComponent={addAditionalComponent} columns={columns}></Table>
        </div>
    )
}
