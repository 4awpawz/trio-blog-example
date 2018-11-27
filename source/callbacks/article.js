const reload = require("require-nocache")(module);
const categoriesList = reload("./lib/categorieslist");
const articlesList = reload("./lib/articleslist");
const articleNavigator = reload("./lib/articlenavigator");
const relatedArticlesList = reload("./lib/relatedarticleslist");

module.exports = ({ $, page, site }) => {
    const data = page.matter.data;
    $("h1.article__title").append(data.title);
    $("span.article__category").append(`"${data.category}"`);
    $("span.article__date").append(page.articleDate);
    $("img.article__img").attr("src", `/media/${page.matter.data.image}`);
    articleNavigator($, page);
    relatedArticlesList($, page);
    categoriesList($, site);
    articlesList($, site);
};