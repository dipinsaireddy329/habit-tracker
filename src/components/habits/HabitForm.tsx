export default function HabitForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">
        Add New Habit
      </h2>

      <input
        type="text"
        placeholder="Habit name"
        className="border p-3 rounded-lg w-full"
      />
    </div>
  );
}