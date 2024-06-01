import React from 'react';
import Link from 'next/link';
import './style.css';

const pages: Record<string, `/${string}`> = {
    home: "/",
    recipes: "/cms/recipes",
    cakes: "/cakes",
    cookies: "/cookies",
    muffins: "/muffins",
    other: "/other",
    signup: "/signup",
};

const Header: React.FC = () => {
    return (
        <header>
            <div id="logo">
                <Link href="/"><img src="/images/logo.png" alt="logo" /></Link>
                <Link href="/"><p id="title">SWEET ODYSSEY</p></Link>
            </div>
            <div id="navbar">
                {Object.entries(pages).map(([name, path]) => 
                    <Link key={name} href={path}>{name}</Link>)
                }
            </div>
        </header>
    );
}

export { Header as default, pages };