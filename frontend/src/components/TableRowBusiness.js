import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowBusiness extends Component {
  render() {
    var disabledClass = "";
    if(this.props.obj.business.approved){
      disabledClass = "disabled "
    }
    return (
      <div class="column  is-one-quarter">
      <div class="card">
      <header class="card-header">
        <p class="card-header-title">
        {this.props.obj.business.name}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
       <strong>Business Id:</strong> {this.props.obj._id}
        <br />
        <strong>Email:</strong>{this.props.obj.business.email}
        <br />
        
        <strong>Contact Details:</strong>{this.props.obj.business.phone_no}
        <br />
        <strong>Approval Status:</strong>{this.props.obj.business.approved}
          <br />
        </div>
      </div>
      <footer class="card-footer">
      <Link to={"/approve/"+this.props.obj._id} className="card-footer-item" {...disabledClass}>Approve</Link>
      </footer>
    </div>
    </div>
    );
  }
}

export default TableRowBusiness;
{/*  <tr>
   <td>
     {this.props.obj._id}
   </td>
   <td>
     {this.props.obj.business.name}
   </td>
   <td>
     {this.props.obj.business.email}
   </td>
   <td>
     {this.props.obj.business.phone_no}
   </td>
   <td>
     {this.props.obj.business.approved}
   </td>        
   <td>
     <Link to={"/approve/"+this.props.obj._id} className="button is-primary" {...disabledClass}>Approve</Link>
   </td>
 </tr> */}