const userName = "gabrielrethink";
const token = "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";
const url = "https://api.github.com/";
let teste = 'teste'

const getUsers = ["gabrielrethink"];

const gitGetUsers = async (users) => {
  users.map((user) => {
    await fetch(`https://api.github.com/users/${user}`, { headers: { Authorization: "Basic" + btoa(``) } })

  });
};
