export default function Navbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Welcome, Hanzala</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Admin</span>
        <img src="/avatar.png" className="w-8 h-8 rounded-full" alt="Avatar" />
      </div>
    </header>
  );
}
