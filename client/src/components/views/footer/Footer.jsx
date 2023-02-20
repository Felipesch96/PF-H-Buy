import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div>
      <footer class="container-fluid footer d-flex align-items-center justify-content-around">
          <div>
            <Link to={{ pathname: "https://whatsapp.com/" }} target="_blank" className="col-4"><i class="bi bi-whatsapp"></i></Link>
          </div>
          <div>
            <Link to={{ pathname: "https://github.com/" }} target="_blank" className="col-4"><i class="bi bi-github"></i></Link>
          </div>
          <div>
            <Link to={{ pathname: "https://instagram.com/" }} target="_blank" className="col-4"><i class="bi bi-instagram"></i></Link>
          </div>
          <div class="envelop">
            <Link to="">
              <i class="bi bi-envelope"></i>
            </Link>
          </div>


      </footer>
      <footer class="container-fluid copyright bg-dark text-center copyright py-2">
        <span class="">Copyrigth 2022-2023 H-Buy SA - pending pattent &#174;</span>
              </footer>

    </div>
  )
};

export default Footer;