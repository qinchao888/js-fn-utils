export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = this.formatTime(date.getMonth() + 1);
  const da = this.formatTime(date.getDate());
  return `${year}-${month}-${da}`;
}
function formatTime (time) {
  return +time < 10 ? `0${time}` : time;
}