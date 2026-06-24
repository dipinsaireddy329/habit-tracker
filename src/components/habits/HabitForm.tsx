import { useState } from "react";

type HabitFormProps = {
  onAddHabit: (name: string, category: string) => void;
};

export default function HabitForm({
  onAddHabit,
}: HabitFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !category.trim()) {
      alert("Please fill all fields");
      return;
    }

    onAddHabit(name, category);

    setName("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 mb-8"
    >
      <h2 className="text-xl font-bold mb-4">
        Add New Habit
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Add Habit
      </button>
    </form>
  );
}