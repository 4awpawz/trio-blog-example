module.exports = ({ site }) => [{
    data: site.articlesCatalog.map(item => ({ data: item, pageName: "index.html" })),
    pageName: "index.html"
}];