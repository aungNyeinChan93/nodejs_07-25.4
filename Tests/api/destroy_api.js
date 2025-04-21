import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

let id = "680611a64ceaab08d8fee861";
axios.delete(`/stocks/${id}`)
    .then(res => console.log(res.data))
    .catch(err => {
        console.error('Error deleting stock:', err);
    });