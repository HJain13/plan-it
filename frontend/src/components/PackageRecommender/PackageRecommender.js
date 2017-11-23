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
    var best_match = [];
    console.log(localStorage.choice);
    if (this.state.packages instanceof Array) 
    {
      this
        .state
        .packages
        .map(function (object, i) 
        {
          if (object.package.ptype === localStorage.choice)
          {
            var choice1, choice2, choice3, choice4, choice5;
            var chosen_shit;

            //Setting Specificity
            if (localStorage.choice === "dining")
            {
              chosen_shit = localStorage.d_choice1[0] + localStorage.d_choice2[0] + localStorage.d_choice3[0] + localStorage.d_choice4[0] + localStorage.d_choice5[0];
              choice1 = "Burger";
              choice2 = "Pizza";
              choice3 = "Noodles";
              choice4 = "Dosa";
              choice5 = "Paneer Butter Masala";
            }
            else if (localStorage.choice === "activity")
            {
              chosen_shit = localStorage.a_choice1[0] + localStorage.a_choice2[0] + localStorage.a_choice3[0] + localStorage.a_choice4[0] + localStorage.a_choice5[0];
              choice1 = "Swimming";
              choice2 = "Paragliding";
              choice3 = "Surfing";
              choice4 = "Hiking";
              choice5 = "Bungee Jumping";
            }
            else
            {
              chosen_shit = localStorage.t_choice1[0] + localStorage.t_choice2[0] + localStorage.t_choice3[0] + localStorage.t_choice4[0] + localStorage.t_choice5[0];
              choice1 = "Singapore";
              choice2 = "Dubai";
              choice3 = "Rishikesh";
              choice4 = "Paris";
              choice5 = "Udaipur";
            }

            //Narrowing Down Search

            //1 True
            if (chosen_shit = "tffff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              if (item_1>-1)
              {
                package_stack.push(object);
              }
            }

            //2 True
            if (chosen_shit = "ttfff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object);
              }
              else if (item_1>-1 || item_1==-1)
              {
                package_stack.push(object);
              }
            }

            //3 True
            if (chosen_shit = "tttff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              if (item_1>-1 && item_2>-1 || item_2>-1 && item_3>-1 || item_3>-1 && item_1>-1)
              {
                best_match.push(object);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object);
              }
            }

            //4 True
            if (chosen_shit = "ttttf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              item_4 = object.package.specials.indexOf(choice4);
              if (item_1>-1 && item_2>-1 || item_2>-1 && item_3>-1 || item_3>-1 && item_4>-1 || item_4>-1 && item_1>-1 || item_1>-1 && item_3>-1 || item_2>-1 && item_4>-1)
              {
                best_match.push(object);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object);
              }
            }

            //5 True
            if (chosen_shit = "ttttt")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              item_4 = object.package.specials.indexOf(choice4);
              item_5 = object.package.specials.indexOf(choice5);
              if (item_1>-1 && item_2>-1 || item_1>-1 && item_3>-1 || item_1>-1 && item_4>-1 || item_1>-1 && item_5>-1 || item_2>-1 && item_3>-1 || item_2>-1 && item_4>-1 || item_2>-1 && item_5>-1 || item_3>-1 && item_4>-1 || item_3>-1 && item_5>-1 || item_4>-1 && item_5>-1)
              {
                best_match.push(object);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1 || item_5>-1)
              {
                package_stack.push(object);
              }
            }





          }

        })

    }
    console.log("Best Match: " + best_match + "\n\nPackage Stack: " + package_stack);

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
