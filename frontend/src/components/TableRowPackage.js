import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowPackage extends Component {
  render() {
    return (
			this.props.obj.package.ptype==='dining'?
        <tr>
				<td> {this.props.obj.package.combo_name} </td>
				<td> <img src={this.props.obj.package.menu_image} /> </td>
				<td> {this.props.obj.package.specials} </td>
 				<td> {this.props.obj.package.cost_for_two} </td>
				<td> {this.props.obj.package.ptype} </td>
				<td> <Link to={"/user/buy/"+this.props.obj._id} className="button is-primary">Buy</Link> </td>
      </tr>
		:null
    );
  }
}

export default TableRowPackage;