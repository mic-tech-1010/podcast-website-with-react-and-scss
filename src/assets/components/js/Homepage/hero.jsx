import React from 'react'
import avatar from '../../../images/avatar.png'
import play from '../../../images/play.svg'
import HeroData from './Hero-data'

const Hero = (props) => {

  return (
    <>
    
    <div className="hero-container">

    <div className="hero">
            
            <img className="hero-img" src={props.data.url} alt="perplexed mind title cover"/>


            <div className="hero-info">
            <div className="episode-title">
            <div className="number-container">
                <span className="ep-number" >{props.data.epNumber}</span>
                <span className="featured">FEATURED EPISODE</span>
            </div>
            <h1>{props.data.title}</h1>
            </div>
    <div className="episode-description">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium dolores numquam mollitia quae eveniet voluptatem quidem blanditiis possimus. Cupiditate culpa officiis voluptate nesciunt molestiae. Aspernatur recusandae ex debitis quasi?
        </p>
        <div className="metadata">
            <div className="author">
                <img src={avatar} alt="Author image of jane doe" className="avatar"/>
           <span className="host-label">Hosted by:</span>
           <span className="host-name">{props.data.hostName}</span>
            </div>
            <div className="date">{props.data.date}</div>
        </div>
    </div>
     <div className="episode-actions">
    <button className="btn primary lg">SUBSCRIBE</button>
      <button className="btn secondary lg">
        <img src={play} alt="play episode"/>
       <span className="label">  LISTEN NOW </span>
       <span className="minute">{props.data.minute}</span>
       </button> 
       </div> 
</div>
        </div>
 <div className="tags">
    <strong className="label">Tags:</strong>
    <span className="tag-name">{props.data.tag1}</span>
    <span className="tag-name">{props.data.tag2}</span>
 </div>
    </div>
    </> 

    
  )
}

export default Hero
