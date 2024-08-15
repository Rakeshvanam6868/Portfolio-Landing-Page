import Button from "./Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useState } from 'react';
const Header = ({ onToggleTheme }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onToggleTheme(); // Call the parent component's theme toggle function
  };

  return (
    <div className="absolute w-[1420px] h-[67px] mt-[61px] ml-[250px] flex items-start justify-start ">
      <Logo/>
      <div className="ml-[40px] h-[52px] w-[900px] mt-[7px] flex items-center justify-center">
        <NavLinks/>
        <Button 
          title="Download CV" 
          width="188px" 
          height="52px" 
          top="7px" 
          left="1232px" 
          padding="15px" 
          gap="10px" 
          borderRadius="5px" 
          background="#FD6F00" 
          textColor="#ffffff"
        />
        
      </div>
      <button
        onClick={handleToggle}
        className={`relative w-12 h-6 mt-[-24px] ml-[200px] flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition duration-300 ${isToggled ? 'bg-green-500' : 'bg-gray-300'}`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${isToggled ? 'translate-x-6' : ''}`}
        />
      </button>
    </div>
  );
};


export default Header;