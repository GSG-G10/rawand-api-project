const main = document.querySelector('#main')
 const form = document.querySelector('#form')
 const search = document.querySelector('#search')
var url1 = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
var IMGPATH ="https://image.tmdb.org/t/p/w1280"
var searchUrl ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  function fetch (url, callback) {
    var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
       if(xhr.readyState == 4 && xhr.status ==200){
         var responses= JSON.parse(xhr.responseText)
         return callback(responses);
       }
  }
    xhr.open('GET', url);
    xhr.send();
  }

   
    fetch(url1, function (responses) {
        
       responses.results.forEach(element => {
            const el = document.createElement('div')
            const img = document.createElement('img')
            const headerTwo = document.createElement('h2')
            img.src = IMGPATH + element.poster_path;
            headerTwo.textContent = element.title;
             el.appendChild(img)
             el.appendChild(headerTwo)
           main.appendChild(el)
           
});


  form.addEventListener('submit',(e)=>{
      e.defaultPrevented()
       main.innerHTML=''
      const searchTerm = search.value;
      if(searchTerm){
        searchUrl = searchUrl + searchTerm
        fetch(searchUrl,function(responses){})
      }
   
  })

 
}) 