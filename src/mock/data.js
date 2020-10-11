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
    img: 'recipie-app.png',
    title: 'Get Healty',
    info:
      'Get Healty is built using React and Scss. It takes value from the input box and fetches data of that keyword using an API. It also has filters.',
    info2: '',
    url: 'https://getmerecipe.netlify.app/',
    repo: 'https://github.com/AnsariAbdullah/recipe-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'music-maker.png',
    title: 'Music Maker',
    info:
      'Music Maker is built using HTML, CSS and Vanilla JavaScript. It creates music when tapped the tiles on the screen with little animation.',
    info2: '',
    url: 'https://musicmaker.netlify.app/',
    repo: 'https://github.com/AnsariAbdullah/music-maker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cat-gif.png',
    title: 'Cat Gif Generator',
    info:
      'Who does not likes see cute cat gifs. This websites is built using React and Scss. It fetches random cat gits so that you can spend time looking at cute cats doing funny things.',
    info2: '',
    url: 'https://cat-gif-generator.netlify.app/',
    repo: 'https://github.com/AnsariAbdullah/react-random-cat-gif-generator', // if no repo, the button will not show up
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
