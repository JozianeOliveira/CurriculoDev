import React from 'react';

const SocialMediaIcons = ({ linkedin, github }) => (
  <div>
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      <img
        src={`${process.env.PUBLIC_URL}/MyImages/linkedin.png`}
        alt="LinkedIn"
        style={{ width: '150px', height: '150px', marginRight: '50px' }}
      />
    </a>
    <a href={github} target="_blank" rel="noopener noreferrer">
      <img
        src={`${process.env.PUBLIC_URL}/MyImages/github.png`}
        alt="GitHub"
        style={{ width: '150px', height: '150px', marginRight: '50px' }}
      />
    </a>
  </div>
);

export default SocialMediaIcons;
