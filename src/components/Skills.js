import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <div className="skills-list">
        <div className="skill"><FaHtml5 size={50} /> <p>HTML5</p></div>
        <div className="skill"><FaCss3Alt size={50} /> <p>CSS3</p></div>
        <div className="skill"><FaJs size={50} /> <p>JavaScript</p></div>
        <div className="skill"><FaReact size={50} /> <p>React</p></div>
        <div className="skill"><FaLaravel size={50} /> <p>Laravel</p></div>
      </div>
    </section>
  );
}

export default Skills;
