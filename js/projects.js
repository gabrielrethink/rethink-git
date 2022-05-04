const user = new URLSearchParams(window.location.search).get("user");

const cards_div = document.querySelector(".projectAllCards");

const gitGetUsers = async () => {
  const projects = await fetch(
    `https://api.github.com/users/${user}/repos`
  ).then((res) => res.json());

  projects.forEach((project) => {
    cards_div.innerHTML += `
      <div onclick="getSingleProject('${project.owner.login}', '${
      project.name
    }')" class="projectCard">
        <div class="projectCardTitle">
          <h1>${
            project.name.length > 12
              ? project.name.slice(0, 12) + "..."
              : project.name
          }</h1>
          <p>${project.visibility}</p>
        </div>
        <p>
          ${
            project.description != null && project.description.length > 64
              ? project.description.slice(0, 64) + "..."
              : project.description == null
              ? "No description"
              : project.description
          }
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

const getSingleProject = (user, project) => {
  // console.log({ user, project });
  window.location.href = `showProject.html?user=${user}&project=${project}`;
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers());
