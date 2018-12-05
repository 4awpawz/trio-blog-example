const reload = require("require-nocache")(module);
const categoriesList = reload("./lib/categorieslist");
const tagslist = reload("./lib/tagslist");
const articleNavigator = reload("./lib/articlenavigator");
const relatedArticlesList = reload("./lib/relatedarticleslist");
const articleTagsList = reload("./lib/articletagslist");

module.exports = ({ $, page, site }) => {
    const data = page.matter.data;
    $("h1.article__title").append(data.title);
    $("span.article__category").append(`"${data.category}"`);
    $("span.article__date").append(page.articleDate);
    $("img.article__img").attr("src", `/media/${page.matter.data.image}`);
    articleTagsList($, page);
    articleNavigator($, page);
    relatedArticlesList($, page);
    categoriesList($, site);
    tagslist($, site);
};