import React, {Component} from 'react';

class TableRowOrder extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.order.uemail}
        </td>
        <td>
          {this.props.obj.order.cost}
        </td>
      </tr>
    );
  }
}

export default TableRowOrder;