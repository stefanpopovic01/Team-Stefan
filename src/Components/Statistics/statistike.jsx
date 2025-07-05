import React from "react";
import { useTasks } from "../kontekst";
import "./stati.css";

const Statistike = () => {
  const { tasks } = useTasks();


  const groupedByDate = {};
  tasks.forEach((task) => {
    const date = new Date(task.date).toDateString();
    if (!groupedByDate[date]) groupedByDate[date] = [];
    groupedByDate[date].push(task);
  });


  const sortedDates = Object.keys(groupedByDate)
    .sort((a, b) => new Date(b) - new Date(a))
    .slice(0, 7)
    .reverse();

  return (
    <div className="weekly-stats">
      <h2>Statistika po danima</h2>
      {sortedDates.map((date) => {
        const dailyTasks = groupedByDate[date];
        const completed = dailyTasks.filter((t) => t.completed).length;
        const total = dailyTasks.length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        return (
          <div className="stat-row" key={date}>
            <span className="date-label">{new Date(date).toDateString().slice(4, 10)}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${percent}%` }}>
                {percent}%
              </div>
            </div>
            <span className="date-label">{new Date(date).toDateString().slice(4, 10)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Statistike;