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
} from '../../components/index';

function Home() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Heros />
      <Kundalis />
      <Intro />
      <Service />
      <Products />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
