import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Index';
import Section from '../../components/Section/Index';
import FakeAPI from '../../service/dados.json';
import Project from '../../components/MyComponents/Project';

const Home = () => {
  const [dados] = useState(FakeAPI);

  return (
    <>
      <body>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header img={dados.profile.img} />
              <main>
                <Section profile={dados.profile} />
              </main>
            </Route>

            <Route path="/projects">
              <Header img={dados.profile.img} />
              <main>
                <Project profile={dados.profile} />
              </main>
            </Route>
          </Switch>
        </Router>
      </body>
    </>
  );
};

export default Home;
