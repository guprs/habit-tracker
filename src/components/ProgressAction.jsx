function ProgressAction({ habits }) {
  const totalCount = habits.reduce((acc, habit) => acc + habit.count, 0);
  
  const totalGoal = habits.reduce((acc, habit) => acc + habit.goal, 0);

  const percentage = totalGoal === 0
    ? 0
    : Math.min(100, Math.round((totalCount / totalGoal) * 100));

  return (
    <div className="mb-6">

      {/* progress text */}
      <div className="flex justify-between text-sm mb-2">
        <span className="text-amber-100">Daily Progress</span>
        <span className="text-amber-100">{percentage}%</span>
      </div>

      {/* progress bar */}
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div className={`h-3 rounded-full transition-all duration-300 ${ percentage === 100 ? "bg-green-600" : "bg-blue-500" }`} style={{ width: `${percentage}%` }}></div>
      </div>

    </div>
  )
}

export default ProgressAction;