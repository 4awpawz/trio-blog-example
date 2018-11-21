module.exports = ({ $, page }) => {
    const data = page.matter.data;
    $("h1.article__title").append(data.title);
    $("span.article__category").append(data.category);
    $("span.article__date").append(page.articleDate);
};