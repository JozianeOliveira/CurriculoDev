import React from 'react';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';
import SocialMediaIcons from '../MyComponents/SocialMediaIcons';
import Skills from '../MyComponents/Skills';
import Project from '../MyComponents/Project';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto=" " />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} -{' '}
        <Highlight> {profile.email}</Highlight>
      </Info>
      <p>{profile.biografia}</p>
      <div id="contacts">
        <Title texto="Contatos" />
        <SocialMediaIcons linkedin={profile.linkedin} github={profile.github} />
      </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
      <Skills skills={profile.habilidades} />
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      <SubTitle texto="Projetos em andamento:" />
      {profile.projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </Sections>
  </>
);

export default Section;
