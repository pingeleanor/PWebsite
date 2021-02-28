import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import Context from '../components/context';

import '../styles/globals.css';

let configs;

class MyApp extends App {
    state = {
    };

    componentDidMount = () => {
        const {pageProps} =this.props;
        if (pageProps.configs) {
            this.setState({
               configs: pageProps.configs
            });
        } else {
            return;
        }
    };
    render() {
        const { Component, pageProps } = this.props;
        return( <Context.Provider value={{basicConfigs: this.state.configs? this.state.configs:null
        }}>
            <Component {...pageProps} />
        </Context.Provider>)

    }
}

MyApp.getInitialProps = async (appContext) => {
    let ctx = appContext.ctx;


    //Check if I am in the server.
    if (ctx.req) {
        const fs = require("fs");
        const path = require("path");
        let portal;
        if(process.env["portal"]){
            portal =  process.env["portal"];
        }
        else{
            return ;
        }
        let mainDirectory;
        if(portal){
            mainDirectory = path.join(process.cwd(), `configs/${portal}`);
            const fullPath = path.join(mainDirectory, `basic.json`)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            configs =  JSON.parse(fileContents);
            return { pageProps: { configs: configs } };
        }
    }
    return {
        pageProps:{}
    }

    //Return pageProps to the page with the authenticted user information.


};


export default MyApp





