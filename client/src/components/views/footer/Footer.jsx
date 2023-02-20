import React from "react";
import { Link } from "react-router-dom";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div>
      <footer class="container-fluid bg-light px-0">
        <div class="container py-lg-5 py-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 px-4">
              <span class="h5">ABOUT US</span>
              <p>

              </p>
            </div>
            <div class="col-lg-5 col-md-6 px-4 mt-md-0 mt-3">
              <span class="h5">CONTACT US</span>
              <p>
                All the feedback that you can provide to us is really usefull, if something can be better on this web page, let us know!
                Please fill the following form and share whit us what you think, thanks!

              </p>
              <div className="row container">
                <Link to={{ pathname: "https://whatsapp.com/" }} target="_blank" className="col-4"><i class="bi bi-whatsapp"></i></Link>
                <Link to={{ pathname: "https://github.com/" }} target="_blank" className="col-4"><i class="bi bi-github"></i></Link>
                <Link to={{ pathname: "https://instagram.com/" }} target="_blank" className="col-4"><i class="bi bi-instagram"></i></Link>
              </div>
            </div>
            <div class="col-lg-4 px-4 mt-lg-0 mt-3">
              <form>
                <div class="mb-1">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" name="name" />
                </div>
                <div class="mb-1">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" name="email" />
                </div>
                <div class="form-group mb-1">
                  <label class="form-label" for="message ">Message</label>
                  <textarea class="form-control" id="message" name="message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <footer class="container-fluid bg-dark text-center footer py-2">
        <span class="">Copyrigth 2022-2023 H-Buy SA - pending pattent &#174;</span>
      </footer>

    </div>
  )
};

export default Footer;