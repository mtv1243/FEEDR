let key = 'd3f1b410f43c4e519bda526f1ace84e0';
let url = 'https://newsapi.org/v2/';

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



    //iterate through the articles and append them to #top-headline-articles
    for(let i = 0; i < response.articles.length; i++){
      //get content from the response
      let title = response.articles[i].title;
      let author = response.articles[i].author;
      let source = response.articles[i].source.name;
      let description = response.articles[i].description;
      let content = response.articles[i].content;

      //create article element that will be populated
      let articleEl = document.createElement('article');

      //create elements to populate on load
      let titleEl = document.createElement('h4').classList.add('title');
      let authorEl = document.createElement('span').classList.add('author');
      let sourceEl = document.createElement('span').classList.add('source');
      let descriptionEl = document.createElement('p').classList.add('description');
      let contentEl = document.createElement('p').classList.add('conent');

      //put the elements in an array
      let elementsArr = [
        titleEl,
        authorEl,
        sourceEl,
        descriptionEl,
        contentEl
      ];

      for(j = 0; j < elementsArr.length; j++){
        articleEl.append(elementsArr[j]);
      }

      //add the response content to the elements
      titleEl.innerHTML = title;
      authorEl.innerHTML = author;
      sourceEl.innerHTML = source;
      descriptionEl.innerHTML = description;
      contentEl.innerHTML = content;
    }

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
