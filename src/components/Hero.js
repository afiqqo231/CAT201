import "./HeroStyle.css"

function Hero (props){
    return (
        <>
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <a href="/">
                    Travel Plan
                </a>
            </div>
        </div>
        </>
    )
}

export default Hero;