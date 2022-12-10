import React, { Component } from 'react';
import axios from 'axios';
import Upload from './Upload'
import ImageGrid from './ImageGrid'
class UserHome extends Component {
    render(){
        return(<>
            <Upload />
            <ImageGrid/>
            </>
        )
    }
}
export default UserHome;