
const loadTitle=()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>displayTitle(data.data.news_category))
}
const displayTitle=title=>{
  
    const titleContainer=document.getElementById("news-title-container");
    for(const titleNews of title){
       
        const titleDiv=document.createElement("div");
        titleDiv.innerHTML=`
        <button onclick="titleload(${titleNews.category_id})"class="btn mx-3 fw-bold " type="submit">
        ${titleNews.category_name}</button>`;

         titleContainer.appendChild(titleDiv);
    }

}
  
const titleload =(category_id)=>{
    console.log(category_id)
    fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`)
    .then(res=>res.json())
    .then(data=>displayNews(data.data))
}

const displayNews=news=>{
    const newsContainer = document.getElementById("title-click-news");
    foundNews= forEach(news=>{
        const newsDiv=document.createElement("div");
        newsDiv.innerHTML=`
        <div class="card card-side bg-white shadow-xl  flex flex-col md:flex-row">
        <figure><img src="${data[0].category_id.thumbnail_url}" alt="Movie"></figure>
        <div class="card-body">
          <h2 class="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
        `
        newsContainer.appendChild(newsDiv);

    })
}




 loadTitle();