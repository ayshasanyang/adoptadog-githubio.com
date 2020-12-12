import React from "react";
// import "../index.css"

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
           <div className="col-lg-7">
            <img
              className="img-fluid w-100 h-auto"
              src={process.env.PUBLIC_URL +"/images/white-dog.jpg"}
              alt="White Dog"
            />
          </div> 
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="col-md-4"></div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#donate">DONATE</a>
            <img src={process.env.PUBLIC_URL +"/images/cute-dog.jpeg"} className="img-circle" alt="..."></img>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#blog">BLOG</a>
            <img src={process.env.PUBLIC_URL +"/images/dog2.jpg"} className="img-circle" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;