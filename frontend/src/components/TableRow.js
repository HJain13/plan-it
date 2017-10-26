import React, {Component} from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.user.name}
        </td>
        <td>
          {this.props.obj.user.email}
        </td>
        <td>
          {this.props.obj.user.phone_no}
        </td>
        {/* <td>
          <button className="button is-primary">Edit</button>
        </td> */}
        {/* <td>
          <button className="button is-danger">Delete</button>
        </td> */}
      </tr>
    );
  }
}

export default TableRow;