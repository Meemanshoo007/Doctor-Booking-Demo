
import './healthcarefeatures.css';




const HealthcareFeatures = () => {
  return (
    <div className="services-container">
      <div className="service-card">
        <div className="image-container">
          <img 
            src="	https://www.sakraworldhospital.com/assets/images/qualified-doctors.svg" 
            alt="Qualified Doctors" 
            className="service-image"
          />
        </div>
        <h3 className="service-title">Qualified Doctors</h3>
        <p className="service-description">
          Highly skilled Doctors, Nurses and technicians from every corner of the country
        </p>
      </div>

      <div className="service-card">
        <div className="image-container">
          <img 
            src="https://www.sakraworldhospital.com/assets/images/trusted-treatment.svg" 
            alt="Trusted Treatment" 
            className="service-image"
          />
        </div>
        <h3 className="service-title" >Trusted Treatment</h3>
        <p className="service-description">
          Our Hospital has all the facilities that a patient requires during their stay
        </p>
      </div>

      <div className="service-card">
        <div className="image-container">
          <img 
            src="https://www.sakraworldhospital.com/assets/images/24x7-services.svg" 
            alt="24/7 Services" 
            className="service-image"
          />
        </div>
        <h3 className="service-title">24/7 Services</h3>
        <p className="service-description">
          Sakra provides round the clock emergency services and facilities
        </p>
      </div>
    </div>
  );
};

export default HealthcareFeatures;
