import React, { PropTypes as RPT } from 'react';
import Script from './Script.react';

const Html = ({ children, generatedAssets = {} }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        name="viewport"
      />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
    </head>
    <body>
      {children}
      <Script src={`/${generatedAssets['vendor.js']}`} />
      <Script src={`/${generatedAssets['app.js']}`} />
    </body>
  </html>
);

Html.propTypes = {
  children: RPT.oneOfType([RPT.node, RPT.string, RPT.element]).isRequired,
  generatedAssets: RPT.shape({
    'vendor.js': RPT.string,
    'app.js': RPT.string
  }).isRequired
};

export default Html;
