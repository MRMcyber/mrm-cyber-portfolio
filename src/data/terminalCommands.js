import { projects } from './projects';
import { education } from './education';

export const fileSystem = {
    "~": {
        "about.txt": "Name: Moyin\nRole: Cybersecurity Analyst / Pentester\nStatus: Available for hire\nLocation: [REDACTED]\n\nI am a passionate security professional with a focus on network defense and offensive security operations.",
        "skills.txt": "CORE COMPETENCIES:\n- Network Security (Firewalls, IDS/IPS)\n- Penetration Testing (Web & Infrastructure)\n- Linux Administration\n- Vulnerability Assessment\n- Security Auditing\n\nTOOLS:\n- Nmap, Burp Suite, Metasploit, Wireshark, Nessus",
        "projects": {
            ...projects.reduce((acc, proj) => {
                acc[`${proj.id}.md`] = proj.details;
                return acc;
            }, {})
        },
        "education": {
            ...education.reduce((acc, edu) => {
                acc[`${edu.issuer}-${edu.title.replace(/\s+/g, '_')}.txt`] = `${edu.title}\nIssued by: ${edu.issuer}\nDate: ${edu.date}\n\n${edu.description}`;
                return acc;
            }, {})
        },
        "contact.txt": "Email: moyin@secure-mail.com (placeholder)\nGitHub: github.com/moyin\nLinkedIn: linkedin.com/in/moyin"
    }
};

export const helpText = `
Available commands:
  help      - Show this help message
  ls        - List directory contents
  cd <dir>  - Change directory
  cat <file>- Print file contents
  clear     - Clear the terminal screen
  whoami    - Display current user
  date      - Display current system time
  gui       - Switch to Graphical User Interface mode
`;
