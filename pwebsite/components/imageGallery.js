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
            return <div className={"swiper-container"} id={"container"} style={{height:"35%",width:"35%",position:"absolute",left:"45%",top:"65%",marginLeft:"-150px",marginTop:"-150px"}}>
                <div className="swiper-wrapper">
                    {this.props.items.map((item,i)=>{
                        return(
                            <div key={i} className={"swiper-slide"}  style={{backgroundImage: `url(${item.original})`,backgroundPosition:"center",backgroundSize:"cover"}}> <a href={item.url} style={{display:"block",width:"100%",height:"100%"}}></a></div>
                        )
                    })}
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
            </div>
        }
        return null;

    }
}