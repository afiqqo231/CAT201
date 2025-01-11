import "./HotelStyle.css"

function HotelData(props){
    return(
        <div className="h-card">
            <div className="h-image">
                <a href={props.url}>
                    <img src={props.img} alt="image"/>
                </a>
            </div>
            <h4>{props.hname}</h4>
            <p1>{props.text}</p1>
        </div>
    )
}

export default HotelData;