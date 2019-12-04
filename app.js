let key = 'd3f1b410f43c4e519bda526f1ace84e0';
let url = 'https://newsapi.org/v2/';

//top headlines variables to populate on load
let titleEl = document.querySelector('.title');
let authorEl = document.querySelector('.author');
let sourceEl = document.querySelector('.source');
let descriptionEl = document.querySelector('.description');
let contentEl = document.querySelector('.content');

//search variables
let searchButton = document.querySelector('#search-button');
let worldUsDropdownEl = document.querySelector('#search-dropdown');
let searchTopicEl = document.querySelector('#search-topic');
let loading = document.querySelector('#loading');
let searchParams;

//get current top headlines on load
fetch(url + 'top-headlines?pageSize=100&country=us&apiKey=' + key)
  .then((res)=>{
    return res.json();
  })
  .then((response)=>{
    console.log(response);
    for(let i = 0; i < response.articles.length; i++){
      //get content from the response
      let title = response.articles[i].title;
      let author = response.articles[i].author;
      let source = response.articles[i].source.name;
      let description = response.articles[i].description;
      let content = response.articles[i].content;
    }


    titleEl.innerHTML = title;
    authorEl.innerHTML = author;
    sourceEl.innerHTML = source;
    descriptionEl.innerHTML = description;
    contentEl.innerHTML = content;
  });

//When click the search button, get articles
searchButton.addEventListener('click', (e)=>{
  loading.className -= 'hide';
  let worldUsVal = worldUsDropdownEl.value;
  let searchTopicVal = searchTopicEl.value;
  let seachTopic = '';

  if(searchTopicVal){
    searchTopic = 'q=' + searchTopicVal;
    searchParams = worldUsVal + searchTopic;
  } else {
    searchParams = worldUsVal;
  }

  fetch(url + 'top-headlines?pageSize=100&' + searchParams + '&apiKey=' + key)
    .then((res)=>{
      return res.json();
    })
    .then((response)=>{
      loading.className = 'hide';
      searchTopicEl.value = '';
      console.log(response);
    });

})
