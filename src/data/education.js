// ==========================================
// EDUCATION & CERTIFICATIONS DATA
// ==========================================
// This file controls the timeline in the "Credentials & Training" section.
//
// FORMAT:
// {
//    id: unique_number,
//    title: "Name of the certification",
//    issuer: "Who gave it (e.g., CompTIA, Udemy)",
//    date: "When you got it",
//    description: "Brief summary",
//    skills: ["Array", "of", "Skills"] -- displayed as little pills
// }

export const education = [
    {
        id: 1,
        title: "CompTIA ITF+",
        issuer: "CompTIA",
        date: "2024",
        description: "Fundamental cybersecurity and IT infrastructure knowledge aimed at beginners.",
        skills: ["IT Fundamentals", "Security Concepts", "Database Basics", "Software Development"],
        verified: true,
        img: "comptia-itf.png"
    },
    {
        id: 2,
        title: "CompTIA Network+",
        issuer: "CompTIA",
        date: "2024",
        description: "Core networking skills including troubleshooting, configuration, and managing networks.",
        skills: ["Network Security", "Network Infrastructure", "Network Operations", "Network Troubleshooting"],
        verified: true,
        img: "comptia-net.png"
    },
    {
        id: 3,
        title: "Cyber Security Vol 1 & 2",
        issuer: "Nathan House (StationX)",
        date: "2024",
        description: "Comprehensive training covering anonymity, privacy, and endpoint security.",
        skills: ["Anonymity", "Privacy", "Endpoint Security", "Network Hardening"],
        verified: true,
        img: "stationx.png"
    }
];

export const certifications = education; // Alias for flexibility
