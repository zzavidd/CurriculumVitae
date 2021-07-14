import React from 'react';
import { Metadata } from './fragments';

export default function Employment() {
  return (
    <section className={'employment'}>
      <h2>Experience</h2>
      {EXPERIENCES.map((experience, key) => {
        let company = experience.company;
        if (experience.type) {
          company += ` \u2022 ${experience.type}`;
        }
        return (
          <article className={'employment-entry'} key={key}>
            <Metadata>
              <div>
                <div className={'employment-entry-role'}>{experience.role}</div>
                <div className={'employment-entry-company'}>{company}</div>
                <div className={'employment-entry-location'}>
                  {experience.location}
                </div>
              </div>
              <div className={'employment-entry-dates'}>{experience.dates}</div>
            </Metadata>

            <div className={'employment-entry-description'}>
              {experience.description}
            </div>
          </article>
        );
      })}
    </section>
  );
}

const EXPERIENCES: Array<Experience> = [
  {
    company: 'IBM',
    type: 'Full-time',
    role: 'Software Developer',
    dates: 'Sep 2019 - present',
    location: 'Fulbourn, Cambridgeshire',
    description:
      'At IBM i2; contributing to the development of i2 Analyze; used for analysis and storage of intelligence data by law enforcement and other clients around the world. Operating as a Java server developer.'
  },
  {
    company: '#WOKEWeekly',
    type: 'Self-employed',
    role: 'Director & Web Developer',
    dates: 'Mar 2017 - Feb 2021',
    description:
      'Facilitating discussions and debates on topics centred around and beyond the Black community at university campuses, local schools and external organisations. Singlehandedly developing and designing the website, automated emails and Slack bots using React, Node.js and EJS.'
  },
  // {
  //   company: 'University of Surrey',
  //   type: 'Part-time',
  //   role: 'Computer Lab Assistant',
  //   dates: 'Oct 2018 - Dec 2018\nFeb 2017 - Jun 2017',
  //   location: 'Guildford, Surrey',
  //   description:
  //     'Assisting lecturers by providing support for first and second year Computer Science undergraduates during their practical laboratory sessions.'
  // },
  {
    company: 'IBM',
    type: 'Internship',
    role: 'Software Engineer',
    dates: 'Jul 2017 - Aug 2018',
    location: 'Hursley, Hampshire',
    description:
      'At IBM MQ; developing the team’s test submission tool built using Node.js, diagnosing failing test suites and performing installation verification testing of MQ products.'
  }
  // {
  //   company: 'Richer Education Ltd.',
  //   type: 'Part-time',
  //   role: 'Science Mentor',
  //   dates: 'Jan 2015 - Nov 2017',
  //   location: 'Imperial College London – South Kensington, London',
  //   description:
  //     'Instilling knowledge in all fields of natural science to young children through entertaining, engaging and enlightening experiments involving Physics, Biology and Chemistry.'
  // }
];

type Experience = {
  company: string;
  role: string;
  dates: string;
  description: string;
  type?: string;
  location?: string;
};
