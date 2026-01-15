describe("login functionality", () => {
  it("login ", () => {

    cy.visit('https://www.flipkart.com/')

    cy.contains('Login').click()

    cy.get("div[class='XizdcU Zl53fz'] > input").type("hhthskskujghg")

    cy.contains('Request OTP').click()

    cy.scrollTo('top')

    cy.wait(5000)

    cy.contains('Please enter valid Email ID/Mobile number').should('be.visible')
    
  });
});