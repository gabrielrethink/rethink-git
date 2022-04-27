const userName = "gabrielrethink";
const token = "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";
const url = "https://api.github.com/";

const users = [
  "gabrielrethink",
  "luisrethink",
  "AnaClara-rethink",
  "lucaspaula6",
];

const gitGetUsers = async (users) => {
  let template = "";
  const index = users.map(async (user) => {
    user = await fetch(`https://api.github.com/users/${user}`, {
      headers: { Authorization: "Basic" + btoa(`${userName}:${token}`) },
    }).then((res) => res.json());
    <div class="userCard">
      <img src="${user.avatar_url}" />
      <p>${user.name}</p>
      <small>${user.company}</small>
      <div class="table">
        <div class="tableProjects">
          <p>Projects</p>
          <small>${user.public_repos}</small>
        </div>
        <div class="tableStars">
          <p>Stars</p>
          <small>${user.following}</small>
        </div>
        <div class="tableFollowers">
          <p>Followers</p>
          <small>${user.followers}</small>
        </div>
      </div>
      <button id="profile">View Profile</button>
    </div>;
  });
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));
