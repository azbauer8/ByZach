import { NavLink } from "react-router-dom";

function SidebarLink({
  to,
  text,
  setOpen,
}: {
  to: string;
  text: string;
  setOpen?: (open: boolean) => void;
}) {
  return (
    <li className="flex items-stretch space-x-1">
      <NavLink
        onClick={() => setOpen && setOpen(false)}
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "bg-stone-600 hover:bg-stone-500" : "hover:bg-stone-500"
          } flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium text-stone-50`
        }
      >
        {text}
      </NavLink>
    </li>
  );
}
const SidebarContents = ({
  setOpen,
}: {
  setOpen?: (open: boolean) => void;
}) => {
  return (
    <div className="flex-1 space-y-1 px-3 py-3">
      <ul className="space-y-1">
        <SidebarLink to="/" text="Home" setOpen={setOpen} />
        <SidebarLink to="/journal" text="Journal" setOpen={setOpen} />
        <SidebarLink to="/notebook" text="Notebook" setOpen={setOpen} />
      </ul>
    </div>
  );
};

export default SidebarContents;
