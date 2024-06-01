import React from 'react';
import {pages} from './Header';
import Link from 'next/link';
import './style.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div id="copyright">
                <img src="/images/logo.png" alt="logo" />
                <p>Gina Aurora Belamarić &<br />
                Karla Pupačić</p>
            </div>
            <div id="sitemap">
                <h3>Sitemap</h3>
                {Object.entries(pages).map(([name, path]) => 
                    <Link key={name} href={path}>{name}</Link>)
                }
            </div>
            <div>
                <h3>Contact us</h3>
                <p>Ul. Najslay Slejaza, 21310, Split, Croatia</p>
                <p>broj: 099 686 8128<br />
                mail: najslay@slay.com<br />
                tiktok: @najslay.twinz<br />
                instagram: @najslay.twinz</p>
            </div>
        </footer>
    );
}

export default Footer;