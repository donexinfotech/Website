import React from 'react'
import portfolio from './works/Screenshot 2024-08-04 120921.png'
import report from './works/reportcard.png'
import rbook from './works/rbook.png'
import './work.css'

export default function Work() {
  return (
    <div id='works' className='works'>
        <div className="heading">
            <h2 className='fw-bold'>Our Works</h2>
        </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={portfolio} class="d-block caro-img mx-auto" alt="Work1"/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Portfolio Website</h5>
                <p>This was a portfolio website made for a client to showcase his skills and achievements</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={report} class="d-block caro-img mx-auto" alt="..."/>
            <div class="carousel-caption d-none d-md-block caro-text">
                <h5>Report Card Website</h5>
                <p>This was a report card website made for one of our clients to list the results of all the students in the database</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={rbook} class="d-block caro-img mx-auto" alt="..."/>
            <div class="carousel-caption d-none d-md-block caro-text">
                <h5>Recipe Book</h5>
                <p>This is a Recipe book website made in order to showcase recipe's of verious foods in this website</p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{"animation" : "none"}}>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{"animation" : "none"}}>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}
