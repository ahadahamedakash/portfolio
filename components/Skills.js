"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry standard dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <Image
                    src="/assets/img/meter1.svg"
                    alt="Web Development"
                    width={100}
                    height={100}
                  />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <Image
                    src="/assets/img/meter2.svg"
                    alt="Brand Identity"
                    width={100}
                    height={100}
                  />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <Image
                    src="/assets/img/meter3.svg"
                    alt="Logo Design"
                    width={100}
                    height={100}
                  />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <Image
                    src="/assets/img/meter1.svg"
                    alt="Web Development"
                    width={100}
                    height={100}
                  />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="background-image-left"
        src="/assets/img/color-sharp.png"
        alt="Background"
        width={500}
        height={500}
      />
    </section>
  );
};

export default Skills;
