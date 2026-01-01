import './Contact.css';

import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SENT

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('SENDING');
        // Simulate encryption/sending delay
        setTimeout(() => {
            setStatus('SENT');
            setTimeout(() => setStatus('IDLE'), 3000);
            setFormState({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section id="contact" className="contact-section container">
            <h2 className="section-title">SECURE_CHANNEL_LINK</h2>

            <div className="contact-wrapper">
                <div className="terminal-form-container">
                    <div className="terminal-header-bar">
                        <div className="dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="terminal-title">ENCRYPTED_TRANSMISSION_PROTOCOL</span>
                    </div>

                    <form className="terminal-form" onSubmit={handleSubmit}>
                        <div className="form-line">
                            <span className="prompt">root@mrm-cyber:~/msg&gt;</span>
                            <span className="command">SET_SENDER_ID</span>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="ENTER_NAME"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-line">
                            <span className="prompt">root@mrm-cyber:~/msg&gt;</span>
                            <span className="command">SET_RETURN_PATH</span>
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="ENTER_EMAIL"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-line">
                            <span className="prompt">root@mrm-cyber:~/msg&gt;</span>
                            <span className="command">INPUT_PAYLOAD</span>
                        </div>
                        <div className="input-group">
                            <textarea
                                placeholder="TYPE_MESSAGE..."
                                rows="4"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={`transmit-btn ${status.toLowerCase()}`}>
                            {status === 'IDLE' && '>> EXECUTE_TRANSMISSION'}
                            {status === 'SENDING' && 'ENCRYPTING... [||||||    ]'}
                            {status === 'SENT' && '✔ TRANSMISSION_COMPLETE'}
                        </button>
                    </form>
                </div>

                <div className="contact-info-panel">
                    <div className="info-card">
                        <h3>DIRECT_UPLINKS</h3>
                        <div className="uplink-list">
                            <a href="#" className="uplink-item">
                                <span className="icon">LINKEDIN</span>
                                <span className="value">/in/MRM_Cyber</span>
                            </a>
                            <a href="#" className="uplink-item">
                                <span className="icon">GITHUB</span>
                                <span className="value">/MRMCyber</span>
                            </a>
                            <a href="#" className="uplink-item">
                                <span className="icon">X_CORP</span>
                                <span className="value">@MRM_Cyber</span>
                            </a>
                        </div>
                    </div>

                    <div className="geo-locator">
                        <div className="grid-bg"></div>
                        <div className="target-reticle"></div>
                        <div className="coordinates">
                            <span>LAT: [REDACTED]</span>
                            <span>LNG: [REDACTED]</span>
                            <span className="status-blink">SIGNAL_ACTIVE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
