import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js"

function Home (){
    return (
        <>
            <Navbar/>
            <Hero
            cName="hero"
            heroImg="https://i.pinimg.com/1200x/f1/30/41/f13041e97d74ddddd5c9e8332a8bdd78.jpg"
            title="Penang"
            desc="intro"
            />
        </>
    )
}

export default Home;