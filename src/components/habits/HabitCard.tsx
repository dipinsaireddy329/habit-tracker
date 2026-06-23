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

      <p className="mt-4">
        🔥 Streak: {habit.streak} days
      </p>

      <div className="mt-4">
        {habit.completed ? (
          <span className="text-green-600 font-semibold">
            Completed ✅
          </span>
        ) : (
          <span className="text-red-500 font-semibold">
            Pending
          </span>
        )}
      </div>
    </div>
  );
}