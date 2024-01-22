import Logo from "../assets/TD2.gif";

const LogoLoader = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center bg-[#020c1b]">
      <img className="w-48 animate-custom mix-blend-lighten" src={Logo} alt="logo"  />
    </div>
  );
};

export default LogoLoader;
