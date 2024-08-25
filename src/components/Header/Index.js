import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { Headers, Itens, Li, Navbar, Profile, ProfileImg, Ul } from './styles';

const Header = ({ img }) => (
  <Headers>
    <Navbar id="navbar">
      <Profile>
        <ProfileImg src={img} alt="profile_picture" />
      </Profile>
      <Ul>
        <Li>
          <Itens as={Link} smooth to="#about">
            Sobre
          </Itens>
        </Li>
        <Li>
          <Itens as={Link} smooth to="#contacts">
            Contatos
          </Itens>
        </Li>
        <Li>
          <Itens as={Link} smooth to="#experience">
            Experiência
          </Itens>
        </Li>
        <Li>
          <Itens as={Link} smooth to="#skills">
            Habilidades
          </Itens>
        </Li>
        <Li>
          <Itens as={Link} smooth to="#projects">
            Projetos
          </Itens>
        </Li>
      </Ul>
    </Navbar>
  </Headers>
);

export default Header;
