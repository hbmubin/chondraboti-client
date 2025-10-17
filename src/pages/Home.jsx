import { Outlet } from "react-router";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import HomeProducts from "../components/home/HomeProducts";
import useProductList from "../hooks/useProductList";

const Home = () => {
    let borkaData = useProductList("dubai cherry","4")
    borkaData.title= "Dubai Cherry Borka"
    borkaData.link= "collection/borka/dubai-cherry"
    

    // console.log(menData)

    
    return (
        <div>
            <Banner></Banner>
            {/* <Categories></Categories> */}
            <HomeProducts categoryData={borkaData}></HomeProducts>
        </div>
    );
};

export default Home;