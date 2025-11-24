// import React from 'react';
// import './About.css';

// export default function About() {
// const skills = ['HTML','CSS','JavaScript','Ruby','Ruby on Rails','Postgres','React'];  
//   return (
//     <section className="section section--sm">
//       <div className="container">
//         <div className="card about-grid">
//           <div>
//             <h2 className="h2">About</h2>
//             <p className="lead">
//               I am a passionate Software Engineer with hands-on experience in Ruby on Rails,
//               React, JavaScript, HTML, and CSS. I enjoy turning ideas into clean, efficient,
//               and user-friendly web applications. With a solid 4-month training background,
//               I focus on writing maintainable code and continuously improving my skills.
//             </p>

//             <h3 className="h2">Experience</h3>
//             <ul>
//               <li>
//                 <strong>Software Engineer (Trainee)</strong> — Completed 4-month training in
//                 full-stack development with ROR, React, and modern web technologies.
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="h2">Skills</h3>
//             <div className="skills">{skills.map(s => <span key={s} className="skill">{s}</span>)}</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import './About.css';

export default function About() {
  const skills = ['HTML','CSS','JavaScript','Ruby','Ruby on Rails','Postgres','React'];
  const tools = ['VS Code', 'Git & GitHub', 'Postman', 'Figma', 'Terminal'];
  const learning = ['Advanced React Patterns', 'TypeScript', 'System Design Basics'];

  return (
    <section className="section about-section">
      <div className="container">
        <div className="card about-grid">
          {/* LEFT SIDE */}
          <div className="about-left">
            <h2 className="h2">About Me</h2>
            <p className="lead">
              I am a passionate Full-Stack Developer with hands-on experience in Ruby on Rails,
              React, JavaScript, HTML, and CSS.
            </p>

            <h3 className="h2">Experience</h3>
            <ul className="about-list">
              <li>
                <strong>Software Engineer (Trainee)</strong> — Completed 4-month training in Full-Stack Development using React, Ruby on Rails, JavaScript, and PostgreSQL.
              </li>
            </ul>

            <h3 className="h2">What I Do</h3>
            <ul className="about-list">
              <li>Build responsive and accessible web applications.</li>
              <li>Create component-based UIs using React.</li>
              <li>Develop backend logic and APIs with Ruby on Rails.</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-right">
            <h3 className="h2">Skills</h3>
            <div className="skills">{skills.map(s => <span key={s} className="skill">{s}</span>)}</div>

            <h3 className="h2">Tools I Use</h3>
            <div className="skills">{tools.map(t => <span key={t} className="skill">{t}</span>)}</div>

            <h3 className="h2">Currently Learning</h3>
            <div className="skills">{learning.map(l => <span key={l} className="skill">{l}</span>)}</div>

            <p className="closing">
              My goal is to grow into a strong full-stack engineer who builds meaningful, user-focused products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
