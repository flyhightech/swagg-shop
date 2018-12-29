import 'whatwg-fetch';

class HttpService {
    getProducts = () => {

        var promise = new Promise((resolve, reject) => {
            fetch('https://localhost:3000/products')
                .then(response => {
                    resolve(response.json());
                })
        });

        return promise;

    }
}

export default HttpService;
