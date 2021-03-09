import React from 'react';
import Image from "next/image";
import ReactDOM from 'react-dom';


export default class ImageGallery extends React.Component {

    constructor() {
        super();
        this.state = {
        };


    }
    componentDidMount() {
        const script = document.createElement("script");

        script.innerHTML = "var swiper = new Swiper('.swiper-container', {" +
      "      grabCursor: true,"+
            "cubeEffect: {"+
            "shadow: true,"+
                "slideShadows: true,"+
                "shadowOffset: 20,"+
                "shadowScale: 0.94,"+
        "},"+
            "                    effect: 'cube'," +
            "                    pagination: {" +
            "                    el: '.swiper-pagination'," +
            "                }," +
            "                })"

        document.body.appendChild(script);
    }

    render() {
        if(this.props.items){
            return <div className={"swiper-container"} id={"container"} style={{height:"330px",width:"350px",position:"absolute",left:"45%",top:"75%",marginLeft:"-150px",marginTop:"-150px"}}>
                <div className="swiper-wrapper">
                    {this.props.items.map((item,i)=>{
                        return(
                            <div key={i} className={"swiper-slide"}  style={{backgroundImage: `url(${item.original})`,backgroundPosition:"center",backgroundSize:"cover"}}> <p style={{position:"fixed",top:"95%",color:"white"}}><a href={item.url} target={"_blank"}>{item.name}</a></p></div>
                        )
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        }
        return null;

    }
}