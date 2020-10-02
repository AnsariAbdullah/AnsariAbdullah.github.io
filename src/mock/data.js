import { nanoid } from 'nanoid';
import Resume from '../resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Abdullah Ansari | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my portfolio website built using Gatsby, React, Bootstrap and Saas.', // e.g: Welcome to my website
};

// ABOUT DATA
export const aboutData = {
  resume: Resume,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ansariabdullahar@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/usr_abdullah',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abdullah-ansari-375685124/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AnsariAbdullah',
    },
  ],
};
