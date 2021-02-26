import '../styles/globals.css';

let configs ;
let firstrender = true;

function MyApp({ Component, pageProps}) {
  if(pageProps.configs && firstrender){
    configs = pageProps.configs;
    firstrender = false;
  }
  if(Object.keys(pageProps).length == 0){
    pageProps.configs = configs;
  }
  return <Component {...pageProps} {...configs}/>
}


export default MyApp





