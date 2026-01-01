import { useState } from 'react';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects-section container">
            <h2 className="section-title">Operational Case Studies</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                        <div className="card-header">
                            <span className="folder-icon">📁</span>
                            <h3>{project.title}</h3>
                        </div>
                        <div className="card-body">
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">#{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="card-footer">
                            <span className={`status ${project.status.toLowerCase()}`}>
                                {project.status}
                            </span>
                            <button className="open-btn">ACCESS_FILE</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{selectedProject.title} // DECLASSIFIED</h3>
                            <button className="close-modal" onClick={() => setSelectedProject(null)}>[X]</button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-meta">
                                <span><strong>Platform:</strong> {selectedProject.platform}</span>
                                <span><strong>Status:</strong> {selectedProject.status}</span>
                            </div>
                            <div className="markdown-content">
                                {/* Simple markdown-like rendering */}
                                {selectedProject.details.split('\n').map((line, i) => {
                                    if (line.startsWith('# ')) return <h1 key={i}>{line.replace('# ', '')}</h1>;
                                    if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
                                    if (line.startsWith('- ')) return <li key={i}>{line.replace('- ', '')}</li>;
                                    return <p key={i}>{line}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
