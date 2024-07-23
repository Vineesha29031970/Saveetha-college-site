import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutComponents from '../../routes/About Components/About Components'
import HomeComponents from '../../routes/Home Components/Home Components'
import DepartmentComponents from '../../routes/Department Components/Department Components'
import EventComponents from '../../routes/Event Components/Event Components'
import './Navigation Components.css'



const NavigationComponents = () => {
    return (
        <BrowserRouter >
            <div className="navbar">
                <ul className='ul'>
                    <li className='li'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='li'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='li'>
                        <Link to='/department'>Department</Link>
                    </li >
                    <li className='li'> 
                        <Link to='/event'>Event</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route exact path='/' element={<HomeComponents />} />
                <Route exact path='/about' element={<AboutComponents />} />
                <Route exact path='/department' element={<DepartmentComponents />} />
                <Route exact path='/event' element={<EventComponents />} />
            </Routes>
            <div className="footer">
                <p>© 2024 Saveetha Engineering College. All rights reserved.</p>
            </div>
        </BrowserRouter>
    )
}

export default NavigationComponents