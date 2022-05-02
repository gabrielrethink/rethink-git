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
          <a href="/public/html/showProject.html"><h1>${project.name}</a></h1>
          <p>${project.visibility}</p>
        </div>
        <p>
          ${project.description}
        </p>
        <div class="stats">
        <div class="circle"></div>
        ${project.language}
        <p class="statsText"><img src="/public/img/Fork.png" />      
        ${project.forks_count}
      </p>
      <p class="statsText"><img src="/public/img/Star.png" />
      ${project.stargazers_count}
      </p>
        </div>
      </div>
        `;
  });
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers());
