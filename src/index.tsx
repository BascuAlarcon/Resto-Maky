import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzY3VhbGFyY29uIiwiYSI6ImNsZXI4M25mZjB0bzYzcG52NzFwcmtmbWMifQ.MXM7eFMZIpRjX6654-cg4g';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
);
 