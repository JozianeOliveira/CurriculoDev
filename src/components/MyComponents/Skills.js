import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Skills = ({ skills }) => (
  <div>
    <h3>Habilidades Profissionais</h3>
    <ul>
      {skills.map((skill, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
