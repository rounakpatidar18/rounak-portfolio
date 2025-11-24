import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // <- Add this
import avatar from '../../assets/images/profile.jpg';
import reactImg from '../../assets/images/react.png';
import jsImg from '../../assets/images/javascript.png';
import railsImg from '../../assets/images/rubyonrails.jpeg';
import pgImg from '../../assets/images/postgresql.png';
import restApiImg from '../../assets/images/restapi.png';
import gitImg from '../../assets/images/git.png';
import cssImg from '../../assets/images/css.png';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <section className="section">
      <div className="container home-grid">

        <motion.div
          className="home__intro"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}  
        >
          <h1 className="h1">Hi, I’m Rounak Patidar</h1>
          <p className="lead"><strong>Building meaningful digital experiences with clean code & smart design.</strong></p>

          <p className="lead">
            • Full-stack developer crafting accessible, high-performance web applications.
          </p>
          <p className="lead">
            • Focused on clean architecture, reusable UI, and exceptional user experience.
          </p>

          <p className="home__subtext">
            • Specializes in React, JavaScript, and modern frontend engineering.
          </p>
          <p className="home__subtext">
            • Production experience with API integrations, backend services, and scalable component systems.
          </p>

          <div className="home__ctas">
            <Link className="btn" to="/projects">View projects</Link>
          </div>
        </motion.div>

        <motion.div
          className="home__card"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="card profile-card">
            <img src={avatar} alt="Avatar" className="profile-avatar" loading="lazy" />
            <div className="profile-name">Rounak Patidar</div>
            <div className="profile-role">Fullstack Developer</div>
          </div>
        </motion.div>

        <motion.div
          className="home__tech"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="tech-title">Tech I Work With</h2>
          <div className="tech-list">
            <img src={reactImg} alt="React" />
            <img src={jsImg} alt="JavaScript" />
            <img src={railsImg} alt="Ruby on Rails" />
            <img src={pgImg} alt="PostgreSQL" />
            <img src={restApiImg} alt="REST APIs" />
            <img src={gitImg} alt="Git" />
            <img src={cssImg} alt="CSS" />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
