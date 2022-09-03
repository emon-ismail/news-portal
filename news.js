// const newsTitleLoad=()=>{
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//     .then(res=>res.json())
//     .then(data =>newsTitleShow(data.data.news_catagory))
// }
// const newsTitleShow= (newsTitles) =>{
//     const newsTitleContainers=document.getElementById('news-title-container');
//     const uniqueArray = [];
//     newsTitles.forEach(title =>{
        
//         const Div=document.createElement('div');
//         Div.innerHTML=`
//         <button onclick="titleload(${title.catagory_id})"class="btn mx-3 fw-bold" type="submit">
//         ${title.catagory_name}</button>`;
//         newsTitleContainers.appendChild(Div);
//     });
// }
// const titleload=(titleId)=>{
//     const url=`https://openapi.programming-hero.com/api/news/category/0${titleId}`;
//     console.log(url);
//     fetch(url) 
//     .then (res =>res.json())
//     .then(data =>comsol.log(data.data[0]))
// }

// newsTitleLoad();

const loadTitle=()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>displayTitle(data.data.news_category[0].category_name))
}
const displayTitle=title=>{

    const titleContainer=document.getElementById("news-title-container");
    for(const titleNews of title){
        const titleDiv=document.createElement("div");
        titleDiv.innerHTML=`
        <button onclick="titleload(${title.catagory_id})"class="btn mx-3 fw-bold" type="submit">
        ${title.catagory_name}</button>`;

         titleContainer.appendChild(titleDiv);
    }

}

 loadTitle();