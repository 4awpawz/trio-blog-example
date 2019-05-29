module.exports = ({ $tag, $, site }) => {
    site.articlesCatalog.forEach(article => {
        $tag.append(/* html */`
            <li class="blog__article-list-item">
                <article class="blog__article">
                    <a data-trio-link class="blog__article-link" href="${article.url}">
                        <img data-trio-link src="/media/${article.matter.data.image}" alt="" class="blog__article-img">
                        <h1 class="blog__article-title">${article.matter.data.title}</h1>
                        <h2 class="blog__article-info">Posted to "${article.matter.data.category}" on ${article.articleDate}</h2>
                        <p class="blog__article-excerpt">${article.matter.excerpt}</p>
                    </a>
                </article>
            </li>
        `);
    });
};