// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Maicon",
  middleName: "",
  lastName: "Gavino",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/maicongavino",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/maicon-gavino/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Sobre",
  imageLink: "https://media.licdn.com/dms/image/C4D03AQEqj1qiRi-cHQ/profile-displayphoto-shrink_800_800/0/1663068763485?e=1678320000&v=beta&t=PcNXhO8LqliZhSsZDqvdJlCSzUgPlYAZD_Wc0LqsOF4",
  imageSize: 375,
  message: `Olá, sou Maicon Gavino, tenho 25 anos, sou muito apaixonado por tecnologia. Sou Matemático, Pós graduado em Desenvolvimento de Aplicações em DotNet, MBA em BIG DATA e Mestrando em Propriedade Intelectual e Transferência de Tecnologia. Sou apaixonado pelas áreas de inovação e tecnologia. Meu foco e objetivo de carreia é como Data Science / Engenheiro de Dados, onde busco usufruir da minha facilidade para aprender sozinho, e curiosidade para aprender novas tecnologias, arquiteturas e ferramentas. Atualmente, estou trabalhando como Community Manager em um Hub de Inovação e como Consultor de inovação.  `,
  resume: "https://maicongavino.github.io",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projetos",
  gitHubUsername: "maicongavino", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["inpi_serie_temporal ", "streamlit_gsheetsdb", "webscrapy_streamlit", "gocv_count "],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: "",
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 70 },
    { name: "Data Structures", value: 70 },
    { name: "C/C++", value: 60 },
    { name: "Golang", value: 60 },
    { name: "C#", value: 50 },
  ],
  softSkills: [
    { name: "Colaboração", value: 90 },
    { name: "Adaptabilidade", value: 85 },
    { name: "Resolução de problemas", value: 85 },
    { name: "Empatia", value: 90 },
    { name: "Organização", value: 85 },
    { name: "Criatividade", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contato",
  message:
    "Se precisar de ajuda em um projeto, ou talvez tenha algo interessante a dizer, entre em contato comigo em",
  email: "maiconserrao57@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Integrations Technical Specialist - Toolbox TVE',// Here Add Company Name
      companylogo: require('../assets/img/toolbox.png'),
      imgSize: 170,
      date: 'January 2022 – Present',
    },
    {
      role: 'Integration Engineer - Linkapi/Semantix',// Here Add Company Name
      imgSize: 170,
      companylogo: require('../assets/img/linkapi.png'),
      date: 'June 2021 – January 2022',
    },
    {
      role: 'Full Stack Developer - Guenka Software',// Here Add Company Name
      imgSize: 170,
      companylogo: require('../assets/img/guenka.jpeg'),
      date: 'August 2020 – May 2021',
    },
    {
      role: 'Project Manager - Solucaut',// Here Add Company Name
      imgSize: 170,
      companylogo: require('../assets/img/solucaut.png'),
      date: 'July 2019 – August 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
