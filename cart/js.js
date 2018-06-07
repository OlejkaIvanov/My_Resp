/**
* @property {object} settings Настройки корзины товаров.
* @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
* @property {HTMLElement} basketCountEl Место для показа количества товаров.
* @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
*/
const basket = {
  settings: {
  countSelector: '#basket-count',
  priceSelector: '#basket-price',
  },
  goods: [],
  countEl: null,
  priceEl: null,
  
  /**
  * Инициализирует переменные для корзины и показывает эти значения.
  */
  init(settings = {}) {
    Object.assign(this.settings, userSettings);

    this.render();

    document
    .querySelector(this.settings.previewSelector)
    .addEventListener('click', event => this.containerClickHandler(event));
  },
  
    /**
   * Обработчик события клика для открытия картинки.
   * @param {MouseEvent} event Событие клики мышью.
   * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
   */
  containerClickHandler(event) {
    // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
    if (event.target.tagName !== 'button') {
      return;
    }
    // Открываем картинку с полученным из целевого тега (data-full_image_url аттрибут).
    this.openImage(event.target.dataset.full_image_url);
  },
  /**
  * Отображает количество всех товаров и их цену.
  */
  render() {},
  
  /**
  * Считает и возвращает цену всех купленных товаров из массива this.goods.
  * @returns {number} Цену всех купленных товаров.
  */
  getGoodsPrice() {},
  
  /**
  * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
  * @param goodName Название товара.
  * @param goodPrice Цена товара.
  */
  add(goodName, goodPrice) {},
  };