import { nanoid } from 'nanoid';
import Resume from '../assets/abdullah_resume.pdf';

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
    title: 'Get Healthy',
    info:
      'Get Healthy is built using React and Scss. It takes value from the input box and fetches data of that keyword using an API. It also has filters.',
    info2: '',
    url: 'https://getmerecipe.netlify.app/',
    repo: 'https://github.com/AnsariAbdullah/recipe-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hacker-news.png',
    title: 'Hacker News',
    info: 'Hacker News clone built React, axios, bootstrap, sass, react-router ',
    info2: '',
    url: 'https://hackerrr-news.netlify.app',
    repo: 'https://github.com/AnsariAbdullah/hacker-news',
  },
  {
    id: nanoid(),
    img: 'book-list.png',
    title: 'My Book List App',
    info:
      'Book list app made using Vanilla JS and bootstrap. It uses local storage to store books and uses DOM manupulation.',
    info2: '',
    url: 'https://local-book-list.netlify.app/',
    repo: 'https://github.com/AnsariAbdullah/book-list-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tetris-game.png',
    title: 'Tetris Game',
    info: 'This is a tetris game made uisng HTML, CSS and vanilla JS',
    info2: '',
    url: 'https://mytetris.netlify.app/',
    repo: 'https://github.com/AnsariAbdullah/tetris-game', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'hulu-app.png',
    title: 'Hulu clone',
    info: 'This is a hulu clone built using Next.js and Tailwind and is deployed on Vercel.',
    info2: '',
    url: 'https://hulu-wheat-psi.vercel.app/',
    repo: 'https://github.com/AnsariAbdullah/hulu', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'music-maker.png',
  //   title: 'Music Maker',
  //   info:
  //     'Music Maker is built using HTML, CSS and Vanilla JavaScript. It creates music when tapped the tiles on the screen with little animation.',
  //   info2: '',
  //   url: 'https://musicmaker.netlify.app/',
  //   repo: 'https://github.com/AnsariAbdullah/music-maker', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'cat-gif.png',
  //   title: 'Cat Gif Generator',
  //   info:
  //     'Who does not likes see cute cat gifs. This websites is built using React and Scss. It fetches random cat gits so that you can spend time looking at cute cats doing funny things.',
  //   info2: '',
  //   url: 'https://cat-gif-generator.netlify.app/',
  //   repo: 'https://github.com/AnsariAbdullah/react-random-cat-gif-generator', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ansariabdullahar@gmail.com',
};

// FOOTER DATA
export const footerData = [
	{
		id: 1,
		name: 'twitter',
		url: 'https://twitter.com/usr_abdullah',
	},
	{
		id: 2,
		name: 'codepen',
		url: 'https://codepen.io/abdullah-desynova',
	},
	{
		id: 3,
		name: 'linkedin',
		url: 'https://www.linkedin.com/in/abdullah-ansari-375685124/',
	},
	{
		id: 4,
		name: 'github',
		url: 'https://github.com/AnsariAbdullah',
	},
]