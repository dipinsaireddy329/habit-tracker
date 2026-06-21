export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Total Habits</h2>
          <p className="text-3xl font-bold">8</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Completed Today</h2>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Current Streak</h2>
          <p className="text-3xl font-bold">12 🔥</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Completion Rate</h2>
          <p className="text-3xl font-bold">80%</p>
        </div>

      </div>
    </div>
  );
}