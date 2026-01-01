import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    // ==========================================
    // HERO TEXT CONFIGURATION
    // ==========================================
    // Change these strings to update the typing animation text.
    const [text, setText] = useState('');
    const fullText = "SYSTEM INTEGRITY: CHECKED. ACCESS GRANTED.";
    const [subText, setSubText] = useState('');
    const fullSubText = "Welcome to the digital portfolio of Moyin.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
                // Start subtext
                let j = 0;
                const subInterval = setInterval(() => {
                    setSubText(fullSubText.slice(0, j));
                    j++;
                    if (j > fullSubText.length) clearInterval(subInterval);
                }, 50);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="status-bar">
                    <span className="status-dot"></span>
                    ONLINE
                </div>
                <h1 className="glitch" data-text="MRM_CYBER">MRM_CYBER</h1>
                <h2 className="typing-text">{text}<span className="cursor">_</span></h2>
                <p className="sub-text">{subText}</p>

                <div className="hero-actions">
                    <a href="#projects" className="btn-primary">
                        INITIALIZE OPERATIONS
                    </a>
                    <a href="#contact" className="btn-secondary">
                        ESTABLISH COMMS
                    </a>
                </div>
            </div>

            <div className="hero-visuals">
                <div className="hologram-container">
                    <div className="gyroscope">
                        <div className="ring ring-1"></div>
                        <div className="ring ring-2"></div>
                        <div className="ring ring-3"></div>
                        <div className="core"></div>
                    </div>
                    <div className="holo-base"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
