import React from 'react'

const Card = (props) => {
    let badgeText 
    if(props.item.status === "new") {
      badgeText = "NEW"
    }
    else if (props.item.status === "popular") {
      badgeText ="POPULAR"
    }
  return (
    <>  
    <div className="card" id={props.item.id} onClick={props.clickCard}>
        <div className="ep-info">
       {badgeText && <div className="card-batch">{badgeText}</div>}
       <img src={props.item.epImg} alt="perplexed mind" />
       <div className="ep-description">
           <strong className="ep-number">Eps.{props.item.id}</strong>
           <h3 className="ep-title"> {props.item.epTitle} </h3>
       <p className="ep-blurb">{props.item.epBlurb}</p>
       </div>
       </div>
         <div className="ep-tags">
             <div className="tag-names">
                 <span>{props.item.tag.one}</span>
                 <span>{props.item.tag.two}</span>
             </div>
             <div className="host">
                 <span className="label">Hosted by:</span>
             <img src={props.item.hostImg} alt="episode hosts" />
         </div>
     </div>
</div>
    </>
  )
}

export default Card
