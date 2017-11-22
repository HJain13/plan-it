import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowPackage extends Component {
  render() {
    return (
      (this.props.obj.package.ptype!=='dining' && this.props.obj.package.ptype!=='activity')?
      <div class="column  is-one-third">
      <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={this.props.obj.package.pictures} alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{this.props.obj.package.location}</p>
            <p class="subtitle is-6">  {this.props.obj.package.brochure}</p>
          </div>
        </div>
    
        <div class="content">
         <strong>Activity</strong>:{this.props.obj.package.activity} 
         <br />
         <strong>Duration:</strong>{this.props.obj.package.duration} 
        <br />         
        <strong>Cost:</strong>{this.props.obj.package.cost} 
         <br />
{/*          {this.props.obj.package.food_specials} 
         {this.props.obj.package.pictures}
         {this.props.obj.package.ptype}  */}
        </div>
      </div>
      <footer class="card-footer">
      <Link to={"/user/buy/"+this.props.obj._id} className="card-footer-item">Buy</Link>
        </footer>
    </div>
    </div>
/*         <tr>
          <td>{this.props.obj.package.brochure} </td>
          <td> {this.props.obj.package.location} </td>
          <td> {this.props.obj.package.activity} </td>
          <td> {this.props.obj.package.food_specials} </td>
          <td> {this.props.obj.package.duration} </td>
          <td> {this.props.obj.package.cost} </td>
          <td> {this.props.obj.package.pictures}</td>
          <td> {this.props.obj.package.ptype} </td>
          <td> <Link to={"/user/buy/"+this.props.obj._id} className="button is-primary">Buy</Link> </td>
      </tr> */
	: null
    );
  }
}

export default TableRowPackage;