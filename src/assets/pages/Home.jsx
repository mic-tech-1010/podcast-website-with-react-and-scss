import { useState } from 'react'
import Hero from '../components/js/Homepage/hero'
import Filter from '../components/js/Homepage/Filter'
import Card from '../components/js/Homepage/Card'
import cardData from '../components/js/Homepage/card-data'
import HeroData from '../components/js/Homepage/Hero-data'
import categories from '../components/js/Homepage/categories'
import Pagination from '../components/js/Homepage/Pagination'

const Home = () => {
  
  const [hero, setHero] = useState(HeroData[0]);
  const [filterCard, setFilterCard] = useState(cardData);
  const [activeButton, setActiveButton] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  // click card to change the hero
  const clickCard = (e) => {
      const cardId = e.currentTarget.id;

     const filter = HeroData.filter(container =>
        (
          container.id === cardId
        ) 
      )

      setHero(...filter) 

      
     window.scroll({
      top: 150,
      left: 0,
      behavior: "smooth"
    }
    );

  }

    // Get current cards page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterCard.slice(indexOfFirstPost, indexOfLastPost);
   
    //change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // return cards to the UI
  const cards = currentPosts.map((item) => {
    return (
        <Card
        key = {item.id}
        item={item}
        clickCard={clickCard}
        />
    )
})
 
  // filter the cards
    const buttonFilter = (e) => {
      const filterId = e.target.id;

      const cardFilter = cardData.filter(card =>
        (
            card.category === filterId
        ) 
      )

      setFilterCard(filterId === 'All' ? cardData : cardFilter)

      const handleButtonClick = (activeId) => {
               setActiveButton(activeId)
      }

      handleButtonClick(filterId)

      
  
    }

// return the filter button into the UI
const filterButton = categories.map((category) => {
  return (
      <Filter
      key = {category.id}
      category={category}
      buttonFilter={buttonFilter}
      activeButton={activeButton}
      />
  )
})

     
  return (

    <>
        <Hero data={hero} />

        <section className="episodes">
        <a id="episode_section">
       <h1 className="section">Latest Episode</h1>
       </a>
        <div className="genre-filter">
        {filterButton}
        </div>
        </section>

        <div className="card-container">
        {cards}
        </div>

        <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={cardData.length}
        paginate={paginate} />
    </>

  )
}

export default Home
