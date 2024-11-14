import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <li className="page-numbers"><a>&laquo;</a></li>
        {pageNumbers.map(number => (
            <li key={number}>
               <a onClick={() => paginate(number)} className="page-numbers">
                {number}
                </a>
            </li>
        ))}
        <li className="page-numbers"><a>&raquo;</a></li>
      </ul>
    </nav>
  )
}

export default Pagination
