import React, {Component} from 'react';
class TableRowPackage extends Component {
  render() {
    return (
			this.props.obj.package.ptype==='dining'?
        <tr>
			<div>
				<td> {this.props.obj.package.combo_name} </td>
				<td> {this.props.obj.package.menu_image} </td>
				<td> {this.props.obj.package.specials} </td>
				<td> {this.props.obj.package.pictures} </td>
 				<td> {this.props.obj.package.cost_for_two} </td>
				<td> {this.props.obj.package.ptype} </td>
			</div>
      </tr>
		:null
    );
  }
}

export default TableRowPackage;