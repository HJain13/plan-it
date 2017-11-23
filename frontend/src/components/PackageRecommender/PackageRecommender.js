import React, { Component } from 'react';
import PackageService from '../PackageService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/App.css';
var baseUrl = '/api';

class PackageRecommender extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      is_loading: false,      
    };
  }

  componentWillMount() 
  {
    axios
      .get(baseUrl + '/packages')
      .then(response => 
        {
        this.setState({packages: response.data});
      })
      .catch(function (error) 
      {
        console.log(error);
      })
  }
    
  render() 
  {
    var current_p = this.state.packages;
    var package_stack = [];
    var best_match;
    console.log(localStorage.choice);
    if (this.state.packages instanceof Array) {
      this
        .state
        .packages
        .map(function (object, i) {
          if (object.package.ptype === localStorage.choice)
          {
            if (localStorage.choice === "dining")
            {
              var chosen_shit = localStorage.d_choice1[0] + localStorage.d_choice2[0] + localStorage.d_choice3[0] + localStorage.d_choice4[0] + localStorage.d_choice5[0];
              
              if (chosen_shit = "ttfff")
              {
                item_1 = object.package.specials.indexOf("Burger");
                item_2 = object.package.specials.indexOf("Pizza");
                if (item_1>-1 && item_2>-1)
                {
                  best_match = object;
                }
                else if (item_1>-1 && item_2==-1)
                {
                  package_stack.push(object);
                }
                else if (item_1==-1 && item_2>-1)
                {
                  package_stack.push(object);
                }
              }
              //Similarly for all the possible "chosen_shit"
              

            }
            else if (localStorage.choice === "activity")
            {

            }
            else
            {

            }
            console.log(object);
          }

        })
    }

    /*
    //Selecting 2 packages
      if (best_match != NULL)
      {
        package_stack = [best_match, package_stack[0]];
      }
      else
      {
        package_stack = [package_stack[0], package_stack[1]];
      }

      //Export package_stack to new page
    */
    return (
      <div className="App">
        Following are the recommendations <br/><br/><br/>
        { 
          localStorage.choice
        }
      </div>
    );
  }
}

export default PackageRecommender;
