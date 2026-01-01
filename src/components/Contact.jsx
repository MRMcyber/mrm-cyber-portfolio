import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section container">
            <h2 className="section-title">Secure Communications</h2>

            <div className="contact-wrapper">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>IDENTIFIER (NAME)</label>
                        <input type="text" placeholder="Enter your alias..." />
                    </div>

                    <div className="form-group">
                        <label>TRANSMISSION SOURCE (EMAIL)</label>
                        <input type="email" placeholder="email@domain.com" />
                    </div>

                    <div className="form-group">
                        <label>PAYLOAD (MESSAGE)</label>
                        <textarea rows="5" placeholder="Encrypting message..."></textarea>
                    </div>

                    <button className="btn-primary" type="submit">TRANSMIT_DATA</button>

                    <p className="encryption-note">
                        * All transmissions are end-to-end encrypted using PGP keys.
                        <br />
                        Public Key Fingerprint: 4D 58 4E ...
                    </p>
                </form>

                <div className="contact-info">
                    {/* 
                      ==========================================
                      CONTACT DETAILS
                      ==========================================
                      Update your email, LinkedIn, and GitHub links here.
                    */}
                    <h3>Direct Channels</h3>
                    <ul>
                        <li><span className="icon">🔗</span> linkedin.com/in/MRM_Cyber</li>
                        <li><span className="icon">🐙</span> github.com/MRMCyber</li>
                        <li><span className="icon"> 𝕩 </span> x.com/MRM_Cyber</li>
                    </ul>

                    <div className="cyber-map">
                        {/* Decorative visual for map */}
                        <div className="grid-overlay"></div>
                        <div className="location-pin"></div>
                        <span className="loc-text">[LOCATED: UNKNOWN]</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
