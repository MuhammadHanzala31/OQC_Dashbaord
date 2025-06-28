import Image from "next/image";
import Card from './components/Card';

export default function Home() {


  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-400">Home / Dashboard</p>
        </div>
        <div className="flex items-center space-x-3">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className="w-10 h-10 rounded-full" alt="User" />
          <div>
            <p className="font-semibold">Ryan Adhitama</p>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <InfoCard title="Blogs" value="10" icon="ri-pencil-fill" />
        <InfoCard title="Categories" value="3" icon="ri-book-shelf-line" />
        <InfoCard title="Published Blogs" value="2" icon="ri-book-marked-fill" />
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visitor Growth */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="font-semibold">Visitor Growth</h2>
              <p className="text-sm text-gray-400">Overall Information</p>
            </div>
            <div className="bg-gray-100 rounded-full flex">
              <button className="px-4 py-1 bg-[#FFB706]text-white rounded-full">Monthly</button>
              <button className="px-4 py-1 text-gray-500">Yearly</button>
            </div>
          </div>
          <div className="h-40 flex items-end space-x-2">
            {[30, 50, 40, 60, 70, 45, 80, 55, 50, 60, 90, 70].map((val, i) => (
              <div
                key={i}
                className="w-3 bg-[#098A46] opacity-20 rounded"
                style={{ height: `${val}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Latest Posts */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Latest Posts</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="font-medium">The Power of Dream</p>
              <p className="text-gray-400">28 June 2021</p>
            </li>
            <li>
              <p className="font-medium">Emotional Healing</p>
              <p className="text-gray-400">22 June 2021</p>
            </li>
            <li>
              <p className="font-medium">Works vs School</p>
              <p className="text-gray-400">21 June 2021</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="bg-[#098A46]/5 text-[#098A46] p-6 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-sm" style={{
              fontFamily : "cursive"
            }}>{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className="text-3xl"><i className={icon}></i></div>
    </div>
  );
}
