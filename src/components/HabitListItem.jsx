function HabitListItem({ habit, incrementHabit, decrementHabit, removeHabit}) {
  const isCompleted = habit.count >= habit.goal;

  return (
    <div className={`p-4 rounded-xl shadow-sm border flex justify-between items-center ${isCompleted ? "bg-green-100 border-green-300" : "bg-white border-slate-200"}`}>

      <div>
        <h3 className="font-semibold text-slate-800">{habit.name}</h3>
        <p className="text-sm text-slate-500">{habit.count} / {habit.goal}</p>
        {isCompleted && (<p className="text-green-600 text-sm font-medium">Goal achieved!</p>)}
      </div>

      <div className="flex gap-2">
        <button onClick={() => decrementHabit(habit.id)} className="bg-slate-400 hover:bg-slate-500 px-3 py-1 rounded-lg">-</button>
        <button onClick={() => incrementHabit(habit.id)} className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded-lg">+</button>
        <button onClick={() => removeHabit(habit.id)} className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg" >x</button>
      </div>
    </div>
  );
}

export default HabitListItem;