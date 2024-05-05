import styles from "./ArticlesWrapper.module.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import {useState} from 'react'

const ArticlesWrapper = () => {
  const [articles,setArticles]=useState([
    {title:"Kopos",
     imgUrl:"https://www.lrt.lt/img/2016/05/16/126233-855888-756x425.jpg",
      description:"Puikios atostogos Nidos papludime"}
      
  ])
  return (
    <div className={styles.main}>
       {articles.map((article) => (
      <ArticleCard title={articles.title} imgUrl={articles.imgUrl} description={articles.description}/>
       ))}
    </div>
  );
};

export default ArticlesWrapper;