
const login = new URLSearchParams(window.location.search).get("login");
console.log(login);
const name = new URLSearchParams(window.location.search).get("name");
console.log(name);


const renderProject = async () => {
    const url = `https://api.github.com/repos/${login}/${name}`;

    const project = await fetch(url).then((response) => response.json());
    console.log(project)
}


// `https://api.github.com/repos/${login}/${name}`


window.addEventListener("DOMContentLoaded", () => renderProject());