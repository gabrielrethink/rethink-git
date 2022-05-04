const projectName = new URLSearchParams(window.location.search).get("project");
const user = new URLSearchParams(window.location.search).get("user");

const projectDescription_div = document.querySelector(".projectDescription"); //<div class="projectDescription">
const singleProject_div = document.querySelector(".singleProject");
const overview_div = document.querySelector(".overview");
const cards_div = document.querySelector(".userCard");

const projectTitle_h1 = document.getElementById("name"); //<div class="projectShowTitle"> <h1 id="name">${project.name}</h1>
const branches_p = document.getElementById("branches");
const commits_p = document.getElementById("commits");
const stars_p = document.getElementById("stars");
const watch_p = document.getElementById("watch");
const fork_p = document.getElementById("fork");

let users = [`${user}`];

const renderProject = async () => {
  const project = await fetch(
    `https://api.github.com/repos/${user}/${projectName}`
  ).then((res) => res.json());

  const branches = await fetch(
    `https://api.github.com/repos/${user}/${projectName}/branches`
  ).then((res) => res.json());

  const commits = await fetch(
    `https://api.github.com/repos/${user}/${projectName}/commits`
  ).then((res) => res.json());

  const languages = await fetch(
    `https://api.github.com/repos/${user}/${projectName}/languages`
  ).then((res) => res.json());

  const colors = await fetch(`http://localhost:3000/colors`).then((res) =>
    res.json()
  );

  for (const key in languages) {
    // chave: CSS - valor: 5668   //HTML: 18854   //JavaScript: 1547  ----> console.log(key) retorna a string(chave) ao inves do valor
    overview_div.innerHTML += `<button style="background:${colors[key].color}" class="badge">${key}</button>`;
  }

  projectTitle_h1.innerHTML = project.name;

  projectDescription_div.innerHTML = `<p>${
    project.description ? project.description : "No description"
  }</p>`;

  fork_p.innerHTML = project.forks_count;
  stars_p.innerHTML = project.stargazers_count;
  watch_p.innerHTML = project.watchers;
  branches_p.innerHTML = branches.length;
  commits_p.innerHTML = commits.length;
};

const getButtonProfile = (user) => {
  window.location.href = `projects.html?user=${user}`;
};

const gitGetUsers = async (users) => {
  users.map(async (user) => {
    user = await fetch(`https://api.github.com/users/${user}`).then((res) =>
      res.json()
    );
    let info = {
      img: user.avatar_url,
      name: user.name,
      company: user.company,
      repos: user.public_repos,
      following: user.following,
      followers: user.followers,
    };

    cards_div.innerHTML += `
    <img src="${user.avatar_url}" />
    <p>${user.name}</p>
    <small>${user.company}</small>
    <div class="table">
      <div class="tableProjects">
        <p>Projects</p>
        <small>${user.public_repos}</small>
      </div>
      <div class="tableStars">
        <p>Following</p>
        <small>${user.following}</small>
      </div>
      <div class="tableFollowers">
        <p>Followers</p>
        <small>${user.followers}</small>
      </div>
    </div>
    <button onclick="getButtonProfile('${user.login}')" type="click" id="profile">View Projects</button>
  
    `;
  });
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));
window.addEventListener("DOMContentLoaded", () => renderProject());
