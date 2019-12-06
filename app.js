let key = 'd3f1b410f43c4e519bda526f1ace84e0';
let url = 'https://newsapi.org/v2/';

let loadingTopArticles = document.querySelector('.loading-top-articles');
let loading = document.querySelector('#loading');
let searchParams;

//top headline variable
let topHeadlineArticlesEl = document.querySelector('#top-headline-articles');

//GENERATE CURRENT TOP HEADLINES ON PAGE LOAD
fetch(url + 'top-headlines?pageSize=100&country=us&apiKey=' + key)
  .then((res)=>{
    return res.json();
  })
  .then((response)=>{
    loadingTopArticles.classList.add('hide');
    // console.log(response);
    //iterate through the response articles and append them to #top-headline-articles
    for(let i = 0; i < response.articles.length; i++){
      //get content from the response
      let imgUrl = response.articles[i].urlToImage;
      let articleUrl = response.articles[i].url;
      let title = response.articles[i].title;
      let author = response.articles[i].author;
      let source = response.articles[i].source.name;
      let description = response.articles[i].description;
      let content = response.articles[i].content;

      //create article element that will be populated
      let articleEl = document.createElement('article');

      //create elements to populate on load
      let anchorEl = document.createElement('a');
      anchorEl.setAttribute('href', articleUrl);
      anchorEl.setAttribute('target', '_blank');
      anchorEl.setAttribute('class', 'top-headline-anchor')
      let imgEl = document.createElement('img');
      imgEl.classList.add('img');
      let titleEl = document.createElement('h4');
      titleEl.classList.add('title');
      let sourceEl = document.createElement('span');
      sourceEl.classList.add('source');
    //uncomment if you want to add more information to top headlines element
    //but don't forget the other variables!
      // let byEl = document.createElement('span');
      // byEl.classList.add('by');
      // let authorEl = document.createElement('span');
      // authorEl.classList.add('author');
      // let atEl = document.createElement('span');
      // atEl.classList.add('at');
      // let descriptionEl = document.createElement('p');
      // descriptionEl.classList.add('description');
      // let contentEl = document.createElement('p');
      // contentEl.classList.add('conent');

      //restrict length of the article title
      title = title.substring(0,34) + '...';

      //add the response content to the elements
      imgEl.setAttribute('src', imgUrl);
      titleEl.innerHTML = title;
      sourceEl.innerHTML = source;
    //uncomment if you want to add more information to top headlines element
    //but don't forget the other variables!
      // byEl.innerHTML = 'by ';
      // authorEl.innerHTML = author;
      // atEl.innerHTML = ' at ';
      // descriptionEl.innerHTML = description;
      // contentEl.innerHTML = content;

    //put the elements in an array, can be as long as you want
    //they'll be inserted into the page in their index order
      let elementsArr = [
        sourceEl,
        imgEl,
        titleEl
      ];

      //append article element to #top-headline-articles
      topHeadlineArticlesEl.append(anchorEl);
      anchorEl.append(articleEl)

      //insert the elements into the article element by array index
      for(j = 0; j < elementsArr.length; j++){
        articleEl.append(elementsArr[j]);
      }
//close if
    }
//close .then
  });

  /*
  *THE GUARDIAN SEARCH SECTION
  */
  //elements
  let searchButton = document.querySelector('#guardian-search-button');
  let searchTopicEl = document.querySelector('#search-topic');
  //api variables
  let guardianKey = 'a043ab02-f89d-42f8-be22-96e4f888cc5c';
  let corsFix = 'https://cors-anywhere.herokuapp.com/';

//When click the search button, get guardian articles based on search terms
searchButton.addEventListener('click', (e)=>{
  e.preventDefault;
  loading.classList.remove('hide');
  let guardianQ = 'q=' + searchTopicEl.value + '&';

  //API call to The Guardian
  fetch(corsFix + 'https://content.guardianapis.com/search?format=json&lang=en&page=1&page-size=10&' + guardianQ + 'api-key=' + guardianKey)
    .then((res)=>{
      return res.json()
    })
    .then((response)=>{
      loading.classList.add('hide');
      console.log(response)
      //get content results from API
      let webTitle = response.response.results[0].webTitle;
      let webUrl = response.response.results[0].webUrl;
      let sectionName = response.response.results[0].sectionName;
      let webPublicationDate = response.response.results[0].webPublicationDate;
      //get meta results from api
      let pageNum = response.response.currentPage;
      let pageSize = response.response.pageSize;
      let numOfPages = response.response.pages;
      // console.log(webTitle);

      let guardianArticle;

    })
//close click event
})

//my lucky semicolon. don't touch.
//;
