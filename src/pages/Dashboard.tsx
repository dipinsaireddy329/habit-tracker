import { useState } from "react";
import HabitForm from "../components/habits/HabitForm";
import HabitList from "../components/habits/HabitList";
import { Habit } from "../types/Habit";

export default function Dashboard() {
  const [habits, setHabits] = useState<Habit[]>([
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
  ]);

  const addHabit = (
    name: string,
    category: string
  ) => {
    const newHabit: Habit = {
      id: Date.now(),
      name,
      category,
      streak: 0,
      completed: false,
    };

    setHabits((prev) => [...prev, newHabit]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <HabitForm onAddHabit={addHabit} />

      <HabitList habits={habits} />
    </div>
  );
}