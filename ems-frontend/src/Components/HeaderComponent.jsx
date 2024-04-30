import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg bg-dark navbar-dark">

                <a className="navbar-brand" href="https://github.com/djenole">Sistema de gestão de funcionários</a>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <li className='nav-item'>
                            <NavLink className=" nav-link" to='/employees'>funcionários</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className=" nav-link" to='/departments'>Departamentos</NavLink>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}
