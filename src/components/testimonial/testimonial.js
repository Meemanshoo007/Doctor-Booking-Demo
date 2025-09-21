import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./testimonial.css";

// Data for the slider items
const centersData = [
  {
    title: "Brain and Spine",
    link: "https://www.sakraworldhospital.com/centres-and-specialities/brain-and-spine/2",
    image:
      "https://www.sakraworldhospital.com/assets/images/centres-and-specialities/best-hospital-for-brain-tumor-treatment-in-bangalore.webp",
  },
  {
    title: "Cardiac Sciences",
    link: "https://www.sakraworldhospital.com/centres-and-specialities/cardiac-sciences/1",
    image:
      "https://www.sakraworldhospital.com/assets/images/centres-and-specialities/cardiac-hospitals-bangalore.webp",
  },
  {
    title: "Obstetrics and gynaecology",
    link: "https://www.sakraworldhospital.com/centres-and-specialities/obstetrics-and-gynaecology/3",
    image:
      "https://www.sakraworldhospital.com/assets/images/centres-and-specialities/maternity-hospitals-in-bangalore.webp",
  },
  {
    title: "Orthopaedics",
    link: "https://www.sakraworldhospital.com/centres-and-specialities/orthopaedics/7",
    image:
      "https://www.sakraworldhospital.com/assets/images/centres-and-specialities/best-hospital-for-knee-replacement.webp",
  },
  {
    title: "Pediatrics and Pediatric Superspeciality",
    link: "https://www.sakraworldhospital.com/centres-and-specialities/pediatrics-and-pediatric-superspeciality/28",
    image:
      "https://www.sakraworldhospital.com/assets/images/centres-and-specialities/childcare-hospitals-near-bellandur.webp",
  },
  {
    title: "Rehabilitation Sciences",
    link: "https://www.sakraworldhospital.com/centres-and-specialities/rehabilitation-sciences/26",
    image:
      "https://www.sakraworldhospital.com/assets/images/centres-and-specialities/rehabilitation-centre-in-bangalore.webp",
  },
  {
    title: "Renal Sciences",
    link: "https://www.sakraworldhospital.com/centres-and-specialities/renal-sciences/5",
    image:
      "https://www.sakraworldhospital.com/assets/images/centres-and-specialities/best-hospital-for-kidney-transplantation-in-bangalore.webp",
  },
];

const Testimonial = ({title,backColor}) => {
  const splideOptions = {
    type: "loop",
    perPage: 3,
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
    <section className={`our-center ${backColor}`} id="our-center">
      <div className="container">
        <h2 className="main-title js-scroll fade-in-bottom scrolled">
          {title}
        </h2>
        <div className="our-center-slide js-scroll fade-in-bottom scrolled">
          <div className="specialitiesSplide">
            <Splide
              options={splideOptions}
              aria-label="Our Centres of Excellence"
            >
              {centersData.map((item, index) => (
                <SplideSlide key={index}>
                  <div class="our-patient-testi-box d-grid">
                    <div class="patient-testi-img">
                      <a href="https://www.sakraworldhospital.com/testimonial/i-thank-each-and-everyone-who-took-care-of-me/415">
                        <img
                          src="https://www.sakraworldhospital.com/assets/img/cardiology-testimonial-image.webp"
                          width="345"
                          height="215"
                          class="lazy lazy-loaded"
                          data-src="https://www.sakraworldhospital.com/assets/img/cardiology-testimonial-image.webp"
                          alt=""
                          srcset=""
                        />
                      </a>
                    </div>
                    <div class="patient-testi-txt ">
                      <h3>I thank each and everyone who took care of me</h3>
                      <p>
                        I thank each and everyone who took care of me in CCU and
                        everything was good and special thanks to my nurseys who
                        looked after me. Mohparthi Harini ...
                      </p>
                    </div>
                  </div>
                  <div class="tesimonial-link">Read More 
                            </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <div className="view-all">
          <a href="https://www.sakraworldhospital.com/centres-of-excellence">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
