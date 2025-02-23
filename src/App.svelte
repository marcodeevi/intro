<script>
  import Game from './lib/Game.svelte';
  import { fly, fade } from 'svelte/transition'

  let jamsVisible = true;
  let prototypesVisible = true;

  let jams = [
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

  let prototypes = [
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

</script>

<div id="container">
  <intro>
    <p style="margin-right: 30px;">
      the incomplete works of marcodeevi<br>
      lifelong maker of games and stuff<br> 
      trying to have some fun in life<br>
      bigger projects probably here: <a href="https://whitespacestudio.dev/" target="_blank">white space studio</a>
    </p>
    <socials>
      <a href="https://marcodeevi.itch.io/" target="_blank">
        <img src="https://static.itch.io/images/itchio-textless-black.svg" alt="Twitter" />
      </a>
      <a href="https://github.com/marcodeevi" target="_blank">
        <img src="images/github-mark.png" alt="GitHub" />
      </a>
    </socials>
  </intro>


  <projects>
    <project>
      <button class="text-button" on:click={() => jamsVisible = !jamsVisible}>
        <h1>Jams</h1>
      </button>
      {#if jamsVisible}
      <p>worked on these with my dear friend <a href="https://github.com/kamilzygowski" target="_blank">swedishsailor</a></p>
      <games in:fly={{ y: -20, duration: 1000 }} out:fly={{ y: -20, duration: 1000 }}>
        {#each jams as game}
          <Game title={game.title} src={game.src} description={game.description} href={game.href} />
        {/each}
      </games>
      {/if}
    </project>
    <project>
      <button class="text-button" on:click={() => prototypesVisible = !prototypesVisible}>
        <h1>Prototypes</h1>
      </button>
      {#if prototypesVisible}
      <p>in no particular order</p>
      <games in:fly={{ y: -20, duration: 1000 }} out:fly={{ y: -20, duration: 1000 }}>
        {#each prototypes as prototype}
          <Game title={prototype.title} src={prototype.src} description={prototype.description} href={prototype.href} />
        {/each}
      </games>
      {/if}
    </project>
  </projects>
</div>

<style>
  .text-button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    padding: 0;
    margin: 0;
  }

  intro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .text-button:focus {
    outline: none;
  }

  .text-button:hover {
    color: #e28ef5;
  }

  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }

  project {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    min-width: 550px;
  }

  projects {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    height: 100%;
    width: 100%;
    margin: 50px;
    margin-right: 10%;
    margin-left: 10%;
  }

  games {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
  }

  socials {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    margin-bottom: 0;
    background-color: whitesmoke; opacity: 0.2;
  }

  socials a {
    margin: 0 1rem;
  }

  socials img {
    height: 50px;
    width: 50px;
  }
</style>
