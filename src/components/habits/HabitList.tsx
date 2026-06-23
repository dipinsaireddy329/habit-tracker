import HabitCard from "./HabitCard";
import { Habit } from "../../types/Habit";

type HabitListProps = {
  habits: Habit[];
};

export default function HabitList({
  habits,
}: HabitListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
        />
      ))}
    </div>
  );
}