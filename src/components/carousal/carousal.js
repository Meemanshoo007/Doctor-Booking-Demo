
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './carousel.css'; // Import the CSS file

function WidgetCarousel() {
 
 

 
  return (
  <>
    <div className="fixed-buttons">
        <a href="#" className="fixed-btn calendar-btn">
           <img
        
          src="https://www.sakraworldhospital.com/assets/images/sticky-icons/book-desk-svg.svg"
          alt="First slide"
        />
        </a>
        <a href="#" className="fixed-btn stethoscope-btn">
           <img
        
          src="https://www.sakraworldhospital.com/assets/images/sticky-icons/enq-desk-svg.svg"
          alt="First slide"
        />
        </a>
        <a href="#" className="fixed-btn heartbeat-btn">
       <img
        
          src="https://www.sakraworldhospital.com/assets/images/sticky-icons/health-desk-svg.svg"
          alt="First slide"
        />
        </a>
      </div>
    <Carousel className="mycarausel-style" controls={false} indicators={true}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.sakraworldhospital.com/assets/images/banner-4.webp"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.sakraworldhospital.com/assets/images/banner-3.webp"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.sakraworldhospital.com/assets/images/banner-2.webp"
          alt="Third slide"
        />
   
      </Carousel.Item>
    </Carousel>

        {/* This is the new widget section */}
    
<div className="call-to-action-bar ">
  <Link  
 class="no-link"
                      href="#"
                      to={`book-now?id=0`}
  >
    <div className="cta-item">
          <img
          className=""
          src="https://www.sakraworldhospital.com/assets/images/book-appointment-ico.svg"
          alt="Third slide"
        /> 
          <span className='.no-link'>Book an Appointment</span>
        </div>

  </Link>
    
           <div className="cta-divider"></div>

             <Link  
 class="no-link"
                      href="#"
                      to={`doctor-page`}
  >  <div className="cta-item">
         <img
          className=""
          src="https://www.sakraworldhospital.com/assets/images/doctor-dropdown.svg"
          alt="Third slide"
        />
          <span>Find a Doctor</span>
        </div> </Link>
        <div className="cta-divider"></div>
        <div className="cta-item">
        <img
          className=""
          src="https://www.sakraworldhospital.com/assets/images/speciality-dropdown.svg"
          alt="Third slide"
        />
          <span>Select a Speciality</span>
        </div>   <div className="cta-divider"></div>
        <div className="cta-item">
        <img
          className=""
          src="https://www.sakraworldhospital.com/assets/images/e-portal.svg"
          alt="Third slide"
        />
          <span>E-Portal (Self Help)</span>
        </div>
      </div>
 
      
    </>
  );
}

export default WidgetCarousel;