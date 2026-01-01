import { useState } from 'react';
import { glossary } from '../data/securityGlossary';
import './Glossary.css';

const Glossary = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Duplicate the glossary to make the list look longer/more impressive if needed, 
    // but filtering works on the real unique list generally. 
    // For now we use the unique list.

    const filtered = glossary.filter(item =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.def.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="glossary-section container">
            <h2 className="section-title">Knowledge Base // Index</h2>

            <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Search database..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="glossary-grid">
                {filtered.map((item, idx) => (
                    <div key={idx} className="glossary-item">
                        <h4 className="term">{item.term}</h4>
                        <p className="def">{item.def}</p>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="no-results">
                    No matching records found in database.
                </div>
            )}
        </section>
    );
};

export default Glossary;
