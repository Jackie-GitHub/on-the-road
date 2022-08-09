import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="text-center">Developed by Jiaqi Xu ⓒ {currentYear}</div>
        </footer>
    )
}

export default Footer;