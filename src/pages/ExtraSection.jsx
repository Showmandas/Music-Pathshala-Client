import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import schoolImg from '../assets/images/school.avif'
import Anime, { anime } from 'react-anime';

function ExtraSection() {
  return (

    <section className="music-section my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center gap-3 p-3">
            <h2 className="font-bold">Discover the Joy of Music</h2>
            <p className="section-description">
              At our music school, we provide top-quality music education for all ages and skill levels. Whether you're a beginner or an advanced musician, we have a wide range of programs and experienced instructors to help you achieve your musical goals.
            </p>
            <Link href="/programs" className="btn btn-primary">Explore Our Classes</Link>
          </div>
          <div className="col-lg-6 p-3">
          <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>

          <img src={schoolImg} alt="music school" className='img-fluid rounded img-thumbnail' />
      </Anime>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ExtraSection;
