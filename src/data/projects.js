// ==========================================
// PROJECTS DATA FILE
// ==========================================
// This file contains all the case studies and projects displayed in the 'Operations' section.
// To add a new project:
// 1. Copy one of the objects inside the 'projects' array.
// 2. Paste it at the bottom of the list.
// 3. Update the 'id', 'title', 'description', and 'details' fields.
// 
// 'details' field supports basic Markdown:
// - # for Main Header
// - ## for Sub Header
// - - for Bullet points

export const projects = [
    {
        id: "thm-pre-security",
        title: "Pre-Security Path",
        platform: "TryHackMe",
        description: "A comprehensive foundation in cybersecurity basics, covering networking, web, and linux fundamentals.",
        details: `
# Pre-Security Path Walkthrough

## Introduction
The Pre-Security path lays the groundwork for understanding how systems operate and communicate. It covers the essential building blocks: Networking, Web, and Linux.

## Key Learnings
- **Networking**: Understanding the OSI model, TCP/IP, and common protocols like HTTP, DNS, and FTP.
- **The Web**: How the web works, deeper dives into HTTP requests/responses, cookies, and headers.
- **Linux Fundamentals**: Navigation, file manipulation, and permissions.

## Hands-on Labs
Completed various labs including:
- **Packet Analysis**: Using Wireshark to inspect network traffic.
- **Linux Shell**: Mastering the CLI for file system operations.
        `,
        tags: ["Networking", "Linux", "Web Fundamentals"],
        status: "Completed",
        featured: true
    },
    {
        id: "thm-cyber-101",
        title: "Cybersecurity 101",
        platform: "TryHackMe",
        description: "Introduction to offensive and defensive security concepts.",
        details: `
# Cybersecurity 101

## Overview
This path bridges the gap between theory and practice, introducing real-world attack vectors and defense mechanisms.

## Modules
- **Offensive Security**: Introduction to web application vulnerabilities (OWASP Top 10).
- **Defensive Security**: Basics of SOC operations, log analysis, and incident response.

## Practical application
Executed basic SQL injection attacks in a controlled environment and analyzed the resulting database dumps.
        `,
        tags: ["OWASP", "SQL Injection", "SOC"],
        status: "Completed",
        featured: false
    },
    {
        id: "thm-jr-pentest",
        title: "Jr Penetration Tester",
        platform: "TryHackMe",
        description: "Advanced path focusing on methodologies used by penetration testers.",
        details: `
# Jr Penetration Tester Path

## Methodology
Learned and applied the standard pentesting lifecycle:
1. **Reconnaissance**: Passive and active info gathering (nmap, gobuster).
2. **Enumeration**: Service version detection and vulnerability scanning.
3. **Exploitation**: Using Metasploit and manual scripts to gain access.
4. **Privilege Escalation**: Linux and Windows privilege escalation techniques.

## Key Tools Mastered
- **Nmap**: For network discovery and auditing.
- **Burp Suite**: For web application security testing.
- **Metasploit**: For exploiting known vulnerabilities.
- **Hydra**: For brute-forcing login forms.

## Capstone
Successfully rooted several machines by chaining vulnerabilities found during enumeration.
        `,
        tags: ["Pentesting", "Burp Suite", "PrivEsc", "Metasploit"],
        status: "Completed",
        featured: true
    }
];
