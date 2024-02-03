<script>
  import Game from './lib/Game.svelte';
  import { fly, fade } from 'svelte/transition'

  let gameJamsVisible = true;
  let otherVisible = true;

  let games = [
    {
      title: 'Melody of the Wild',
      src: 'images/melody-of-the-wild.png',
      description: 'Panda, banjo, campfire.',
      href: 'https://marcodeevil.itch.io/melody-of-the-wild'
    },
    {
      title: 'Do Not Open the Letter',
      src: 'images/do-not-open-the-letter.png',
      description: 'Do not open the letter.',
      href: 'https://marcodeevil.itch.io/do-not-open-the-letter'
    },
  ];

</script>

<div id="container">
  <intro>
    <p style="margin-right: 30px;">
      the incomplete works of marcodeevil<br>
      lifelong maker of games<br> 
      trying to have some fun in life<br>
      member of <a href="https://whitespacestudio.dev/" target="_blank">white space studio</a>
    </p>
    <socials>
      <a href="https://marcodeevil.itch.io/" target="_blank">
        <img src="https://static.itch.io/images/itchio-textless-black.svg" alt="Twitter" />
      </a>
      <a href="https://github.com/MarcoDeevil" target="_blank">
        <img src="images/github-mark.png" alt="GitHub" />
      </a>
      <a href="https://www.youtube.com/channel/UCFA3P8qksukQXnrjRP-ENSw" target="_blank">
        <img src="images/yt.png" alt="YouTube" />
      </a>
    </socials>
  </intro>


  <projects>
    <project>
      <button class="text-button" on:click={() => gameJamsVisible = !gameJamsVisible}>
        <h1>Games</h1>
      </button>
      {#if gameJamsVisible}
      <games in:fly={{ y: -20, duration: 1000 }} out:fly={{ y: -20, duration: 1000 }}>
        {#each games as game}
          <Game title={game.title} src={game.src} description={game.description} href={game.href} />
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
  }

  projects {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    height: 100%;
    width: 100%;
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
