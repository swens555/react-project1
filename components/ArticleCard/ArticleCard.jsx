import styles from "./ArticleCard.module.css"

const ArticleCard = ({title,imgUrl,description}) => {
 
  return (
    <div className={styles.main}>
     <h2>{title}</h2> 
    <img src={imgUrl} />
    <h4>{description}</h4>
  </div>
  )
}

export default ArticleCard



/*<img src="https://www.lrt.lt/img/2016/05/16/126233-855888-756x425.jpg" />
<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>*/