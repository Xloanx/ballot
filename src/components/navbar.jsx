import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return ( 
        <main>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/welcome"> Ballot App </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/welcome"> Welcome </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/booth"> Booth </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register"> Register </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout"> Logout </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login"> Login </NavLink>
                        </li>
                        </ul>
                        <form>
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </main>
     );
}
 
export default Navbar;