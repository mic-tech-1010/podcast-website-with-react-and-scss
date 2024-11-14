import React from 'react'
import googcast from "../../../images/googcast.svg"
import spotify from "../../../images/spotify.svg"
import youtube from "../../../images/youtube.svg"

const Sponsors = () => {
  return (
    <section class="sponsors">
    <h1 class="sponsors__sectionTitle">Our Sponsor</h1>
    <p class="sponsors__subtitle">our current official sponsor</p>
     <br />
     <br />
     <div class="sponsors-container">
        <div class="sponsor-card">
            <div class="logo-container">
                <img src={googcast} alt="Goggle podcasts logo" class="logo gpod " />
            </div>
            <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               <br />
                Iure illo quidem enim alias perferendis ipsum, officiis <br /> consequatur ad   
               </p>
        </div>
        <div class="sponsor-card">
            <div class="logo-container">
                <img src={spotify} alt="spotify logo" class="logo spotify" />
            </div>
            <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                <br />
                Iure illo quidem enim alias perferendis ipsum, officiis <br /> consequatur ad   
                </p>
        </div>
        <div class="sponsor-card">
            <div class="logo-container">
                <img src={youtube} alt="youtube logo" class="logo youtube" />
            </div>
            <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                <br/>
                 Iure illo quidem enim alias perferendis ipsum, officiis <br />
                  consequatur ad   
                
            </p>
        </div>
     </div>
</section> 
  )
}

export default Sponsors
