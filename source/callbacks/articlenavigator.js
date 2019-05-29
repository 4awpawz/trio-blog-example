module.exports = ($, page) => {
    const $left = $("li.article-navigator__list-item-left");
    const $right = $("li.article-navigator__list-item-right");
    if (!page.nextArticleUrl.length > 0) {
        $left.addClass("article-navigator__list-item-left--hidden");
    } else {
        $left.find("a.article-navigator__list-item-link").attr("href", page.nextArticleUrl);
    }
    if (!page.previousArticleUrl.length > 0) {
        $right.addClass("article-navigator__list-item-right--hidden");
    } else {
        $right.find("a.article-navigator__list-item-link").attr("href", page.previousArticleUrl);
    }
};