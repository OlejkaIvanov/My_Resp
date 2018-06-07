class Good
{
  constructor(id, title, price) {
    this.id = id;
    this.title = title;

    render(jQueryElement) {
      let $goodConteiner = $('<div />', {
        class : 'good'
      });

      let $goodConteiner = $ (`<p>Цена: <span class="product-price">$ {this.prise}')
    }
  }
};