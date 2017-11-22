import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowPackage extends Component {
  render() {
    return (
      (this.props.obj.package.ptype!=='dining' && this.props.obj.package.ptype!=='activity')?
        <tr>
          <td>{this.props.obj.package.brochure} </td>
          <td> {this.props.obj.package.location} </td>
          <td> {this.props.obj.package.activity} </td>
          <td> {this.props.obj.package.food_specials} </td>
          <td> {this.props.obj.package.duration} </td>
          <td> {this.props.obj.package.cost} </td>
          <td> {this.props.obj.package.pictures}</td>
          <td> {this.props.obj.package.ptype} </td>
          <td> <Link to={"/user/buy/"+this.props.obj._id} className="button is-primary">Buy</Link> </td>
      </tr>
	: null
    );
  }
}

export default TableRowPackage;