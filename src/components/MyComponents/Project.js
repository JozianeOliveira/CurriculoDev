import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Project = ({ name, description, githubLink, imageAlt }) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <img
        src={`${process.env.PUBLIC_URL}/MyImages/botão-clique-aqui.png`}
        alt={imageAlt}
        style={{ width: '200px', height: '100px' }}
      />
      <FaArrowRight />
    </a>
  </div>
);

export default Project;
