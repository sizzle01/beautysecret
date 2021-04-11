import React from "react";
import "./Service.css";
import Nave from "../../Navbar/Nave";
import Footer from "../../Footer/Footer";
import Banner1 from "../../../asset/images/aboutbanner.jpg";
import Typography from "@material-ui/core/Typography";
import Slider3 from "../../../asset/images/slider3.jpeg";
import Grid from "@material-ui/core/Grid";
function Service() {
  return (
    <div>
      <Nave />
      <div className="banner" style={{ backgroundImage: `url(${Banner1})` }}>
        <Typography variant="h3" className="head">
          Our Services
        </Typography>
      </div>

      <div>
        <Grid item xs={12}>
          <Grid container className="grid-cont">
            <Grid item className="head-pic">
              <Typography variant="h3">Our Salon</Typography>

              <Grid className="pic">
                <img src={Slider3} alt="salon image" />
              </Grid>
            </Grid>
            <Typography variant="h5" className="service-info">
              At Beauty Secret Salon we use and offer our clients the very best
              in hair care products. We passionately care about our hair
              services and the integrity of your hair. Our highly trained staff
              of 20 professional & expert level stylists all continue to receive
              education to ensure that they are up to date in the latest trends
              and techniques. We welcome you to come experience all we have to
              offer at Beauty Secret Salon.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid item xs={12}>
          <Grid container className="grid-cont pedmed">
            <Grid item className="head-pic">
              <Typography variant="h3">Facials</Typography>
              <Grid className="pic">
                <img src={Slider3} alt="salon image" />
              </Grid>
            </Grid>
            <Typography variant="h5" className="service-info">
              People get facials for different reasons: some people want those
              horrible blackheads out! Others start taking care of their skin in
              their 20s to preserve a youthful look. Older people want some help
              with anti-aging regimens. And then there are the people who just
              want to relax and be pampered. These are all fine reasons to get
              facials. But often the facial itself is a bit mysterious. What
              does the steam do? Why do they keep putting creams on and taking
              them off? Why get facials regularly? A facial is essentially a
              multi-step skin treatment that is one of the best ways to take
              care of your skin. A facial cleanses, exfoliates, and nourishes
              the skin, promoting a clear, wellhydrated complexion and can help
              your skin look younger. You also receive advice on the best way to
              take care of your skin. A facial works best when it is part of an
              on-going program of skin care. It is best to find an experienced,
              knowledgeable licensed esthetician who has special training in
              skin care and is knowledgeable, fastidious, and passionate about
              her work. Legally, a cosmetologist is allowed to give facials, but
              their primary training is in hair, so they might not be the best
              choice. There is also a trend toward dual-licensed therapists,
              where the person is licensed to give both massage and facials. Be
              on the lookout for this in a resort setting, especially if you’d
              rather go to someone who gives facials all the time. A facial is
              the second most popular spa treatment after a massage.
            </Typography>
            <Grid className="facial-desc">
              <Typography variant="h5" className="service-sub">
                THE BASIC STEPS OF A FACIAL
              </Typography>

              <Typography variant="h5" className="service-cat">
                <span>Consultation</span>: A facial should begin with a
                consultation. You might fill out a form with questions about
                your skin concerns, your diet, how much water you drink, which
                drugs and supplements you take, and products you are currently
                using. Retin-A and other drugs can affect your skin and what
                kind of treatments the aesthetician recommends. More commonly,
                the aesthetician will simply ask about your skin concerns and if
                you are using Retin-A.
              </Typography>
              <Typography variant="h5" className="service-cat">
                <span>Preparations</span>: Usually, the aesthetician offers a
                wrap that goes around your body and underneath your arms, then
                closes with Velcro. She leaves the room so you can put it on in
                privacy. Some people remove all their clothes before putting on
                the wrap, some leave their pants on, and some even leave their
                bra on and put the straps underneath their arms. And at some
                spas, you are invited to take off some or all of your clothes
                and get between the sheets. Don’t worry too much —— the
                aesthetician will let you know the protocol where you are.
              </Typography>

              <Typography variant="h5" className="service-cat">
                <span>Cleansing</span>: Usually, the aesthetician starts by
                wrapping your hair with a towel or headband to keep product off
                of it. The first step is thorough cleansing, using cotton pads,
                aesthetician wipes or sponges. Most professional facials do a
                double-cleanse.
              </Typography>
              <Typography variant="h5" className="service-cat">
                <span>Skin Analysis and Cleansing</span>: Depending on whether
                you have make-up on, the aesthetician might look at your skin
                under a bright lamp first, or covers your eyes and looks at your
                skin through a brightly lit magnifying lamp. She is determining
                your basic skin type (dry, oily, combination, sensitive or
                normal) and skin conditions (acne, blackheads, whiteheads,
                aging, sun-damage, dehydration, etc.). The aesthetician then
                chooses the appropriate products and treatments and consults
                with you about what he or she sees and recommends.
              </Typography>
              <Typography variant="h5" className="service-cat">
                <span>Steam</span>:Most facials use a machine that directs a
                thin vapor of warm steam to your face. This is relaxing and
                helps softens up any blackheads and whiteheads to be extracted.
                If you have very sensitive skin, the aesthetician may not use
                steam.
              </Typography>
              <Typography variant="h5" className="service-cat">
                <span>
                  Exfoliation using a mechanical or chemical exfoliant
                </span>
                : Mechanical exfoliants have a gritty texture that rubs away the
                surface dead skin cells. This type of exfoliation usually
                happens during the steam. Chemical exfoliation uses enzymes and
                acids to loosen the bond between skin cells. A gentle enzyme
                treatment can be done during the steam. Stronger chemical peels,
                which vary in intensity, can be a stand-alone treatment or part
                of the facial. It is not generally an “upgrade” and done in a
                series. It is not done with steam.
              </Typography>
              <Typography variant="h5" className="service-cat">
                <span>Extractions</span>: This is the removal of blackheads or
                whiteheads if you want it and need it. People have different
                pain tolerance for extractions. They can be uncomfortable,
                especially on thin or ruddy skin. Extractions can cause broken
                capillaries and discoloration if done improperly.
              </Typography>
              <Typography variant="h5" className="service-cat">
                <span>Facial massage</span>: using classic strokes like
                effleurage to both relax you and stimulate your skin and facial
                muscles.
              </Typography>
              <Typography variant="h5" className="service-cat">
                <span>Facial mask</span>: targeted to your skin type (dry, oily,
                combination, sensitive, mature) and condition. During the
                facial, the aesthetician should stay in the room and give you a
                scalp massage or some other service. If they leave the room to
                let you “relax,” don’t go back.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid item xs={12}>
          <Grid container className="grid-cont pedmed">
            <Typography variant="h4">MASSAGE THERAPY</Typography>
            <Grid container xs={12} spacing={4} className="grid-cont2">
              <Grid item className="massage-images">
                <img src={Slider3} alt="salon image" />
                <Typography className="pedmed-desc">Couples Massage</Typography>
              </Grid>
              <Grid item>
                <img src={Slider3} alt="salon image" />
                <Typography className="pedmed-desc">
                  Single’s Massage
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h5" className="service-info">
              Massage therapy has a long history in cultures around the world.
              Today, people use many different types of massage therapy for a
              variety of health-related purposes. In the United States, massage
              therapy is often considered part of complementary and alternative
              medicine (CAM), although it does have some conventional uses. This
              fact sheet provides a general overview of massage therapy and
              suggests sources for additional information.
            </Typography>
            <Typography variant="h5" className="therapy-heading">
              WHAT IS MASSAGE THERAPY, AND WHAT ARE THE TYPES OF MASSAGE?
            </Typography>
            <Typography variant="h5" className="service-info">
              The term “massage therapy” encompasses many different techniques
              (see box for examples). In general, therapists press, rub, and
              otherwise manipulate the muscles and other soft tissues of the
              body. They most often use their hands and fingers but may use
              their forearms, elbows, or feet.
            </Typography>
            <Typography variant="h5" className="therapy-heading">
              TYPES OF MASSAGE THERAPY: SOME EXAMPLES
            </Typography>
            <Typography variant="h5" className="service-info">
              In massage, the therapist uses long strokes, kneading, deep
              circular movements, vibration, and tapping. Sports massage is
              similar to Swedish massage, adapted specifically to the needs of
              athletes. Among the many other examples are deep tissue massage
              and trigger point massage, which focuses on myofascial trigger
              points — muscle “knots” that are painful when pressed and can
              cause symptoms elsewhere in the body.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid item xs={12}>
          <Grid container className="grid-cont">
            <Typography className="therapy-heading" variant="h4">
              MANICURE & PEDICURE
            </Typography>
            <img src={Slider3} alt="salon image" />
            <Typography variant="h5">
              Below are some of the most crucial health benefits of manicure and
              pedicure
            </Typography>

            <Typography variant="h5" className="service-info ">
              <span>1. Benefits of Manicure & Pedicure on Skin Health</span>:
              Our hands are exposed to the outside dust and dirt all throughout
              the day. They accumulate grime quite easily and also constantly
              create new skin cells sloughing off the old ones. Considering our
              feet; walking all day can create callouses and can also cause
              various other odd skin conditions in the feet. A professional
              manicure and pedicure helps in exfoliating your skin in hands and
              feet, helps in bringing a softer and clearer appearance to the
              hands and feet. Pedicure helps in removing callouses and manicure
              aids in removing the grime and the dead skin cells. Thus the
              mani-pedi treatment helps greatly in gifting attractive and
              grooming hands and feet respectively.
            </Typography>
            <Typography variant="h5" className="service-info">
              <span>
                2 . Benefits of Manicure & Pedicure in Clearing Fungal
                Infections from Nails
              </span>
              : Usually the toe nails and sometimes the finger nails are
              infected with the fungal infection because of the overexposure to
              moisture. Though such a fungal infection takes around two weeks to
              show its symptoms for identification, a professional manicure and
              pedicure treatment will alert you about the infection at an early
              stage. It is a great idea to have the mani-pedi treatments on
              regular intervals for maintaining better health of toe and finger
              nails.
            </Typography>
            <Typography variant="h5" className="service-info">
              <span>
                3. Benefits of Manicure & Pedicure in Improving Blood Flow
              </span>
              : Manicure and pedicure treatments include massaging of the skin
              along with the exfoliation, moisturising and cuticle treatments.
              This massage from a professional manicurist or pedicurist aids in
              providing incredible relaxation and also assist in increasing the
              blood flow to your extremities. This in turn can help you reduce
              pain and aid your body distribute the heat during winter months.
            </Typography>
            <Typography variant="h5" className="service-info">
              <span>4. Benefits of Manicure & Pedicure on Mental Health</span>:
              One of the best ways to stay relaxed and remain pampered is a
              manicure and pedicure treatment. Maybe a stressful day or a hectic
              week; mani-pedi treatment will leave you with relaxing mind and
              completely relieve you from the stress and tensions. Imagine the
              “feel-good” feel of having gorgeous nails and beautifully groomed
              hands and feet! So, manicure and pedicure also have their benefits
              to the mental health.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
