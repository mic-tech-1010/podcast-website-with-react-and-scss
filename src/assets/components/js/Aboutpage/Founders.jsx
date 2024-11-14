import React from 'react'
import twitter from "../../../images/twitter.svg"
import instagram from "../../../images/instagram.svg"
import tiktok from "../../../images/tiktok.svg"
import porter from "../../../images/porter.png"
import marques from "../../../images/marques.png"

const Founders = () => {
  return (
    <section class="founders">
        <h2 class="founders__sectionTitle">
            Founder and Main Host
        </h2>
        <div class="founders__container">
            <div class="founders-card">
             <img class="Founder" src={porter} alt="image of porter severus" />
            <div class="founder-info">
                <p>Host 1</p>
                <h3 class="name">Porter Severus</h3>
                <p class="bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam   </p>
                <hr />
                <div class="socials">
                    <strong>follow me:</strong>
                    <img src={tiktok} alt="tiktok logo" />
                    <img src={twitter} alt="twitter logo" />
                    <img src={instagram} alt="instagram logo" />
                </div>
            </div>
            </div>
            <div class="founders-card">
              <img class="Founder" src={marques} alt="image of marques keith" />
              <div class="founder-info">
                <p>Host 2</p>
                <h3 class="name">marques keith</h3>
                <p class="bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam </p>
                <hr />
                <div class="socials">
                    <strong>follow me:</strong>
                    <img src={tiktok} alt="tiktok logo" />
                    <img src={twitter} alt="twitter logo" />
                    <img src={instagram} alt="instagram logo" />
                </div>
            </div>
            </div>
        </div>
    </section> 
  )
}

export default Founders
