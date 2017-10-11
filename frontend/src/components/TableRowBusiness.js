import React, {Component} from 'react';

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
          <button className="button is-primary">Approve</button>
        </td>
      </tr>
    );
  }
}

export default TableRowBusiness;