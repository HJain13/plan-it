import React, {Component} from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.complaint.uemail}
        </td>
        <td>
          {this.props.obj.complaint.query}
        </td>
        <td>
          {this.props.obj.complaint.response}
        </td>
        <td>
          {this.props.obj.complaint.solved}
        </td>
      </tr>
    );
  }
}

export default TableRow;