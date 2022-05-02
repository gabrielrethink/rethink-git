const home = document.getElementById("home");
const nameProject = new URLSearchParams(window.location.search).get(
  "nameProject"
);
const nameUser = new URLSearchParams(window.location.search).get("nameUser");
const cardProfile = document.querySelector(".profile");
const cards = document.querySelector(".options");
const overview = document.querySelector(".Overview");
const title = document.querySelector(".title > h1");
const buttonBack = document.querySelector(".buttonBack");

const backHome = () => {
  window.location.href = "./home.html";
};

home.addEventListener("click", () => {
  backHome();
});

const renderCards = async () => {
  console.log(nameProject);
  console.log(nameUser);

  const project = await fetch(
    `
    https://api.github.com/repos/${nameUser}/${nameProject}
    `
  ).then((response) => response.json());

  const commits = await fetch(
    `https://api.github.com/repos/${nameUser}/${nameProject}/commits
    `
  ).then((response) => response.json());

  const branches = await fetch(
    `https://api.github.com/repos/${nameUser}/${nameProject}/branches
    `
  ).then((response) => response.json());

  title.innerHTML = `${nameProject}`;

  cards.innerHTML += `
              <div class="card">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.59864 2.65625C3.59864 2.88002 3.50974 3.09464 3.35151 3.25287C3.19328 3.4111 2.97867 3.5 2.75489 3.5C2.53111 3.5 2.3165 3.4111 2.15827 3.25287C2.00003 3.09464 1.91114 2.88002 1.91114 2.65625C1.91114 2.43247 2.00003 2.21786 2.15827 2.05963C2.3165 1.90139 2.53111 1.8125 2.75489 1.8125C2.97867 1.8125 3.19328 1.90139 3.35151 2.05963C3.50974 2.21786 3.59864 2.43247 3.59864 2.65625V2.65625ZM3.59864 5.0435C4.1616 4.84446 4.63608 4.45282 4.9382 3.93778C5.24033 3.42275 5.35066 2.81749 5.24969 2.22897C5.14871 1.64046 4.84294 1.10659 4.38641 0.721722C3.92989 0.336852 3.352 0.125763 2.75489 0.125763C2.15778 0.125763 1.57989 0.336852 1.12336 0.721722C0.666836 1.10659 0.361064 1.64046 0.260092 2.22897C0.159119 2.81749 0.269446 3.42275 0.571574 3.93778C0.873702 4.45282 1.34818 4.84446 1.91114 5.0435V6.03125C1.91114 6.70258 2.17782 7.34641 2.65252 7.82111C3.12723 8.29581 3.77106 8.5625 4.44239 8.5625H6.12989V10.9565C5.56661 11.1555 5.09185 11.5473 4.78951 12.0626C4.48717 12.5778 4.37672 13.1834 4.4777 13.7722C4.57868 14.361 4.88457 14.8952 5.34131 15.2803C5.79805 15.6653 6.37623 15.8766 6.97364 15.8766C7.57105 15.8766 8.14923 15.6653 8.60597 15.2803C9.06271 14.8952 9.3686 14.361 9.46958 13.7722C9.57056 13.1834 9.46011 12.5778 9.15777 12.0626C8.85543 11.5473 8.38067 11.1555 7.81739 10.9565V8.5625H9.50489C10.1762 8.5625 10.8201 8.29581 11.2948 7.82111C11.7695 7.34641 12.0361 6.70258 12.0361 6.03125V5.0435C12.5991 4.84446 13.0736 4.45282 13.3757 3.93778C13.6778 3.42275 13.7882 2.81749 13.6872 2.22897C13.5862 1.64046 13.2804 1.10659 12.8239 0.721722C12.3674 0.336852 11.7895 0.125763 11.1924 0.125763C10.5953 0.125763 10.0174 0.336852 9.56086 0.721722C9.10434 1.10659 8.79857 1.64046 8.69759 2.22897C8.59662 2.81749 8.70695 3.42275 9.00908 3.93778C9.3112 4.45282 9.78568 4.84446 10.3486 5.0435V6.03125C10.3486 6.25502 10.2597 6.46964 10.1015 6.62787C9.94328 6.7861 9.72867 6.875 9.50489 6.875H4.44239C4.21861 6.875 4.004 6.7861 3.84577 6.62787C3.68753 6.46964 3.59864 6.25502 3.59864 6.03125V5.0435ZM7.81739 13.3437C7.81739 13.5675 7.72849 13.7821 7.57026 13.9404C7.41203 14.0986 7.19742 14.1875 6.97364 14.1875C6.74986 14.1875 6.53525 14.0986 6.37702 13.9404C6.21878 13.7821 6.12989 13.5675 6.12989 13.3437C6.12989 13.12 6.21878 12.9054 6.37702 12.7471C6.53525 12.5889 6.74986 12.5 6.97364 12.5C7.19742 12.5 7.41203 12.5889 7.57026 12.7471C7.72849 12.9054 7.81739 13.12 7.81739 13.3437ZM11.1924 3.5C11.4162 3.5 11.6308 3.4111 11.789 3.25287C11.9472 3.09464 12.0361 2.88002 12.0361 2.65625C12.0361 2.43247 11.9472 2.21786 11.789 2.05963C11.6308 1.90139 11.4162 1.8125 11.1924 1.8125C10.9686 1.8125 10.754 1.90139 10.5958 2.05963C10.4375 2.21786 10.3486 2.43247 10.3486 2.65625C10.3486 2.88002 10.4375 3.09464 10.5958 3.25287C10.754 3.4111 10.9686 3.5 11.1924 3.5Z"
                      fill="black"
                    />
                  </svg>
                  <div class="information">
                    <div class="name">Fork</div>
                    <div class="likes">${project.forks_count}</div>
                  </div>
                </div>
                <div class="card">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3015 15.1429L3.87294 19L6.44437 12.403L1.30151 7.42857H7.73008L10.3015 1L12.8729 7.42857H19.3015L14.1587 12.5714L16.7301 19L10.3015 15.1429Z"
                      stroke="#2A2E3B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="information">
                    <div class="name">Stars</div>
                    <div class="likes">${project.stargazers_count}</div>
                  </div>
                </div>
                <div class="card">
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.51837 6.9235C2.98187 6.22487 3.91562 4.95475 5.18012 3.86688C6.45137 2.77225 7.97237 1.9375 9.6295 1.9375C11.2866 1.9375 12.8065 2.77225 14.0789 3.86688C15.3434 4.95475 16.2771 6.22487 16.7406 6.9235C16.7563 6.94595 16.7646 6.97265 16.7646 7C16.7646 7.02735 16.7563 7.05405 16.7406 7.0765C16.2771 7.77513 15.3434 9.04525 14.0789 10.1331C12.8076 11.2277 11.2866 12.0625 9.6295 12.0625C7.97237 12.0625 6.4525 11.2277 5.18012 10.1331C3.9145 9.04525 2.98075 7.77625 2.51837 7.0765C2.50274 7.05405 2.49436 7.02735 2.49436 7C2.49436 6.97265 2.50274 6.94595 2.51837 6.9235ZM9.6295 0.25C7.40087 0.25 5.50075 1.366 4.07987 2.58775C2.65112 3.81512 1.6195 5.22587 1.11325 5.9875C0.913335 6.28691 0.806641 6.63886 0.806641 6.99888C0.806641 7.35889 0.913335 7.71084 1.11325 8.01025C1.6195 8.773 2.65112 10.1838 4.07987 11.4122C5.49962 12.634 7.40087 13.75 9.6295 13.75C11.8581 13.75 13.7582 12.634 15.1791 11.4122C16.6079 10.1849 17.6395 8.77413 18.1457 8.01138C18.3457 7.71196 18.4524 7.36002 18.4524 7C18.4524 6.63998 18.3457 6.28804 18.1457 5.98862C17.6395 5.22587 16.6079 3.81512 15.1791 2.58775C13.7594 1.366 11.8581 0.25 9.6295 0.25ZM9.6295 9.25C10.2262 9.25 10.7985 9.01295 11.2205 8.59099C11.6424 8.16903 11.8795 7.59674 11.8795 7C11.8795 6.40326 11.6424 5.83097 11.2205 5.40901C10.7985 4.98705 10.2262 4.75 9.6295 4.75C9.03276 4.75 8.46046 4.98705 8.03851 5.40901C7.61655 5.83097 7.3795 6.40326 7.3795 7C7.3795 7.59674 7.61655 8.16903 8.03851 8.59099C8.46046 9.01295 9.03276 9.25 9.6295 9.25Z"
                      fill="black"
                    />
                  </svg>
                  <div class="information">
                    <div class="name">Watch</div>
                    <div class="likes">${project.watchers_count}</div>
                  </div>
                </div>
                <div class="card">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.1762 1.8125C10.9524 1.8125 10.7378 1.90139 10.5796 2.05963C10.4213 2.21786 10.3324 2.43247 10.3324 2.65625C10.3324 2.88003 10.4213 3.09464 10.5796 3.25287C10.7378 3.4111 10.9524 3.5 11.1762 3.5C11.4 3.5 11.6146 3.4111 11.7728 3.25287C11.931 3.09464 12.0199 2.88003 12.0199 2.65625C12.0199 2.43247 11.931 2.21786 11.7728 2.05963C11.6146 1.90139 11.4 1.8125 11.1762 1.8125ZM8.64493 2.65625C8.64507 2.19222 8.77276 1.73716 9.01405 1.3408C9.25533 0.944441 9.60093 0.622033 10.0131 0.408813C10.4252 0.195593 10.888 0.099766 11.3509 0.131804C11.8139 0.163843 12.2591 0.322514 12.6379 0.590478C13.0167 0.858441 13.3146 1.22538 13.499 1.6512C13.6834 2.07703 13.7472 2.54534 13.6834 3.00496C13.6196 3.46458 13.4307 3.89783 13.1373 4.25735C12.844 4.61686 12.4574 4.88882 12.0199 5.0435V5.75C12.0199 6.49592 11.7236 7.21129 11.1962 7.73874C10.6687 8.26618 9.95335 8.5625 9.20743 8.5625H4.70743C4.40906 8.5625 4.12291 8.68102 3.91193 8.892C3.70096 9.10298 3.58243 9.38913 3.58243 9.6875V10.9565C4.1457 11.1555 4.62047 11.5473 4.92281 12.0626C5.22515 12.5778 5.3356 13.1834 5.23462 13.7722C5.13364 14.361 4.82775 14.8952 4.37101 15.2803C3.91427 15.6653 3.33609 15.8766 2.73868 15.8766C2.14127 15.8766 1.56309 15.6653 1.10635 15.2803C0.649612 14.8952 0.343717 14.361 0.24274 13.7722C0.141763 13.1834 0.252206 12.5778 0.554546 12.0626C0.856885 11.5473 1.33165 11.1555 1.89493 10.9565V5.0435C1.33197 4.84446 0.857493 4.45282 0.555365 3.93778C0.253237 3.42275 0.14291 2.81749 0.243883 2.22897C0.344855 1.64046 0.650627 1.10659 1.10715 0.721723C1.56368 0.336853 2.14157 0.125764 2.73868 0.125764C3.33579 0.125764 3.91368 0.336853 4.3702 0.721723C4.82673 1.10659 5.1325 1.64046 5.23348 2.22897C5.33445 2.81749 5.22412 3.42275 4.92199 3.93778C4.61987 4.45282 4.14539 4.84446 3.58243 5.0435V7.109C3.93725 6.95416 4.3203 6.87449 4.70743 6.875H9.20743C9.5058 6.875 9.79195 6.75647 10.0029 6.54549C10.2139 6.33452 10.3324 6.04837 10.3324 5.75V5.0435C9.83879 4.86897 9.41143 4.54567 9.1092 4.11812C8.80698 3.69057 8.64477 3.17983 8.64493 2.65625ZM2.73868 12.5C2.5149 12.5 2.30029 12.5889 2.14206 12.7471C1.98382 12.9054 1.89493 13.12 1.89493 13.3437C1.89493 13.5675 1.98382 13.7821 2.14206 13.9404C2.30029 14.0986 2.5149 14.1875 2.73868 14.1875C2.96246 14.1875 3.17707 14.0986 3.3353 13.9404C3.49353 13.7821 3.58243 13.5675 3.58243 13.3437C3.58243 13.12 3.49353 12.9054 3.3353 12.7471C3.17707 12.5889 2.96246 12.5 2.73868 12.5ZM1.89493 2.65625C1.89493 2.43247 1.98382 2.21786 2.14206 2.05963C2.30029 1.90139 2.5149 1.8125 2.73868 1.8125C2.96246 1.8125 3.17707 1.90139 3.3353 2.05963C3.49353 2.21786 3.58243 2.43247 3.58243 2.65625C3.58243 2.88003 3.49353 3.09464 3.3353 3.25287C3.17707 3.4111 2.96246 3.5 2.73868 3.5C2.5149 3.5 2.30029 3.4111 2.14206 3.25287C1.98382 3.09464 1.89493 2.88003 1.89493 2.65625Z"
                      fill="black"
                    />
                  </svg>
                  <div class="information">
                    <div class="name">Branchs</div>
                    <div class="likes">${branches.length}</div>
                  </div>
                </div>
                <div class="card">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.13378 3.53588L0.765776 2.16788C0.72644 2.12845 0.676282 2.10158 0.621658 2.09069C0.567035 2.07979 0.510407 2.08536 0.458953 2.10669C0.407499 2.12802 0.363537 2.16415 0.332639 2.21049C0.301742 2.25683 0.285301 2.31131 0.285401 2.36701V6.46876C0.285401 6.62401 0.411401 6.75001 0.566651 6.75001H4.6684C4.7241 6.75011 4.77857 6.73367 4.82492 6.70277C4.87126 6.67187 4.90739 6.62791 4.92872 6.57646C4.95005 6.525 4.95562 6.46837 4.94472 6.41375C4.93383 6.35913 4.90696 6.30897 4.86753 6.26963L3.33978 4.74188C4.33566 3.35099 5.78767 2.35326 7.44317 1.9223C9.09866 1.49134 10.8528 1.65443 12.4005 2.38318C13.9482 3.11193 15.1914 4.36023 15.9138 5.91087C16.6362 7.46152 16.7921 9.21636 16.3544 10.8701C15.9167 12.5238 14.913 13.9717 13.5181 14.9619C12.1231 15.9521 10.4252 16.4219 8.71962 16.2895C7.01408 16.1572 5.40892 15.4311 4.18341 14.2375C2.95791 13.044 2.18964 11.4586 2.01228 9.75713C1.9893 9.5344 1.87879 9.32992 1.70505 9.18867C1.53131 9.04742 1.30857 8.98097 1.08584 9.00395C0.863106 9.02692 0.658623 9.13743 0.517373 9.31117C0.376123 9.48492 0.309676 9.70765 0.332651 9.93038C0.549087 12.013 1.48482 13.9551 2.97877 15.4222C4.47271 16.8893 6.43139 17.7896 8.51762 17.9683C10.6038 18.1469 12.6871 17.5926 14.4087 16.4009C16.1303 15.2091 17.3826 13.4544 17.95 11.4389C18.5173 9.42339 18.3642 7.27312 17.5171 5.35828C16.67 3.44344 15.1818 1.88384 13.3087 0.947967C11.4356 0.012096 9.29488 -0.24149 7.25499 0.230864C5.21511 0.703218 3.40372 1.87196 2.13265 3.53588H2.13378ZM9.00415 4.50001C9.22793 4.50001 9.44254 4.5889 9.60077 4.74714C9.75901 4.90537 9.8479 5.11998 9.8479 5.34376V8.70976L12.1294 9.62326C12.3305 9.7109 12.4895 9.87339 12.5728 10.0763C12.6561 10.2792 12.6571 10.5065 12.5756 10.7102C12.4941 10.9138 12.3365 11.0777 12.1363 11.1671C11.936 11.2566 11.7088 11.2645 11.5028 11.1893L8.69028 10.0643C8.53387 10.0016 8.39981 9.8935 8.30537 9.75394C8.21093 9.61439 8.16044 9.44976 8.1604 9.28126V5.34376C8.1604 5.11998 8.2493 4.90537 8.40753 4.74714C8.56576 4.5889 8.78037 4.50001 9.00415 4.50001Z"
                      fill="black"
                    />
                  </svg>
                  <div class="information">
                    <div class="name">Commits</div>
                    <div class="likes">${commits.length}</div>
                  </div>
                </div>
  `;

  const languages = await fetch(
    `
    https://api.github.com/repos/${nameUser}/${nameProject}/languages
    `
  ).then((response) => response.json());

  const styleLanguage = await fetch(
    `http://localhost:3000/languages
      `
  ).then((response) => response.json());

  // console.log(styleLanguage);

  for (const key in languages) {
    console.log(key);
    console.log(styleLanguage[key]);
    overview.innerHTML += `<button style="background-color:${styleLanguage[key].color}" class="${key}">${key}</button>`;
  }

  const profile = await fetch(
    `
    ${project.owner.url}
    `
  ).then((response) => response.json());
  // console.log(profile);
  cardProfile.innerHTML += `
    <div class="cardUser">
              <img src="${profile.avatar_url}" alt="" />
              <h1 class="name">${profile.name}</h1>
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
                    <td scope="col">${profile.public_repos}</td>
                    <td scope="col">${profile.following}</td>
                    <td scope="col">${profile.followers}</td>
                  </tr>
                </tbody>
              </table>
              <button desabled>
                View profile
              </button>
            </div>
    `;
};

buttonBack.addEventListener("click", async () => {
  // window.location.replace("/");
  const project = await fetch(
    `
    https://api.github.com/repos/${nameUser}/${nameProject}
    `
  ).then((response) => response.json());
  console.log(project.owner.login);
  window.location.href = `./projects.html?user=${project.owner.login}`;
});

window.addEventListener("DOMContentLoaded", renderCards());
