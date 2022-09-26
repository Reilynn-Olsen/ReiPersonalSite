import './css/Projects.css';

import fuesifyThumbnail from './img/fuseify.png';
import pokemonThumbnail from './img/pokemon.png';
import BGZThumbnail from './img/BGZ.png';
import githubThumbnail from './img/githubLogo.svg';

type project = {
  title: string;
  desc: string;
  tools: string[];
  url: {
    github: string;
    thumbnail: string;
    liveDemo?: string;
  };
};
type projects = project[];

function Projects() {
  const projects: projects = [
    {
      title: 'Fuesify',
      desc: "A full stack application that analyzes spotify users' account data to create playlists. Handles routing while processing large amounts of data.",
      tools: ['React', 'Typescript', 'Node', 'Express', 'PostgreSQL'],
      url: {
        github: 'https://github.com/Reilynn-Olsen/Fuseify',
        thumbnail: fuesifyThumbnail,
      },
    },
    {
      title: 'Pokemon Deck Builder',
      desc: 'A full stack web app that allows users to build and browse decks for the Pokemon TCG with user authentication.',
      tools: ['React', 'Typescript', 'Node', 'Express', 'PostgreSQL'],
      url: {
        github: 'https://github.com/Reilynn-Olsen/pokemonTCG-Deck-Builder',
        thumbnail: pokemonThumbnail,
        liveDemo: 'https://pokemontcg-deck-builder.herokuapp.com/',
      },
    },
    {
      title: 'BGZ Brands CES Landing Page',
      desc: 'A full stack web app for the Consumer Electronic Show for BGZ Brands. Clients were given one time access tokens to view information on new products.',
      tools: ['Javascript', 'Node', 'PostgreSQL'],
      url: {
        github: 'https://github.com/Reilynn-Olsen/BGZ-CES-Portfolio',
        thumbnail: BGZThumbnail,
        liveDemo: 'https://bgzces-portfolio.herokuapp.com/',
      },
    },
  ];

  const displayProjects = (): JSX.Element[] =>
    projects.map((obj, i) => {
      return (
        <div key={i} className="projectContainer">
          <div className='projectText'>
          <h3 className="projectTitle">{obj.title}</h3>
          <p className="projectDesc">{obj.desc}</p>
          <p className="projectToolTitle">Tools used:</p>
          <div className="toolContainer">
            {obj.tools.map((el, idx) => (
              <p key={idx} className="tool">
                {el}
              </p>
            ))}
          </div>
          <div className='buttonContainer'>
            <a className='outLink github' href={obj.url.github}>
              <p className='buttonText'>Github</p>
              <img className='small thumbnail' src={githubThumbnail} alt="github's logo"></img>
            </a>
          {obj.url.liveDemo ? (
              <a className='outLink demo' href={obj.url.liveDemo}>
                <p className='buttonText'>Live Demo</p>
                <svg className='small thumbnail'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path

                    d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"
                  ></path>
                </svg>
              </a>
          ) : null}
          </div>
          </div>
          <div className='imgThumbnail'>
          <img
            className="project thumbnail"
            src={obj.url.thumbnail}
            alt={`preview of ${obj.title} project`}
          ></img>
          </div>
        </div>
      );
    });

  return (
    <div id='Projects'>
      <h2 className='projectsHeader'>Projects</h2>
      {displayProjects().map((el) => el)}
    </div>
  );
}

export default Projects;
