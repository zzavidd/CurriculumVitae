import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import Education from '../components/education';
import Employment from '../components/employment';
import Profile from '../components/profile';
import Projects from '../components/projects';
import TechStack from '../components/techstack';

import '../styles/App.scss';

library.add(faGithub, faEnvelope, faPhoneAlt, faMapMarkedAlt);

export default function App() {
  return (
    <main className={'main'}>
      <section className={'lhs'}>
        <Profile />
        <hr />
        <TechStack />
      </section>
      <section className={'rhs'}>
        <Employment />
        <hr />
        <Education />
        <hr />
        <Projects />
      </section>
    </main>
  );
}
