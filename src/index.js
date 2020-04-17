import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';
import QQ from './qq.js';;
import Nav from './nav.js';
  ReactDom.render((
    <div>
      <Header />
      <Nav />
      <QQ />
      <Footer />
     
    </div>
  ),document.getElementById("app"));
