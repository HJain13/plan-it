import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowPackage extends Component {
  render() {
    return (
      this.props.obj.package.ptype==='activity'?
        <div class="column  is-one-quarter">
        <div class="card">      
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={this.props.obj.package.pictures} alt="" />
            </figure>
          </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered has-text-justified">
              <p class="title is-4 has-text-weight-bold">{this.props.obj.package.p_name}</p>
              <p class="subtitle is-6">  {this.props.obj.package.location}</p>
            </div>
          </div>
      
          <div class="content has-text-left">
            <strong>Activities</strong>:{this.props.obj.package.specials} 
            <br />     
            <strong>Cost:</strong>{this.props.obj.package.cost} 
            <br />
          </div>
        </div>
        <footer class="card-footer">
          <Link to={"/user/buy/"+this.props.obj._id} className="card-footer-item has-text-info">Buy</Link>
        </footer>
      </div>
    </div>
    : null
    );
  }
}

export default TableRowPackage;