// Liskov Substitution Principle - функции, которые используют базовый тип, должны уметь с ним взаимодействовать, плюс взаимодействовать с подтипами данного базового типа ничего не зная про это.

// Example 1
class Person {}

class Member extends Person {
  access() {
    console.log("У тебя есть доступ");
  }
}

class Guest extends Person {
  isGuest = true;
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error("У тебя нет доступа");
  }
}

function openSecretDoor(member) {
  member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());

// =====================

// Example 2
class Component {
  isComponent = true;
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends Component {
  render() {
    throw new Error("Render is impossible here");
  }

  wrapContent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
