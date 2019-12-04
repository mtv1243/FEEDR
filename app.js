let key = 'd3f1b410f43c4e519bda526f1ace84e0';


fetch('https://newsapi.org/v2/top-headlines?country=us&q=trump&apiKey=' + key)
  .then((res)=>{
    return res.json();
  })
  .then((response)=>{
    console.log(response);
  })
;
