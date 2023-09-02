import data from "./data.js"


window.addEventListener("load", () => {
          const songContainer = document.getElementById("songs");
          while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
          }
          const artists = data;
          console.log(data);
          return artists.map((result) => {
            // Now create Html Element

            const article = document.createElement("article"),
              artists = document.createElement("p"),
              song = document.createElement("h4"),
              img = document.createElement("img"),
              audio = document.createElement("audio"),
              audioSource = document.createElement("source");

            // Now put content

            artists.innerHTML = result.artistName;
            song.innerHTML = result.trackName;
            img.src = result.artworkUrl100;
            audioSource.src = result.previewUrl;
            audio.controls = true;

            article.appendChild(img);
            article.appendChild(artists);
            article.appendChild(song);
            article.appendChild(audio);
            audio.appendChild(audioSource);

            songContainer.appendChild(article);
          });
})
