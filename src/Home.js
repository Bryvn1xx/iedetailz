import React from 'react';
// import logo from '/IMG_0038.jpg';
const Home = () => {
  return (
    <div className="home-container">
      <img className='home-image'src='./cover.jpg' alt='404'/>
      <section className="about-section">
        <div className='username'>
          <img className='profile-pic' src='/IMG_0102.jpg' alt='404'/>
        <h1>iedetailz</h1>
        <img className='verified-pic' src='/verified.png' alt='404'/>

        </div>
        <h3>(951)616-9769</h3>
        <h2>Rancho Cucamonga, Ca</h2>
        <p>
        Welcome to iedetailz, your premier mobile detailing service in Rancho Cucamonga, CA. We specialize in comprehensive interior and exterior detailing, delivering top-quality results that will make your vehicle shine like never before.

Experience the difference of our advanced ceramic coating, providing ultimate protection and an irresistible shine. From paint correction to enhancing the beauty of your car, we've got you covered.

Join the growing community of car enthusiasts in the Inland Empire who trust us with their prized possessions. Discover the secret to automotive perfection today.        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-boxes">
          <div className="service-box">
            <h4 className="service-label">Mobile Wash</h4>
            <img className='service-image' src='./mobilewash.jpg' alt='404'/>
            {/* <div className="service-image" src={'./IMG_0038.jpg'}></div> */}
            <p className="service-description">
              Keep your car looking pristine with our convenient and eco-friendly mobile wash service. We bring our expertise directly to you, providing a thorough exterior cleaning and interior vacuuming. Say goodbye to dirt and hello to a spotless vehicle.
            </p>
          </div>

          <div className="service-box">
            <h4 className="service-label">Paint Restoration / Polish</h4>
            <img className='service-image' src='./polish.jpg' alt='404'/>
            <p className="service-description">
              Restore the beauty and shine of your car's paint with our expert paint restoration and polishing service. Our skilled technicians will eliminate swirls, scratches, and imperfections, leaving your vehicle with a flawless and glossy finish.
            </p>
          </div>

          <div className="service-box">
            <h4 className="service-label">Ceramic Coating</h4>
            <img className='service-image' src='./ceramic.jpg' alt='404'/>
            <p className="service-description">
              Give your car the ultimate protection and an incredible shine with our advanced ceramic coating service. Our premium coatings create a strong barrier against UV rays, dirt, and contaminants, ensuring long-lasting beauty and effortless maintenance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
