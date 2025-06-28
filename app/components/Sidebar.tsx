'use client';
import Link from 'next/link';
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
            <h2 className="text-2xl font-semibold mb-10 " style={{
              fontFamily : "fantasy"
            }}>Online <span className='text-[#FFB706]'>Quran</span> Course </h2>
            <nav className="space-y-4 flex flex-col gap-[10px]">
              {[{ name: 'Dashboard', icon: 'ri-dashboard-fill' }, { name: 'Profile', icon: 'ri-user-2-fill' }, { name: 'Blogs', icon: 'ri-book-read-fill' }, {name : 'Categories' , icon : 'ri-book-shelf-fill' }, {name:'Settings', icon : 'ri-settings-5-fill'}].map((item) => (
                <Link key={item.name} href="#" className="flex items-center gap-2 hover:text-[#FFB706] py-2 px-4 rounded-md font-medium hover:bg-[#098a46]">
                  <i className={`${item.icon}  text-2xl`}></i>
                  <p className='mb-0' style={{
                    fontFamily : "cursive"
                  }}> {item.name}</p>
                </Link>
              ))}
            </nav>
          </div>
          <div className="bg-white text-[#098a46] bg-opacity-10 p-4 rounded-lg flex items-center space-x-3 text-sm mt-8">
            <div className="text-2xl" style={{
              fontFamily : "fantasy"
            }}>📖</div>
            <div >
              <p>Online Quran</p>
              <p className="text-xs ">Course Blogs</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
