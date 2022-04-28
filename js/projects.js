const cards_div = document.querySelector(".projectAllCards");

const user = new URLSearchParams(window.location.search).get("user");
console.log(user);

const gitGetUsers = async () => {
  let template = "";

  const projects = await fetch(
    `https://api.github.com/users/${user}/repos`
  ).then((res) => res.json());

  projects.forEach((project) => {
    cards_div.innerHTML += `
        <div class="projectCard">
        <div class="projectCardTitle">
          <img src="/public/img/projectIcon.jpg" />
          <h1>${project.name}</h1>
        </div>
        <p>
          ${project.description}
        </p>
        <a href="">Saiba mais</a>
      </div>
        `;
  });
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers());
