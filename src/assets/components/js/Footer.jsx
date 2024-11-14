import React from 'react'
import logo from "../../images/logo.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"
import tiktok from "../../images/tiktok.svg"
import googcast from "../../images/googcast.svg"
import spotify from "../../images/spotify.svg"
import youtube from "../../images/youtube.svg"
import appStore from "../../images/app_store.svg"
import googlePlay from "../../images/google_play.svg"

const Footer = () => {
  return (
    <>
      <footer>
             <div className="copyright">
               <a href="podcast.html"> <img src={logo} alt="pod of cast logo" /> </a>
               <span>&copy;2023 </span>  
            
            <br/>
            <br/> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <br/>
            <br/> 
            <img src={twitter} alt="twitter logo" className="Social" />
            <img src={instagram} alt="instagram logo" className="Social" />
            <img src={tiktok} alt="tiktok logo" className="Social" />
            </div> 
            <div className="bottom-nav">
    <div className="left-col">
    <p>About</p>
    <p>Testimonials</p>
    <p>Features</p>
    </div>
    <div className="right-col">
        <p className="active">Episode</p>
        <p>pricing</p>
        <p>Blog</p>
    </div>
            </div>
             <div className="platforms">
                <p>Listen to episodes on your favorite platforms</p>
               <br/>
                <img src={googcast} alt="Goggle podcast logo" />
                <img src={spotify} alt="spotify logo" />
                <img src={youtube} alt="youtube logo" />
                <br/>
                <br/>
                <br/>
                <p>App available on:</p>
                <img src={appStore} alt="App store logo" />
                <img src={googlePlay} alt="Google play Store logo" />
            </div> 
        </footer>

    </>
  )
}

export default Footer
