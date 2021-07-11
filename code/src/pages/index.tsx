import React from 'react';
import '../styles/App.scss';
import { EXPERIENCES } from '../utils/constants';

export default function App() {
  return (
    <main className={'main'}>
      <Profile />
      <section className={'section'}>
        <Employment />
      </section>
    </main>
  );
}

function Profile() {
  return (
    <section className={'profile'}>
      <h1>David Egbue</h1>
    </section>
  );
}

function Employment() {
  return (
    <section className={'employment'}>
      <h2>Employment</h2>
      {EXPERIENCES.map((experience, key) => {
        if (experience.type) {
          experience.company += ` \u2022 ${experience.type}`;
        }
        return (
          <div className={'employment-entry'} key={key}>
            <div className={'role'}>{experience.role}</div>
            <div className={'company'}>{experience.company}</div>
            <div className={'dates'}>{experience.dates}</div>
            <div className={'location'}>{experience.location}</div>
            <div className={'description'}>{experience.description}</div>
          </div>
        );
      })}
    </section>
  );
}