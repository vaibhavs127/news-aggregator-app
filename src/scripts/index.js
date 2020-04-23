const url ='http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=5da46edada014d7088420f175f3c0944';

jQuery(document).ready(async function news(){
         await fetch(url)
        .then((res) => res.json())
        .then((articles) => {
            let output="";
            articles.articles.forEach((articles)=>{
                output += `
                    <li class="article">
                        <img class="article-img" src="${articles.urlToImage}">

                        <h2 class="article-title">${articles.title}</h2>

                        <p class="article-description">${articles.description}</p>

                        <span class="article-author">${articles.author}</span>

                        <a class="article-link" href="${articles.url}" target="_blank"></a>
                    </li>
                `;
            });
            document.getElementById('news-articles').innerHTML=output;
        })
        .catch((err) => console.log(err));
    });

$(document).ready(function(){ 
    $('#search').keypress(()=>{
      let searchField = $("#search").val();
      const url2 = `https://newsapi.org/v2/everything?q=${searchField}&apiKey=5da46edada014d7088420f175f3c0944`;
      
      if(searchField !== ""){
        $.ajax({
          url: url2,
          method: "GET",
          dataType: "json",
          
            success: function(news){
            let output = "";
            let articals = news.articles;
            
            for(var i in articals){
              output +=`
                <li class="article">
                    <img class="article-img" src="${articals[i].urlToImage}">

                    <h2 class="article-title">${articals[i].title}</h2>

                    <p class="article-description">${articals[i].description}</p>

                    <span class="article-author">${articals[i].author}</span>

                    <a class="article-link" href="${articals[i].url}" target="_blank"></a>
                </li>`;
            }
            if(output !== ""){
              $("#news-articles").html(output);  
            }
            else{
                $("#news-articles").html("<h1 class="not-found">Not Found</h1>");
            } 
          }   
        }); 
      }
    });
});



