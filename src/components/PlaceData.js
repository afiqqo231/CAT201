import { Component } from "react";
import "./PlaceStyle.css";

class PlaceData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="desc-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.paragraph}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default PlaceData;