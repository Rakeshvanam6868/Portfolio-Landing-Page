import Image from 'next/image';
import React from 'react';
import { iconData } from "../src/app/data/index";

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
