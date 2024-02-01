fetch('https://icanhazdadjoke.com/slack')
  .then(response => response.json())
  .then(jokesdata => {
    const jokeData = jokesdata.attachments[0].text;
    const jokeHtml = document.getElementById('jokeElement');
    jokeHtml.innerHTML = jokeData;
  })
