import React from 'react';
import '../styles/index.scss';

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

const EXPERIENCES = [
  {
    company: 'IBM',
    type: 'Full-time',
    role: 'Software Developer',
    dates: 'Sep 2019 - present',
    location: 'Fulbourn, Cambridgeshire',
    description:
      'At IBM i2, contributing to the development of i2’s product set, which is used for investigative analysis by law enforcement and other consumers around the world. Operating as a Java server developer.',
  },
  {
    company: '#WOKEWeekly',
    role: 'Director & Web Developer',
    dates: 'Mar 2017 - Feb 2021',
    description:
      'Facilitating discussions and debates on topics centred around and beyond the Black community at university campuses, local schools and external organisations. Singlehandedly developed website and Slack bots.',
  },
  {
    company: 'University of Surrey',
    type: 'Part-time',
    role: 'Computer Lab Assistant',
    dates: 'Oct 2018 - Dec 2018; Feb 2017 - Jun 2017',
    location: 'Guildford, Surrey',
    description:
      'Assisted Computer Science undergraduates during their practical laboratory tutorials.',
  },
  {
    company: 'IBM',
    type: 'Internship',
    role: 'Software Engineer',
    dates: 'Jul 2017 - Aug 2018',
    location: 'Hursley, Winchester',
    description:
      'A member of the baseline team for IBM MQ; developing the team’s test submission tool built using Node.js, diagnosing failing test suites and performing installation verification testing of MQ products.',
  },
  {
    company: 'Richer Education Ltd.',
    type: 'Part-time',
    role: 'Science Mentor',
    dates: 'Jan 2015 - Nov 2017',
    location: 'Imperial College London – South Kensington, London',
    description:
      'Instilling knowledge in all fields of natural science to young children through entertaining, engaging and enlightening experiments involving Physics, Biology and Chemistry.',
  },
];