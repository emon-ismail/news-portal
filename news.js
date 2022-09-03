
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
    newsContainer.innerHTML=``;
    news.sort((a, b) => b.total_view - a.total_view);
    console.log(news.length)
    const newsCounter=document.getElementById("count");
    newsCounter.innerHTML=`
    <h1 class="ml-10">${(news.length)} News Found </h1>`






    
  
   
    for (const data of news){
     let slicee;
        if(data.details.length>200){
            slicee=data.details.slice(0,200) + "...";
            console.log("...");
        }
        else{
            console.log("details")
        }
        const newsDiv=document.createElement("div");

       
        newsDiv.innerHTML=`
        <div class="card card-side bg-white shadow-xl  flex flex-col md:flex-row p-10 mt-10">
        <figure><img src="${data.thumbnail_url}" alt="Movie"></figure>
        <div class="card-body">
          <h2 class="card-title">"${data.title}"</h2>
          <p>${slicee}</p>
          <img class="object-contain h-8 w-6 " src="${data.author.img}" 
          <p> ${data.author.name?data.author.name :"not found"} </p> 
          <p> View: ${data.total_view ? data.total_view :"not found"}  M</p> 

          <p> ${data.author.published_date}</p>  
          <h1> ${data.rating.number }        <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div></h1>  
          <div class="card-actions justify-end">
          
            
          </div>
          <label for="my-modal-${data._id}" class="btn modal-button">See more</label>
        </div>
        <input type="checkbox" id="my-modal-${data._id}"  class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <h2 class="card-title">"${data.title}"</h2>
      <p> ${data.details} </p>
    <div class="modal-action">
      <label for="my-modal-${data._id}"  class="btn">cancel</label>
    </div>
  </div>
</div>

        
      </div>
      

        `
        newsContainer.appendChild(newsDiv);

    }
}

// document.getElementById("btn-search").addE





 loadTitle();