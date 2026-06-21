export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        Habit Flow
      </h1>

      <div className="flex items-center gap-4">
        <span className="font-medium">Welcome Back 👋</span>
      </div>
    </header>
  );
}