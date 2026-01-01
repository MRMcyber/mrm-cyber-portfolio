import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section container">
            <div className="about-content">
                <h2 className="section-title">Identity Verification</h2>
                <div className="bio-card">
                    <div className="bio-image">
                        {/* 
                          TO CHANGE IMAGE:
                          1. Put your image (e.g., 'moyin.jpg') in the 'public' folder.
                          2. Change the src below to: "/moyin.jpg"
                        */}
                        <img src="/Moyin.jpg" alt="Moyin Avatar" />
                        <div className="scan-line"></div>
                    </div>
                    <div className="bio-text">
                        <h3>Moyin // Cyber Analyst</h3>
                        <p>
                            I am a cybersecurity enthusiast and professional focused on <strong>Network Defense</strong>, <strong>Penetration Testing</strong>, and <strong>Security Operations</strong>.
                        </p>
                        <p>
                            My journey began with a curiosity for how systems break, leading to a disciplined study of how to secure them. With certifications from CompTIA and extensive hands-on training from TryHackMe and StationX, I bridge the gap between theoretical knowledge and practical application.
                        </p>
                        <div className="stats-grid">
                            <div className="stat">
                                <span className="val">200+</span>
                                <span className="label">Labs Completed</span>
                            </div>
                            <div className="stat">
                                <span className="val">3+</span>
                                <span className="label">Certifications</span>
                            </div>
                            <div className="stat">
                                <span className="val">100%</span>
                                <span className="label">Dedication</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
