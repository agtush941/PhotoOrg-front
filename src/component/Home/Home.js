import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import corosel from './corosel.png';
import simg from './2nd.png';
import timg from './3rd.png';

const corimg = {
    width:"1376px",
    height:"680px",
}


class Home extends Component {
    render() {
        return(<>
        <img
        className="w-100 h-100"
      src={corosel}
      alt="First slide"
    />
     <img
        className="w-100 h-100"
      src={simg}
      alt="First slide"
    />

    
    </>

        )
    }
}

export default Home;