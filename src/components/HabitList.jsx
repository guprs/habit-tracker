import HabitListItem from "./HabitListItem";

function HabitList({ habits, incrementHabit, decrementHabit, removeHabit }) {
  if (habits.lenght === 0) {
    return (
      <p className="text-center text-slate-400">No habit created.</p>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          incrementHabit={incrementHabit}
          decrementHabit={decrementHabit}
          removeHabit={removeHabit}
          />
      ))}
    </div>
  );
}

export default HabitList;