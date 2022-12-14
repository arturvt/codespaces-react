export const countWeekDays = () => {
  const today = new Date();
  let weekDays = 0;
  for (let i = 1; i <= today.getDate(); i++) {
    const day = new Date(today.getFullYear(), today.getMonth(), i);
    if (day.getDay() !== 0 && day.getDay() !== 6) {
      weekDays++;
    }
  }
  return weekDays;
};
