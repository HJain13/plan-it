import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowPackage extends Component {
  render() {
		console.log(this.props.obj.package.ptype);
    return (
			(this.props.obj.package.ptype==='dining')?
			
<div class="column  is-one-third">
      <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={this.props.obj.package.pictures}  alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">

          <div class="media-content has-text-centered has-text-justified">
            <p class="title is-4">{this.props.obj.package.combo_name}</p>
            <p class="subtitle is-6">  {this.props.obj.package.brochure}</p>
          </div>
        </div>
    
        <div class="content has-text-left">
         <strong>Food:</strong>  {this.props.obj.package.specials}
         <br />
        <strong>Cost:</strong>  {this.props.obj.package.cost_for_two} for 2 per
         <br />
        </div>
      </div>
      <footer class="card-footer">
      <Link to={"/user/buy/"+this.props.obj._id} className="card-footer-item has-text-info">Buy</Link>
        </footer>
    </div>
    </div>




:null
);
}
}



export default TableRowPackage;





/* 			this.props.obj.package.ptype==='dining'?
        <tr>
				<td> {this.props.obj.package.combo_name} </td>
				<td> <img src={this.props.obj.package.menu_image} /> </td>
				<td> {this.props.obj.package.specials} </td>
				<td> <img src={this.props.obj.package.pictures} /></td>
 				<td> {this.props.obj.package.cost_for_two} </td>
				<td> {this.props.obj.package.ptype} </td>
				<td> <Link to={"/user/buy/"+this.props.obj._id} className="button is-primary">Buy</Link> </td>
			</tr> */
			
