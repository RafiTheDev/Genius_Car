import About from "../About/About"
import Banner from "../Banner/Banner"
import Info from "../Info/Info"
import Homeproducts from "./Homeproducts/Homeproducts"
import Homeservices from "./Homeservices/Homeservices"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Homeservices></Homeservices>
        <Info></Info>
        <Homeproducts></Homeproducts>
    </div>
  )
}

export default Home