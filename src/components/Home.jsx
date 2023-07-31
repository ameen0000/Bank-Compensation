import React, { useState } from 'react';
import './home.css';
import data from './Data';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaRegFlag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {

 
  const [dashbord, setDashbord] = useState(data);

  const handle = (x) => {
    let filter;
    if (x === 'completed') {
      filter = data.filter((y) => y.status === x);
    } else  {
      filter = data.filter((y) => y.status !== 'completed');
    }
   
    setDashbord(filter);
  };

  useEffect(() => {
    handle('Draft'); 
    localStorage.clear()
  }, []);

  
  
 

  return (
    <div className="parent">
      <div className="line"></div>
      <h3 className="dash">DASHBOARD</h3>
      <div className="btn1">
        <Link to={'request'} className="bt1">
          Create  
          {localStorage.removeItem("itemss")}
        </Link>
      </div>
      <div className="container1">
        <div className="btn2">
        <button className='bt2' id='idi' onClick={() => handle('Draft')}><FaRegTimesCircle className='close' />Inprogress</button>  

        </div>
       <div className="bb">
        <button className='btt' onClick={() => handle('completed')}><FaRegFlag className='flag' />Completed</button></div>
   
        <hr className="hrr" />
        <div className="search">
          <label>Search: </label>
          <input className="ser" type="text" />
        </div>
        <div className="con">
          <table border={1} className='table'>
            <thead>
              <tr>
                <th className='hth'>ID</th>
                <th className='hth'>REQUEST ON</th>
                <th className='hth'>CUSTOMER NAME</th>
                <th className='hth'>BRANCH CODE</th>
                <th className='hth'>BRANCH NAME</th>
                <th className='hth'>CUSTOMER ACCOUNT NUMBER</th>
                <th className='hth'>COMPENSATION</th>
                <th className='hth'>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {dashbord.map((obj,index) => (
                <tr key={index}>
                  <td className='htd'>{obj.id}</td>
                  <td className='htd'>{obj.requestedOn}</td>
                  <td className='htd'>{obj.customername}</td>
                  <td className='htd'>{obj.branchcode}</td>
                  <td className='htd'>{obj.branchname}</td>
                  <td className='htd'>{obj.customeraccountnumber}</td>
                  <td className='htd'>{obj.compensation}</td>
                  <td className='htd'>{obj.status}</td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
