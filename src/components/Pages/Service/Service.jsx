import React from "react";
import "./Service.css";
import Nave from "../../Navbar/Nave";
import Footer from "../../Footer/Footer";
import Banner1 from "../../../asset/images/aboutbanner.jpg";
import Typography from "@material-ui/core/Typography";
import Slider3 from "../../../asset/images/slider3.jpg";
import Salon1 from "../../../asset/images/salonpiv.jpg";
import Seats from "../../../asset/images/seats.jpg";
import Beauty from "../../../asset/images/beautysecret.jpg";
import Massage2 from "../../../asset/images/therapy/massage1.jpeg";
import Manicure from "../../../asset/images/pedicure/pedicure1.jpg";
import Vitamin from "../../../asset/images/vitamin.jfif";
import Laser from "../../../asset/images/Medspa/medspa1.PNG";
import Chem from "../../../asset/images/chem.jfif";
import Spa from "../../../asset/images/room1.jpg";
import Massage3 from "../../../asset/images/facials/facial1.PNG";

import Grid from "@material-ui/core/Grid";

function Service() {
  const [show, setShow] = React.useState();
  const [old, setOld] = React.useState();
  const [older, setOlder] = React.useState();
  const [oldest, setOldest] = React.useState();

  return (
    <div>
      <Nave />
      <div className="banner" style={{ backgroundImage: `url(${Banner1})` }}>
        <Typography variant="h2" className="head">
          Our Services
        </Typography>
      </div>

      <div className="card-holder">
        <div id="cards1">
          <img src={Laser} alt="pic" className="card-img" />

          <div className="card-cont">
            <h1 className="card-name">MEDICAL SPA SERVICES</h1>

            <p className="top-text">
              Our medical and therapeutic team of medical spa services provides
              advanced nonsurgical medical treatments for cosmetic, anti-aging
              and beauty enhancement of the face and body, with benefits such as
              feeling rejuvenated, soothed and confident in your unique
              personality. We offer a number of cosmetic and non-surgical face
              and body treatments, some of which are...
              {show ? (
                <span className="read-more">
                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Vitamin} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="h5" className="sub-head">
                        Vitamin Skin Infusions Benefits
                      </Typography>
                      <Typography variant="h6">
                        Vitamin injections allow your body to utilize 100% of
                        the nutrients since they are administered directly into
                        your bloodstream, it helps to maintain skin grid
                        texture, give radiant and even-tone skin. We offer
                        Glutathione injections, Flawless Skin, Detox programs,
                        collagen and l-ascorbic injections…
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} d-flex className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Laser} alt="vitamin" />
                    </Grid>
                    {/**/}
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="h5" className="sub-head">
                        Laser Treatments
                      </Typography>
                      <Typography variant="h6">
                        <span>Laser Hair Removal:</span> This is a procedure
                        that uses scientifically developed frequencies of light
                        that are absorbed by the pigment in the hair which
                        extinguishes the hair follicles. The ND-YAG laser
                        machine is used for this procedure.
                      </Typography>
                      <Typography variant="h6">
                        <span>Laser Spot Removal: :</span>involves the use of
                        laser machines producing light designed to absorb
                        pigments causing them to gradually disappear. The
                        Q-SWITCH laser machine is used for this procedure.
                      </Typography>
                      <Typography variant="body">
                        <span> Laser Scar Removal: </span>it is the use of laser
                        to remove old, damaged layer of the skin so that a new
                        healthier skin can grow in its place. The CO2 laser
                        machine is used for this procedure.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Chem} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="h5" className="sub-head">
                        Chemical Peels
                      </Typography>
                      <Typography variant="body">
                        Chemical peels improve the appearance of skin and
                        colour, reduces age spots, melasma, wrinkles, freckles
                        and sunburns. It treats certain types of acne and adds
                        clarity & glow to the skin. It stimulates new collagen
                        while exfoliating the skin.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="vitamin-cont">
                    <Grid container xs={12}>
                      <img src={Massage2} alt="vitamine" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="h5" className="sub-head">
                        Pain Management
                      </Typography>
                      <Typography variant="body">
                        This is a soothing treatment that involves a minimally
                        invasive method to stimulate nerves on the skin surface
                        and influence tissues, glands, and organs of the body.
                        It also stimulates immune system, promoting circulation
                        to the area, modulating pain, anxiety, depression,
                        hypertension, insomnia, migraines, strokes, chronic
                        pains often in the neck, back, knees and head. We offer
                        acupuncture and cupping therapy.
                      </Typography>
                    </Grid>
                  </Grid>
                </span>
              ) : null}
            </p>

            <span className="read-more-btn" onClick={() => setShow(!show)}>
              read more...
            </span>
          </div>
        </div>

        <div id="cards2">
          <img src={Spa} alt="pic" className="card-img" />

          <div className="card-cont">
            <h1 className="card-name">SPA SERVICES</h1>
            <p>
              <Typography>
                Relish the Royal treatment from the moment you step through the
                door, with every detail tailored to provide the ultimate
                experience of relaxation and luxury at every visit.{" "}
              </Typography>

              {old ? (
                <span className="read-more">
                  <Typography>
                    Massage is the kneading of superficial and deeper layers of
                    muscle and connective tissue, using various techniques to
                    enhance function, aid in the healing process, and promote
                    relaxation and well-being. We offer intercontinental Massage
                    therapy sessions and our sessions are structured to give you
                    the best experience and leave you feeling revitalized. We
                    offer Swedish, Anti-Stress, Deep Tissue, Aromatherapy,
                    Prenatal, Reflexology, Scalp and Hot Stone massage.
                  </Typography>

                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Chem} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="h5" className="sub-head">
                        Facials
                      </Typography>
                      <Typography variant="body">
                        Attend to your most pressing skin concerns and improve
                        the health of your skin with a professional facial
                        treatment. We offer various facial treatments which are
                        essentially a multi-step skin treatment that cleanses,
                        exfoliates, and nourishes the skin, promoting a clear,
                        well hydrated complexion and can help your skin look
                        younger. We also provide advisory services to clients on
                        best possible ways to take care of their skin. We
                        introduce treatments that are customized to meet the
                        needs of your skin. We offer Hydra Facial Treatments,
                        Deep cleanse Facial, Anti-Acne Facial, Vitamin C Facial,
                        Gold Collagen Facial, amongst others.
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Chem} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="body">
                        <Typography variant="h5" className="sub-head">
                          Waxing
                        </Typography>
                        <Typography>
                          Attend to your most pressing skin concerns and improve
                          the health of your skin with a professional facial
                          treatment. We offer various facial treatments which
                          are essentially a multi-step skin treatment that
                          cleanses, exfoliates, and nourishes the skin,
                          promoting a clear, well hydrated complexion and can
                          help your skin look younger. We also provide advisory
                          services to clients on best possible ways to take care
                          of their skin. We introduce treatments that are
                          customized to meet the needs of your skin. We offer
                          Hydra Facial Treatments, Deep cleanse Facial,
                          Anti-Acne Facial, Vitamin C Facial, Gold Collagen
                          Facial, amongst others.
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Chem} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="body">
                        <Typography variant="h5" className="sub-head">
                          Body Treatments
                        </Typography>
                        <Typography>
                          We offer a variety of Body Treatments which include
                          morrocan Hammam (Body baths such as Deep Exfoliating
                          Hammam, Extra Brightening Hammam, Souqla, Cleopatra
                          and Hydrating Hammam, Gold body Wrap… These treatments
                          amongst others help to exfoliate the skin in order to
                          promote efficient circulation & Skin cell turnover,
                          smoothening & softening rough dry skin.
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Spa} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="body">
                        <Typography variant="h5" className="sub-head">
                          Eyebrow Tinting, Threading & Eyelash Extensions
                        </Typography>
                        <Typography>
                          Eyebrow tinting makes your brows stand out as they
                          will look darker, show a full brow volume and We have
                          a variety of sizes of eyelash extensions that can be
                          combined to create any look from subtle and natural to
                          trendy and glamorous. Each lash application is a work
                          of art with an intricate finish as each eyelash
                          extension is meticulously applied lash-by-lash and
                          bonded with the best adhesive on the market. It is
                          very long-lasting and the transformation is
                          incredible.
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </span>
              ) : null}
            </p>
            <span className="read-more-btn" onClick={() => setOld(!old)}>
              read more...
            </span>
          </div>
        </div>
        <div id="cards3">
          <img src={Salon1} alt="pic" className="card-img" />

          <div className="card-cont">
            <h1 className="card-name">OUR HAIR SALON</h1>
            <p>
              <Typography>
                At Beauty Secret Salon we avidly care about our hair services,
                we offer our clients the very best in hair care products as it
                relates to their hair veracity. Our highly trained staff and
                expert level stylists all continue to receive exercise to ensure
                that they are up to date in the latest trends and techniques. We
                welcome you to a remarkable experience at Beauty Secret Salon.
              </Typography>

              {older ? (
                <span className="read-more">
                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Seats} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="h5" className="sub-head">
                        NAIL STUDIO
                      </Typography>
                      <Typography variant="body">
                        We provide professional Manicure and Pedicure services
                        with top notch products and facilities. Our nail
                        technicians are the finest in town, offering customized
                        services on demand on Luxury Amber Masque, Hot Stones
                        and Paraffin treatments. This treatment helps to take
                        out callus from the feet and nails leaving a smooth and
                        silky skin. we also offer selection of treatments which
                        include Acrylics, Gels, Gel Polish and Nail Art. Sink
                        into a deep state of relaxation at our exquisite nail
                        studio
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Chem} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="body">
                        <Typography variant="h5" className="sub-head">
                          HAIR GALLERY
                        </Typography>
                        <Typography>
                          Beauty Secrets Hair Gallery offers a wide range of
                          quality hair extensions proven to be of best quality
                          on a global scale. we ensure provision of quality
                          assurance on our products, enabling proximity between
                          world class products and our esteemed customers.
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </span>
              ) : null}
            </p>
            <span className="read-more-btn" onClick={() => setOlder(!older)}>
              read more...
            </span>
          </div>
        </div>
        <div id="cards4">
          <img src={Beauty} alt="pic" className="card-img" />

          <div className="card-cont">
            <h1 className="card-name">OUR SOLUTION AND INNOVATION </h1>
            <p>
              <Typography>
                At Beauty Secrets we key into our customer’s expectations,
                enabling ease of access to quality products and services, and
                guaranteeing that our customers enjoy the best care using
                quality products and state of the art equipment.
              </Typography>

              {oldest ? (
                <span className="read-more">
                  <Typography variant="body">
                    Our attention to detail in our service delivery makes us the
                    best at what we do, which includes our focus on providing
                    healthy skin care products from around the world aimed for
                    our customer’s satisfaction and comfort. We have a standard
                    work station, go-to shopping sites for our customer’s easy
                    reach with adequate staffing for seamless production when
                    handling customer orders in accordance with national and
                    international standards. We have automated power systems
                    such as the ND-YAG laser hair removal machines, the QSWITCH
                    laser spot removal machines, CO2 laser machines,
                    microdermabrasion, dermafrac and facial machines amongst a
                    host of other state of the art equipment that meets best
                    practices. Beauty Secrets has in-house Certified
                    Dermatologists, Aestheticians and Cosmetologists for various
                    skin and body treatments, engaging traditional and
                    contemporary measures.
                  </Typography>

                  <Grid item xs={12} className="vitamin-cont">
                    <Grid item xs={12}>
                      <img src={Chem} alt="vitamin" />
                    </Grid>
                    <Grid item xs={12} className="vitamin-body">
                      <Typography variant="body">
                        <Typography>HAIR GALLERY</Typography>
                        <Typography>
                          Beauty Secrets Hair Gallery offers a wide range of
                          quality hair extensions proven to be of best quality
                          on a global scale. we ensure provision of quality
                          assurance on our products, enabling proximity between
                          world class products and our esteemed customers.
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </span>
              ) : null}
            </p>
            <span className="read-more-btn" onClick={() => setOldest(!oldest)}>
              read more...
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Service;
