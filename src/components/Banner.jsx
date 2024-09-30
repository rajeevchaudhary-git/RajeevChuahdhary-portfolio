import React from 'react';

function Banner() {
  return (
    <>
      <section className="home-banner position-relative">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
              <div className="home-banner-wrapper row align-items-center">
                <div className="col-12 col-lg-6 col-xl-7 home-banner-text-col position-relative">
                  <div className="sub-heading d-flex align-items-center">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>I AM Full Stack Web Developer</p>
                  </div>
                  <div className="animate-heading">
                    <h1 className="black-color h1 home-one-title ah-headline">
                      Creative Design and Web
                      <span className="orange-color">
                        <span className="ah-words-wrapper">
                          <b className="is-visible"> Solutions</b>
                          <b>Design</b>
                        </span>
                      </span>
                      <br />
                    </h1>
                  </div>
                  <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                  I’m a Full-Stack Web Developer with expertise in building responsive, scalable web applications using technologies like React, Node.js, Express,php,codeIgnter,Mysql and MongoDB. I focus on creating seamless user experiences and efficient back-end solutions, integrating third-party APIs, and delivering high-performance, modern web applications
                  </p>
                  <a className="btn_effect btn home-banner-btn orange-btn mt-50" href="resume.html">
                    <span className="z-1 position-relative">Hire Me For a Project</span>
                  </a>
                  <div className="banner-particle-one-container">
                    <img
                      className="position-absolute banner-particle-one d-none d-lg-inline"
                      src="img/particleOne.png"
                      alt="banner particle one"
                    />
                  </div>
                  <div className="banner-particle-two-container">
                    <img
                      className="position-absolute banner-particle-two delay-one"
                      src="img/particleTwo.png"
                      alt="banner particle two"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
                  <div className="banner-particle-one-container">
                    <img
                      className="position-absolute banner-particle-one d-lg-none"
                      src="img/particleOne.png"
                      alt="banner particle one"
                    />
                  </div>

                  <img
                    className="position-absolute home-banner-shape bg-move-3d"
                    src="img/homeNannerShape.png"
                    alt="banner-shape"
                  />
                  <img
                    className="img-fluid position-relative z-index-10 home-banner-img"
                    src="img/Removal-159.png" style={{borderRadius:'139px'}}
                    alt="banner-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
