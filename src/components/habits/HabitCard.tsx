import { Habit } from "../../types/Habit";

type HabitCardProps = {
  habit: Habit;
};

export default function HabitCard({
  habit,
}: HabitCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-bold">
        {habit.name}
      </h2>

      <p className="text-gray-500 mt-2">
        {habit.category}
      </p>

      <p className="mt-3">
        🔥 Streak: {habit.streak}
      </p>

      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            habit.completed
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {habit.completed
            ? "Completed"
            : "Pending"}
        </span>
      </div>
    </div>
  );
}