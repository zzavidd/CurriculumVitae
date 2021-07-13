import React from 'react';

export default function Education() {
  return (
    <section className={'education'}>
      <h2>Education</h2>
      <article className={'education-entry'}>
        <div className={'education-entry-institution'}>
          University of Surrey
        </div>
        <div className={'education-entry-dates'}>(2015 - 2019)</div>
        <div>BSc Computer Science</div>
        <div>Awarded First-Class Honours</div>
      </article>
      <article className={'education-entry'}>
        <div className={'education-entry-institution'}>
          Woolwich Polytechnic Boys School / Sixth Form
        </div>
        <div className={'education-entry-dates'}>(2012 – 2015)</div>
        {Object.entries(EDUCATION).map(([stage, grades], key) => {
          return (
            <div className={'education-entry-table'} key={key}>
              <div className={'education-entry-table-stage'}>{stage}:</div>
              <div>
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
