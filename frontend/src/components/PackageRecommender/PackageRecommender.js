import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

class PackageRecommender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: false,      
    };
  }

  render() {
    var ex = this.props.location;
    return(
      <div className="App">
        Works <br/><br/><br/>
        { ex }
      </div>
    );
  }
}

export default PackageRecommender;
