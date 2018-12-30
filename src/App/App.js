import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';


const http = new HttpService(); // Created a new constant

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
        // Bind Functions
        this.loadData = this.loadData.bind(this);

        this.loadData();
    }

    loadData = () => {
        http.getProducts().then(products => {
            console.log(products);
        }, err => {

        });
    }

    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = {
                logo
            }
            className = "App-logo"
            alt = "logo" / >
            <
            h1 > Welcome to the Swagg Shop. < /h1>  <
            div className = "container App-main" >
            <
            div className = "row" >
            <
            Product className = "col-sm-4"
            price = "4.23"
            title = "Toy Gun"
            imgUrl = "https://cdn.shopify.com/s/files/1/0914/4384/products/WATER_GUN_2_1024x1024.jpg?v=1508180689" / >
            <
            Product className = "col-sm-4"
            price = "4.23"
            title = "Toy Gun"
            imgUrl = "https://cdn.shopify.com/s/files/1/0914/4384/products/WATER_GUN_2_1024x1024.jpg?v=1508180689" / >
            <
            Product className = "col-sm-4"
            price = "4.23"
            title = "Toy Gun"
            imgUrl = "https://cdn.shopify.com/s/files/1/0914/4384/products/WATER_GUN_2_1024x1024.jpg?v=1508180689" / >
            <
            /div> < /
            div > <
            a className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" >
            Learn A Lot More About React <
            /a> < /
            header > <
            /div>
        );
    }
}

export default App;
