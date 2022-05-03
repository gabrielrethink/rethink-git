
const login = new URLSearchParams(window.location.search).get("login");
console.log(login);
const name = new URLSearchParams(window.location.search).get("name");
console.log(name);


const renderProject = async () => {
    const urlProject = `https://api.github.com/repos/${login}/${name}`;
    const project = await fetch(urlProject).then((response) => response.json());

    const urlLang = `https://api.github.com/repos/${login}/${name}/languages`;
    const languages = await fetch(urlLang).then((response) => response.json());
    console.log(project);

    const projectName = document.getElementById("projectName");
    projectName.innerHTML = project.name;

    const overview = document.getElementById("overview");
    const arr= Object.keys(languages);
    console.log(arr);
    arr.forEach(language=>{
        overview.innerHTML+=`<div class="langName" style="background-color:#F1E05A;">${language}</div>`;
    });







}

function getColor(langName){
    const urlProject = `http://localhost:3000/${langName}`;
    const project = await fetch(urlProject).then((response) => response.json());

}

// `https://api.github.com/repos/${login}/${name}`


window.addEventListener("DOMContentLoaded", () => renderProject());