export default function Navbar({title, path} :{title: string, path : string}) {
  return (
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-gray-400">Home / {path}</p>
        </div>
        <div className="flex items-center space-x-3">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className="w-10 h-10 rounded-full" alt="User" />
          <div>
            <p className="font-semibold">Ryan Adhitama</p>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>
      </div>
  );
}
