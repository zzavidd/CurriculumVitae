import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Profile() {
  return (
    <section className={'profile'}>
      <div className={'profile-bio'}>
        <ProfileImage />
        <h1 className={'profile-name'}>David Egbue</h1>
        <p className={'profile-title'}>JavaScript Developer</p>
        <div className={'profile-address'}>
          Cambridge, England <br />
          United Kingdom
        </div>
      </div>
      <hr />
      <ContactDetails />
      <hr />
      <h2>Profile</h2>
      <p className={'profile-summary'}>{PROFILE_SUMMARY}</p>
    </section>
  );
}

function ProfileImage() {
  return (
    <div className={'profile-image'}>
      <img src={'/images/zavid-avi.jpeg'} alt={'Zavid Avi'} />
    </div>
  );
}

function ContactDetails() {
  return (
    <div className={'profile-contact'}>
      {CONTACT_DETAILS.map(({ icon, value }, key) => {
        return (
          <div className={'profile-contact-row'} key={key}>
            <FontAwesomeIcon
              icon={icon}
              className={'profile-contact-row__icon'}
            />
            <span className={'profile-contact-row__value'}>{value}</span>
          </div>
        );
      })}
    </div>
  );
}

const CONTACT_DETAILS: Array<ContactDetail> = [
  {
    icon: { prefix: 'fas', iconName: 'envelope' },
    value: process.env.GATSBY_EMAIL_ADDRESS
  },
  {
    icon: { prefix: 'fas', iconName: 'phone-alt' },
    value: process.env.GATSBY_PHONE_NUMBER
  },
  {
    icon: { prefix: 'fab', iconName: 'github' },
    value: 'github.com/zzavidd'
  }
];

export const PROFILE_SUMMARY =
  'A diligent developer whose experience with both client-side and server-side technologies, as well as his affinity for all things JavaScript, drives his creative ability. Joining these traits are his consistent knack for grasping new software engineering concepts, a quick learning curve, perseverance at solving problems, and a chronic cheerful smile.';

type ContactDetail = {
  icon: IconLookup;
  value: string;
};
