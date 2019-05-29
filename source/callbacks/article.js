module.exports = ({ $tag, asset }) => {
    const data = asset.matter.data;
    $tag.find("h1.article__title").append(data.title);
    $tag.find("span.article__category").append(`"${data.category}"`);
    $tag.find("span.article__date").append(asset.articleDate);
    $tag.find("img.article__img").attr("src", `/media/${asset.matter.data.image}`);
};