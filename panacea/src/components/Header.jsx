import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Home from './Home';

function Header() {
    return (
        <BrowserRouter>
            <div className="flex h-[15vh] items-center justify-around bg-primary">
                <div className="flex items-center justify-center font-semibold text-2xl text-secondary">
                    <img src="https://panaceasolutionnepal.com/wp-content/uploads/2024/08/panacea-1-300x277.png" alt="Panacea logo" className="w-[100px] h-[100px]" />
                    <h1>Panacea Solution Nepal</h1>
                </div>
                <ul className="flex space-x-4 text-2xl font-serif gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/components/Demo1">Demo1</Link>
                    </li>
                    <li>
                        <Link to="/components/Demo2">Demo2</Link>
                    </li>
                    <li>
                        <Link to="/components/Demo3">Demo3</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/components/Demo1" element={<Demo1 />} />
                <Route path="/components/Demo2" element={<Demo2 />} />
                <Route path="/components/Demo3" element={<Demo3 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Header;
