describe("Visit Todos Page", () => {
  it("should visit home page", () => {
    cy.visit("/")
  })
})

describe("Add todo", () => {
  it("should add a new todo", () => {
    cy.wait(1000)
    .get("[data-cy-id='add-todo']")
    .find("input") // :(
    .should('be.visible') 
    .type("New Todo")
    .type("{enter}")
  })

  it("should clear add a new todo input field", () => {
    cy
    .wait(1000)
    .get("[data-cy-id='add-todo']")
    .find("input") // :(
    .clear()
  })
})


describe("Edit a todo", () => {
  it("should edit a todo", () => {
    cy.wait(1000).get("[data-cy-id='complete-todo']")
    .first() // :)
    .should('be.visible') 
    .click()
  })
})

describe("Delete a todo", () => {
  it("should delete a todo", () => {
    cy.wait(1000).get("[data-cy-id='delete-todo']")
    .first() // :)
    .should('be.visible')
    .click()
  })
})
