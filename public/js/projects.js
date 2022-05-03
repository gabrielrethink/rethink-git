const login = new URLSearchParams(window.location.search).get("login");
const userName = "lucaspaula6";
const token = "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";

const projectCards = document.getElementById("projectCards");
const colors = {
  Mercury: "#ff2b2b",
  TypeScript: "#2b7489",
  PureBasic: "#5a6986",
  "Objective-C++": "#6866fb",
  Self: "#0579aa",
  edn: "#db5855",
  NewLisp: "#87AED7",
  "Jupyter Notebook": "#DA5B0B",
  Rebol: "#358a5b",
  Frege: "#00cafe",
  Dart: "#00B4AB",
  AspectJ: "#a957b0",
  Shell: "#89e051",
  "Web Ontology Language": "#9cc9dd",
  xBase: "#403a40",
  Eiffel: "#946d57",
  Nix: "#7e7eff",
  RAML: "#77d9fb",
  MTML: "#b7e1f4",
  Racket: "#22228f",
  Elixir: "#6e4a7e",
  SAS: "#B34936",
  Agda: "#315665",
  wisp: "#7582D1",
  D: "#ba595e",
  Kotlin: "#F18E33",
  Opal: "#f7ede0",
  Crystal: "#776791",
  "Objective-C": "#438eff",
  "ColdFusion CFC": "#ed2cd6",
  Oz: "#fab738",
  Mirah: "#c7a938",
  "Objective-J": "#ff0c5a",
  Gosu: "#82937f",
  FreeMarker: "#0050b2",
  Ruby: "#701516",
  "Component Pascal": "#b0ce4e",
  Arc: "#aa2afe",
  Brainfuck: "#2F2530",
  Nit: "#009917",
  APL: "#5A8164",
  Go: "#375eab",
  "Visual Basic": "#945db7",
  PHP: "#4F5D95",
  Cirru: "#ccccff",
  SQF: "#3F3F3F",
  Glyph: "#e4cc98",
  Java: "#b07219",
  MAXScript: "#00a6a6",
  Scala: "#DC322F",
  Makefile: "#427819",
  ColdFusion: "#ed2cd6",
  Perl: "#0298c3",
  Lua: "#000080",
  Vue: "#2c3e50",
  Verilog: "#b2b7f8",
  Factor: "#636746",
  Haxe: "#df7900",
  "Pure Data": "#91de79",
  Forth: "#341708",
  Red: "#ee0000",
  Hy: "#7790B2",
  Volt: "#1F1F1F",
  LSL: "#3d9970",
  eC: "#913960",
  CoffeeScript: "#244776",
  HTML: "#e44b23",
  Lex: "#DBCA00",
  "API Blueprint": "#2ACCA8",
  Swift: "#ffac45",
  C: "#555555",
  AutoHotkey: "#6594b9",
  Isabelle: "#FEFE00",
  Metal: "#8f14e9",
  Clarion: "#db901e",
  JSONiq: "#40d47e",
  Boo: "#d4bec1",
  AutoIt: "#1C3552",
  Clojure: "#db5855",
  Rust: "#dea584",
  Prolog: "#74283c",
  SourcePawn: "#5c7611",
  AMPL: "#E6EFBB",
  FORTRAN: "#4d41b1",
  ANTLR: "#9DC3FF",
  Harbour: "#0e60e3",
  Tcl: "#e4cc98",
  BlitzMax: "#cd6400",
  PigLatin: "#fcd7de",
  Lasso: "#999999",
  ECL: "#8a1267",
  VHDL: "#adb2cb",
  Elm: "#60B5CC",
  "Propeller Spin": "#7fa2a7",
  X10: "#4B6BEF",
  IDL: "#a3522f",
  ATS: "#1ac620",
  Ada: "#02f88c",
  "Unity3D Asset": "#ab69a1",
  Nu: "#c9df40",
  LFE: "#004200",
  SuperCollider: "#46390b",
  Oxygene: "#cdd0e3",
  ASP: "#6a40fd",
  Assembly: "#6E4C13",
  Gnuplot: "#f0a9f0",
  JFlex: "#DBCA00",
  NetLinx: "#0aa0ff",
  Turing: "#45f715",
  Vala: "#fbe5cd",
  Processing: "#0096D8",
  Arduino: "#bd79d1",
  FLUX: "#88ccff",
  NetLogo: "#ff6375",
  "C Sharp": "#178600",
  CSS: "#563d7c",
  "Emacs Lisp": "#c065db",
  Stan: "#b2011d",
  SaltStack: "#646464",
  QML: "#44a51c",
  Pike: "#005390",
  LOLCODE: "#cc9900",
  ooc: "#b0b77e",
  Handlebars: "#01a9d6",
  J: "#9EEDFF",
  Mask: "#f97732",
  EmberScript: "#FFF4F3",
  TeX: "#3D6117",
  Nemerle: "#3d3c6e",
  KRL: "#28431f",
  "Ren'Py": "#ff7f7f",
  "Unified Parallel C": "#4e3617",
  Golo: "#88562A",
  Fancy: "#7b9db4",
  OCaml: "#3be133",
  Shen: "#120F14",
  Pascal: "#b0ce4e",
  "F#": "#b845fc",
  Puppet: "#302B6D",
  ActionScript: "#882B0F",
  Diff: "#88dddd",
  "Ragel in Ruby Host": "#9d5200",
  Fantom: "#dbded5",
  Zephir: "#118f9e",
  Click: "#E4E6F3",
  Smalltalk: "#596706",
  DM: "#447265",
  Ioke: "#078193",
  PogoScript: "#d80074",
  LiveScript: "#499886",
  JavaScript: "#f1e05a",
  VimL: "#199f4b",
  PureScript: "#1D222D",
  ABAP: "#E8274B",
  Matlab: "#bb92ac",
  Slash: "#007eff",
  R: "#198ce7",
  Erlang: "#B83998",
  Pan: "#cc0000",
  LookML: "#652B81",
  Eagle: "#814C05",
  Scheme: "#1e4aec",
  PLSQL: "#dad8d8",
  Python: "#3572A5",
  Max: "#c4a79c",
  "Common Lisp": "#3fb68b",
  Latte: "#A8FF97",
  XQuery: "#5232e7",
  Omgrofl: "#cabbff",
  XC: "#99DA07",
  Nimrod: "#37775b",
  SystemVerilog: "#DAE1C2",
  Chapel: "#8dc63f",
  Groovy: "#e69f56",
  Dylan: "#6c616e",
  E: "#ccce35",
  Parrot: "#f3ca0a",
  "Grammatical Framework": "#79aa7a",
  "Game Maker Language": "#8fb200",
  Papyrus: "#6600cc",
  "NetLinx+ERB": "#747faa",
  Clean: "#3F85AF",
  Alloy: "#64C800",
  Squirrel: "#800000",
  PAWN: "#dbb284",
  UnrealScript: "#a54c4d",
  "Standard ML": "#dc566d",
  Slim: "#ff8f77",
  Perl6: "#0000fb",
  Julia: "#a270ba",
  Haskell: "#29b544",
  NCL: "#28431f",
  Io: "#a9188d",
  Rouge: "#cc0088",
  cpp: "#f34b7d",
  "AGS Script": "#B9D9FF",
  Dogescript: "#cca760",
  nesC: "#94B0C7",
};
const renderProjects = async () => {
  console.log(login);

  const url = `https://api.github.com/users/${login}/repos`;

  const repos = await fetch(url, {
    headers: { Authorization: "Basic" + btoa(`${userName}:${token}`) },
  }).then((response) => response.json());

  let template = "";

  repos.forEach((project) => {
    let info = {
      name: project.name == null ? project : project.name,
      description:
        project.description == null ? project.full_name : project.description,
      language: project.language,
      forks: project.forks,
      stars: project.stargazers_count,
    };
    template = `
        <div class="indivProject" id="indivProject"  onClick="verProjeto('${login}', '${
      info.name
    }')">
        <div class="projectName" id="projectName">
          ${info.name}
        </div>
        <div class="projectDescription" id="projectDescription">
         ${info.description}          
         </div>
         <div class="cardRodape" >
           <div class="language">
             <div id="langColor" class="langColor" style="background-color:${getColor(
               info.language
             )}"> </div>
             <div class="langName">${info.language}</div> 
           </div>
             <div class="stats">
             <div class="stars">
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8.5 12.7857L3.14286 16L5.28571 10.5025L1 6.35714H6.35714L8.5 1L10.6429 6.35714H16L11.7143 10.6429L13.8571 16L8.5 12.7857Z" stroke="#2A2E3B" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 <div class="data">${info.stars}</div>
                 
             </div>
 
             <div class="forks">
             <svg height="17" width="17px">
                   <path d="M15 2.8128C15.0001 2.28337 14.8507 1.76467 14.5691 1.31636C14.2875 0.868044 13.885 0.508328 13.408 0.278586C12.931 0.0488441 12.3988 -0.0415911 11.8726 0.0176825C11.3465 0.0769562 10.8478 0.283531 10.4338 0.613646C10.0199 0.94376 9.70753 1.38401 9.53272 1.88374C9.35791 2.38348 9.32772 2.92241 9.44563 3.43854C9.56354 3.95467 9.82477 4.42704 10.1993 4.80131C10.5737 5.17557 11.0463 5.43654 11.5625 5.55419V5.62509C11.5621 5.95645 11.4303 6.27414 11.196 6.50845C10.9617 6.74277 10.644 6.87458 10.3126 6.87498L4.68758 6.8751C4.52342 6.87511 4.36087 6.84279 4.2092 6.77998C4.05754 6.71717 3.91973 6.62511 3.80365 6.50904C3.68757 6.39298 3.59549 6.25519 3.53266 6.10354C3.46984 5.95189 3.43751 5.78935 3.43751 5.62521V5.55419C4.11169 5.40055 4.70563 5.00395 5.10589 4.44015C5.50616 3.87636 5.68468 3.18489 5.60737 2.49781C5.53005 1.81074 5.20232 1.17622 4.68676 0.715464C4.17121 0.254706 3.50397 1.46863e-06 2.81251 1.46863e-06C2.12104 1.46863e-06 1.4538 0.254706 0.938246 0.715464C0.422692 1.17622 0.0949576 1.81074 0.0176429 2.49781C-0.0596719 3.18489 0.118853 3.87636 0.519116 4.44015C0.919379 5.00395 1.51333 5.40055 2.18751 5.55419V5.62521C2.1875 5.95349 2.25217 6.27856 2.37781 6.58185C2.50345 6.88514 2.68761 7.16072 2.91976 7.39285C3.15192 7.62498 3.42753 7.80911 3.73085 7.93473C4.03417 8.06035 4.35927 8.125 4.68758 8.12499L6.87516 8.12495L6.87504 9.44577C6.20085 9.5994 5.6069 9.99599 5.20662 10.5598C4.80634 11.1236 4.6278 11.815 4.7051 12.5021C4.78241 13.1892 5.11013 13.8237 5.62568 14.2845C6.14122 14.7453 6.80846 15 7.49993 15C8.19141 15 8.85865 14.7453 9.37422 14.2846C9.88978 13.8238 10.2175 13.1893 10.2949 12.5022C10.3722 11.8152 10.1937 11.1237 9.79342 10.5599C9.39317 9.99606 8.79922 9.59945 8.12504 9.44579L8.12516 8.12492L10.3126 8.12487C10.9754 8.1241 11.6108 7.86048 12.0795 7.39185C12.5481 6.92321 12.8117 6.28783 12.8125 5.62509V5.55419C13.4334 5.41189 13.9877 5.06336 14.385 4.56547C14.7823 4.06758 14.9991 3.44975 15 2.8128ZM1.25001 2.8128C1.25001 2.50379 1.34164 2.20173 1.51333 1.9448C1.68502 1.68787 1.92905 1.48762 2.21456 1.36936C2.50007 1.25111 2.81424 1.22017 3.11733 1.28046C3.42043 1.34074 3.69884 1.48954 3.91736 1.70804C4.13588 1.92654 4.28469 2.20493 4.34498 2.508C4.40527 2.81107 4.37433 3.12521 4.25607 3.41069C4.1378 3.69618 3.93754 3.94018 3.68058 4.11186C3.42363 4.28353 3.12154 4.37516 2.81251 4.37516C2.39825 4.3747 2.00109 4.20994 1.70817 3.91704C1.41524 3.62414 1.25047 3.22702 1.25001 2.8128ZM9.0625 12.1872C9.0625 12.4962 8.97086 12.7982 8.79917 13.0552C8.62748 13.3121 8.38346 13.5124 8.09795 13.6306C7.81244 13.7489 7.49827 13.7798 7.19517 13.7195C6.89208 13.6592 6.61367 13.5104 6.39515 13.2919C6.17663 13.0734 6.02782 12.795 5.96753 12.492C5.90724 12.1889 5.93818 11.8748 6.05644 11.5893C6.1747 11.3038 6.37497 11.0598 6.63193 10.8881C6.88888 10.7164 7.19097 10.6248 7.5 10.6248C7.91426 10.6253 8.31142 10.79 8.60435 11.0829C8.89727 11.3758 9.06204 11.773 9.0625 12.1872ZM12.1875 4.37516C11.8785 4.37516 11.5764 4.28353 11.3194 4.11186C11.0625 3.94018 10.8622 3.69618 10.7439 3.41069C10.6257 3.12521 10.5947 2.81107 10.655 2.508C10.7153 2.20493 10.8641 1.92654 11.0826 1.70804C11.3012 1.48954 11.5796 1.34074 11.8827 1.28046C12.1858 1.22017 12.4999 1.25111 12.7854 1.36936C13.071 1.48762 13.315 1.68787 13.4867 1.9448C13.6584 2.20173 13.75 2.50379 13.75 2.8128C13.7495 3.22702 13.5848 3.62414 13.2918 3.91704C12.9989 4.20994 12.6018 4.3747 12.1875 4.37516Z" fill="black"/>
               </svg>
               <div class="data">${info.forks}</div>
             </div>
           </div>
         </div>
         </div>`;
    projectCards.innerHTML += template;
  });
};

const verProjeto = (login, name) => {
  window.location.assign(
    "/public/projectShow.html?login=" + login + "&name=" + name
  );
};

const getColor = (color) => {
  return colors[color];
  // let temp;
  // switch (color) {
  //   case 'Java':
  //     temp='#b07219';
  //     break;
  //   case 'JavaScript':
  //       temp='#f1e05a';
  //       break;
  //   case 'HTML':
  //       temp='#e34c26';
  //       break;
  //   case 'TypeScript':
  //       temp='#2b7489';
  //       break;
  //   case 'CSS':
  //       temp='#563d7c';
  //       break;
  //   default:
  //       temp='#fff'
  //       break;
  // }
  // return temp;
};

window.addEventListener("DOMContentLoaded", () => renderProjects());
