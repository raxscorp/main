// Sample app data
const apps = [
  {
    title: "GPA Calculator",
    desc: "Calculate your GPA",
    image: "gpa.png",
    link: "https://raxscorp.pythonanywhere.com/gpa_calculator/"
  },
  {
    title: "Stickman Zombie Game",
    desc: "Protect your base from zombies",
    image: "stick.png",
    link: "https://www.raxscorp.com/export/index.html"
  },
  {
    title: "PhotoInk",
    desc: "Protect your base from zombies",
    image: "photoink.png",
    link: "https://www.raxscorp.com/photo/index.html"
  },
  {
    title: "Timeboxing",
    desc: "Create your schedule for productivity",
    image: "timebox.png",
    link: "https://raxscorp.pythonanywhere.com/timeboxing/"
  },
  {
    title: "BMI Calculator",
    desc: "Calculate body mass index",
    image: "bmi.png",
    link: "https://raxscorp.pythonanywhere.com/bmi/"
  },
  {
    title: "Fontify",
    desc: "Create amazing png fonts",
    image: "font.png",
    link: "https://raxscorp.pythonanywhere.com/font-generator/"
  },
  {
    title: "Grade Calculator",
    desc: "Calculate my grade",
    image: "grade.png",
    link: "https://raxscorp.pythonanywhere.com/grade/"
  },
  {
    title: "Age Calculator",
    desc: "Find out age & horoscope",
    image: "horo.ico",
    link: "https://raxscorp.pythonanywhere.com/age_calculator/"
  },
];

// Reference to container
const container = document.getElementById("cardContainer");

// Generate cards
apps.forEach(app => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = app.link;
  card.target = "_blank";
  card.innerHTML = `
    <img src="${app.image}" alt="${app.title}" />
    <div class="card-content">
      <h3>${app.title}</h3>
      <p>${app.desc}</p>
    </div>
  `;
  container.appendChild(card);
});
