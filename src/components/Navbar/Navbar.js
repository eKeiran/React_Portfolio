import React from 'react'
import { Link } from "react-router-dom";
import { about, projects, skills, contact } from '../../portfolio'

const Navbar = () => {
    return (
        <nav className=''>
            <ul>
                {about.length && (
                    <li>
                        <Link to="/">
                            about
                        </Link>
                </li>
                )}

            </ul>
        </nav>
    )
}

export default Navbar