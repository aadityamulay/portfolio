const roles = [
  "Full Stack Developer",
  "Java Backend Developer",
  "React Frontend Developer",
  "SQL Enthusiast"
];

let index = 0;
const roleEl = document.getElementById("animated-role");

setInterval(() => {
  roleEl.textContent = roles[index];
  index = (index + 1) % roles.length;
}, 2500);
