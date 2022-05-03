const cards_div = document.querySelector('.cards');
const usersArray = [
    "arthur-vargas",
    "MilagreRethink",
    "loubackrethink",
    "filiperethink",
    "gabrielrethink",
    "vidallarissa",
    "marcosrezrethink",
    "mateushfmrethink",
    "AnaClara-rethink",
    "amandadclsRethink",
    "luisrethink",
    "lucaspaula6",
    "carolinavaleriano",
    "fabianakamo",
    "FelipeReggiane",
    "fernando-henrique2001",
    "gabsrethink",
    "Luisrethink",
    "sthephanytezza-dev",
];
const search_div = document.getElementById("input-search");

const gitGetUsers = async (users, filter) =>{

    if(filter){
        users = users.filter((user) => user.toLowerCase().includes(filter.toLowerCase()));
    }
    
    cards_div.innerHTML = "";

    users.map(async (user) => {
        user = await fetch(`https://api.github.com/users/${user}`).then((response) => response.json());
        console.log(user);
        cards_div.innerHTML += `
            <div class="card">
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
            </div>
        `;
    });
}

const redirect = (login) => {
    window.location.href = `./project.html?login=${login}`;
}

const load = () => {
    gitGetUsers(usersArray, search_div.value);
}

window.addEventListener("DOMContentLoaded", () => gitGetUsers(usersArray));