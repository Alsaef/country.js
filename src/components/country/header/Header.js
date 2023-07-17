import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <header>
                <section>
                    <div className='header'>
                        <div className='logo'>
                         <h2><a href="">Country Api</a></h2>
                        </div>
                        <nav>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Gellary</a></li>

                        </nav>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default Header;