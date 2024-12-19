import React from 'react';

const SidebarContent = () => {
  return (
    // Topics
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Topics</h2>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="w-6 h-6 rounded-full bg-orange-500"></div>
            Gaming
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            Sports
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            Business
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
            Crypto
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            Television
          </button>
        </div>
      </div>

       {/* Resources Section  */}
      <div className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</h2>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            About Reddit
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Advertise
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Help
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Blog
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Careers
          </button>
        </div>
      </div>

       {/* Terms & Policies  */}
       
      <div className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Terms & Policies</h2>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            User Agreement
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Privacy Policy
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Content Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;