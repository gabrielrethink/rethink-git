const peopleCard = document.getElementById("peopleCard");
let users =  ["lucaspaula6", "luisrethink", "AnaClara-rethink", "lucaspaula6"];
let template = "";

const gitGetUsers = async (users) =>{
    users.map(async (user) => {
        user = await fetch(`https://api.github.com/users/${user}`).then((res) => res.json()
        );
        
        let info = {
            name: user.name,
            company: user.company,
            repos: user.public_repos,
            followers: user.followers,
        };
        // console.log(user);
        template+=`
        <div class="indivCard">
        <img src="" id="${info.name}" class="profilePic" alt="">
        <p class="indivName" id="indivName">${info.name}</p>
        <p class="indivJob" id="indivJob">Dan Abramov</p>
        <table>
        <tr>
        <th>Projects</th>
        <th>Stars</th>
        <th>Followers</th>
        </tr>
        <tr>
        <td id="indivProjects">24</td>
        <td id="indivStars">132</td>
        <td id="indivFollowers">31</td>
        </tr>
        </table>
        <button class="seeIndiv" id="seeIndiv">Ver Perfil</button>
        </div>`;
        // console.log(template);
    });
    console.log(template);
    peopleCard.innerHTML=template;
};

window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));