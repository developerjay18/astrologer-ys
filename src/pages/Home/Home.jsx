import React from 'react';
import {
  Navbar,
  ScrollToTop,
  Footer,
  Heros,
  Kundalis,
  Intro,
  Service,
  Products,
  Banner,
  Stats,
  Info,
  Testimonials,
  Solution,
  ContactForm,
  Location,
} from '../../components/index';

function Home() {
  return (
    <div className='max-w-[100vw] overflow-hidden'>
      <ScrollToTop />
      <Navbar />
      <Heros />
      <Kundalis />
      <Intro />
      <Service />
      <Products />
      <Banner />
      <Stats />
      <Testimonials />
      <Info />
      <Solution />
      <ContactForm />
      <Location />
      <Footer />
    </div>
  );
}

export default Home;
