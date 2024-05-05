import {useState} from 'react'
import styles from "./Header.module.css"
//import burgerBtn from "../../assets/burger.svg";


const Header = () => { 
    const [logo,setLogo]=useState("My web page")
    const [isDisplayLogo, setDisplayLogo] = useState(false);
 

    const displayLog=()=>{
    console.log(logo)
    }
    /*const onBurgerBtnClick = () => {
      setDisplayMobileMenu(!isDisplayMobileMenu);
    };*/
    return (
      <header className={styles.main}>
        {isDisplayLogo && (
        <div onClick={displayLog} className={styles.logo}>
          {logo}
        </div>)};
        <button onClick={()=>{
          setLogo("Type 20")
          setDisplayLogo(!isDisplayLogo)

        }}>
        Change logo</button>
  
   
      </header>
    );
  };
  
  export default Header;