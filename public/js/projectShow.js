const showProject_div = document.querySelector(".showBody");

const fullName = new URLSearchParams(window.location.search).get("user");

const backBtn = document.querySelector(".showBackBtn");
let userName = "";

const funcOnClick = (user) =>{
    window.location.href=(`/public/projects.html?user=${user}`);
};

const gitGetProjectsShow = async (fullName)=>{
    const login = (fullName.split("/")[0]);
    const user = await fetch(`https://api.github.com/users/${login}`).then(res => res.json());
    userName =login;
    const project = await fetch(`https://api.github.com/repos/${fullName}`).then(res => res.json());
    const branchs =  await fetch(`https://api.github.com/repos/${fullName}/branches`).then(res => res.json());
    const commits =  await fetch(`https://api.github.com/repos/${fullName}/commits`).then(res => res.json());
    
    document.querySelector(".showTitle").innerHTML = project.name
    
    const jsonLanguages = await fetch(`http://localhost:3000/languages`).then(res => res.json());
    const projectLanguages = await fetch(`https://api.github.com/repos/${fullName}/languages`).then(res => res.json());

    for(const key in projectLanguages){
        document.querySelector(".showVerifiedBox").innerHTML += `<p class="showVerified" style = "background: ${jsonLanguages[key].color}">${key}</p>`
    }

    document.querySelector(".showText").innerHTML = project.description;
    document.querySelector(".featureBoxFork").innerHTML = project.forks_count;
    document.querySelector(".featureBoxStars").innerHTML = project.stargazers_count;
    document.querySelector(".featureBoxWatch").innerHTML = project.watchers_count;
    document.querySelector(".featureBoxBranchs").innerHTML = branchs.length;
    document.querySelector(".featureBoxCommits").innerHTML = commits.length;


    const card = document.querySelector(".cardShowProduct");
    let template="";

    template+=`
        <div class="card">
            <img src="${user.avatar_url}" alt="" class="cardIcon">
            ${user.name ? `<p class="name">${user.name}</p>` : `<p class="name">${user.login}</p>`}
            ${user.company ? `<small>${user.company}</small>` : ""}
            <div class="features">
                <div class="projects">
                    <p>Projects</p>
                    <small>${user.public_repos}</small>
                </div>
                <div class="split"></div>
                <div class="following">
                    <p>Following</p>
                    <small>${user.following}</small>
                </div>
                <div class="split"></div>
                <div class="followers">
                    <p>Followers</p>
                    <small>${user.followers}</small>
                </div>
            </div>
            <button onclick="funcOnClick('${user.login}')">View profile</button>
        </div>
    `
    card.innerHTML=template;
}

const backButton=(userName)=>{
    window.location.href=(`/public/projects.html?user=${userName}`);
}

backBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    backButton(userName);
});

window.addEventListener("DOMContentLoaded", () =>gitGetProjectsShow(fullName));