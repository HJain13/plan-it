import React, {Component} from 'react';

class TableRowPackage extends Component {
  render() {
    return (
      this.props.obj.package.ptype==='activity'?
        <tr>
        <td>
          {this.props.obj.package.name}
        </td>
        <td>
          {this.props.obj.package.brochure}
        </td>
        <td>
          {this.props.obj.package.location}
        </td>
        <td>
          {this.props.obj.package.activity}
        </td>
        <td>
          {this.props.obj.package.cost}
        </td>
        <td>
          {this.props.obj.package.ptype}
        </td>                
      </tr>
        : null
    );
  }
}

export default TableRowPackage;