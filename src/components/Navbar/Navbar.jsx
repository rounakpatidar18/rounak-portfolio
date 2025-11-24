import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import useTheme from '../../hook/useTheme';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">Rounak<span className="nav__brand--accent">.</span></Link>

        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>Projects</NavLink>

          <button className="btn btn--ghost nav__theme" onClick={() => { toggleTheme(); setOpen(false); }} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
}
