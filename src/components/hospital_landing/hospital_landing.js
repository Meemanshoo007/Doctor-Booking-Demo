import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import './hospital_landing.css'; // Your custom CSS for this component

const HospitalLanding = () => {
  const splideOptions = {
    type: 'loop',
    perPage: 1,
    arrows: true,
    pagination: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    focus: 'center',
    gap: '30px',
  };

  return (


    <section className="our-center gradient-card" id="home-about">


   
      <div className="container">
        {/* New Flexbox container for titles and arrows */}
        <div className="header-with-arrows">
          <div className='herders'>
            <h1 className="main-title js-scroll fade-in-bottom scrolled">Best Multispeciality<br /> Hospital in Bangalore India</h1>
            <p className="main-sub-title js-scroll fade-in scrolled">Where Healthcare Meets Hospitality</p>
          </div>
         
        </div>

        <div className="about-slider">
          <Splide options={splideOptions} aria-label="About Us Hospital Slider">
            <SplideSlide>
              <div className="home-about-text">
                <div className="d-grid">
                  <div className="col js-scroll slide-left scrolled">
                    <img className="lazy lazy-loaded" width="690" height="425" src="https://www.sakraworldhospital.com/assets/images/comprehensive-care-at-sakra-world-hospital.webp" alt="Sakra Hospitals"/>
                    <a href="https://youtu.be/_4b_mrqar9Y?si=Kou5GIWYSkgljnQl" aria-label="More About us sakra Hospitals" className="play-icon">
                      <svg viewBox="0 0 86 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 0.738281C19.5188 0.738281 0.5 20.2863 0.5 44.421C0.5 68.5557 19.5188 88.1037 43 88.1037C66.4813 88.1037 85.5 68.5557 85.5 44.421C85.5 20.2863 66.4813 0.738281 43 0.738281ZM34.5 64.0782V24.7638L60 44.421L34.5 64.0782Z" fill="white"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="col js-scroll slide-right scrolled">
                    <h2>Comprehensive Care at Sakra World Hospital | Best Hospitals in Bangalore | Top Hospitals Bangalore.</h2>
                    <p>Our loved ones are the backbone of our lives. At Sakra World Hospital, we know just how important your loved ones are and how devasting a medical condition can be. We provide world-class healthcare with a caring and compassionate touch. Sakra is by your side, from sickness to health.</p>
                    <div className = "mylink" >Read More</div>
                  </div>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="home-about-text">
                <div className="d-grid">
                  <div className="col js-scroll slide-left scrolled">
                    <img className="lazy lazy-loaded" width="690" height="425" src="https://www.sakraworldhospital.com/assets/images/sakra-world-hospitals-videos.webp" alt="Sakra Hospitals"/>
                    <a href="https://youtu.be/2G8oEKWoH6Y?si=x2vBKjzBXEYUr24Z" aria-label="More About us sakra Hospitals" className="play-icon">
                      <svg viewBox="0 0 86 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 0.738281C19.5188 0.738281 0.5 20.2863 0.5 44.421C0.5 68.5557 19.5188 88.1037 43 88.1037C66.4813 88.1037 85.5 68.5557 85.5 44.421C85.5 20.2863 66.4813 0.738281 43 0.738281ZM34.5 64.0782V24.7638L60 44.421L34.5 64.0782Z" fill="white"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="col js-scroll slide-right scrolled">
                    <h2>Happy to announce our upcoming second hospital | Sakra World Hospital</h2>
                    <p>We're happy to announce our upcoming second hospital, marking a monumental milestone in our journey of healing and hope. With a 500-bed facility in Bengaluru, this expansion allows us to extend exceptional care to more communities. At the forefront of integrated tertiary care, our new unit offers advanced oncology treatments, cutting-edge rehabilitation programs, and a comprehensive range of specialties.</p>
                    <a className = "mylink" href="https://www.sakraworldhospital.com/about-sakra" aria-label="Read more about Sakra Hospitals">Read More <span className="gg-arrow-right"></span></a>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default HospitalLanding;