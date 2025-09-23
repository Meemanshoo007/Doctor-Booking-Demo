
import './App.css';
import './components/nav/nav.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav.js';
import Excellence from './components/excellence/excellence.js';

import WidgetCarousel from './components/carousal/carousal.js';
import HealthcareFeatures from './components/health_care/healthcarefeatures.js';
import HospitalLanding from './components/hospital_landing/hospital_landing.js';
import Specialities from './components/specialities/specialities.js';
import Banner from './components/banner/banner.js';
import Doctor from './components/doctor/doctor.js';
import Footer from './components/footer/footer.js';
import Testimonial from './components/testimonial/testimonial.js';
import AdvanceTechnology from './components/advance-technology/advance-technology.js';
import Advantage from './components/advantage/advantage.js';
import BookingPage from '../src/pages/booking/booking.js';
import DoctorDisplayAds1 from './components/ads/doctor-display-ads1 .js';

import DoctorPage from '../src/pages/doctors-page/doctors-page.js';

import './components/common-style.css';

const HomePage = () => (
  <>
     <Nav />
      <WidgetCarousel />
      <HealthcareFeatures />
      <HospitalLanding />
      <Specialities title="Our Centres of Excellence" backColor="white-background"/>
      <Specialities title="Our Specialities" backColor="gradient-background"/>
      <Specialities title="Key Procedures" backColor="white-background"/>
      <Banner />
      <AdvanceTechnology />
      <Doctor />
      <Testimonial title="Sakra Patient Testimonials" backColor="white-background"/>
      <Advantage/>
      <Testimonial title="Blogs"  backColor="white-background"/>
      <Testimonial title="Video Section" backColor="gradient-background"/>
      <Excellence />
      <Footer/>
      
          <DoctorDisplayAds1 />
  </>
);


function App() {
  return (
   <Router>
      <Nav /> {/* Nav and Footer are outside Routes so they appear on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-now" element={<BookingPage />} />
        <Route path="/doctor-page" element={<DoctorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





