import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PROFILE_SUMMARY } from '../utils/constants';

export default function Profile() {
  return (
    <section className={'profile'}>
      <header className={'profile-header'}>
        <div className={'profile-bio'}>
          <div>
            <img
              src={'/zavid-avi.jpeg'}
              alt={'Zavid Avi'}
              className={'profile-bio-image'}
            />
          </div>
          <div className={'profile-bio-text'}>
            <h1>David Egbue</h1>
            <p className={'profile-bio-text-title'}>JavaScript Developer</p>
            <div className={'profile-bio-address'}>
              Cambridge, England <br />
              United Kingdom
            </div>
          </div>
        </div>
        <div className={'profile-contact'}>
          {CONTACT_DETAILS.map(({ icon, value }, key) => {
            return (
              <div className={'contact-row'} key={key}>
                <span className={'contact-row__icon'}>
                  <FontAwesomeIcon icon={icon} />
                </span>
                <span className={'contact-row__value'}>{value}</span>
              </div>
            );
          })}
        </div>
      </header>
      <p className={'profile-summary'}>{PROFILE_SUMMARY}</p>
    </section>
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
    value: '@zzavidd'
  }
];

type ContactDetail = {
  icon: IconLookup;
  value: string;
};
