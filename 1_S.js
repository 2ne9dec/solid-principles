// Single Responsibility Principle - каждый объект должен иметь одну ответственность и эта ответственность должна быть полностью инкапсулирована в класс.

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modifed = false;
  }

  update(text) {
    this.text = text;
    this.modifed = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `;
  }

  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modifed: this.news.modifed,
      },
      null,
      2
    );
  }

  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <title>${this.news.text}</title>
      </news>
    `;
  }
}

const printer = new NewsPrinter(
    new News("Ура", "Вадим скоро будет дома")
);

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());