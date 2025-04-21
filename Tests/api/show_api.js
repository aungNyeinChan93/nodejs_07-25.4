import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const show = async (id) => {
    try {
        const { data } = await axios.get(`/api/stocks/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching stock:", error);
    }
}

const { message, result } = await show("6806129d6fd956d2c76b341b");
console.log(message);
console.log(result);
console.log(`Stock ID: ${result._id}`);
