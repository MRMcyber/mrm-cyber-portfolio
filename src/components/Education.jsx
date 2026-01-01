import { education } from '../data/education';
import './Education.css';

const Education = () => {
    return (
        <section className="education-section container">
            <h2 className="section-title">Credentials & Training</h2>

            <div className="timeline">
                {education.map((item, index) => (
                    <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                            <div className="date-badge">{item.date}</div>
                            <h3>{item.title}</h3>
                            <h4 className="issuer">{item.issuer}</h4>
                            <p>{item.description}</p>
                            <div className="skills-tags">
                                {item.skills.map(skill => (
                                    <span key={skill} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
