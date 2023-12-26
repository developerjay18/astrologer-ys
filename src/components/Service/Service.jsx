import React from 'react';
import ServiceOne from './ServiceOne';
import ServiceTwo from './ServiceTwo';

function Service() {
  return (
    <div className="flex flex-col">
      <ServiceOne />
      <ServiceTwo />
    </div>
  );
}

export default Service;
