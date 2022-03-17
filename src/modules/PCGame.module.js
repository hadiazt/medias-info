const axios = require('axios');
const cheerio = require("cheerio");
const URL = require('../config').Settings.PCGame

module.exports = async ({ name }) => {

    let PC = [];

    return new Promise((resolve) => {
        axios.get(URL + name).then(response => {

            const $ = cheerio.load(response.data);
            const table = $("#thaTableIndeed").children("tr");

            resolve(PC)
        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
};