import { useState } from 'react';
import './Navbar.css'; // We'll create this specific CSS

const Navbar = ({ toggleTerminal, terminalOpen }) => {
    const [isHovered, setIsHovered] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home //', path: '#' },
        { id: 'about', label: 'Identity', path: '#about' },
        { id: 'skills', label: 'Skillset', path: '#skills' },
        { id: 'projects', label: 'Operations', path: '#projects' },
        { id: 'contact', label: 'Comms', path: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="logo glitch" data-text="MRM_CYBER">
                MRM_CYBER
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? '[X]' : '[=]'}
            </button>

            <ul className={`nav - links ${isMenuOpen ? 'active' : ''} `}>
                {navItems.map((item) => (
                    <li key={item.id}
                        onMouseEnter={() => setIsHovered(item.id)}
                        onMouseLeave={() => setIsHovered(null)}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <a href={item.path}>
                            <span className="bracket">[</span>
                            {item.label}
                            <span className="bracket">]</span>
                        </a>
                        {isHovered === item.id && <div className="nav-scanline"></div>}
                    </li>
                ))}
            </ul>

            <button className="terminal-toggle" onClick={toggleTerminal}>
                {terminalOpen ? '> EXIT_TERM' : '> INIT_TERM'}
            </button>
        </nav>
    );
};

export default Navbar;
