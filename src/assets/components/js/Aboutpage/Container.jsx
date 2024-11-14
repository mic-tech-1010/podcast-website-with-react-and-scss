import React from 'react'

const Container = () => {
  return (
    <div class="stats">
    <div class="stats__cards">
        <h2 class="counter">
            <span class="count">76</span>
            <span class="unit">K</span>
        </h2>
        <p class="description">Community Members</p>
    </div>
    <div class="stats__cards">
        <h2 class="counter">
            <span class="count">128</span>
            <span class="unit">K</span>
        </h2>
        <p class="description">Podcast Subscribers</p>
    </div>
    <div class="stats__cards">
        <h2 class="counter">
            <span class="count">59</span>
            <span class="unit">K</span>
        </h2>
        <p class="description">Daily Listeners</p>
    </div>
  </div>
  )
}

export default Container
