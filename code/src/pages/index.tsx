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
import Skills from '../components/skills';

import '../styles/App.scss';

library.add(faGithub, faEnvelope, faPhoneAlt, faMapMarkedAlt);

export default function App() {
  return (
    <main className={'main'}>
      <section className={'lhs'}>
        <Profile />
        <hr />
        <Skills />
      </section>
      <section className={'rhs'}>
        <Employment />
        <hr />
        <Education />
      </section>
    </main>
  );
}
