import React from 'react';
import { poppins } from '../layout';

const DesignHeading = ({ title, width, top, left, isBorder,ellipseStyles }) => {
  return (
    <>
      <p
        className={`${poppins.className} w-[753px] h-[76px] absolute font-[600] text-[24px] text-black`}
        style={{
          width: `${width}px`,
          height: '36px',
          top: `${top}px`,
          left: `${left}px`,
          lineHeight: '36px',
          letterSpacing: '0.03em',
          textAlign: 'left',
        }}
      >
        {title}
      </p>
      <div
        className="absolute"
        style={{
          width: '753px',
          height: '12px',
          top: `${top + 44}px`, // Adjusted to place rectangle under heading
          left: `${left}px`,
          borderRadius: '6px',
          backgroundColor: '#FD6F00',
          border: isBorder ? `3px solid #FD6F00` : 'none',
        }}
      ></div>
      <div
          className="absolute z-10"
          style={{
            width: `calc(${width}px - ${ellipseStyles.left}px)`, // Subtract ellipse width
            height: '12px',
            top: '0', // Align with the bar
            left: `${ellipseStyles.left}px`, // Position background color to the right of the ellipse
            backgroundColor: '#EDECEC',
            borderRadius: '6px',
            opacity: '0.7', // Optional: Adjust opacity if needed
          }}
        ></div>
      <div
          className="absolute"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#EDECEC', // Gray background
            border: '3px solid #FD6F00',
            boxShadow: '0px 4px 7px 0px #00000033',
            top: ellipseStyles.top, // Adjust based on your design needs
            left: ellipseStyles.left, // Positioned to the right of the bar
            opacity: 1,

          }}
        ></div>
        </>
  );
};

export default DesignHeading;
