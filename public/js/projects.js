const login = new URLSearchParams(window.location.search).get("login");
const projectCards = document.getElementById("projectCards");

const renderProjects = async () =>{

    console.log(login);

    const url = `https://api.github.com/users/${login}/repos`;

    const repos = await fetch(url).then((response) => response.json());
    let template="";

    repos.forEach(project => {
        let info = {
            name: (project.name== null)? project : project.name,
            description: (project.description==null) ? project.full_name : project.description,
            
        };
        template=`
        <div class="indivProject" id="indivProject">
        <div class="projectName" id="projectName">
          <img class="projectIcon" id="projectIcon" src="img/projectIcon.jpg" alt="">
          ${info.name}
        </div>
        <div class="projectDescription" id="projectDescription">
         ${info.description}        
        </div>
        <div style="margin: 2vh;">
          <a id="projectShowMore" href="">Saiba mais</a>
        </div>
        </div>`
        projectCards.innerHTML+=template;
    });
}


window.addEventListener("DOMContentLoaded", () => renderProjects());