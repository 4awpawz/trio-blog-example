module.exports = ({ site }) =>
    site.categoriesCatalog.map(item => ({ data: item, pageName: item.category }));
