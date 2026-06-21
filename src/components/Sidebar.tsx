import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Trophy,
  Settings
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-3xl font-bold mb-10">
        Habit Flow
      </h2>

      <nav className="space-y-5">
        <div className="flex items-center gap-3 cursor-pointer">
          <LayoutDashboard size={20} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Calendar size={20} />
          Calendar
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <BarChart3 size={20} />
          Analytics
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Trophy size={20} />
          Achievements
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Settings size={20} />
          Settings
        </div>
      </nav>
    </aside>
  );
}