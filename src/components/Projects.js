import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Sistema de Gestión de Clientes',
      description: 'Sistema completo para la gestión de clientes B2C y B2B con Laravel y Blade.',
      link: 'https://github.com/tuusuario/proyecto-cliente'
    },
    {
      title: 'Portafolio Personal',
      description: 'Mi portafolio personal con React y Vite.',
      link: 'https://github.com/tuusuario/portafolio-react'
    },
    {
      title: 'Control de Ventas',
      description: 'Sistema para controlar ventas y generar reportes con CodeIgniter 3.',
      link: 'https://github.com/tuusuario/control-ventas'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
