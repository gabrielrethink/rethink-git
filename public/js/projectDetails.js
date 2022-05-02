const projectName = new URLSearchParams(window.location.search).get("project");
const productTitle_div = document.querySelector('.product-title h1');
const techs_div = document.querySelector('.techs');
const projectDescription_div = document.querySelector('.project-description p');
const card_div = document.querySelector('.card');

const fork_div = document.querySelector('.fork');
const star_div = document.querySelector('.star');
const watch_div = document.querySelector('.watch');
const branch_div = document.querySelector('.branch');
const commit_div = document.querySelector('.commit');

const userName = 'sthephanytezza-dev';
const token = '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';

const getProject = async () =>{
    const project = await fetch(`https://api.github.com/repos/${projectName}`, {headers: { Authorization: "Basic" + btoa(`${userName}:${token}`)}}).then((res) => res.json());
    const colors = await fetch(`http://localhost:3000/colors`).then((response) => response.json());
    const user = await fetch(`https://api.github.com/users/${project.owner.login}`).then((response) => response.json());

    productTitle_div.innerHTML = project.name;

    const languages = await fetch(`https://api.github.com/repos/${projectName}/languages`, {headers: { Authorization: "Basic" + btoa(`${userName}:${token}`)}}).then((res) => res.json());

    for (const key in languages) {
        techs_div.innerHTML += `
            <p class="tech" style="background:${key ? colors[key].color : ''}">${key}</p>
        `;
    }

    const branches =  await fetch(`https://api.github.com/repos/${projectName}/branches`).then((response) => response.json());
    const commits = await fetch(`https://api.github.com/repos/${projectName}/commits`).then((response) => response.json());

    fork_div.innerHTML = project.forks_count;
    star_div.innerHTML = project.stargazers_count;
    watch_div.innerHTML = project.watchers_count;
    branch_div.innerHTML = branches.length;
    commit_div.innerHTML = commits.length;

    card_div.innerHTML += `
        <img src="${user.avatar_url}" alt="">
        <p class="name">${user.name}</p>
        <p class="company">${user.company}</p>
        <div class="details">
            <div class="projects">
                <p class="description">Projects</p>
                <p class="number">${user.public_repos}</p>
            </div>
            <div class="bar-vertical"></div>
            <div class="stars">
                <p class="description">Followers</p>
                <p class="number">${user.followers}</p>
            </div>
            <div class="bar-vertical"></div>
            <div class="followers">
                <p class="description">Following</p>
                <p class="number">${user.following}</p>
            </div>
        </div>
        <button onclick="redirect('${user.login}')">View projects</button>
    `;

    projectDescription_div.innerHTML = project.description;
}

const redirect = (login) => {
    window.location.href = `./project.html?login=${login}`;
}

window.addEventListener("DOMContentLoaded", () => getProject());