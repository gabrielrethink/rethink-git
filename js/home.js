const cards = document.querySelector(".cards");
const home = document.getElementById("home");

let users = [
  "gabrielrethink",
  "anaclara-rethink",
  "vidallarissa",
  "marcosrezrethink",
];

const onclickButton = (gitUser) => {
  window.location.href = `./projects.html?user=${gitUser}`;
};

const renderCards = async () => {
  await fetch(`https:api.github.com/users/anaclara-rethink`, {
    headers: {
      Authorization:
        "Basic" +
        `btoa(anaclara-rethink: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)`,
    },
  }).then((res) => res.json());

  users.forEach(async (element) => {
    const gitUser = await fetch(`https://api.github.com/users/${element}`).then(
      (response) => response.json()
    );
    console.log(gitUser);
    cards.innerHTML += `
      <div class="cardUser">
              <img src="${gitUser.avatar_url}" alt="" />
              <h1 class="name"> ${gitUser.name}</h1>
              <p>Facebook</p>
              <table>
                <thead>
                  <tr>
                    <td scope="col">Projects</td>
                    <td scope="col">Following</td>
                    <td scope="col">Followers</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col">${gitUser.public_repos}</td>
                    <td scope="col">${gitUser.following}</td>
                    <td scope="col">${gitUser.followers}</td>
                  </tr>
                </tbody>
              </table>
              <button onClick= "onclickButton('${gitUser.login}')">View profile</button>
            </div>`;
  });
};

home.addEventListener("click", () => {
  window.location.href = "./home.html";
});

window.addEventListener("DOMContentLoaded", renderCards());
