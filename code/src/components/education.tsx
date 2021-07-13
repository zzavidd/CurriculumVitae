import React from 'react';
import { Metadata } from './fragments';

export default function Education() {
  return (
    <section className={'education'}>
      <h2>Education</h2>
      <article className={'education-entry'}>
        <Metadata>
          <div>
            <div className={'education-entry-institution'}>
              University of Surrey
            </div>
            <div className={'education-entry-degree'}>BSc Computer Science</div>
            <div className={'education-entry-award'}>Awarded First-Class Honours</div>
          </div>
          <div className={'education-entry-dates'}>2015 - 2019</div>
        </Metadata>
      </article>
      <article className={'education-entry'}>
        <Metadata>
          <div className={'education-entry-institution'}>
            Woolwich Polytechnic Boys School / Sixth Form
          </div>
          <div className={'education-entry-dates'}>2012 – 2015</div>
        </Metadata>
        {Object.entries(EDUCATION).map(([stage, grades], key) => {
          return (
            <div className={'education-entry-table'} key={key}>
              <div className={'education-entry-table-stage'}>{stage}:</div>
              <div className={'education-entry-table-grades'}>
                {grades.map((grade, key) => {
                  return <div key={key}>{grade}</div>;
                })}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}

const EDUCATION = {
  'A-Levels': [
    'Mathematics (A)',
    'Physics (B)',
    'Computer Science (B)',
    'AS Chemistry (B)',
    'BTEC Level 3 ICT (Dist*)'
  ],
  GSCEs: [
    '5 subjects A-B, including Mathematics & English',
    'Dist* in BTEC Level 2 Music'
  ]
};
