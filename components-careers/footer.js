import React from "react";
import Link from "next/link";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row contact-box-wrapper">

          {/* <!-- CONTENT FOR THE MOBILE NUMBER --> */}

          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon"><svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" strokeWidth="1" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg></div>
            <div className="contact-box__info">
              <Link href="" className="contact-box__info--title">+91-6006511429</Link>
              <p className="contact-box__info--subtitle">Mon-Fri 9am-6pm</p>
            </div>
          </div>

          {/* <!-- CONTENT FOR THE EMAIL --> */}

          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24"
                strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="3 9 12 15 21 9 12 3 3 9" />
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <line x1="3" y1="19" x2="9" y2="13" />
                <line x1="15" y1="13" x2="21" y2="19" />
              </svg>
            </div>
            <div className="contact-box__info">
              <Link href="mailto: support@hakxcore.io" className="contact-box__info--title">support[at]hakxcore[dot]io</Link>
              <p className="contact-box__info--subtitle">Online Support</p>
            </div>
          </div>

          {/* <!-- CONTENT FOR THE LOCATION --> */}

          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24"
                strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="18" y2="6.01" />
                <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                <line x1="9" y1="4" x2="9" y2="17" />
                <line x1="15" y1="15" x2="15" y2="20" />
              </svg>
            </div>
            <div className="contact-box__info">
              <Link target="_blank" aria-label="Maps Link" href="https://maps.app.goo.gl/L3n3WV8t6dLMTT1c8" className="contact-box__info--title" rel="noopener noreferrer">Balewadi High Street</Link>
              <p className="contact-box__info--subtitle">Pune Maharashtra 411045</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- START THE SOCIAL MEDIA CONTENT --> */}

      <div className="footer-sm">
        <div className="container">
          <div className="row py-4 text-center text-white">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              Connect with us on social media
            </div>
            <div className="col-lg-7 col-md-6">
              <Link aria-label="Twitter" href="https://www.twitter.com/hakxcore"><i className="fa-brands fa-x-twitter"></i></Link>
              <Link aria-label="Github" href="https://github.com/hakxcore"><i className="fab fa-github"></i></Link>
              <Link aria-label="Instagram" href="https://instagram.com/hakxcore"><i className="fab fa-instagram"></i></Link>
              <Link aria-label="Whatsapp" href="https://wa.me/+916006511429"><i className="fab fa-whatsapp"></i></Link>
              <Link aria-label="Telegram" href="https://t.me/hakxcore_bot"><i className="fab fa-telegram"></i></Link>
              <Link aria-label="Linkedin" href="https://www.linkedin.com/company/hakxcore"><i className="fab fa-linkedin"></i></Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- START THE CONTENT FOR COMPANY INFO --> */}

      <div className="container mt-5 company-info px-3">
        <div className="row text-white justify-content-center mt-3 pb-3">
          <div className="col-12 col-sm-6 col-lg-6 mb-4 mb-sm-4 mb-md-0">
            <h5 className="text-capitalize fw-bold">Information Technology</h5>
            <hr className="bg-white d-inline-block mb-4" />
            <p className="lh-lg pe-md-5">
              We always seeking new ways to create value for our clients.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">Services</h5>
            <hr className="bg-white d-inline-block mb-4" />
            <ul className="list-inline company-list">
              <li><Link aria-label="Contact" href="#contact" target="_blank" rel="noopener noreferrer">Single Sign-On</Link></li>
              <li><Link aria-label="Contact" href="#contact" target="_blank" rel="noopener noreferrer">Blockchain Development</Link></li>
              <li><Link aria-label="Contact" href="#contact" target="_blank" rel="noopener noreferrer">Red Team/Blue Team</Link></li>
              <li><Link aria-label="Telegram bot" href="https://t.me/hakxcore_bot" target="_blank" rel="noopener noreferrer">more...</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto pt-md-4 pt-lg-0">
            <h5 className="text-capitalize fw-bold">Useful Links</h5>
            <hr className="bg-white d-inline-block mb-4" />
            <ul className="list-inline company-list">
            {/* <li><Link href="#">Your Account</Link></li>
            <li><Link href="#">Become an Affiliate</Link></li>
            <li><Link href="#">Create an account</Link></li> */}
              <li><Link aria-label="Careers Link" href="/careers" rel="noopener noreferrer">Careers</Link></li>
              <li><Link aria-label="Contact" target="_blank" href="https://wa.me/+916006511429?text=Hi!%20I%20need%20instant%20help" rel="noopener noreferrer">Instant Help</Link></li>
              <li><Link aria-label="Feedback" target="_small" href="https://qualtricsxmnz38x9dvx.qualtrics.com/jfe/form/SV_cUrYdmwREBFhst8" rel="noopener noreferrer">Feedback</Link></li>
              <li><Link aria-label="Hakxcore status" target="_blank" href="https://hakxcore.instatus.com/" rel="noopener noreferrer">Status</Link></li>
              <li><Link aria-label="Hakxcore status" href="/privacy-policy" rel="noopener noreferrer">Privacy Policy</Link></li>
              <li><Link aria-label="Hakxcore status" href="/terms-and-conditions" rel="noopener noreferrer">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto pt-md-4 pt-lg-0">
            <h5 className="text-capitalize fw-bold">Contact</h5>
            <hr className="bg-white d-inline-block mb-4" />
            <ul className="list-inline company-list">
              <li><Link aria-label="Email" href="mailto: tech@hakxcore.io">Send Email</Link></li>
              <li><Link aria-label="Whatsapp" href="https://wa.me/+916006511429" target="_blank" rel="noopener noreferrer">Whatsapp</Link></li>
              <li><Link aria-label="Telegram" href="https://t.me/hakxcore_bot" target="_blank" rel="noopener noreferrer">Telegram</Link></li>
              <li><Link aria-label="Instagram" href="https://instagram.com/hakxcore" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
              <li><Link aria-label="Linkedin" href="https://www.linkedin.com/company/hakxcore" target="_blank" rel="noopener noreferrer">Linkedin</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- START THE COPYRIGHT INFO --> */}

      <div className="footer-bottom py-5">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-12">
              <div className="footer-bottom__copyright">
                &copy; 2023-{currentYear} <Link aria-label="Hakxcore" href="https://hakxcore.io">hakxcore.</Link> All rights reserved, Built with ❤️ in India<br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default FooterSection;
