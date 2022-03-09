const { crawlData } = require('../utils/crawl');

module.exports.default = async function (req, res) {

    const data = await crawlData();
    console.log(data);
    res.render("pages", {
        title: "Trang Chủ",
        data
    });
}