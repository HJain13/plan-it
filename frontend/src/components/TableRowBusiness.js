import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowBusiness extends Component {
  render() {
    var disabledClass = "";
    if(this.props.obj.business.approved){
      disabledClass = "disabled "
    }
    return (
      <div class="column is-one-third">
      <div class="card">
      <header class="card-header">
        <p class="card-header-title">
        {this.props.obj.business.name}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-left">
          <strong>Business Id: </strong> {this.props.obj._id}<br/>
          <strong>Email: </strong> {this.props.obj.business.email}<br/>
          <strong>Contact Details: </strong> {this.props.obj.business.phone_no}<br/>
          <hr/>
          <strong>Approval Status: </strong> {this.props.obj.business.approved}<br/>
        </div>
      </div>
      { this.props.obj.business.approved === 'true' ? 
        <footer class="card-footer">
          <Link to={"/approve/"+this.props.obj._id} className="card-footer-item" {...disabledClass}>More</Link>
        </footer>
      : 
        <footer class="card-footer">
          <Link to={"/approve/"+this.props.obj._id} className="card-footer-item" {...disabledClass}>Approve</Link>
        </footer>      
      }
    </div>
    </div>
    );
  }
}

export default TableRowBusiness;