import React, {Component} from 'react';

class TableRowPackage extends Component {
  render() {
    return (
        <tr>
        {this.props.obj.package.ptype===null &&
        <div>
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
          {this.props.obj.package.food_specials}
        </td>
        <td>
          {this.props.obj.package.duration}
        </td>
        <td>
          {this.props.obj.package.cost}
        </td>
        <td>
          {this.props.obj.package.pictures}
        </td>
        <td>
          {this.props.obj.package.ptype}
        </td>
        </div>}

       {/*  {this.props.obj.package.ptype=='dining'?
        <div>
        <td>
          {this.props.obj.package.combo_name}
        </td>
        <td>
          {this.props.obj.package.menu_image}
        </td>
        <td>
          {this.props.obj.package.cost_for_two}
        </td>
        <td>
          {this.props.obj.package.ptype}
        </td>
        </div>:null} */}
      </tr>
    );
  }
}

export default TableRowPackage;