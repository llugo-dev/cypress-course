
class ProductsPage {

    checkoutProducts() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }

    getProducts(products) {
        products.forEach(product => {
            cy.selectProduct(product);
        });
    }
}

export default ProductsPage;
