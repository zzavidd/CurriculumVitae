import React from 'react';

export default function Employment() {
  return (
    <section className={'employment'}>
      <h2>Employment</h2>
      {EXPERIENCES.map((experience, key) => {
        let company = experience.company;
        if (experience.type) {
          company += ` \u2022 ${experience.type}`;
        }
        return (
          <article className={'employment-entry'} key={key}>
            <div className={'employment-entry-metadata'}>
              <div>
                <div className={'role'}>{experience.role}</div>
                <div className={'company'}>{company}</div>
                <div className={'location'}>{experience.location}</div>
              </div>
              <div className={'employment-entry-dates'}>{experience.dates}</div>
            </div>

            <div className={'description'}>{experience.description}</div>
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
      'At IBM i2, contributing to the development of i2 Analyze; used for analysis and storage of intelligence data by law enforcement and other clients around the world. Operating as a Java server developer.'
  },
  {
    company: '#WOKEWeekly',
    role: 'Director & Web Developer',
    dates: 'Mar 2017 - Feb 2021',
    description:
      'Facilitating discussions and debates on topics centred around and beyond the Black community at university campuses, local schools and external organisations. Singlehandedly developed website, automated emails and Slack bots.'
  },
  {
    company: 'University of Surrey',
    type: 'Part-time',
    role: 'Computer Lab Assistant',
    dates: 'Oct 2018 - Dec 2018\nFeb 2017 - Jun 2017',
    location: 'Guildford, Surrey',
    description:
      'Assisted lecturers by providing support for first and second year Computer Science undergraduates during their practical laboratory sessions.'
  },
  {
    company: 'IBM',
    type: 'Internship',
    role: 'Software Engineer',
    dates: 'Jul 2017 - Aug 2018',
    location: 'Hursley, Winchester',
    description:
      'A member of the baseline team for IBM MQ; developing the team’s test submission tool built using Node.js, diagnosing failing test suites and performing installation verification testing of MQ products.'
  },
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
