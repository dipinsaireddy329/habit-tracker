import HabitForm from "../components/habits/HabitForm";
import HabitList from "../components/habits/HabitList";
import { Habit } from "../types/Habit";

export default function Dashboard() {
  const habits: Habit[] = [
    {
      id: 1,
      name: "Reading",
      category: "Learning",
      streak: 7,
      completed: true,
    },
    {
      id: 2,
      name: "Workout",
      category: "Fitness",
      streak: 12,
      completed: false,
    },
    {
      id: 3,
      name: "Meditation",
      category: "Mindfulness",
      streak: 5,
      completed: true,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <HabitForm />

      <HabitList habits={habits} />
    </div>
  );
}