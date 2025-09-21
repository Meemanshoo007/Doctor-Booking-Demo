import './doctors-page.css';
import { useState,useEffect } from "react";
import DoctorData  from "../../components/data/doctor-data";

import { Link } from "react-router-dom";
const DoctorPage = () => {




  
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on page load
    }, []);


    const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All"); // For dropdown filter

  // Filtered doctors based on search and dropdown
  const filteredDoctors = DoctorData.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || doctor.speciality.includes(filter);
    return matchesSearch && matchesFilter;
  });

  const allSpecialities = DoctorData.map((doctor) => {
  // Split by '-' or ',' if needed and take the last part after '-'
  const parts = doctor.speciality.split("-");
  return parts[parts.length - 1].trim(); // Trim spaces
});

// Get unique specialities
const uniqueSpecialities = ["All", ...new Set(allSpecialities)];

  return (
     <>
   
      <section className="our-center" id="our-center">
      <div className="container">
        <h2 className="main-title js-scroll fade-in-bottom scrolled">
          Our Doctors
        </h2>
        <p className="main-sub-title js-scroll fade-in scrolled">
          Where Healthcare Meets Hospitality
        </p>

  <div className="d-flex justify-content-between align-items-center mb-4">
          <input
            type="text"
            placeholder="Search doctor by name..."
            className="form-control me-2"
            style={{ maxWidth: "300px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="form-select"
            style={{ maxWidth: "200px" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
                  {uniqueSpecialities.map((item, index) => (
                     <option value={item}>{item}</option>
                  ))}
           
            {/* Add more specialities as needed */}
          </select>
        </div>
        {/* Grid container instead of slider */}
        <div className="doctor-grid">
          {filteredDoctors.map((item, index) => (
            <div className="dco-div" key={index}>
              <div className="our-doctor-box">
                <img
                  src={item.image}
                  alt={item.name}
                  title={item.speciality}
                />
              </div>
              <div className="our-doctor-name">
                <h3>{item.name}</h3>
                <p>{item.speciality}</p>
              </div>
              <Link
                className="book-button"
                to={`/book-now?id=${index}`}
              >
                Book an Appointment
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
      </>);

};

export default DoctorPage;
