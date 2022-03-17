const axios = require('axios');
const cheerio = require("cheerio");
const URL = require('../config').Settings.TV

module.exports = async ({ name }) => {

    let TV = [];

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

                    if (link.substring(0, 5) === "https") {
                        TV.push({ category, title, size, link });
                    }

                }
            });

            if (TV.length < 1) {
                resolve({ code: 404, msg: 'No Data Found For Entry' })
            } else {
                resolve(TV)
            }

        }).catch(e => { console.log(e?.response?.data?.message || e) });
    });
};