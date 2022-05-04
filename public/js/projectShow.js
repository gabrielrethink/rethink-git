const login = new URLSearchParams(window.location.search).get("login");
// console.log(login);
const name = new URLSearchParams(window.location.search).get("name");
// console.log(name);
const userName = "lucaspaula6";
const token = "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";

const projectName_div = document.getElementById("projectName");
const overview_div = document.getElementById("overview");
const projectDescriprion_div = document.getElementById("projectDescriprion");

const renderProject = async () => {
  const urlProject = `https://api.github.com/repos/${login}/${name}`;
  const urlColors = `http://localhost:3000/color`;
  const urlLang = `https://api.github.com/repos/${login}/${name}/languages`;
  const urlUser = `https://api.github.com/users/${login}`;

  const project = await fetch(urlProject, {
    headers: { Authorization: "Basic" + btoa(`${userName}:${token}`) },
  }).then((response) => response.json());

  const languages = await fetch(urlLang, {
    headers: { Authorization: "Basic" + btoa(`${userName}:${token}`) },
  }).then((response) => response.json());
  //   console.log(project);
  const colors = await fetch(urlColors).then((response) => response.json());

  projectName_div.innerHTML = project.name;
  console.log(project);
  projectDescriprion_div.innerHTML = project.description;

  const arr = Object.keys(languages);
  //   console.log(arr);
  arr.forEach((language) => {
    const color = colors[language].color;
    // console.log(language);
    overview_div.innerHTML += `<div class="langName" style="background-color:${color};">${language}</div>`;
  });

  const user = await fetch(urlUser, {
    headers: { Authorization: "Basic" + btoa(`${userName}:${token}`) },
  }).then((res) => res.json());
  const profilePic = document.getElementById("profilePic");
  const indivName = document.getElementById("indivName");
  const indivJob = document.getElementById("indivJob");
  const indivProjects = document.getElementById("indivProjects");
  const indivStars = document.getElementById("indivStars");
  const indivFollowers = document.getElementById("indivFollowers");

  let info = {
    login: user.login,
    name: user.name == null ? user : user.name,
    company: user.company == null ? "Rethink" : user.company,
    repos: user.public_repos,
    followers: user.followers,
    avatar: user.avatar_url,
  };

  profilePic.src = info.avatar;
  indivName.innerHTML = info.name;
  indivJob.innerHTML = info.company;
  indivProjects.innerHTML = info.repos;
  indivStars.innerHTML = "?";
  indivFollowers.innerHTML = info.followers;
};

// `https://api.github.com/repos/${login}/${name}`

window.addEventListener("DOMContentLoaded", () => renderProject());
