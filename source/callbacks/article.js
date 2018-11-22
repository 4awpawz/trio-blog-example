const categoriesList = require("./lib/categorieslist");
const articleNavigator = require("./lib/articlenavigator");

module.exports = ({ $, page, site }) => {
    categoriesList($, site);
    const data = page.matter.data;
    $("h1.article__title").append(data.title);
    $("span.article__category").append(data.category);
    $("span.article__date").append(page.articleDate);
    $("img.article__img").attr("src", `/media/${page.matter.data.image}`);
    articleNavigator($, page);
};