import React, { useState, useEffect } from "react";
import "./booking.css"; // Import the CSS file for styling
import { useLocation } from "react-router-dom";
import DoctorData from "../../components/data/doctor-data";
import ErrorAlert from "../../components/error-alert/error-alert";
import SuccssAlert from "../../components/success-alert/success-alert";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BookingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(0);
 const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
    setMobile(value);
  };



  const [showError, setShowError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBookNowClick = () => {
    // Here you would typically handle the OTP sending logic.
    // For this example, we will just show the error alert.
  
    if (startDate === null) {
      setShowError("Please select date first to proceed.");
    }
    else if(selectedTime === ""){
        setShowError("Please select time first to proceed.");
    }
    else if(mobile.length !== 10){
        setShowError("Please select mobile number first to proceed.");
    }
    else if(disabledTimes.includes(selectedTime)){
         setShowError("Doctor is not available for the selected date. Please select any other date & proceed or call 08049694969 for assistance.");
    }
    else {

        setPageLoading(true);

// 
         const booking = {
            doctorId: id,
            date: startDate.toDateString(), // store as string for easy comparison
            time: selectedTime,
        };
         
          const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

            savedBookings.push(booking);

  // Save back to localStorage
  localStorage.setItem("bookings", JSON.stringify(savedBookings));

        setShowSuccess(true);

         setTimeout(() => {
            setPageLoading(false);
        navigate("/"); // replace with your target route
      }, 2000); // 2000 ms = 2 seconds
    }
  };

  // useEffect hook to handle the automatic closing of the alert
  useEffect(() => {
    let timer;
    if (showError !== "") {
      // Set a timer to close the alert after 1 second (1000 milliseconds)
      timer = setTimeout(() => {
        setShowError("");
      }, 1000);
    }
    // Cleanup function to clear the timer if the component unmounts or the state changes
    return () => {
      clearTimeout(timer);
    };
  }, [showError !== ""]);

    useEffect(() => {
    let timer;
    if (showSuccess) {
      // Set a timer to close the alert after 1 second (1000 milliseconds)
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }
    // Cleanup function to clear the timer if the component unmounts or the state changes
    return () => {
      clearTimeout(timer);
    };
  }, [showSuccess]);

  const bookingTimes = [
    { time: "9:30 AM" },
    { time: "10:00 AM" },
    { time: "10:30 AM" },
    { time: "11:00 AM" },
    { time: "11:30 AM" },
    { time: "12:00 PM" },
    { time: "12:30 PM" },
    { time: "1:00 PM" },
    { time: "1:30 PM" },
    { time: "2:00 PM" },
    { time: "2:30 PM" },
    { time: "3:00 PM" },
    { time: "3:30 PM" },
    { time: "4:00 PM" },
    { time: "4:30 PM" },
    { time: "5:00 PM" },
    { time: "5:30 PM" },
    { time: "6:00 PM" },
    { time: "6:30 PM" },
    { time: "7:00 PM" },
    { time: "7:30 PM" },
    { time: "8:00 PM" },
    { time: "8:30 PM" },
    { time: "9:00 PM" },
    { time: "9:30 PM" },
    { time: "10:00 PM" },
    { time: "10:30 PM" },
    { time: "11:00 PM" },
    { time: "11:30 PM" },
    { time: "12:00 AM" },
    { time: "12:30 AM" },
    { time: "1:00 AM" },
    { time: "1:30 AM" },
    { time: "2:00 AM" },
    { time: "2:30 AM" },
    { time: "3:00 AM" },
    { time: "3:30 AM" },
    { time: "4:00 AM" },
    { time: "4:30 AM" },
    { time: "5:00 AM" },
    { time: "5:30 AM" },
    { time: "6:00 AM" },
    { time: "6:30 AM" },
    { time: "7:00 AM" },
    { time: "7:30 AM" },
    { time: "8:00 AM" },
    { time: "8:30 AM" },
    { time: "9:00 AM" },
    { time: "9:30 AM" },
  ];
const [disabledTimes, setDisabledTimes] = useState([]);
  const handleDateChange = (date) => {
    setStartDate(date);
    setLoading(true); // start loading

    setTimeout(() => {
    

      // Check if selected date > 5 days from today
      const today = new Date();
      const diffTime = date.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 5) {
        setShowAlert(-1);
      } else {
        setShowAlert(1);
      }

       // Get booked times for this doctor on this date
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const booked = savedBookings
      .filter(
        (b) => b.doctorId === id && b.date === date.toDateString()
      )
      .map((b) => b.time);

    setDisabledTimes(booked); // set booked times
  setLoading(false);
    }, 500); // 2 seconds
  };

  return (
    <>


 {pageLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 100,
            cursor: "not-allowed",
          }}
        />
      )}

      {showError !== "" && (
        <ErrorAlert
          title="Oops! Something went wrong."
          message= {showError}
          onClose={() => setShowError("")}
        />
      )}

      {showSuccess && (
       <SuccssAlert
          title="Booking Confirmed!"
          message="Your slot has been successfully booked. A confirmation has been sent to your mobile number."
        />
      )}

      <div className="min-body-height default-container-width container">
        <div className="row align-items-center">
          <div className="col">
            <nav aria-label="breadcrumb" className="breadcrumb_sticky">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>

                <li className="breadcrumb-item text-capitalize active">
                  <span>Slot Booking Summary</span>
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-auto d-none d-md-block"></div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="mhc-doctor-profile-card">
              <div className="img-holder dummy">
                <img src={DoctorData[id].image} alt="Maheswarappa B M" />
              </div>
              <div className="ms-3">
                <p className="m-0 fw-bold text-title">{DoctorData[id].name}</p>
                <p className="sub-text mt-1 mb-0">
                  <span className="fw-bold d-block">
                    Director and Head Rehabilitation - REHABILITATION SCIENCES
                  </span>
                  <span className="fw-bold d-block">
                    MBBS, MD (Physical Medicine & Rehabilitation) (AIIMS),
                    Neuro-Rehabilitation (NIMHANS), Sports Medicine (SAI)
                  </span>
                  <span className="fw-bold d-block"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="mhc-loadMore"></div>
          </div>
        </div>

        <div className="border-bottom border-light w-100 transition mt-3 mt-lg-4"></div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div
              id="Select-Appointment-tabs"
              className="mhc-profile-tabs accordion accordion-flush"
            >
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    aria-expanded="true"
                    className="accordion-button"
                  >
                    <div className="d-block d-sm-flex flex-row justify-content-start align-items-lg-center">
                      <span className="fw-bolder fs-6 acc-text-color">
                        1. Consult Type
                      </span>
                      <ul className="list-unstyled mb-0 mt-3 mt-sm-0 d-flex align-items-center">
                        <li>
                          <div className="form-check ms-0 ms-sm-4 pt-0 pt-sm-1">
                            <input
                              className="form-check-input acc-text-color"
                              type="radio"
                              name="consultType"
                              id="Hospital"
                              value="2"
                              defaultChecked
                            />
                            <label
                              className="form-check-label pt-custom fw-bold acc-text-color fs-6"
                              htmlFor="Hospital"
                            >
                              <span>At </span>Hospital
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </button>
                </h2>
              </div>
            </div>
            <div
              id="Select-date-slot-tabs"
              className="mhc-profile-tabs accordion"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    aria-expanded="true"
                    className="accordion-button"
                  >
                    2. Select Date & Time
                  </button>
                </h2>
                <div className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <ul className="list-unstyled d-flex flex-wrap justify-content-end mb-0 mt-3">
                      <li>
                        <div className="mhc-slot-avability d-flex justify-content-center">
                          <div className="mhc-bg Available"></div>
                          <div className="mhc-text">Available</div>
                        </div>
                      </li>
                      <li>
                        <div className="mhc-slot-avability d-flex justify-content-center ms-3">
                          <div className="mhc-bg Booked"></div>
                          <div className="mhc-text">Booked</div>
                        </div>
                      </li>
                      <li>
                        <div className="mhc-slot-avability d-flex justify-content-center ms-3">
                          <div className="mhc-bg Selected"></div>
                          <div className="mhc-text">Selected</div>
                        </div>
                      </li>
                    </ul>
                    <div className="mhc-calendar mt-4">
                      <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        inline
                        minDate={new Date()} // Prevents selecting past dates
                        className="custom-datepicker-input" // Optional: custom class for styling
                      />{" "}
                    </div>
                    <div className="px-2">
                      {loading ? (
                        <div className="d-flex justify-content-center mt-3">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : showAlert === -1 ? (
                        <div className="alert alert-danger mt-3 fs-6 rounded-0">
                          Doctor is not available for the selected date. Please
                          select any other date & proceed or call{" "}
                          <a
                            className="text-primary text-decoration-none fw-bolder"
                            href="tel:08049694969"
                          >
                            08049694969
                          </a>{" "}
                          for assistance.
                        </div>
                      ) : showAlert === 1 ? (
                        <div class="px-2">
                          <h6 class="fs-6 mt-4 mb-2 date-time">Select Time </h6>
                          <ul
                            id="timeSlots"
                            class="list-unstyled d-flex flex-wrap mb-3"
                          >
                            {bookingTimes.map((item, index) => (
                             
                              <li
                                attr-slotid="570"
                                id="slotID_570"
                                class="blocked"
                              >
                                <button
                                  disabled={disabledTimes.includes(item.time)}
                                     onClick={() => setSelectedTime(item.time)}
                                  class={`btn time-slot-btn rounded-1 ${selectedTime === item.time ? "selectedBtn": ""}`}
                                >
                                  {item.time}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div id="summary-tabs" className="mhc-profile-tabs accordion">
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    aria-expanded="true"
                    className="accordion-button acc-text-color fs-6"
                  >
                    3. Login
                  </button>
                </h2>
                <div className="accordion-collapse collapse show">
                  <div className="py-3 accordion-body">
                    <ul className="list-unstyled d-flex flex-wrap list-login-width mb-0">
                      <li className="position-relative">
                        <div className="d-flex">
                          <div style={{ minWidth: "100px" }}>
                            <select
                              className="form-select"
                              title="Select Country Code"
                              style={{
                                borderRadius: "0.25rem 0rem 0rem 0.25rem",
                              }}
                            >
                              <option value="91">+ 91</option>
                              <option value="1">+ 1</option>
                              {/* ... other country codes */}
                            </select>
                          </div>
                          <div className="form-floating">
                            <input
                              type="text"
                              maxLength="10"
                              className="no-floating my-form-control"
                              minLength="10"
                              id="mobileNumber"
                              name="mobileNumber"
                              autoComplete="off"
                              placeholder="Enter mobile number"
                              value={mobile}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="row mt-3">
                      <div className="col-lg-6">
                        <p className="d-flex align-items-center m-0 acc-text-color">
                          New User?{" "}
                          <button
                            type="button"
                            className="acc-text-color btn px-0 ms-1"
                          >
                            Register
                          </button>
                        </p>
                      </div>
                      <div className="col-lg-6 text-end">
                        <button
                          className={`btn btn-outline-primary btn-width mt-4 mt-md-0 rounded-1`}
                       
                            onClick={() => handleBookNowClick()}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
