import { Outlet } from "react-router";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import HomeProducts from "../components/home/HomeProducts";
import useProductList from "../hooks/useProductList";

const Home = () => {
    let womenData = useProductList("women","4")
    womenData.title= "Women Fashion"
    womenData.link= "collection/women"
    
    let menData = useProductList("men","4")
    menData.title= "Men Fashion"
    menData.link= "collection/men"

    // console.log(menData)

    
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <HomeProducts categoryData={womenData}></HomeProducts>
            <HomeProducts categoryData={menData}></HomeProducts>
        </div>
    );
};

export default Home;