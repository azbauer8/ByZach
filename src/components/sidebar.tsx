import SidebarContents from "./sidebarContents";

const Sidebar = () => {
  return (
    <nav className="3xl:w-80 border-gray-150 absolute z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none -translate-x-full transform flex-col overflow-y-auto border-r border-stone-800 bg-neutral-900 pb-10 transition duration-200 ease-in-out sm:w-1/2 sm:pb-0 md:w-1/3 lg:sticky lg:top-0 lg:z-auto lg:w-56 lg:translate-x-0 2xl:w-72">
      <SidebarContents />
    </nav>
  );
};

export default Sidebar;
