import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <section id="testimonial">
        <div className="container text-center testimonial_area">
          <h2>Customer Reviews</h2>
          <p>Reviews from some of our Customers</p>

          <div className="row">
            <div className="col-md-4">
              <div className="testimonial_item">
                <div className="testimonial_content text-left">
                  <p>
                    Beauty Secrets is simply the best, I’m proud to be
                    associated with such an amazing brand.They are reliable ~
                    @monalisacode
                  </p>
                </div>
                <img src="images/monalisa.jpg" alt="Testimonial" />
                <p className="worker_name">Monalisa Chinda</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial_item">
                <div className="testimonial_content">
                  <p>
                    Beauty Secrets is a one stop shop for everything beauty, had
                    a massage and its heavenly, got all stress rolled ~
                    @k8hansaw
                  </p>
                </div>
                <img src="images/kate.jpg" alt="Testimonial" />
                <p className="worker_name"> Kate Henshaw</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial_item">
                <div className="testimonial_content text-left">
                  <p>
                    I did my facials at beauty secrets and I really enjoyed it
                    and enjoyed their services, all love. I will be visiting
                    soon again ~ @regina.daniels
                  </p>
                </div>
                <img src="images/regina.jpg" alt="Testimonial" />
                <p className="worker_name">Regina Daniels</p>
              </div>
            </div>
          </div>
          {/****row 2*******/}
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial_item">
                <div className="testimonial_content">
                  <p>
                    Beauty Secrets is a place to be, such an amazing experience,
                    the staff are so lovely; came here so tired and now looking
                    refreshed. ~ @aishayesufu
                  </p>
                </div>
                <img src="images/aisha.jpg" alt="Testimonial" />
                <p className="worker_name">Aisha Yesufu</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial_item">
                <div className="testimonial_content">
                  <p>
                    I will recommend beauty secrets to everyone; just had the
                    most sincerely and amazing experience at Beauty Secrets,
                    thank you beauty secrets. ~ @mosesbliss
                  </p>
                </div>
                <img src="images/moses.png" alt="Testimonial" />
                <p className="worker_name">Dayo Benlaniyi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
