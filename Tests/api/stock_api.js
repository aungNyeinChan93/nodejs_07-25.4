import axios from "axios";

const Stock_URL = "http://localhost:3000/api/stocks";

/**
 * * Test for creating a stock
 * @description This test creates a stock and verifies the response.
 * @returns {Promise<void>}
 * @throws {Error} If the test fails.
 * @example
 */
const create = async () => {
    const response = await axios.post(Stock_URL, {
        name: "Test Stock",
        price: 100,
        quantity: 50
    })
    const { message, result } = await response.data;
    return { message, result };
}
//open this line to run the test
// const { message, result } = await create();  
// console.log(`Stock created successfully: ${message}`);
// console.log(`Stock ID: ${result._id}`);


/**
 * * Test for getting all stocks
 * @description This test retrieves all stocks and verifies the response.
 * @returns {Promise<void>}
 * @throws {Error} If the test fails.
 * @example
 */

const all = async () => {
    const { data } = await axios.get(Stock_URL);
    return data;
}
//open this line to run the test
// const allStocks = await all();
// console.log(allStocks.result);

let id = "68060ae6a3ab4addeede207d";

/**
 * * Test for getting a stock by ID
 * @param {*} id 
 * @description This test retrieves a stock by its ID and verifies the response.
 * @returns {Promise<void>}
 * @throws {Error} If the test fails. * 
 */
const show = async (id) => {
    try {
        const { data } = await axios.get(`${Stock_URL}/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching stock:", error);
    }
}
// open this line to run the test
// const { message: mess, result: res } = await show(id);
// console.log(mess);
// console.log(res);

/**
 * * Test for updating a stock by ID
 * @param {*} id
 * @description This test updates a stock by its ID and verifies the response.
 * @returns {Promise<void>}
 * @throws {Error} If the test fails.
 */
const update = async (id) => {
    const { data } = await axios.put(`${Stock_URL}/${id}`, {
        name: "Updated Stock",
        price: 150,
        quantity: 75
    });
    return data;
};
// open this line to run the test
// const { message: mess, result: res } = await update(id);
// console.log(mess);
// console.log(res);

/**
 * * Test for deleting a stock by ID
 * @param {*} id
 * @description This test deletes a stock by its ID and verifies the response.
 * @returns {Promise<void>}
 * @throws {Error} If the test fails.
 */
const destroy = async (id) => {
    const { data } = await axios.delete(`${Stock_URL}/${id}`);
    return data;
};
// const data = await destroy(id);
// console.log(data);



