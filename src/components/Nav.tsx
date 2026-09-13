import React from 'react';
import Logo from "../assets/logo-text.png";

const Nav = () =>  {

        return (
            <nav>
                <div className='container mx-auto flex justify-between items-center'>
                    <img src={Logo} alt="" />
                    <ul className='flex gap-4 items-center'>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                   <div className='flex items-center gap-4'>
                     <button>Sign In</button>
                    <button className='rounded-full bg-pink-500 px-4 py-1.5 text-[11px] '>Sign out</button>
                   </div>
                </div>
            </nav>
        );
    
}

export default Nav;