import React from 'react'
import Link from 'react-router-dom'

const Card = () => {
  return (
    <>
      <header>
        <img src='img/cd-logo.svg' alt=''></img>

        <button className='cd-nav-trigger'>
          Menu<span aria-hidden='true' className='cd-icon'></span>
        </button>
      </header>

      <nav class='cd-primary-nav'>
        <ul>
          <li class='cd-label'>Navigation</li>
          <li>
            <a href='#0'>The team</a>
          </li>
          {/* <!-- other navigation items here --> */}
        </ul>
        {/*  <!-- .cd-primary-nav --> */}
      </nav>
      <div class='cd-projects-container'>
        <ul>
          <li className='single-project'>
            <div className='cd-title'>
              <h2>Project 1</h2>
              {/* <!-- .cd-title --> */}
            </div>

            <div className='cd-project-info'>
              <button className='cd-scroll'>Scroll down</button>

              <div className='content-wrapper'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam molestias suscipit mollitia vitae ea non ex,
                  dignissimos aperiam minus magni totam sint culpa vel voluptate
                  ipsa sunt repellendus. Ab, magni!
                </p>

                {/* <!-- additional project info here --> */}
              </div>
            </div>
             {/* <!-- .cd-project-info --> */}
          </li>

          {/* <!-- other projects here --> */}
        </ul>
      </div>
    </>
  )
}

export default Card
