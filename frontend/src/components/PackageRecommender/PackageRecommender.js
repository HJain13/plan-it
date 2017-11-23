import React, { Component } from 'react';
import PackageService from '../PackageService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

var baseUrl = '/api';
var swiped = true;

class PackageRecommender extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      code1: '',
      code2: '',
      is_loading: false      
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
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ftfff")
            {
              item_1 = object.package.specials.indexOf(choice2);
              if (item_1>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "fftff")
            {
              item_1 = object.package.specials.indexOf(choice3);
              if (item_1>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ffftf")
            {
              item_1 = object.package.specials.indexOf(choice4);
              if (item_1>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "fffft")
            {
              item_1 = object.package.specials.indexOf(choice5);
              if (item_1>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "tftff")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice3);

              console.log ("\n" + choice1 + " " + choice3 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "tfftf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice4);

              console.log ("\n" + choice1 + " " + choice4 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "tffft")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice1 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                console.log(object.package._id);
                package_stack.push(object._id);
              }
            }

            else if (chosen_shit === "fttff")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice3);

              console.log ("\n" + choice2 + " " + choice3 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ftftf")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice4);

              console.log ("\n" + choice2 + " " + choice4 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ftfft")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice2 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ffttf")
            {
              item_1 = object.package.specials.indexOf(choice3);
              item_2 = object.package.specials.indexOf(choice4);

              console.log ("\n" + choice3 + " " + choice4 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "fftft")
            {
              item_1 = object.package.specials.indexOf(choice3);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice3 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ffftt")
            {
              item_1 = object.package.specials.indexOf(choice4);
              item_2 = object.package.specials.indexOf(choice5);

              console.log ("\n" + choice4 + " " + choice5 + " :: " + item_1 + " " + item_2)
              if (item_1>-1 && item_2>-1)
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ftttf")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice4);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ffttt")
            {
              item_1 = object.package.specials.indexOf(choice3);
              item_2 = object.package.specials.indexOf(choice4);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "tfftt")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice4);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ttfft")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "fttft")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "tftft")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ftftt")
            {
              item_1 = object.package.specials.indexOf(choice2);
              item_2 = object.package.specials.indexOf(choice4);
              item_3 = object.package.specials.indexOf(choice5);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "ttftf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice2);
              item_3 = object.package.specials.indexOf(choice4);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
              }
            }
            else if (chosen_shit === "tfttf")
            {
              item_1 = object.package.specials.indexOf(choice1);
              item_2 = object.package.specials.indexOf(choice3);
              item_3 = object.package.specials.indexOf(choice4);
              if ((item_1>-1 && item_2>-1) || (item_2>-1 && item_3>-1) || (item_3>-1 && item_1>-1))
              {
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1)
              {
                package_stack.push(object._id);
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
                best_match.push(object._id);
              }
              else if (item_1>-1 || item_2>-1 || item_3>-1 || item_4>-1 || item_5>-1)
              {
                package_stack.push(object._id);
              }
            }
          }
        })
    }

    if (best_match.length > 1)
    {
      final_packages.push(best_match[0]);
      console.log("\n\nFinal Package: " + final_packages, "\nBest Match: " + best_match + "\nPackage Stack" + package_stack);
      final_packages.push(best_match[1]);
      console.log("\n\nFinal Package: " + final_packages, "\nBest Match: " + best_match + "\nPackage Stack" + package_stack);
    }
    else if (best_match.length === 1)
    {
      final_packages.push(best_match[0]);
      console.log("\n\nFinal Package: " + final_packages, "\nBest Match: " + best_match + "\nPackage Stack" + package_stack);
      final_packages.push(package_stack[0]);
      console.log("\n\nFinal Package: " + final_packages, "\nBest Match: " + best_match + "\nPackage Stack" + package_stack);
    }
    else
    {
      final_packages.push(package_stack[0]);
      console.log("\n\nFinal Package: " + final_packages, "\nBest Match: " + best_match + "\nPackage Stack" + package_stack);
      final_packages.push(package_stack[1]);
      console.log("\n\nFinal Package: " + final_packages, "\nBest Match: " + best_match + "\nPackage Stack" + package_stack);
    }
    var pkg1 = package_stack.slice(0,1).toString();
    var pkg2 = package_stack.slice(1,2).toString();
    var act1 = best_match.slice(0,1).toString();
    var act2 = best_match.slice(1,2).toString();
    console.log(pkg1);
    console.log(pkg2);
    console.log(act1);
    console.log(act2);

    var code_1, code_2;
    if (this.state.packages instanceof Array) 
    {
      this
        .state
        .packages
        .map(function (object, i) {
          if(object._id === pkg1) {
            code_1 =  '<div class="card"> <div class="card-image"> <figure class="image is-4by3"> <img src="'+object.package.pictures+'" alt="" /> </figure> </div> <div class="card-content"> <div class="media"> <div class="media-content has-text-centered has-text-justified"> <p class="title is-4 has-text-weight-bold">'+ object.package.p_name +'</p> <p class="subtitle is-6">'+object.package.location+'</p> </div> </div> <div class="content has-text-left"> <strong>Activity</strong>:'+ object.package.p_type + '<br /> <strong>Duration:</strong>' + object.package.duration +'<br /> <strong>Cost:</strong>' + object.package.cost + '<br /> </div> </div> <footer class="card-footer"><a src="/user/buy/'+ object._id +'" class="card-footer-item has-text-info">Buy</a> </footer> </div>';           
          }
          if(object._id === pkg2) {
            code_1 =  '<div class="card"> <div class="card-image"> <figure class="image is-4by3"> <img src="'+object.package.pictures+'" alt="" /> </figure> </div> <div class="card-content"> <div class="media"> <div class="media-content has-text-centered has-text-justified"> <p class="title is-4 has-text-weight-bold">'+ object.package.p_name +'</p> <p class="subtitle is-6">'+object.package.location+'</p> </div> </div> <div class="content has-text-left"> <strong>Activity</strong>:'+ object.package.p_type + '<br /> <strong>Duration:</strong>' + object.package.duration +'<br /> <strong>Cost:</strong>' + object.package.cost + '<br /> </div> </div> <footer class="card-footer"><a src="/user/buy/'+ object._id +'" class="card-footer-item has-text-info">Buy</a> </footer> </div>';     
          }
        });
      this.setState({ code1: code_1, code2: code_2 });
    }
    

    return (
      <div className="App">
        <Header location={this.props.location} />
        <div className="hero is-light">
          <div className="hero-body">
            <div className="title is-1 has-text-weight-light">  
              Following are the recommendations
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div dangerouslySetInnerHTML={{ __html: this.state.code1 }} />
            <div dangerouslySetInnerHTML={{ __html: this.state.code2 }} />
          </div>
        </div>      
      </div>
      
    );
  }
}

export default PackageRecommender;
