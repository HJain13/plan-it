import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowBusiness extends Component {
  render() {
    return (
      <tr>
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
          <Link to={"/approve/"+this.props.obj._id} className="btn btn-primary">Approve</Link>
        </td>
      </tr>
    );
  }
}

export default TableRowBusiness;