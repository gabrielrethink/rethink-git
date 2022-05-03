const peopleCard = document.getElementById("peopleCard");

const userName="lucaspaula6";
const token="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";

let users =  [  "arthur-vargas",
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
        "sthephanytezza-dev",];
let template = "";

const gitGetUsers = async (users) =>{
    users.map(async (user) => {
        user = await fetch(`https://api.github.com/users/${user}`, 
        {
            headers: { Authorization: "Basic" + btoa(`${userName}:${token}`) },
          }
        ).then((res) => res.json());
        
        let info = {
            login: user.login,
            name: (user.name== null)? user : user.name,
            company: (user.company==null)? "Rethink" : user.company,
            repos: user.public_repos,
            followers: user.followers,
            avatar: user.avatar_url,
        };
        // console.log(user);
        template=`
        <div class="indivCard">
        <img src="${info.avatar}" id="profilePic" class="profilePic" alt="">
        <p class="indivName" id="indivName">${info.name}</p>
        <p class="indivJob" id="indivJob">${info.company}</p>
        <table>
        <tr>
        <th>Projects</th>
        <th>Stars</th>
        <th>Followers</th>
        </tr>
        <tr>
        <td id="indivProjects">${info.repos}</td>
        <td id="indivStars">?</td>
        <td id="indivFollowers">${info.followers}</td>
        </tr>
        </table>
        <button class="seeIndiv" id="seeIndiv" onClick="verProjetos('${info.login}')">Ver Perfil</button>
        </div>`;
        // console.log(template);
        peopleCard.innerHTML+=template;
    });
    console.log(template);
};
const verProjetos = (user) =>{
    console.log(user);
    window.location.assign("/public/projects.html?login="+user);
}

window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));