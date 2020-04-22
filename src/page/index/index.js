import React from 'react';
import Banner from './banner/banner.js'
import Indexof from './indexof/indexof'
import Buy from './buy/buy.js'
import Adg from './adg/adg.js'
import Case from './case/case.js'
import News from './news/news.js'
import Link from './link/link.js'
export default class Indexx extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
              <Banner />
              <Indexof />
              <Buy />
              <Adg />
              <Case />
              <News />
              <Link />
            </div>
        )
}   }