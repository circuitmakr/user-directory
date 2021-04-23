import React, {Component} from 'react'
import data from '../data'


class Card extends Component(){
        render(){
            let result = data.reduce((acc, person)=>{
                return {...acc, [person.id]: person};
                  },{})
            return(
                <div>
                <div className="header"><h2>Home</h2></div>
                <div className="datacard">
                <div className="indexCount" >
                <h2>{this.state.count + 1}/{data.length}</h2>
                </div>
                <div className="userName">
                <h1>{result[`${this.state.count + 1}`].name.first} {result[`${this.state.count + 1}`].name.last}</h1><br/>
                </div>
                <br/>
                <div className="heading"><h4>From:&nbsp;</h4></div> 
                <div>
                {result[`${this.state.count + 1}`].city}, {result[`${this.state.count + 1}`].country}
                </div>
                <div className="heading"><h4>Job Title:&nbsp;</h4></div> 
                <div className="information">{result[`${this.state.count + 1}`].title}</div> 
                <div className="heading"><h4>Employer:&nbsp;</h4></div> 
                <div className="information">{result[`${this.state.count + 1}`].employer}</div> <br/>
                <div className="heading"><h4>Favorite Movies:</h4></div><br></br> 
                <ol>
                <li className="olinformation">{result[`${this.state.count + 1}`].favoriteMovies[0]}</li> 
                <li className="olinformation">{result[`${this.state.count + 1}`].favoriteMovies[1]}</li>
                <li className="olinformation">{result[`${this.state.count + 1}`].favoriteMovies[2]}</li>
                </ol>
                </div>
                <div className="navigation">
                <button className="btnPrevious" onClick={this.decreaseCount}><h3>&lt; Previous</h3></button>
                <button className="btnEdit">Edit</button>
                <button className="btnDelete">Delete</button>
                <button className="btnNew">New</button>
                <button className="btnNext" onClick={this.increaseCount}><h3>Next &gt;</h3></button>
                </div> 
              </div>

            )
        }
    }


export default Card