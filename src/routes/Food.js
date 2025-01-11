import Hero   from "../components/Hero";
import Navbar from "../components/Navbar";
import FoodList from "../components/FoodList"

function Food (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1585136371081-c24032b4bcbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Food"
        desc="Penang is a true food paradise in Malaysia, offering everything from delicious local street eats to irresistible plates of char kuey teow. With so many great spots to choose from, finding Muslim-friendly options might feel overwhelming. But don’t worry—we’ve got you covered! Here’s a carefully curated list of the best halal food and restaurants in Penang that you absolutely must try during your visit."
        button="hide"/>
        <FoodList/>
        </>
    )
}

export default Food;