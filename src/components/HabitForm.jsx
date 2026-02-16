import { useState } from "react";

function HabitForm({ addHabit }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !goal) return;

    addHabit(name, goal);
    setName("");
    setGoal("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6 w-full">
      <input type="text" placeholder="Habit" value={name} onChange={(e) => setName(e.target.value)} className="text-amber-100 flex-2 min-w-0 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-50"/>

      <input type="number" placeholder="Daily Goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="text-amber-100 flex-1 min-w-0 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-50"/>

      <button type="submit" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-amber-50 px-4 py-2 rounded-lg transition">Create Habit</button>
    </form>
  );
}

export default HabitForm;