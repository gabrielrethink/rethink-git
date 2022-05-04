const cards_div = document.querySelector(".cards");
let users = [
    "FelipeReggiane",
    "arthur-vargas",
    "MilagreRethink",
    "loubackrethink",
    "filiperethink",
    "gabrielrethink",
    "luisrethink",
    "AnaClara-rethink",
    "lucaspaula6",
  ];

const funcOnClick = (user) =>{
    window.location.href=(`/public/projects.html?user=${user}`);
};

const gitGetUsers = async (users) =>{
    let template="";
    users.map( async (user)=>{
        user = await fetch(`https://api.github.com/users/${user}`).then(res => res.json());
        let info={
            img: user.avatar_url,
            name: user.name,
            company: user.company,
            repos: user.public_repos,
            followers: user.followers,
            following: user.following,
        };
        template+= `
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
        
        cards_div.innerHTML = template;
    });
};
window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));
