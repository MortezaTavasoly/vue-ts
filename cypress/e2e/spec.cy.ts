// تست ها ران میشن با وجود ارور ها

describe("template spec", () => {
  it("popup is set", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup"').should("exist");
  });
  it("putting name inside of input and submit test", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
  });
  it("appbar is set", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="appbar"').should("exist");
  });
  it("slidbar is set", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="slidbar"').should("exist");
  });
  it("greeting in dashboard is set", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.get('[data-testid="greeting"').should("exist");
  });
  it("clock in dashboard is set", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.get('[data-testid="clock"').should("exist");
  });
  it("todo list is set", () => {
    cy.visit("http://localhost:8080/todos");
    cy.get('[data-testid="todos"').should("exist");
  });
  it("adding a task in todo list test", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/todos");
    cy.get('[data-testid="todo-input"').type("this is a example task");
    cy.get('[data-testid="todo-form"').submit();
    cy.get('[data-testid="todo"').should("exist");
  });
  it("removing a task from todo list test", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/todos");
    cy.get('[data-testid="todo-input"').type("this is a example task");
    cy.get('[data-testid="todo-form"').submit();
    cy.get('[data-testid="delete-btn"').click();
  });
  it("weather default location is set", () => {
    cy.visit("http://localhost:8080/weather");
    cy.get('[data-testid="weather"').should("exist");
  });
  it("searching a location in english to get weather data test", () => {
    cy.visit("http://localhost:8080/weather");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/weather");
    cy.get('[data-testid="search"').type("new york {enter}");
    cy.get('[data-testid="weather"').should("exist");
  });
  it("searching a location in farsi to get weather data test", () => {
    cy.visit("http://localhost:8080/weather");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/weather");
    cy.get('[data-testid="search"').type(" تهران {enter}");
    cy.get('[data-testid="weather"').should("exist");
  });
  it("profile is set", () => {
    cy.visit("http://localhost:8080/profile");
    cy.get('[data-testid="profile"').should("exist");
  });
  it("changing profile name test", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/profile");
    cy.get('[data-testid="name-edit-input"').type("morteza tavasoly{enter}");
  });
  it("changing theme test", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("example name");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/profile");
    cy.get('[data-testid="mode"').select("Dark Mode");
  });
  it("changing language test", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("نادین سافت");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/profile");
    cy.get('[data-testid="mode"').select("Dark Mode");
    cy.get('[ data-testid="locale"').select("Farsi");
  });
  it("openning sidebar", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="popup-input"').type("Nadin Soft");
    cy.get('[data-testid="popup-form"').submit();
    cy.visit("http://localhost:8080/profile");
    cy.get('[data-testid="mode"').select("Dark Mode");
    cy.get('[data-testid="sidebar-toggle"').click();
  });
});
