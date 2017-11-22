import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowPackage extends Component {
  render() {
    return (
      this.props.obj.package.ptype==='activity'?
        <div class="column  is-one-quarter">
        <div class="card">
        <header class="card-header">
          <p class="card-header-title">
         {this.props.obj.package.name}
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
          <strong>Brocher: </strong>{this.props.obj.package.brochure} 
          <br />
          <strong>Location: </strong>{this.props.obj.package.location}
          <br />
          <strong>Activity</strong> {this.props.obj.package.activity}
          <br />
          <strong>Cost: </strong>{this.props.obj.package.cost}
          <br />
          <strong>Package Type:</strong> {this.props.obj.package.ptype}  
          <br />
          

          </div>
        </div>
        <footer class="card-footer">
        <Link to={"/user/buy/"+this.props.obj._id} className="card-footer-item">Buy</Link>
        </footer>
      </div>
      </div>
        : null
    );
  }
}

export default TableRowPackage;