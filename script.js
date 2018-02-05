const searchGame = document.getElementById("searchGame");
if(searchGame){
    searchGame.addEventListener('submit', searchGameFormSubmit, false); 
    
   function searchGameFormSubmit(e) {
       e.preventDefault();
        let gamename = e.target.game.value;
       
       let api=`"https://www.giantbomb.com/api/search/?api_key=fd07c9ab80da7054558824f3706a71a0988b87a9&format=json&query=${gamename}&resources=game"`;
       console.log(api);
       fetch(api)
        .then(response => {
            return response.json();
        }).then(games => {
            const gamesHTML = games.results.map(gameDetail => {
                return `<div class="gamesArticle">
  <p>${gameDetail.deck}</p><p>${gameDetail.description}</p></div>`;
            }).join("\n");
            const gamesDetail = document.getElementById("gamesDetail");
            gamesDetail.innerHTML = gamesHTML;
        });
       
   }
}
/*

    
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c0d26668d2dd4049bfd66155dde340b3")
        .then(response => {
            return response.json();
        }).then(news => {
            const newsHTML = news.articles.map(article => {
                return `<div class="article">
  <figure class="article-image">
    <img class="articleImg" src="${article.urlToImage}">
  </figure>
  <div class="article-body">
    <h2 class="article-title">
      ${article.title}
    </h2>
    <p class="article-content">
      ${article.description}
    </p>
    <a href="${article.url}">Read more</a>
  </div>
</div>`;
            }).join("\n");
            
            newsContainer.innerHTML = newsHTML;
        });
}



var url = encodeURI(api + query + gamename + resources);


function replyWithData (){
  console.log(gamename, url);
}

replyWithData();

*/

