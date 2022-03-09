const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

exports.crawlData = async (url, rootClass, objTag) => {
    return await axios.get('http://www.nettruyengo.com')
        .then((response) => {
            if (response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                let data = [];
                $('.item figure').each(function (i, elem) {
                    data[i] = {
                        title: $(this).find('figcaption h3 a.jtip').text().trim(),
                        url: $(this).find('figcaption h3 a.jtip').attr("href").trim(),
                        image: $(this).find('.image a img').attr("data-original").trim(),
                    }
                });
                return data;
            }
        }, (error) => console.log(err));
}