import { useState, useEffect, useRef } from 'react';
import './Terminal.css';
import { fileSystem, helpText } from '../data/terminalCommands';

const Terminal = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Initializing MRM_CYBER OS v3.0...' },
        { type: 'output', content: 'Connection established. Type "help" for commands.' }
    ]);
    const [currentPath, setCurrentPath] = useState('~');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd) => {
        const parts = cmd.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        const newHistory = [...history, { type: 'input', content: `${currentPath} $ ${cmd}` }];

        switch (command) {
            case 'help':
                newHistory.push({ type: 'output', content: helpText });
                break;
            case 'clear':
                setHistory([]);
                return; // Special case, returns empty
            case 'ls':
                const location = resolvePath(currentPath);
                if (typeof location === 'object') {
                    const content = Object.keys(location).map(item => {
                        const isDir = typeof location[item] === 'object';
                        return isDir ? `${item}/` : item;
                    }).join('  ');
                    newHistory.push({ type: 'output', content: content });
                } else {
                    newHistory.push({ type: 'output', content: 'Not a directory' });
                }
                break;
            case 'cat':
                if (args.length === 0) {
                    newHistory.push({ type: 'error', content: 'Usage: cat <filename>' });
                } else {
                    const fileName = args[0];
                    const loc = resolvePath(currentPath);
                    if (loc && loc[fileName]) {
                        if (typeof loc[fileName] === 'string') {
                            newHistory.push({ type: 'output', content: loc[fileName] });
                        } else {
                            newHistory.push({ type: 'error', content: `${fileName} is a directory` });
                        }
                    } else {
                        newHistory.push({ type: 'error', content: `File not found: ${fileName}` });
                    }
                }
                break;
            case 'whoami':
                newHistory.push({ type: 'output', content: 'guest@moyin-portfolio' });
                break;
            case 'date':
                newHistory.push({ type: 'output', content: new Date().toString() });
                break;
            case 'cd':
                // Simplifying cd implementation for now
                if (args.length === 0 || args[0] === '~') {
                    setCurrentPath('~');
                } else {
                    newHistory.push({ type: 'error', content: 'Directory navigation restricted in guest mode. Use "ls" to view files.' });
                }
                break;
            case 'gui':
                onClose();
                newHistory.push({ type: 'output', content: 'Switching to GUI mode...' });
                break;
            case '':
                break;
            default:
                newHistory.push({ type: 'error', content: `Command not found: ${command}` });
        }

        setHistory(newHistory);
    };

    const resolvePath = (path) => {
        if (path === '~') return fileSystem['~'];
        return null;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
        if (e.key === 'c' && e.ctrlKey) {
            setInput('');
            setHistory([...history, { type: 'input', content: `${currentPath} $ ^C` }]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="terminal-overlay">
            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="terminal-title">user@moyin-portfolio:~</span>
                    <button className="close-btn" onClick={onClose}>X</button>
                </div>
                <div className="terminal-content" onClick={() => inputRef.current?.focus()}>
                    {history.map((line, i) => (
                        <div key={i} className={`line ${line.type}`}>
                            {line.content}
                        </div>
                    ))}
                    <div className="input-line">
                        <span className="prompt">{currentPath} $</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
