const login = new URLSearchParams(window.location.search).get("login");
// console.log(login);
const projectName = new URLSearchParams(window.location.search).get("name");
// console.log(name);
const userName = "lucaspaula6";
const token = "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";

const projectName_div = document.getElementById("projectName");
const overview_div = document.getElementById("overview");
const projectDescriprion_div = document.getElementById("projectDescriprion");

const totalCommits = document.getElementById("totalCommits");
const totalBranches = document.getElementById("totalBranches");
const totalWatches = document.getElementById("totalWatches");
const totalForks = document.getElementById("totalForks");
const totalStars = document.getElementById("totalStars");

const profilePic = document.getElementById("profilePic");
const indivName = document.getElementById("indivName");
const indivJob = document.getElementById("indivJob");
const indivProjects = document.getElementById("indivProjects");
const indivStars = document.getElementById("indivStars");
const indivFollowers = document.getElementById("indivFollowers");

const renderProject = async () => {
  const urlProject = `https://api.github.com/repos/${login}/${projectName}`;
  const urlColors = `http://localhost:3000/color`;
  const urlLang = `https://api.github.com/repos/${login}/${projectName}/languages`;
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

  let projectInfo = {
    stars: project.stargazers_count,
    forks: project.forks,
    watchers: project.watchers_count,
    branches: 5,
    // https://api.github.com/repos/filiperethink/certificates-rethink-academy/branches
    commits: 5,
    // https://api.github.com/repos/filiperethink/certificates-rethink-academy/commits
    description: project.description,
  };

  totalCommits.innerHTML = projectInfo.commits;
  totalBranches.innerHTML = projectInfo.branches;
  totalWatches.innerHTML = projectInfo.watchers;
  totalForks.innerHTML = projectInfo.forks;
  totalStars.innerHTML = projectInfo.stars;

  projectDescriprion_div.innerHTML = projectInfo.description;

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

  let userInfo = {
    login: user.login,
    name: user.name == null ? user : user.name,
    company: user.company == null ? "Rethink" : user.company,
    repos: user.public_repos,
    followers: user.followers,
    avatar: user.avatar_url,
  };

  profilePic.src = userInfo.avatar;
  indivName.innerHTML = userInfo.name;
  indivJob.innerHTML = userInfo.company;
  indivProjects.innerHTML = userInfo.repos;
  indivStars.innerHTML = "?";
  indivFollowers.innerHTML = userInfo.followers;
};

// `https://api.github.com/repos/${login}/${name}`

window.addEventListener("DOMContentLoaded", () => renderProject());
