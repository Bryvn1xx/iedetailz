import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to IEDetailz</h1>
      </header>

      <div className="featured-image"></div>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          IEDetailz is a mobile detailing service based in Rancho Cucamonga, CA. We specialize in providing comprehensive interior and exterior detailing services, including exterior polishing and ceramic coating. Our team of experienced professionals is dedicated to delivering top-quality service and exceptional results to our customers.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-boxes">
          <div className="service-box mobile-wash">
            <div className="service-image blue-box"></div>
            <h3>Mobile Wash</h3>
            <p>Keep your car clean and shining with our convenient mobile wash service. We come to you and provide a thorough wash, including exterior cleaning and interior vacuuming.</p>
          </div>
          <div className="service-box paint-restoration">
            <div className="service-image blue-box"></div>
            <h3>Paint Restoration / Polish</h3>
            <p>Restore the luster of your car's paint with our paint restoration and polishing service. Our experts will remove swirls, scratches, and imperfections, leaving your car with a smooth and glossy finish.</p>
          </div>
          <div className="service-box ceramic-coating">
            <div className="service-image blue-box"></div>
            <h3>Ceramic Coating</h3>
            <p>Give your car long-lasting protection and a brilliant shine with our ceramic coating service. Our advanced ceramic coatings create a strong barrier against UV rays, dirt, and contaminants.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
