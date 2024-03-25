import React from 'react';

const MapComponent = () => {
  const mapHtml = `
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
          src="https://maps.google.com/maps?width=800&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
        <a href="https://embed-googlemap.com">embed google map</a>
      </div>
      <style>
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 300px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none!important;
          width: 100%;
          height: 300px;
        }
        .gmap_iframe {
          width: 100%!important;
          height: 300px!important;
        }
      </style>
    </div>
  `;

  return (
    <div className="maproute">
      <div dangerouslySetInnerHTML={{ __html: mapHtml }} />
    </div>
  );
};

export default MapComponent;
