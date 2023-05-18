let dayInput = "";
let monthInput = "";
let yearInput = "";
let age = "";

const birthInput = () => {
  day.addEventListener("input", (e) => {
    dayInput = e.target.value;
  });
  month.addEventListener("input", (e) => {
    monthInput = e.target.value;
  });
  year.addEventListener("input", (e) => {
    yearInput = e.target.value;
  });
};
birthInput();

btn.addEventListener("click", () => {
  const birthDate = new Date(yearInput, monthInput - 1, dayInput);
  const today = new Date();

  age = today - birthDate;

  const milliPerDay = 24 * 60 * 60 * 1000;
  const milliPerMonth = 30 * milliPerDay;

  let yearsAge = Math.floor(age / (365 * milliPerDay));
  let monthAge = Math.floor((age % (365 * milliPerDay)) / milliPerMonth);
  let daysAge = Math.floor((age % milliPerMonth) / milliPerDay);

  years.innerHTML = yearsAge;
  months.innerHTML = monthAge;
  days.innerHTML = daysAge;
});
