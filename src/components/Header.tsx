import { Headerstyle, Categories, Category } from "./styled/Headerstyled";
import Homeimg from '../images/home.svg';
import Arrowimg from '../images/arrow.svg';


function Header (){
    return(
        <Headerstyle>
            <img src={Homeimg}></img>
            <img src={Arrowimg}></img>
            <Categories>Categories</Categories>
            <img src={Arrowimg}></img>
            <Category>Random</Category>
        </Headerstyle>
    )
}


export default Header;