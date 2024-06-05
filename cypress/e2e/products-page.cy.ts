describe("Products Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render page", () => {
    cy.get("h2").should("include.text", "Products");
  });

  it("should be able to search for a product", () => {
    cy.get('[data-testid="search-input"]').type("Powder");

    cy.get('[data-testid="title"]').should("have.length", 2);
  });

  it("should be able to sort by price ascending order", () => {
    cy.get('[data-testid="sort-button"]').click();

    cy.get('[data-testid="price"]').first().should("include.text", "$0.99");
  });

  it("should be display total number of products", () => {
    cy.get('[data-testid="total-value"]').should("include.text", "194");
  });

  it("should calculate average product price", () => {
    cy.get('[data-testid="average-price"]').should("include.text", "$228.91");
  });
});
