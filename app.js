const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
const dash = document.querySelectorAll(".dash");
const arrowBtn = document.querySelector(".arrow");
const inputs = document.getElementById("inputs");

arrowBtn.addEventListener("click", (e) => {
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const dashDays = document.querySelector(".dash-days");
  const dahsMonths = document.querySelector(".dash-months");
  const dahsYears = document.querySelector(".dash-years");
  const dayInvalidError = document.querySelector(".day-invalid-error");
  const monthInvalidError = document.querySelector(".month-invalid-error");
  const yearInvalidError = document.querySelector(".year-invalid-error");
  //? *****************************************************************
  const dayEmptyError = document.querySelector(".day-empty-error");
  const monthEmptyError = document.querySelector(".month-empty-error");
  const yearEmptyError = document.querySelector(".year-empty-error");
  const dayLabel = document.querySelector(".day-label");
  const monthLabel = document.querySelector(".month-label");
  const yearLabel = document.querySelector(".year-label");

  //!   DAY ***********************
  if (day.value > 31) {
    dayLabel.style.color = "red";
    day.classList.add("border-error");
    day.value = "";
    dayInvalidError.classList.remove("hidden");
    return;
  } else if (day.value <= 31) {
    dayInvalidError.classList.add("hidden");
    dayLabel.style.color = "hsl(0, 1%, 44%)";
    day.classList.remove("border-error");
  }
  if (day.value === "") {
    dayLabel.style.color = "red";
    day.classList.add("border-error");
    dayEmptyError.classList.remove("hidden");
    return;
  } else {
    dayEmptyError.classList.add("hidden");
  }

  //*  MONTH *****************************

  if (month.value > 12) {
    monthLabel.style.color = "red";
    month.classList.add("border-error");
    monthInvalidError.classList.remove("hidden");
    month.value = "";
    return;
  } else if (month.value <= 12) {
    monthInvalidError.classList.add("hidden");
    monthLabel.style.color = "hsl(0, 1%, 44%)";
    month.classList.remove("border-error");
  }
  if (month.value === "") {
    monthLabel.style.color = "red";
    month.classList.add("border-error");
    monthEmptyError.classList.remove("hidden");
    return;
  } else {
    monthEmptyError.classList.add("hidden");
  }

  //? YEAR ********************************

  if (year.value > 2023) {
    yearLabel.style.color = "red";
    year.classList.add("border-error");
    year.value = "";
    yearInvalidError.classList.remove("hidden");
    return;
  } else if (year.value <= 2023) {
    yearInvalidError.classList.add("hidden");
    yearLabel.style.color = "hsl(0, 1%, 44%)";
    year.classList.remove("border-error");
  }
  if (year.value === "") {
    yearLabel.style.color = "red";
    year.classList.add("border-error");
    yearEmptyError.classList.remove("hidden");
    return;
  } else {
    yearEmptyError.classList.add("hidden");
  }

  //!   ERRRORS *************

  //!   ERRRORS *************

  dashDays.innerHTML = Math.abs(currentDay - day.value);
  dahsMonths.innerHTML = Math.abs(currentMonth - month.value);
  dahsYears.innerHTML = Math.abs(currentYear - year.value);
});

inputs.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    arrowBtn.click();
  }
});

function border(x) {
  x.style.border = "1.4px solid hsl(259, 100%, 65%)";
}
