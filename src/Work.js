import React, { PropTypes } from 'react';
import Card from './components/Card';

import Bg from './image/home1.jpg';
import {getJson} from './utils/helpers';
import CircularProgress from 'material-ui/CircularProgress';

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
    .then( (recData) => {
      this.setState({
        data:recData.getJson,
        wait:false
      })
    });
  }

  render () {
    let cards = this.state.data.map( (item,i) => <Card {...item} key={i} /> )
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {this.state.wait ? <CircularProgress /> : cards}
        </div>
      </div>
    )
  }
}

export default Work;
