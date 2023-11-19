import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  return (
    <nav className="font-pop flex w-full justify-end px-6 py-5 pl-4">
      <ModeToggle />
    </nav>
  );
};

export default Header;
