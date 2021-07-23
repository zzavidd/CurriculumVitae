import React from 'react';

export default function Projects() {
  return (
    <section className={'projects'}>
      <h2>Projects</h2>
      <div className={'projects-list'}>
        {PROJECTS.map(({ title, description, year }, key) => {
          return (
            <article className={'projects-entry'} key={key}>
              <div className={'projects-entry-title'}>{title}</div>
              <div className={'projects-entry-year'}>({year})</div>
              <p className={'projects-entry-description'}>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: 'Ask Miss Parks WebUI',
    year: 2021,
    description:
      'An IBM-internal frontend interface for the Black enablement conversational agent powered by IBM Watson Assistant.'
  },
  {
    title: '#WOKEWeekly Website',
    year: 2018,
    description: 'The website, automated emails and Slack bots for #WOKEWeekly.'
  },
  {
    title: 'Voicera Web Application',
    year: 2021,
    description:
      'An ESRI map interface plotting and filtering location-based data for Voicera.'
  },
  {
    title: 'Task Diary',
    year: 2021,
    description: 'A personal work journal application to keep track of tasks.'
  },
  {
    title: 'Personal Blog',
    year: 2020,
    description:
      'My personal blog developed with email and Telegram notifications to subscribers.'
  },
  {
    title: 'Curriculum Vitae',
    year: 2021,
    description: 'The design for this CV.'
  }
];
