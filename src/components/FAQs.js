import React from 'react';
import './FAQs.css'; // Import your custom CSS

export default function FAQs() {
  return (
    <>
    <div className="container my-5 d-flex justify-content-center">
       
      <div 
        className="accordion" 
        id="accordionExample" 
        style={{ width: '867px' }}
      > <h2>FAQs</h2>
        <div className="accordion-item my-5">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button arrow-red"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is GDG?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
            </div>
          </div>
        </div>

        <div className="accordion-item my-5">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button arrow-blue"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can you become a part of GDG?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.
            </div>
          </div>
        </div>

        <div className="accordion-item my-5">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button arrow-green"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What does a GDG Lead do?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.
            </div>
          </div>
        </div>

        <div className="accordion-item my-5">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button arrow-orange"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How is DSC related to Google?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.
            </div>
          </div>
        </div>

        <div className="accordion-item my-5">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button arrow-purple"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How to reach us?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
    Mail us at: "<u>dsc.dev@gmail.com</u>"
</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
