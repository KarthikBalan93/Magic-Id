import React, { useState } from 'react';
import '../css/tableComponent.css';

export default function Table(props) {
    const [selectedRow, setSelectedRow] = useState(null);

    const toggleDetails = (index) => {
        setSelectedRow((prevSelectedRow) =>
            prevSelectedRow === index ? null : index
        );
    };

    return (
        <div className="table-container">
            <table className="responsive-table">
                <thead>
                    <tr>
                        {props.columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.length ?
                        props.data.map((row, index) => (
                            <React.Fragment key={index}>
                                <tr onClick={() => toggleDetails(index)} className={selectedRow === index ? 'highlight' : ''}>
                                    {props.columns.map((column) => (
                                        <td key={'trows-' + column}>
                                            {props.columnOperation
                                                ? props.columnOperation(row[column], column)
                                                : row[column]}
                                        </td>
                                    ))}
                                </tr>
                                {(props.addOnComponent && selectedRow === index) && (
                                    props.addOnComponent(row)
                                )}
                            </React.Fragment>
                        ))
                        :
                        (
                            <tr className="no-data">
                                <td colSpan={props.columns.length}>
                                    No Data Found
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
