import React from 'react'
import mic from '../../../images/mic.png'

const History = () => {
  return (
    <section class="history">
    <h1 class="history__mainTitle">What Our Listeners Say</h1>
    <p class="history__subTitle">Their experience throughout every platform </p>
    <img src={mic} alt="image of a microphone" class="microphone" />
<br />
    <h2 class="history__sectionTitle">About and History</h2>
    <div class="column">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sint ex unde minus ea nisi omnis sapiente dignissimos, veritatis eligendi perspiciatis molestiae aperiam quam consequuntur optio dolorum non fugit eos.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati incidunt deleniti veritatis totam sunt, itaque id error atque vel ad laudantium. At sapiente expedita minima, asperiores nam assumenda iste!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eum, praesentium explicabo commodi optio modi distinctio ab porro quis tempore non totam vero ducimus voluptatem ipsam officia nemo neque est.
        <br /><br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis culpa, corrupti non delectus repudiandae cupiditate possimus voluptatem natus sapiente, aliquid at eius ab nesciunt libero sit totam porro provident voluptatibus.
        </p>
    </div>
</section>
  )
}

export default History
