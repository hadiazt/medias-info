const axios = require('axios');
const cheerio = require("cheerio");
const URL = require('../config').Settings.PCGame

module.exports = async ({ name }) => {

    let PC = [];

    return new Promise((resolve) => {
        axios.get(URL + name).then(response => {

            const $ = cheerio.load(response.data);
            const table = $("#thaTableIndeed").children("tr");

            table.each(async (index, item) => {

                if (index > 0) {

                    const link = $(item).children("td:nth-child(2)").children("a").attr("href");
                    const title = $(item).children("td:nth-child(2)").children("a").attr("title");
                    const category = $(item).children("td:nth-child(1)").children("a").text();
                    const size = $(item).children("td:nth-child(3)").text();


                }
            });

            resolve(PC)
        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
};