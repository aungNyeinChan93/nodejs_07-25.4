import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

let id = "6806129d6fd956d2c76b341b";

axios.put(`/stocks/${id}`, {
    name: "Updated Stock",
    price: 150,
    quantity: 75
}).then(res => console.log(res.data))
    .catch(err => {
        console.error('Error updating stock:', err);
    });