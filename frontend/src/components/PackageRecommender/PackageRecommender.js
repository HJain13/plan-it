import React, { Component } from 'react';
import PackageService from '../PackageService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/App.css';
var baseUrl = '/api';
var swiped = true;

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
    var package_stack = [];
    var best_match = [];
    var final_packages = [];

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
            else if (localStorage.choice === "travel")
            {
              chosen_shit = localStorage.t_choice1[0] + localStorage.t_choice2[0] + localStorage.t_choice3[0] + localStorage.t_choice4[0] + localStorage.t_choice5[0];
              choice1 = "Singapore";
              choice2 = "Dubai";
              choice3 = "Rishikesh";
              choice4 = "Paris";
              choice5 = "Udaipur";
            }

            //Narrowing Down Search
            var item_1, item_2, item_3, item_4, item_5;

            //0 True
            if (chosen_shit === "fffff")
            {
              swiped = false;
              console.log("\nNothing Chosen!");
            }

            //1 True
            else if (chosen_shit === "tffff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              if (item_1>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ftfff")
            {
              item_1 = object.package.specials.indexOf(choice2);
              if (item_1>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "fftff")
            {
              item_1 = object.package.specials.indexOf(choice3);
              if (item_1>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ffftf")
            {
              item_1 = object.package.specials.indexOf(choice4);
              if (item_1>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "fffft")
            {
              item_1 = object.package.specials.indexOf(choice5);
              if (item_1>-1)
              {
                package_stack.push(object.package);
              }
            }

            //2 True
            else if (chosen_shit === "ttfff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);

              console.log ("\n" + choice1 + " " + choice2 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tftff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice3);

              console.log ("\n" + choice1 + " " + choice3 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tfftf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice4);

              console.log ("\n" + choice1 + " " + choice4 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tffft")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice1 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }

            else if (chosen_shit === "fttff")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice3);

              console.log ("\n" + choice2 + " " + choice3 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ftftf")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice4);

              console.log ("\n" + choice2 + " " + choice4 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ftfft")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice2 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ffttf")
            {
              item_1 = object.package.specials.indexOf(choice3);
              item_2 = object.package.specials.indexOf(choice4);

              console.log ("\n" + choice3 + " " + choice4 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "fftft")
            {
              item_1 = object.package.specials.indexOf(choice3);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice3 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ffftt")
            {
              item_1 = object.package.specials.indexOf(choice4);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice4 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object.package);
              }
            }

            //3 True
            else if (chosen_shit === "tttff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ftttf")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice4);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ffttt")
            {
              item_1 = object.package.specials.indexOf(choice3);
              item_2 = object.package.specials.indexOf(choice4);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tfftt")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice4);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ttfft")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "fttft")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tftft")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ftftt")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice4);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ttftf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice4);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tfttf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice4);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object.package);
              }
            }

            //4 True
            else if (chosen_shit === "ftttt")
            {
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              item_4 = object.package.specials.indexOf(choice4);
              item_1 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_4>-1) || (item_4>-1 && item_1>-1) || (item_1>-1 && item_3>-1) || (item_2>-1 && item_4>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tfttt")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice4);
              item_4 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_4>-1) || (item_4>-1 && item_1>-1) || (item_1>-1 && item_3>-1) || (item_2>-1 && item_4>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ttftt")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice4);
              item_4 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_4>-1) || (item_4>-1 && item_1>-1) || (item_1>-1 && item_3>-1) || (item_2>-1 && item_4>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "tttft")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              item_4 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_4>-1) || (item_4>-1 && item_1>-1) || (item_1>-1 && item_3>-1) || (item_2>-1 && item_4>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object.package);
              }
            }
            else if (chosen_shit === "ttttf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              item_4 = object.package.specials.indexOf(choice4);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_4>-1) || (item_4>-1 && item_1>-1) || (item_1>-1 && item_3>-1) || (item_2>-1 && item_4>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object.package);
              }
            }

            //5 True
            else if (chosen_shit === "ttttt")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice3);
              item_4 = object.package.specials.indexOf(choice4);
              item_5 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_1>-1 && item_3>-1) || (item_1>-1 && item_4>-1) || (item_1>-1 && item_5>-1) || (item_2>-1 && item_3>-1) || (item_2>-1 && item_4>-1) || (item_2>-1 && item_5>-1) || (item_3>-1 && item_4>-1) || (item_3>-1 && item_5>-1) || (item_4>-1 && item_5>-1))
              {
                best_match.push(object.package);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1 || item_5>-1)
              {
                package_stack.push(object.package);
              }
            }
          }
        })
    }

    if (best_match.length > 1)
    {
      final_packages.push(best_match.pop());
      final_packages.push(best_match.pop());
    }
    else if (best_match.length == 1)
    {
      final_packages.push(best_match.pop());
      final_packages.push(package_stack.pop());
    }
    else
    {
      final_packages.push(package_stack.pop());
      final_packages.push(package_stack.pop());
    }

    console.log("Best Match: " + best_match + "\n\nPackage Stack: " + package_stack);

    return (
      <div className="App">
        Following are the recommendations <br/><br/><br/>
        { 
          localStorage.choice
        }
        <div class="card">      
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={final_packages[0].pictures} alt="" />
            </figure>
           </div>

          <div class="card-content">
            <div class="media">
              <div class="media-content has-text-centered has-text-justified">
                <p class="title is-4 has-text-weight-bold">{final_packages[0].name}</p>
                <p class="subtitle is-6">  {final_packages[0].location}</p>
              </div>
            </div>
          
            <div class="content has-text-left">
              <strong>Dining</strong>:{final_packages[0].activity} 
              <br />
              <strong>Duration:</strong>{final_packages[0].duration} 
              <br />         
              <strong>Cost:</strong>{final_packages[0].cost} 
              <br />
            </div>
          </div>

          <footer class="card-footer">
            <Link to={"/user/buy/"+this.props.obj._id} className="card-footer-item has-text-info">Buy</Link>
          </footer>
        </div>
      </div>
      
    );
  }
}

export default PackageRecommender;
