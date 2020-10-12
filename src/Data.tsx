import IMGsss from './img/sss.png';
import IMGcg from './img/cg.gif';
import IMGip from './img/ip.png';
import IMGad from './img/audio.png';
import IMGrfid from './img/rfid.png';

const researchData = [
  {
    link: 'https://github.com/zzzchaozzz/Steganography',
    title: 'Steganography',
    img: IMGsss,
    li: ['New steganography algorithm.']
  },
  {
    link: 'https://github.com/zzzchaozzz/GIS-NavigationToolboxDevelopment',
    title: 'GIS',
    img: 'https://media.giphy.com/media/gjsFJuBQg6ABh59RTL/giphy.gif',
    li: ['City of Vancouver ArcGIS model.']
  },
  {
    link: 'https://github.com/zzzchaozzz/ComputerGraphics',
    title: 'Computer Graphics',
    img: IMGcg,
    li: ['Render images from raw CT data.']
  },
  {
    link: 'https://github.com/zzzchaozzz/ImageProcessing',
    title: 'Image Processsing', 
    img: IMGip,
    li: ['Contour Detection & Filters.']
  },
  {
    link: 'https://github.com/chaozhang666/computer-audio/blob/master/VoiceDisguiseResearchPaper_chaoZhang.pdf',
    title: 'Computer Audio', 
    img: IMGad,
    li: ['Identification of Voice Disguise']
  },
  {
    link: 'https://github.com/chaozhang666/NetworkCommunication/blob/master/GroupResearch.pdf',
    title: 'RFID Safety', 
    img: IMGrfid,
    li: ['Fractional Fourier Transform']
  }
];

const projectData = [
  {
    link: 'https://web-dev-tutorial-eo8ezjk5c.vercel.app',
    title: 'Web Dev Tutorial',
    img: 'https://media.giphy.com/media/KwzTxTAFuiXKQ7ebri/giphy.gif',
    li: ['ReactJS & Ant Design']
  },  
  {
    link: 'https://chi-noodlebar.com',
    title: 'Mobile First Website',
    img: 'https://media.giphy.com/media/QYjvkJMSSkvPIq66mK/giphy.gif',
    li: ['Conditionally rendered contetns.']
  },
  {
    link: 'https://search-country-info-n3jtsvhvj.vercel.app',
    title: 'REST Countries Info',
    img: 'https://media.giphy.com/media/NwLRiAWGOi33R4SimS/giphy.gif',
    li: ['Restful API']
  },
  {
    link: 'https://earnest.education',
    title: 'Responsive Website',
    img: 'https://media.giphy.com/media/Tfvno6sueQThNHoqMP/giphy.gif',
    li: ['An education company in Richmond.']
  },
  {
    link: 'https://vocabulary-online-testing.vercel.app',
    title: 'Testing Quiz',
    img: 'https://media.giphy.com/media/dAFAYeeCbKARKyTcut/giphy.gif',
    li: ['Online vocabulary testing.']
  },
  // {
  //   link: 'https://speech-recognition.chaozhang.vercel.app',
  //   title: 'Speach Recognition',
  //   img: 'https://media.giphy.com/media/HDmiGSoYfUImCRCL2S/giphy.gif',
  //   li: ['window.SpeechRecognition']
  // },
  {
    link: 'https://remix-demo-chao.vercel.app',
    title: 'Music Remix',
    img: 'https://media.giphy.com/media/iFPQSxCPmEzeHTmaLE/giphy.gif',
    li: ['Online musical instruments.']
  }
  // {
  //   link: 'https://to-do-list-peach.vercel.app',
  //   title: 'Todo List',
  //   img: 'https://media.giphy.com/media/ONyxD52Z8EXKYqxfq8/giphy.gif',
  //   li: ['Vanilla JS']
  // },
  // {
  //   link: 'https://speed-typer.chaozhang.vercel.app',
  //   title: 'Speed Typer',
  //   img: 'https://media.giphy.com/media/ftpqOvDp71pp7xhGqH/giphy.gif',
  //   li: ['Typing game with diffenent levels.']
  // },
  // {
  //   link: 'https://exchange-rate-calculator.vercel.app',
  //   title: 'Exchange Rate Calculator',
  //   img: 'https://media.giphy.com/media/fvefr3DhTQxCISeLo0/giphy.gif',
  //   li: ['Live exchange rate API.']
  // },
  // {
  //   link: 'https://javascript-slides.now.sh',
  //   title: 'JavaScript Slider',
  //   img: 'https://media.giphy.com/media/KBBMSwABohGtpBWd9m/giphy.gif',
  //   li: ['Based on slides.com library.']
  // },
  // {
  //   link: 'https://qqzhang.vercel.app',
  //   title: 'Web Teaching',
  //   img: 'https://media.giphy.com/media/9N4coJidDjycT1eeay/giphy.gif',
  //   li: ['Introduction to HTML & CSS']
  // }
];

const gameData = [
  {
    link: 'https://shequ.codemao.cn/work/42058554',
    title: 'Street Fighter',
    img: 'https://media.giphy.com/media/jRqG23nkLBrA2EjJNE/giphy.gif',
    li: ['2 players action game.']
  },
  {
    link: 'https://shequ.codemao.cn/work/41879019',
    title: 'Plants vs Zombies',
    img: 'https://media.giphy.com/media/MFJSYLno1nJhItzf8L/giphy.gif',
    li: ['Tower defense game.']
  },
  {
    link: 'https://shequ.codemao.cn/work/40479714',
    title: 'Fruit Ninja',
    img: 'https://media.giphy.com/media/eivcydpAwlO2mcaHao/giphy.gif',
    li: ['Built with Physical Engine.']
  },
  {
    link: 'https://shequ.codemao.cn/work/39573606',
    title: 'Galaxy Defender',
    img: 'https://media.giphy.com/media/jSEFkGjYnuYc2hNfnd/giphy.gif',
    li: ['Cloud data for global ranking.']
  },
  {
    link: 'https://shequ.codemao.cn/work/53786143',
    title: 'Super Mario',
    img: 'https://media.giphy.com/media/dscP9pamgfPUy04COQ/giphy.gif',
    li: ['Super mario dodge game.']
  },
  {
    link: 'https://shequ.codemao.cn/work/41502488',
    title: 'Shooting Monsters',
    img: 'https://media.giphy.com/media/cIz8XfXQLaKcN0Bqzg/giphy.gif',
    li: ['Shooting game with 6 levels.']
  },
  {
    link: 'https://shequ.codemao.cn/work/38969359',
    title: 'Speeding Car',
    img: 'https://media.giphy.com/media/Uu5haIEQHOUjf9QIYx/giphy.gif',
    li: ['Car racing game with different props.']
  },
  {
    link: 'https://shequ.codemao.cn/work/40814673',
    title: 'Falppy Bird',
    img: 'https://media.giphy.com/media/MdpKPGAmbDStbWOjef/giphy.gif',
    li: ['Built with Physical Engine.']
  },
  {
    link: 'https://shequ.codemao.cn/work/39573573',
    title: 'Bouncing Ball',
    img: 'https://media.giphy.com/media/ihvScUYUtjGmxEdDBK/giphy.gif',
    li: ['Built with Physical Engine.']
  },
  {
    link: 'https://shequ.codemao.cn/work/39501914',
    title: 'AI Face',
    img: 'https://media.giphy.com/media/LMQ737ZzfdQFt4SGwU/giphy.gif',
    li: ['Face recognition with AI Engine.']
  },
  {
    link: 'https://shequ.codemao.cn/work/38185525',
    title: 'Assasin Running',
    img: 'https://media.giphy.com/media/YPKazjQpeFnevzU6vZ/giphy.gif',
    li: ['Dodge game with different levels.']
  },
  {
    link: 'https://shequ.codemao.cn/work/39429214',
    title: 'Square Dash',
    img: 'https://media.giphy.com/media/W0c6V824Q5XLHVFkrr/giphy.gif',
    li: ['Dash game with different props.']
  }
  // {
  //   link: 'https://shequ.codemao.cn/work/38147591',
  //   title: 'No BB Fly',
  //   img: 'https://media.giphy.com/media/TLUbkUiYFC1fZxQkvS/giphy.gif',
  //   li: ['Codemao start project.']
  // }, 
  // {
  //   link: 'https://shequ.codemao.cn/work/55306453',
  //   title: 'Block Tower',
  //   img: 'https://media.giphy.com/media/j5zwAHn8VZIYPZwjF0/giphy.gif',
  //   li: ['CodeMao Sandbox Project.']
  // },
];

export {researchData, projectData, gameData};

