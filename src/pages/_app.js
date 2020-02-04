// import App from 'next/app'
import '../css/base.css';
import '../css/fonts.css';
import '../css/main.css';
import '../css/vendor.css';
import  React from 'react';

class MyApp extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .catch(err => console.error("Service worker registration failed", err));
    } else {
        console.log("Service worker not supported");
    }
}

  render(){
    const { Component, ...pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

  export default MyApp