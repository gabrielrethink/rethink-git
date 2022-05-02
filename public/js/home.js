const cards_div = document.querySelector(".userCards");

let users = [
    "carolinavaleriano",
    "fabianakamo",
    "gabrielrethink",
    "felipereggiane",
    "AnaClara-rethink",
    "arthur-vargas",
    "MilagreRethink",
    "loubackrethink",
    "filiperethink",
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

    template += `
    <div class="userCard">
    <img src="${user.avatar_url}" />
    ${user.name ? `<p>${user.name}</p>` : `<p>${user.login}</p>`}
    ${user.company ? `<small>${user.company}</small>` : ""}
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
  </div>`;

    cards_div.innerHTML = template;
  });
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));