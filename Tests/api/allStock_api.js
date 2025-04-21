import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";


axios.get('/api/stocks', { params: { page: 1, perPage: 7, name: 'Test Stock' } })
    .then(res => console.log(res.data.result))
    .catch(err => {
        console.error('Error fetching stocks:', err);
    })