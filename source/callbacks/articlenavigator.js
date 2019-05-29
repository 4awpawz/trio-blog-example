module.exports = ({ $tag, asset }) => {
    const $left = $tag.find("li.article-navigator__list-item-left");
    const $right = $tag.find("li.article-navigator__list-item-right");
    if (!asset.nextArticleUrl.length > 0) {
        $left.addClass("article-navigator__list-item-left--hidden");
    } else {
        $left.find("a.article-navigator__list-item-link").attr("href", asset.nextArticleUrl);
    }
    if (!asset.previousArticleUrl.length > 0) {
        $right.addClass("article-navigator__list-item-right--hidden");
    } else {
        $right.find("a.article-navigator__list-item-link").attr("href", asset.previousArticleUrl);
    }
};