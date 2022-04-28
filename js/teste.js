const cards_div = document.querySelector(".allCards");

let users = [
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

const gitGetUsers = async (users) => {
  let template = "";

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
    <div class="userCard">
    <img src="${user.avatar_url}" />
    <p>${user.name}</p>
    <small>${user.company}</small>
    <div class="table">
      <div class="tableProjects">
        <p>Prjects</p>
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
    <button id="profile">View Profile</button>
  </div>
  
    `;
  });
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));
