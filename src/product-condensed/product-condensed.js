import React, {
    Component
} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    render() {
        return ( <
            li className = "list-group-item pc-condensed" >
            <
            a className = "btn btn-outline-danger" > X < /a> <p>{
            this.props.product.title
        } | $ {
            this.props.product.price
        }; < /p> < /
        li >
    );

}
}

export default ProductCondensed;
