import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minus, Maximize2, Minimize2, Trash2, HelpCircle, Download, Sparkles, Send, CornerDownLeft } from 'lucide-react';
import cvFile from '../Soham Mondal CV.pdf';

const COMMANDS = [
  { name: 'help', desc: 'Display all available terminal commands' },
  { name: 'about', desc: 'Read Soham\'s biography and professional background' },
  { name: 'skills', desc: 'View technical skills breakdown and proficiency' },
  { name: 'projects', desc: 'Explore featured portfolio projects' },
  { name: 'contact', desc: 'Get contact info & direct social links' },
  { name: 'cv', desc: 'Download Soham Mondal\'s official CV' },
  { name: 'matrix', desc: 'Toggle digital rain Matrix visual effect' },
  { name: 'theme', desc: 'Switch terminal theme (matrix, cyberpunk, dracula, neon, classic)' },
  { name: 'cat <file>', desc: 'Read virtual file (bio.txt, skills.json, contact.md, projects.yaml)' },
  { name: 'whoami', desc: 'Display visitor shell session details' },
  { name: 'date', desc: 'Show current timestamp & local time' },
  { name: 'clear', desc: 'Clear terminal screen output' },
  { name: 'exit', desc: 'Close terminal session' }
];

const THEMES = {
  matrix: { name: 'Matrix Green', text: '#00ff66', bg: 'rgba(10, 20, 14, 0.95)', prompt: '#00ff66', border: 'rgba(0, 255, 102, 0.3)' },
  neon: { name: 'Neon Cyber', text: '#00f3ff', bg: 'rgba(12, 14, 24, 0.95)', prompt: '#ff007f', border: 'rgba(0, 243, 255, 0.3)' },
  dracula: { name: 'Dracula Dark', text: '#f8f8f2', bg: 'rgba(20, 18, 30, 0.95)', prompt: '#bd93f9', border: 'rgba(189, 147, 249, 0.3)' },
  cyberpunk: { name: 'Cyberpunk Amber', text: '#ffb703', bg: 'rgba(25, 20, 10, 0.95)', prompt: '#ff0055', border: 'rgba(255, 183, 3, 0.3)' },
  classic: { name: 'Classic Mono', text: '#e2e8f0', bg: 'rgba(15, 23, 42, 0.95)', prompt: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)' }
};

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [themeKey, setThemeKey] = useState('neon');
  const [isMaximized, setIsMaximized] = useState(true);
  const [matrixActive, setMatrixActive] = useState(false);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);

  // Initialize terminal welcome banner
  useEffect(() => {
    if (isOpen) {
      if (history.length === 0) {
        setHistory([
          { type: 'system', content: 'SOHAM MONDAL INTERACTIVE TERMINAL [Version 2.4.0]' },
          { type: 'system', content: 'Type "help" to view available commands or click quick action chips below.' },
          { type: 'system', content: '----------------------------------------------------------------------' }
        ]);
      }
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  // Auto-scroll output
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  // ESC key listener to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Matrix Digital Rain effect
  useEffect(() => {
    if (!matrixActive || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>/{}=+*#@';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 15, 12, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = THEMES[themeKey].prompt || '#00ff66';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);
    return () => clearInterval(interval);
  }, [matrixActive, themeKey]);

  if (!isOpen) return null;

  const activeTheme = THEMES[themeKey] || THEMES.neon;

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', content: trimmed }];
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let responseLines = [];

    switch (mainCmd) {
      case 'help':
      case '?':
        responseLines = [
          { type: 'output-header', content: '=== AVAILABLE COMMANDS ===' },
          ...COMMANDS.map((c) => ({
            type: 'output-cmd',
            cmd: c.name.padEnd(14, ' '),
            desc: c.desc
          })),
          { type: 'system', content: 'Tip: Press UP/DOWN arrows for command history or TAB for auto-complete.' }
        ];
        break;

      case 'about':
      case 'bio':
        responseLines = [
          { type: 'output-header', content: '=== SOHAM MONDAL — ABOUT ME ===' },
          { type: 'output-text', content: 'Role: Versatile Full-Stack Developer & UI/UX Specialist' },
          { type: 'output-text', content: 'Experience: 4+ Years crafting robust, scalable web & mobile apps.' },
          { type: 'output-text', content: 'Completed Projects: 30+ production implementations.' },
          { type: 'output-text', content: 'Bio: I build high-performance web systems with clean architecture, interactive modern visual animations, and robust backend engineering.' }
        ];
        break;

      case 'skills':
      case 'tech':
      case 'stack':
        responseLines = [
          { type: 'output-header', content: '=== TECHNICAL SKILLS & STACK ===' },
          { type: 'output-text', content: 'Frontend:  React, Next.js, JavaScript (ES6+), HTML5/CSS3 [██████████] 95%' },
          { type: 'output-text', content: 'Backend:   Node.js, Express, Python, REST APIs      [█████████░] 90%' },
          { type: 'output-text', content: 'Databases: MongoDB, PostgreSQL, Firebase           [████████░░] 85%' },
          { type: 'output-text', content: 'Tools & DevOps: Git, Docker, Linux, Netlify, Vite   [█████████░] 88%' }
        ];
        break;

      case 'projects':
      case 'work':
        responseLines = [
          { type: 'output-header', content: '=== FEATURED PROJECTS ===' },
          { type: 'output-project', name: '1. Smart Daily Expense Tracker', tech: 'Flutter / Web / Storage', desc: 'Real-time financial tracking & localized dashboard.' },
          { type: 'output-project', name: '2. Admin & Client Real-time Sync', tech: 'Node.js / Socket.IO', desc: 'Instant multi-tenant document & file sync system.' },
          { type: 'output-project', name: '3. Terminal UI Portfolio Website', tech: 'React / Vite / Custom CSS', desc: 'Interactive developer showcase with built-in CLI shell.' },
          { type: 'system', content: 'Visit GitHub: https://github.com/soham1304s' }
        ];
        break;

      case 'contact':
      case 'hire':
        responseLines = [
          { type: 'output-header', content: '=== CONTACT DETAILS ===' },
          { type: 'output-text', content: '📧 Email:    soham.mondal.dev@gmail.com' },
          { type: 'output-text', content: '🔗 GitHub:   https://github.com/soham1304s' },
          { type: 'output-text', content: '📍 Location: India (Available for Remote Work Worldwide)' },
          { type: 'output-text', content: '🟢 Status:   Available for Freelance & Full-time Opportunities' }
        ];
        break;

      case 'cv':
      case 'download-cv':
        responseLines = [
          { type: 'output-header', content: '=== DOWNLOADING CV ===' },
          { type: 'output-text', content: 'Initiating download for Soham_Mondal_CV.pdf...' }
        ];
        // Trigger download
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'Soham_Mondal_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;

      case 'matrix':
        setMatrixActive((prev) => !prev);
        responseLines = [
          { type: 'system', content: `Matrix visual mode ${!matrixActive ? 'ACTIVATED 🟢' : 'DEACTIVATED 🔴'}` }
        ];
        break;

      case 'theme':
        if (args.length > 0 && THEMES[args[0].toLowerCase()]) {
          const newTheme = args[0].toLowerCase();
          setThemeKey(newTheme);
          responseLines = [
            { type: 'system', content: `Terminal theme set to "${THEMES[newTheme].name}"` }
          ];
        } else {
          responseLines = [
            { type: 'output-header', content: '=== TERMINAL THEMES ===' },
            { type: 'output-text', content: `Current Theme: ${activeTheme.name}` },
            { type: 'output-text', content: 'Available Themes: matrix, cyberpunk, dracula, neon, classic' },
            { type: 'system', content: 'Usage: theme <name>  (e.g. "theme matrix")' }
          ];
        }
        break;

      case 'whoami':
        responseLines = [
          { type: 'output-text', content: `User: guest@soham-portfolio` },
          { type: 'output-text', content: `Agent: ${navigator.userAgent.slice(0, 50)}...` },
          { type: 'output-text', content: `Privileges: Visitor / Recruiter / Collaborator (Access Granted)` }
        ];
        break;

      case 'date':
        responseLines = [
          { type: 'output-text', content: `Current Timestamp: ${new Date().toLocaleString()}` }
        ];
        break;

      case 'cat':
        if (!args[0]) {
          responseLines = [{ type: 'error', content: 'cat: missing filename. Try: cat bio.txt, cat skills.json, cat contact.md' }];
        } else {
          const filename = args[0].toLowerCase();
          if (filename === 'bio.txt') {
            responseLines = [{ type: 'output-text', content: 'Soham Mondal is a full-stack developer passionate about building ultra-smooth digital products and interactive web experiences.' }];
          } else if (filename === 'skills.json') {
            responseLines = [{ type: 'output-text', content: '{\n  "frontend": ["React", "HTML5", "CSS3", "JavaScript"],\n  "backend": ["Node.js", "Express", "Python"],\n  "database": ["MongoDB", "PostgreSQL"]\n}' }];
          } else if (filename === 'contact.md') {
            responseLines = [{ type: 'output-text', content: '# Contact Soham\nEmail: soham.mondal.dev@gmail.com\nGitHub: soham1304s' }];
          } else if (filename === 'projects.yaml') {
            responseLines = [{ type: 'output-text', content: 'projects:\n  - name: Expense Tracker\n  - name: Sync Engine\n  - name: Interactive Portfolio' }];
          } else {
            responseLines = [{ type: 'error', content: `cat: ${args[0]}: No such file. Try: bio.txt, skills.json, contact.md` }];
          }
        }
        break;

      case 'echo':
        responseLines = [{ type: 'output-text', content: args.join(' ') || '' }];
        break;

      case 'sudo':
        responseLines = [{ type: 'error', content: 'Permission denied: You already have full visitor privileges in Soham\'s interactive shell!' }];
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
      case 'close':
        onClose();
        return;

      default:
        responseLines = [
          { type: 'error', content: `zsh: command not found: ${trimmed}. Type "help" for command list.` }
        ];
        break;
    }

    setHistory([...newHistory, ...responseLines]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx < cmdHistory.length - 1 ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const trimmed = inputVal.trim();
      if (trimmed) {
        const match = COMMANDS.find((c) => c.name.startsWith(trimmed));
        if (match) setInputVal(match.name.split(' ')[0]);
      }
    }
  };

  return (
    <div className="terminal-overlay-backdrop" onClick={onClose}>
      <div
        className={`terminal-window ${isMaximized ? 'maximized' : ''}`}
        style={{
          backgroundColor: activeTheme.bg,
          color: activeTheme.text,
          borderColor: activeTheme.border
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Matrix Canvas Layer */}
        {matrixActive && <canvas ref={canvasRef} className="terminal-matrix-canvas" />}

        {/* Window Header */}
        <div className="terminal-header" style={{ borderColor: activeTheme.border }}>
          <div className="terminal-header-dots">
            <button className="dot dot-close" onClick={onClose} title="Close Terminal (ESC)">
              <X size={10} />
            </button>
            <button className="dot dot-minimize" onClick={onClose} title="Minimize">
              <Minus size={10} />
            </button>
            <button className="dot dot-maximize" onClick={() => setIsMaximized(!isMaximized)} title="Maximize Window">
              {isMaximized ? <Minimize2 size={10} /> : <Maximize2 size={10} />}
            </button>
          </div>

          <div className="terminal-header-title">
            <Terminal size={14} className="term-icon-title" style={{ color: activeTheme.prompt }} />
            <span>soham@portfolio:~ (zsh/bash)</span>
          </div>

          <div className="terminal-header-actions">
            <button
              className="term-action-btn"
              onClick={() => executeCommand('matrix')}
              title="Toggle Matrix Digital Rain"
              style={{ color: matrixActive ? '#00ff66' : 'inherit' }}
            >
              <Sparkles size={13} />
              <span className="term-btn-text">Matrix</span>
            </button>
            <button
              className="term-action-btn"
              onClick={() => executeCommand('clear')}
              title="Clear Output"
            >
              <Trash2 size={13} />
              <span className="term-btn-text">Clear</span>
            </button>
            <button
              className="term-action-btn term-close-btn"
              onClick={onClose}
              title="Close Terminal Section (ESC)"
            >
              <X size={14} />
              <span className="term-btn-text">Close Terminal</span>
            </button>
          </div>
        </div>

        {/* Quick Action Command Chips */}
        <div className="terminal-quick-bar" style={{ borderColor: activeTheme.border }}>
          <span className="quick-bar-label">Quick Commands:</span>
          {['help', 'about', 'skills', 'projects', 'contact', 'cv', 'matrix', 'clear', 'exit'].map((cmd) => (
            <button
              key={cmd}
              className={`quick-chip ${cmd === 'exit' ? 'quick-chip-exit' : ''}`}
              onClick={() => executeCommand(cmd)}
              style={{ borderColor: activeTheme.border, color: activeTheme.text }}
            >
              {cmd === 'exit' ? '✖ exit / close' : cmd}
            </button>
          ))}
        </div>

        {/* Output Screen */}
        <div className="terminal-body" onClick={() => inputRef.current && inputRef.current.focus()}>
          {history.map((item, idx) => (
            <div key={idx} className={`term-line term-line-${item.type}`}>
              {item.type === 'input' && (
                <div className="term-prompt-line">
                  <span className="term-prompt-user" style={{ color: activeTheme.prompt }}>
                    soham@portfolio:~$
                  </span>
                  <span className="term-input-text">{item.content}</span>
                </div>
              )}

              {item.type === 'system' && <div className="term-system-line">{item.content}</div>}
              {item.type === 'output-header' && <div className="term-header-line">{item.content}</div>}
              {item.type === 'output-text' && <div className="term-text-line">{item.content}</div>}
              {item.type === 'error' && <div className="term-error-line">{item.content}</div>}

              {item.type === 'output-cmd' && (
                <div className="term-cmd-row">
                  <span className="term-cmd-name" style={{ color: activeTheme.prompt }}>
                    {item.cmd}
                  </span>
                  <span className="term-cmd-desc">{item.desc}</span>
                </div>
              )}

              {item.type === 'output-project' && (
                <div className="term-project-block">
                  <div className="project-title-row">
                    <span className="project-name" style={{ color: activeTheme.prompt }}>{item.name}</span>
                    <span className="project-tech">[{item.tech}]</span>
                  </div>
                  <div className="project-desc">{item.desc}</div>
                </div>
              )}
            </div>
          ))}

          {/* Prompt Form Line */}
          <form onSubmit={handleFormSubmit} className="term-prompt-line term-input-form">
            <span className="term-prompt-user" style={{ color: activeTheme.prompt }}>
              soham@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              className="term-input-field"
              style={{ color: activeTheme.text }}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            <button type="submit" className="term-submit-btn" aria-label="Submit command">
              <CornerDownLeft size={14} style={{ color: activeTheme.prompt }} />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
