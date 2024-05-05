import styles from "./Main.module.css";
import ArticlesWrapper from "../ArticlesWrapper/ArticlesWrapper";

//import QuestionsWrapper from "../QuestionsWrapper/QuestionsWrapper";

const Main = () => {
  return (
    <main className={styles.main}>
       <ArticlesWrapper /> 
      
    </main>
  );
}

export default Main


