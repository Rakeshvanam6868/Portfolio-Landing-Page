import Image from 'next/image';
import React from 'react';
import facebook from '@/app/public/facebook.svg';
import insta from '@/app/public/instagram.svg';
import twitter from '@/app/public/twitter.svg';
import linkedin from '@/app/public/linkedin.svg';

const iconData = [
  { src: facebook, alt: 'Facebook' },
  { src: insta, alt: 'Instagram' },
  { src: twitter, alt: 'Twitter' },
  { src: linkedin, alt: 'LinkedIn' }
];

const Icons = () => {
  return (
    <div className={`flex gap-4`}>
      {iconData.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={icon.alt}
          width={32.48}
          height={32.48}
        />
      ))}
    </div>
  );
};

export default Icons;
