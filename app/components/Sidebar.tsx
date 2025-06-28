'use client';
import { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden absolute top-4 left-4 z-50 text-[#098A46] bg-white p-2 rounded shadow"
      >
        ☰
      </button>

      <aside
        className={`fixed top-2 bottom-2 left-2 h-[97vh] bg-gradient-to-b from-[#098A46] to-[#7AC043] text-white w-64 p-6 rounded-3xl transform transition-transform duration-300 z-40
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:block`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-10 font-poppins" >Online <span className='text-[#FFB706]'>Quran</span> </h2>
            <nav className="space-y-4">
              {['Dashboard', 'Posts', 'Categories', 'Media', 'Users', 'Settings'].map((item) => (
                <a key={item} href="#" className="block hover:text-[#FFB706] font-medium">
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg flex items-center space-x-3 text-sm mt-8">
            <div className="text-2xl">📖</div>
            <div>
              <p>User Guide</p>
              <p className="text-xs text-white/70">Documentation</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
