import { useState } from 'preact/hooks';
import Game from './components/Game';
import './style.css';

const jams = [
    {
      title: 'Melody of the Wild - LD54',
      src: 'images/panda-banjo-cropped.jpg',
      description: 'Panda, banjo, campfire.',
      href: 'https://marcodeevi.itch.io/melody-of-the-wild'
    },
    {
      title: 'Word Exorcist - LD55',
      src: 'images/word-exorcist-cropped.png',
      description: 'Not so cute typing game.',
      href: 'https://marcodeevi.itch.io/word-exorcist'
    },
    {
      title: 'Do Not Open the Letter - LD53',
      src: 'images/do-not-open-the-letter-cropped.png',
      description: 'Do not open the letter.',
      href: 'https://marcodeevi.itch.io/do-not-open-the-letter'
    },
  ];

  const prototypes = [
    {
      title: 'Subject',
      src: 'images/subject-cropped.png',
      description: 'Short, logical',
      href: 'https://marcodeevi.itch.io/subject'
    },
    {
      title: 'Broken Dreams',
      src: 'images/broken-dreams-cropped.png',
      description: 'For now just an artistic concept...',
      href: 'https://marcodeevi.itch.io/broken-dreams'
    },
    {
      title: 'Hard Game',
      src: 'images/hard-cropped.png',
      description: 'Just a hard game',
      href: 'https://marcodeevi.itch.io/hard-game'
    },
  ];

export default function App() {
  const [jamsVisible, setJamsVisible] = useState(true);
  const [prototypesVisible, setPrototypesVisible] = useState(true);

  return (
    <div id="container">
      <div className="intro">
        <p style={{ marginRight: '30px' }}>
          the incomplete works of marcodeevi<br />
          lifelong maker of games and stuff<br />
          trying to have some fun in life<br />
          bigger projects probably here: <a href="https://whitespacestudio.dev/" target="_blank">white space studio</a>
        </p>
        <div className="socials">
          <a href="https://marcodeevi.itch.io/" target="_blank">
            <img src="https://static.itch.io/images/itchio-textless-black.svg" alt="itch" />
          </a>
          <a href="https://github.com/marcodeevi" target="_blank">
            <img src="images/github-mark.png" alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="projects">
        <div className="project">
          <button className="text-button" onClick={() => setJamsVisible(!jamsVisible)}>
            <h1>Jams</h1>
          </button>
          {jamsVisible && (
            <>
              <p>worked on these with my dear friend <a href="https://github.com/kamilzygowski" target="_blank">swedishsailor</a></p>
              <div className="games">
                {jams.map((game) => (
                  <Game key={game.title} {...game} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="project">
          <button className="text-button" onClick={() => setPrototypesVisible(!prototypesVisible)}>
            <h1>Prototypes</h1>
          </button>
          {prototypesVisible && (
            <>
              <p>in no particular order</p>
              <br/>
              <div className="games">
                {prototypes.map((game) => (
                  <Game key={game.title} {...game} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
