import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./doctor.css";import { Link } from "react-router-dom";

import DoctorData from "../data/doctor-data";

// Data for the slider items


const Doctor = () => {
  const splideOptions = {
    type: "loop",
    perPage: 4,
    gap: "30px",
    arrows: true,
    pagination: true,
    breakpoints: {
      991: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  };

  return (
    <section className={`our-center `} id="our-center">
      <div className="container">
        <h2 className="main-title js-scroll fade-in-bottom scrolled">
          Our Doctors
        </h2>
        <p className="main-sub-title js-scroll fade-in scrolled">
          Where Healthcare Meets Hospitality
        </p>
        <div className="our-center-slide js-scroll fade-in-bottom scrolled">
          <div className="doctor-splide">
            <Splide
              options={splideOptions}
              aria-label="Our Centres of Excellence"
            >
              {DoctorData.map((item, index) => (
                <SplideSlide key={index}>
                  <div class="dco-div">
                    <div class="our-doctor-box">
                      <img
                        src={item.image}
                        width="260"
                        height="270"
                        class="lazy lazy-loaded"
                        data-src="https://www.sakraworldhospital.com/assets/doctor-images/222x250-manjunath-malige.webp"
                        alt="best-endocrinologist -in-bangalore"
                        title="best-endocrinologist -in-bangalore"
                        srcset=""
                      />
                    </div>
                    <div class="our-doctor-name">
                      <h3>{item.name}</h3>
                      <p>{item.speciality}</p>
                    </div>
                    <Link
                      class="book-button"
                      href="#"
                      to={`book-now?id=${index}`}
                      id="open-popup-btn25"
                      onclick="openpopup('25','45','1','https://patientportal.sakraworldhospital.com/book-consult/sakra-world-hospital/endocrinology/dr-harinarayan-c-v/39/336/11683')"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <Link
        to="/doctor-page"
        
        >

            <div className="view-all">
          <a href="https://www.sakraworldhospital.com/centres-of-excellence">
            View All
          </a>
        </div>
        </Link>
      
      </div>
    </section>
  );
};

export default Doctor;
