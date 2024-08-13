import Button from "./Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
const Header = ({ onToggleTheme }) => {
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
        <button
        onClick={onToggleTheme}
        className="ml-[0px] rounded bg-gray-800 text-white"
      >T</button>
      </div>
    </div>
  );
};


export default Header;