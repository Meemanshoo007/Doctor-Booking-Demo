import "./footer.css";

function Footer() {
  return (
   <>
  <footer>
    <div class="container">
        <div class="footer-main-grid">
            <div class="col">
                <img src="https://www.sakraworldhospital.com/assets/images/footer-logo.svg" width="140" height="90" class="lazy lazy-loaded" data-src="https://www.sakraworldhospital.com/assets/images/footer-logo.svg" alt=""/>
                <p >Sakra World Hospital is a leading multispecialty hospital in Bangalore, known for its exceptional healthcare services. With over 200+ highly experienced doctors specializing in various medical fields, Sakra World Hospital has been providing top-quality care for more than 10 years, making it a trusted choice for comprehensive treatment and advanced medical solutions.</p>
                <div class="footer-book-btns">
                    <a href="https://www.sakraworldhospital.com/request-appointment">Book an appointment</a>
                    <a href="https://www.sakraworldhospital.com/doctors">Find a doctor</a>
                </div>
                <div class="social-medias">
                    <a href="https://www.instagram.com/sakrahospital/?hl=en" aria-label="Sakra Instagram link" target="_blank">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.34 3.63578C15.1027 3.63578 14.8707 3.70616 14.6733 3.83802C14.476 3.96988 14.3222 4.15729 14.2313 4.37656C14.1405 4.59583 14.1168 4.83711 14.1631 5.06989C14.2094 5.30267 14.3236 5.51649 14.4915 5.68431C14.6593 5.85213 14.8731 5.96642 15.1059 6.01272C15.3387 6.05903 15.5799 6.03526 15.7992 5.94444C16.0185 5.85361 16.2059 5.6998 16.3378 5.50247C16.4696 5.30513 16.54 5.07312 16.54 4.83578C16.54 4.51752 16.4136 4.2123 16.1885 3.98725C15.9635 3.76221 15.6583 3.63578 15.34 3.63578ZM19.94 6.05578C19.9206 5.22608 19.7652 4.40518 19.48 3.62578C19.2257 2.95891 18.83 2.35506 18.32 1.85578C17.8248 1.34321 17.2196 0.949958 16.55 0.705781C15.7727 0.411942 14.9508 0.252991 14.12 0.235781C13.06 0.175781 12.72 0.175781 10 0.175781C7.28 0.175781 6.94 0.175781 5.88 0.235781C5.04915 0.252991 4.22734 0.411942 3.45 0.705781C2.78168 0.95243 2.17693 1.34534 1.68 1.85578C1.16743 2.35096 0.774176 2.95622 0.53 3.62578C0.236161 4.40312 0.07721 5.22493 0.0599999 6.05578C-5.58794e-08 7.11578 0 7.45578 0 10.1758C0 12.8958 -5.58794e-08 13.2358 0.0599999 14.2958C0.07721 15.1266 0.236161 15.9484 0.53 16.7258C0.774176 17.3953 1.16743 18.0006 1.68 18.4958C2.17693 19.0062 2.78168 19.3991 3.45 19.6458C4.22734 19.9396 5.04915 20.0986 5.88 20.1158C6.94 20.1758 7.28 20.1758 10 20.1758C12.72 20.1758 13.06 20.1758 14.12 20.1158C14.9508 20.0986 15.7727 19.9396 16.55 19.6458C17.2196 19.4016 17.8248 19.0084 18.32 18.4958C18.8322 17.9984 19.2283 17.394 19.48 16.7258C19.7652 15.9464 19.9206 15.1255 19.94 14.2958C19.94 13.2358 20 12.8958 20 10.1758C20 7.45578 20 7.11578 19.94 6.05578ZM18.14 14.1758C18.1327 14.8106 18.0178 15.4395 17.8 16.0358C17.6403 16.471 17.3839 16.8642 17.05 17.1858C16.7256 17.5163 16.3332 17.7722 15.9 17.9358C15.3037 18.1535 14.6748 18.2685 14.04 18.2758C13.04 18.3258 12.67 18.3358 10.04 18.3358C7.41 18.3358 7.04 18.3358 6.04 18.2758C5.38089 18.2881 4.72459 18.1866 4.1 17.9758C3.68578 17.8039 3.31136 17.5486 3 17.2258C2.66809 16.9045 2.41484 16.511 2.26 16.0758C2.01586 15.4709 1.88044 14.8277 1.86 14.1758C1.86 13.1758 1.8 12.8058 1.8 10.1758C1.8 7.54578 1.8 7.17578 1.86 6.17578C1.86448 5.52684 1.98295 4.88373 2.21 4.27578C2.38605 3.85369 2.65627 3.47744 3 3.17578C3.30381 2.83195 3.67929 2.55888 4.1 2.37578C4.70955 2.15582 5.352 2.04086 6 2.03578C7 2.03578 7.37 1.97578 10 1.97578C12.63 1.97578 13 1.97578 14 2.03578C14.6348 2.04306 15.2637 2.15803 15.86 2.37578C16.3144 2.54443 16.7223 2.81863 17.05 3.17578C17.3777 3.48296 17.6338 3.85851 17.8 4.27578C18.0223 4.88472 18.1373 5.52756 18.14 6.17578C18.19 7.17578 18.2 7.54578 18.2 10.1758C18.2 12.8058 18.19 13.1758 18.14 14.1758ZM10 5.04578C8.98581 5.04776 7.99496 5.35031 7.15265 5.9152C6.31035 6.48009 5.65438 7.28198 5.26763 8.21953C4.88089 9.15709 4.78072 10.1882 4.97979 11.1827C5.17886 12.1772 5.66824 13.0903 6.38608 13.8068C7.10392 14.5232 8.01801 15.0108 9.01286 15.2079C10.0077 15.4051 11.0387 15.3029 11.9755 14.9143C12.9123 14.5257 13.7129 13.8682 14.2761 13.0248C14.8394 12.1814 15.14 11.19 15.14 10.1758C15.1413 9.50089 15.0092 8.83239 14.7512 8.20874C14.4933 7.58509 14.1146 7.01859 13.6369 6.54183C13.1592 6.06507 12.5919 5.68746 11.9678 5.43071C11.3436 5.17396 10.6749 5.04314 10 5.04578ZM10 13.5058C9.34139 13.5058 8.69757 13.3105 8.14995 12.9446C7.60234 12.5787 7.17552 12.0586 6.92348 11.4501C6.67144 10.8416 6.6055 10.1721 6.73398 9.52613C6.86247 8.88017 7.17963 8.28682 7.64533 7.82112C8.11104 7.35541 8.70439 7.03825 9.35035 6.90977C9.99631 6.78128 10.6659 6.84722 11.2743 7.09926C11.8828 7.3513 12.4029 7.77812 12.7688 8.32573C13.1347 8.87335 13.33 9.51717 13.33 10.1758C13.33 10.6131 13.2439 11.0461 13.0765 11.4501C12.9092 11.8541 12.6639 12.2212 12.3547 12.5304C12.0454 12.8397 11.6784 13.085 11.2743 13.2523C10.8703 13.4196 10.4373 13.5058 10 13.5058Z" fill="#2E517E"></path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61565347156129" target="_blank" aria-label="Sakra Facebook link">
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.11938 3.49581H10.9994V0.315811C10.0891 0.221158 9.17453 0.174427 8.25938 0.175811C5.53938 0.175811 3.67938 1.83581 3.67938 4.87581V7.49581H0.609375V11.0558H3.67938V20.1758H7.35937V11.0558H10.4194L10.8794 7.49581H7.35937V5.22581C7.35937 4.17581 7.63938 3.49581 9.11938 3.49581Z" fill="#2E517E"></path>
                        </svg>
                    </a>
                    <a href="https://x.com/Sakra_Hospital_?t=K9e-n2qEQNjKEUTJ29g03w&amp;s=08" aria-label="Sakra Twitter link" target="_blank">
                   <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.49901C0 1.8256 0.225232 1.27004 0.675676 0.832346C1.12612 0.394629 1.71172 0.175781 2.43243 0.175781C3.14029 0.175781 3.71299 0.391256 4.15058 0.822245C4.60102 1.26669 4.82625 1.8458 4.82625 2.55962C4.82625 3.20608 4.60747 3.74479 4.16988 4.17578C3.71944 4.62022 3.12741 4.84244 2.39382 4.84244H2.37452C1.66666 4.84244 1.09396 4.62022 0.656371 4.17578C0.218784 3.73133 0 3.1724 0 2.49901ZM0.250965 20.1758V6.68082H4.53668V20.1758H0.250965ZM6.9112 20.1758H11.1969V12.6404C11.1969 12.169 11.2484 11.8054 11.3514 11.5495C11.5315 11.0916 11.805 10.7044 12.1718 10.3879C12.5386 10.0714 12.9987 9.91314 13.5521 9.91314C14.9936 9.91314 15.7143 10.93 15.7143 12.9636V20.1758H20V12.4384C20 10.4451 19.5496 8.93334 18.6486 7.90304C17.7477 6.87274 16.5573 6.35759 15.0772 6.35759C13.417 6.35759 12.1236 7.10506 11.1969 8.60001V8.64041H11.1776L11.1969 8.60001V6.68082H6.9112C6.93693 7.11179 6.94981 8.45185 6.94981 10.701C6.94981 12.9502 6.93693 16.1084 6.9112 20.1758Z" fill="#2E517E"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/sakra-world-hospital/?viewAsMember=true" aria-label="Sakra LinkedIn link" target="_blank">
                       <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.49901C0 1.8256 0.225232 1.27004 0.675676 0.832346C1.12612 0.394629 1.71172 0.175781 2.43243 0.175781C3.14029 0.175781 3.71299 0.391256 4.15058 0.822245C4.60102 1.26669 4.82625 1.8458 4.82625 2.55962C4.82625 3.20608 4.60747 3.74479 4.16988 4.17578C3.71944 4.62022 3.12741 4.84244 2.39382 4.84244H2.37452C1.66666 4.84244 1.09396 4.62022 0.656371 4.17578C0.218784 3.73133 0 3.1724 0 2.49901ZM0.250965 20.1758V6.68082H4.53668V20.1758H0.250965ZM6.9112 20.1758H11.1969V12.6404C11.1969 12.169 11.2484 11.8054 11.3514 11.5495C11.5315 11.0916 11.805 10.7044 12.1718 10.3879C12.5386 10.0714 12.9987 9.91314 13.5521 9.91314C14.9936 9.91314 15.7143 10.93 15.7143 12.9636V20.1758H20V12.4384C20 10.4451 19.5496 8.93334 18.6486 7.90304C17.7477 6.87274 16.5573 6.35759 15.0772 6.35759C13.417 6.35759 12.1236 7.10506 11.1969 8.60001V8.64041H11.1776L11.1969 8.60001V6.68082H6.9112C6.93693 7.11179 6.94981 8.45185 6.94981 10.701C6.94981 12.9502 6.93693 16.1084 6.9112 20.1758Z" fill="#2E517E"></path>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/user/sakraworldhospital" aria-label="Sakra Youtube link" target="_blank">
                     <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.001 9.88528C23.0505 8.45393 22.7374 7.03329 22.091 5.75528C21.6524 5.23088 21.0437 4.87699 20.371 4.75528C17.5885 4.5028 14.7945 4.39932 12.001 4.44528C9.21765 4.39724 6.43371 4.49738 3.661 4.74528C3.11282 4.84499 2.60552 5.10212 2.201 5.48528C1.301 6.31528 1.201 7.73528 1.101 8.93528C0.955916 11.0928 0.955916 13.2577 1.101 15.4153C1.12993 16.0907 1.2305 16.7611 1.401 17.4153C1.52158 17.9203 1.76553 18.3876 2.111 18.7753C2.51827 19.1787 3.03739 19.4505 3.601 19.5553C5.75692 19.8214 7.92922 19.9317 10.101 19.8853C13.601 19.9353 16.671 19.8853 20.301 19.6053C20.8785 19.5069 21.4122 19.2348 21.831 18.8253C22.111 18.5452 22.3201 18.2024 22.441 17.8253C22.7986 16.7279 22.9743 15.5794 22.961 14.4253C23.001 13.8653 23.001 10.4853 23.001 9.88528ZM9.741 15.0253V8.83528L15.661 11.9453C14.001 12.8653 11.811 13.9053 9.741 15.0253Z" fill="#2E517E"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="footer-links d-grid">
                    <div class="col">
                        <h3>Institute Of Excellence</h3>
                                                                            <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/brain-and-spine/2" title="Best Neuro Hospital In Bangalore">Brain and Spine                            </a>
                                                                            <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/cardiac-sciences/1" title="Best Heart Hospital In Bangalore">Cardiac Sciences                            </a>
                                                                            <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/obstetrics-and-gynaecology/3" title="Best Gynaecology &amp; Maternity Hospital in Bangalore">Obstetrics and gynaecology                            </a>
                                                                            <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/orthopaedics/7" title="Best orthopedic and Knee Replacement Hospital in Bangalore">Orthopaedics                            </a>
                                                                            <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/pediatrics-and-pediatric-superspeciality/28" title="Best Child Hospital In Bangalore">Pediatrics and Pediatric Superspeciality                            </a>
                                                                            <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/rehabilitation-sciences/26" title="Best Rehabilitation Centre In Bangalore">Rehabilitation Sciences                            </a>
                                            </div>
                                                        <div class="col">
                                                                            <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/renal-sciences/5" title="Kidney Hospital In Bangalore">Renal Sciences                            </a>
                                                <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/digestive-and-hpb-sciences/-department-of-gastrointestinal-surgery-and-liver-transplant/15" title="">Gastrointestinal Surgery and Liver Transplant
                        </a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/centres-and-specialities/digestive-and-hpb-sciences/medical-gastroenterology--liver-diseases/17" title="">Medical Gastroenterology &amp; Liver Diseases
                        </a>
                        <h3>Patient care</h3>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/patient-info">Patient info</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/sakra-advantage">Sakra advantages</a>
                    </div>
                    <div class="col">
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/patient-friendly-approach">Patient Friendly Approach</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/emergency-service">Emergency Services</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/patient-support-service">Patient Support Services</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/billing-insurance-payments">TPA &amp; Insurance</a>
                        <h3>News &amp; events</h3>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/cme">CME &amp; conferences</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/organ-transplant-authorization">Organ transplant authorisation</a>
                    </div>
                    <div class="col">
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/bio-medical-waste-report">BMW report</a>
                        <h3>About us</h3>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/about-sakra">About</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/quality-safety">Quality &amp; safety</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/contact-us">Contact us</a>
                        <a className = "footer-menu" href="https://www.sakraworldhospital.com/sitemap">Sitemap</a>
                        <a  className = "footer-menu" href="https://www.sakraworldhospital.com/career">Career</a>
                    </div>
                </div>
                <div class="scam-div">
                    <div class="scam-alert">
                        <a href="https://www.sakraworldhospital.com/disclaimer">Scam Alert</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <hr/>
        <div class="copy-right">
            <p>2025 Sakra. All Rights Reserved.</p>
            <a className="footer-menu" href="https://www.sakraworldhospital.com/privacy-policy">Privacy Policy</a>
            <a className="footer-menu" href="https://www.sakraworldhospital.com/disclaimer">Terms of Use</a>
            <a className="footer-menu" href="https://www.sakraworldhospital.com/patient-info">Patient Policy</a>
            <a className="footer-menu" href="https://www.sakraworldhospital.com/vc_terms_and_conditions">VC Terms and Conditions</a>
        </div>
    </div>
</footer>
   </>
  );
}

export default Footer;