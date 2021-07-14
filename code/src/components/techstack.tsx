import React from 'react';
import CIcon from '@coreui/icons-react';
import * as CUI from '@coreui/icons';

export default function TechStack() {
  return (
    <section className={'techstack'}>
      <h2>Tech Pool</h2>
      <TechStackIconSet
        label={'Work most frequently with'}
        icons={STRONG_ICONS}
      />
      <TechStackIconSet label={'Also worked with'} icons={FAIR_ICONS} />
    </section>
  );
}

function TechStackIconSet({ label, icons }: TechStackIconSetProps) {
  return (
    <div className={'techstack-block'}>
      <h5>{label}...</h5>
      <div className={'techstack-iconset'}>
        {icons.map(({ name, icon }, key) => {
          return (
            <div className={'techstack-iconset-entry'} key={key}>
              <CIcon content={icon} width={'18px'} />
              <span className={'techstack-iconset-entry__label'}>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const STRONG_ICONS: Array<TechStackIcon> = [
  { name: 'JavaScript', icon: CUI.cibJavascript },
  { name: 'React', icon: CUI.cibReact },
  { name: 'Node.js', icon: CUI.cibNodeJs },
  { name: 'TypeScript', icon: CUI.cibTypescript },
  { name: 'Next.js', icon: CUI.cibNextJs },
  { name: 'Sass', icon: CUI.cibSassAlt }
];

const FAIR_ICONS: Array<TechStackIcon> = [
  { name: 'Gatsby', icon: CUI.cibGatsby },
  { name: 'Redux', icon: CUI.cibRedux },
  { name: 'Webpack', icon: CUI.cibWebpack },
  { name: 'Java', icon: CUI.cibJava },
  { name: 'Python', icon: CUI.cibPython },
  { name: 'MySQL', icon: CUI.cibMysql },
  { name: 'Docker', icon: CUI.cibDocker },
  { name: 'Jenkins', icon: CUI.cibJenkins },
  { name: 'Travis CI', icon: CUI.cibTravisci },
  { name: 'CircleCI', icon: CUI.cibCircleci },
  { name: 'HTML5', icon: CUI.cibHtml5 },
  { name: 'CSS3', icon: CUI.cibCss3 }
];

type TechStackIconSetProps = {
  label: string;
  icons: Array<TechStackIcon>;
};

type TechStackIcon = {
  name: string;
  icon: string | string[];
};
