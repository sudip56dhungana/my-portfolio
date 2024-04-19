import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Sudip Dhungana. All rights reserved.</p>
                <p>Email: sudipdhungana41@gmail.com | Phone:9847108767</p>
                <ul className="social-links">
                    <li><a href="https://linkedin.com/in/sudip-dhungana-ab39501b7/" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li><a href="https://github.com/sudip56dhungana" target="_blank" rel="noopener noreferrer"></a></li>
                    <li><a href="https://www.facebook.com/sudip.dhungnana/" target="_blank" rel="noopener noreferrer"></a></li>
                    <li><a href="mailto:sudipdhungana41@gmail.com"></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
