import { useEffect, useState } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import ProgressAction from "./components/ProgressAction";

function App() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });

  //save on localStorage when changed
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  //add habit
  const addHabit = (name, goal) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      goal: Number(goal),
      count: 0,
    };

    setHabits([...habits, newHabit]);
  };

  //remove habit
  const removeHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  //clear all habits
  const resetHabits = () => {
    setHabits([]);
  };

  //increase
  const incrementHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? { ...habit, count: habit.count + 1 }
          : habit
      )
    );
  };

  //decrease
  const decrementHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id && habit.count > 0
          ? { ...habit, count: habit.count - 1 }
          : habit
      )
    );
  };

return (
  <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex justify-center p-6">
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6">

      <Header />

      <HabitForm addHabit={addHabit} />

      <ProgressAction habits={habits} />

      <div className="space-y-6">

        <HabitList
          habits={habits}
          incrementHabit={incrementHabit}
          decrementHabit={decrementHabit}
          removeHabit={removeHabit}
        />

        {habits.length > 0 && (
          <div className="flex justify-center">
            <button onClick={resetHabits} className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-lg transition">Reset List</button>
          </div>
        )}
      </div>
    </div>
  </div>
);
} 

export default App;