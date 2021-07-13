import React from 'react';
import { EXPERIENCES } from '../utils/constants';

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
            <div className={'role'}>{experience.role}</div>
            <div className={'company'}>{company}</div>
            <div className={'dates'}>({experience.dates})</div>
            <div className={'location'}>{experience.location}</div>
            <div className={'description'}>{experience.description}</div>
          </article>
        );
      })}
    </section>
  );
}