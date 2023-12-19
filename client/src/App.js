import './App.css';
import { useSelector } from 'react-redux';
import Sidebar from './containers/sidebar';
import Header from './containers/header';
import Dashboard from './containers/dashboard';
import Loader from './components/Loader';

import { BrowserRouter as Router, Route, Redirect, Switch, Routes } from 'react-router-dom';

function App() {
  const isLoading = useSelector(state => state.loader.isLoading);
  console.log(isLoading)
  return (
    <div className="App">
      <Router>
        <div className='container-component'>
          <div className='menu-container'>
            <Sidebar />
          </div>
          <div className='wrapper'>
            <Header />
            {isLoading && (
              <Loader />
            )}
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
