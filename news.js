
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
          <p> ${data.author.name}</p>  
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
          <button class="btn gap-2  md:btn-sm ">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
 See Details
</button>
        </div>
        
      </div>
      

        `
        newsContainer.appendChild(newsDiv);

    }
}





 loadTitle();