import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 z-50 transform bg-gray-800 text-white transition-transform md:relative md:translate-x-0 md:flex md:flex-col md:w-64`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold">Sidebar</h1>
          <ul>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Button to toggle Sidebar */}
      <button
        className="md:hidden p-4 text-white bg-blue-500 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4">{/* Your main content goes here */}</div>
    </div>
  );
};

export default Sidebar;
