import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        fetch('https://localhost:3000/products')
            .then(response => {
                console.log(response.json());
            })
    }
}


export default HttpService;
