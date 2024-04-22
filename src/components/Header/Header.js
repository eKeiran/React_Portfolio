import React from 'react'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
const Header = () => {
    const { homepage, title } = header
    return (
        <header>
            <h3>
                {homepage ? (
                    <a href={homepage}>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <Navbar />
        </header>
    );
};

export default Header