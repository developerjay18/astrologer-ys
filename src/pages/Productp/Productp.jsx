import React from 'react';
import {
  ContactForm,
  Footer,
  Location,
  ProductHero,
  ScrollToTop,
} from '../../components';
import Navbar2 from '../../components/Navbar/Navbar2';

function Productp() {
  return (
    <div>
      <Navbar2 />
      <ScrollToTop />
      <ProductHero />
      <ContactForm />
      <Location />
      <Footer />
    </div>
  );
}

export default Productp;
