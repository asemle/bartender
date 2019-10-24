import React, { Component } from 'react';
import axios from 'axios';

export default class FlipContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            data: { 
                strDrink: "", 
                strDrinkThumb: "", 
                strGlass: "",
                strIngredient1: "",
                strIngredient2: "",
                strIngredient3: "",
                strIngredient4: "",
                strIngredient5: "",
                strIngredient6: "",
                strIngredient7: "",
                strIngredient8: "",
                strInstructions: ""

            }
        }
    }
    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.id}`)
        .then((response) => {
            console.log(response);
            this.setState({
                data: response.data.drinks[0]
            })
        })
    }
    click() {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        return (
            <div className={this.state.clicked ? "clicked flip-container" : "flip-container"} onClick={this.click.bind(this)}>
                    <div className="flipper">
                    <div 
                        className="flash front"
                        style={{ backgroundImage: `url(${this.state.data.strDrinkThumb})`}}>
                        <h2>{this.state.data.strDrink}</h2>
                        </div>
                        <div className="flash back"> 
                            <h4>{this.state.data.strDrink}</h4>
                            <ul>
                                <li 
                                    style={{ display: this.state.data.strIngredient1 ? 'list-item' : 'none' }}>{this.state.data.strIngredient1}</li>
                                <li
                                    style={{ display: this.state.data.strIngredient2 ? 'list-item' : 'none' }}>{this.state.data.strIngredient2}</li>
                                <li
                                    style={{ display: this.state.data.strIngredient3 ? 'list-item' : 'none' }}>{this.state.data.strIngredient3}</li>
                                <li
                                    style={{ display: this.state.data.strIngredient4 ? 'list-item' : 'none' }}>{this.state.data.strIngredient4}</li>
                                <li
                                    style={{ display: this.state.data.strIngredient5 ? 'list-item' : 'none' }}>{this.state.data.strIngredient5}</li>
                                <li
                                    style={{ display: this.state.data.strIngredient6 ? 'list-item' : 'none' }}>{this.state.data.strIngredient6}</li>
                                <li
                                    style={{ display: this.state.data.strIngredient7 ? 'list-item' : 'none' }}>{this.state.data.strIngredient7}</li>
                                <li
                                    style={{ display: this.state.data.strIngredient8 ? 'list-item' : 'none' }}>{this.state.data.strIngredient8}</li>
                            </ul>
                            <p>Glass: {this.state.data.strGlass}</p>
                            <p>{this.state.data.strInstructions}</p>
                        </div>
                </div>
            </div>
        );

    }

}