import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function Home(props) {
let [articles, setArticles]=useState([])
let [totalResults,setTotalResults]=useState(0)
let [page,setPage]=useState(1)

async function getAPIData(){
 setPage(1)
  let response =await fetch(`https://newsapi.org/v2/everything?q=${props.search?props.search:props.q}&language=${props.language}&pageSize=24&page=${page}&sortBy=publishedAt&apiKey=6eef532d8d6048e0b0f57b8b076dbb55`);
  response  = await response.json();
 if(response.status==="ok"){
  setArticles(response.articles.filter(x=>x.title!=="[Removed]"))
  setTotalResults(response.totalResults)
 }
}
 let fetchData= async ()=>{
  setPage(page+1)
  let response =await fetch(`https://newsapi.org/v2/everything?q=${props.search?props.search:props.q}&language=${props.language}&pageSize=24&page=${page}&sortBy=publishedAt&apiKey=6eef532d8d6048e0b0f57b8b076dbb55`);
  response  = await response.json();
  if(response.status==="ok")
    setArticles(articles.concat(response.articles.filter(x=>x.title!=="[Removed]")))

} 

 useEffect(()=>{
  getAPIData()
 },[props])

  
    return (
     <div className='container-flud'>
     <h4 className='background text-light text-center p-2 mt-2 text-capitalize'>{props.search?props.search:props.q} Articles</h4>
     <InfiniteScroll
  dataLength={articles?.length} 
  next={fetchData}
  hasMore={articles?.length<totalResults}
  loader={<div className='my-4 text-center'>
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  </div>}
 
>
     <div className="row">
      {
        articles?.map((item,index)=>{
          return <NewsItem
           key={index}
           source ={item.source.name??"N/A"}
           title={item.title}
           description ={item.description}
           url={item.url}
           pic={item.urlToImage ??"/images/noImage.jpg"}
           date={item.publishedAt}
          />
        })
      }
     </div></InfiniteScroll>
     </div>
    )

}
