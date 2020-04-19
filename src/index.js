import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';
import QQ from './qq.js';
  ReactDom.render((
    <div>
      <Header />
      <QQ />
      <Footer />
     
    </div>
  ),document.getElementById("app"));
