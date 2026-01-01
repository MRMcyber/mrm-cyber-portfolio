import { useEffect, useRef } from 'react';
import './SkillsGraph.css';

const SkillsGraph = () => {
    const canvasRef = useRef(null);

    // ==========================================
    // SKILLS CONFIGURATION
    // ==========================================
    // Edit this list to change the radar chart.
    // 'level' should be a number between 0 and 100.
    // Keep the number of skills between 5-7 for the best visual look.
    const skills = [
        { name: 'Network Security', level: 90 },
        { name: 'Penetration Testing', level: 85 },
        { name: 'Linux Admin', level: 80 },
        { name: 'Python/Scripting', level: 75 },
        { name: 'Web Assessment', level: 85 },
        { name: 'Forensics', level: 70 },
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Responsive capability
        const isMobile = window.innerWidth < 768;
        let width = canvas.width = isMobile ? 300 : 500;
        let height = canvas.height = isMobile ? 300 : 500;

        const centerX = width / 2;
        const centerY = height / 2;
        const radius = isMobile ? 90 : 150;

        const drawGraph = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Web Grid
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;

            for (let r = 0; r <= 5; r++) {
                ctx.beginPath();
                const curRadius = (radius / 5) * r;
                for (let i = 0; i < skills.length; i++) {
                    const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                    const x = centerX + Math.cos(angle) * curRadius;
                    const y = centerY + Math.sin(angle) * curRadius;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();
            }

            // Draw Axes
            skills.forEach((skill, i) => {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
                ctx.strokeStyle = '#444';
                ctx.stroke();

                // Labels
                const lx = centerX + Math.cos(angle) * (radius + 30);
                const ly = centerY + Math.sin(angle) * (radius + 30);
                ctx.fillStyle = '#0f0';
                ctx.font = '12px Courier New';
                ctx.textAlign = 'center';
                ctx.fillText(skill.name, lx, ly);
            });

            // Draw Data Area
            ctx.beginPath();
            skills.forEach((skill, i) => {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                const valRadius = (skill.level / 100) * radius;
                const x = centerX + Math.cos(angle) * valRadius;
                const y = centerY + Math.sin(angle) * valRadius;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.closePath();
            ctx.fillStyle = 'rgba(0, 255, 65, 0.4)';
            ctx.fill();
            ctx.strokeStyle = '#0f0';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw Points
            skills.forEach((skill, i) => {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                const valRadius = (skill.level / 100) * radius;
                const x = centerX + Math.cos(angle) * valRadius;
                const y = centerY + Math.sin(angle) * valRadius;
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.fill();
            });
        };

        drawGraph();

    }, []);

    return (
        <div className="skills-graph-container" id="skills">
            <h2 className="section-title">Technical Proficiency</h2>
            <div className="canvas-wrapper">
                <canvas ref={canvasRef} className="skills-canvas" />
            </div>
            <div className="skills-list">
                {skills.map(s => (
                    <div key={s.name} className="skill-item">
                        <span className="skill-name">{s.name}</span>
                        <div className="skill-bar-bg">
                            <div className="skill-bar-fill" style={{ width: `${s.level}% ` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsGraph;
