/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns shallow copy of an object.
 *
 * @param {Object} obj - an object to copy
 * @return {Object}
 *
 * @example
 *    shallowCopy({a: 2, b: 5}) => {a: 2, b: 5}
 *    shallowCopy({a: 2, b: { a: [1, 2, 3]}}) => {a: 2, b: { a: [1, 2, 3]}}
 *    shallowCopy({}) => {}
 */
function shallowCopy(obj) {
  const temp = {};

  return Object.assign(temp, obj);
}

/**
 * Merges array of objects into a single object. If there are overlapping keys, the values
 * should be summed.
 *
 * @param {Object[]} objects - The array of objects to merge
 * @return {Object} - The merged object
 *
 * @example
 *    mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}]) => {a: 1, b: 5, c: 5}
 *    mergeObjects([]) => {}
 */
function mergeObjects(objects) {
  const newArr = {};

  objects.forEach((el) => {
    Object.entries(el).forEach((elm) => {
      const [key, value] = elm;
      if (newArr[key]) {
        newArr[key] += value;
      } else {
        newArr[key] = value;
      }
    });
  });

  return newArr;
}

/**
 * Removes a properties from an object.
 *
 * @param {Object} obj - The object from which to remove the property
 * @param {Array} keys - The keys of the properties to remove
 * @return {Object} - The object with the specified key removed
 *
 * @example
 *    removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) => {a: 1}
 *    removeProperties({a: 1, b: 2, c: 3}, ['d', 'e']) => {a: 1, b: 2, c: 3}
 *    removeProperties({name: 'John', age: 30, city: 'New York'}, 'age') => {name: 'John', city: 'New York'}
 *
 */
function removeProperties(obj, keys) {
  const linkObj = obj;

  keys.forEach((el) => {
    delete linkObj[el];
  });

  return linkObj;
}

/**
 * Compares two source objects. Returns true if the objects are equal and false otherwise.
 * There are no nested objects.
 *
 * @param {Object} obj1 - The first object to compare
 * @param {Object} obj2 - The second object to compare
 * @return {boolean} - True if the objects are equal, false otherwise
 *
 * @example
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 2}) => true
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 3}) => false
 */
function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/**
 * Checks if the source object is empty.
 * Returns true if the object contains no enumerable own properties, false otherwise.
 *
 * @param {Object} obj - The object to check
 * @return {boolean} - True if the object is empty, false otherwise
 *
 * @example
 *    isEmptyObject({}) => true
 *    isEmptyObject({a: 1}) => false
 */
function isEmptyObject(obj) {
  return !Object.keys(obj).length > 0;
}

/**
 * Makes the source object immutable by preventing any changes to its properties.
 *
 * @param {Object} obj - The source object to make immutable
 * @return {Object} - The immutable version of the object
 *
 * @example
 *    const obj = {a: 1, b: 2};
 *    const immutableObj = makeImmutable(obj);
 *    immutableObj.a = 5;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    delete immutableObj.a;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    immutableObj.newProp = 'new';
 *    console.log(immutableObj) => {a: 1, b: 2}
 */
function makeImmutable(obj) {
  return Object.freeze(obj);
}

/**
 * Returns a word from letters whose positions are provided as an object.
 *
 * @param {Object} lettersObject - An object where keys are letters and values are arrays of positions
 * @return {string} - The constructed word
 *
 * @example
 *    makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }) => 'aabbcc'
 *    makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]}) => 'HelloWorld'
 */
function makeWord(lettersObject) {
  const tempArr = [];

  Object.entries(lettersObject).forEach((el) => {
    const [key, value] = el;
    value.forEach((elm) => {
      tempArr[elm] = key;
    });
  });

  return tempArr.join('');
}

/**
 * There is a queue for tickets to a popular movie.
 * The ticket seller sells one ticket at a time strictly in order and give the change.
 * The ticket costs 25. Customers pay with bills of 25, 50, or 100.
 * Initially the seller has no money for change.
 * Return true if the seller can sell tickets, false otherwise
 *
 * @param {number[]} queue - The array representing the bills each customer pays with
 * @return {boolean} - True if the seller can sell tickets to everyone, false otherwise
 *
 * @example
 *    sellTickets([25, 25, 50]) => true
 *    sellTickets([25, 100]) => false (The seller does not have enough money to give change.)
 */
function sellTickets(queue) {
  let wallet = 0;
  let isCan = true;

  queue.forEach((el, index) => {
    if (index !== 0 && el > wallet) {
      isCan = false;
    }
    wallet += el;
  });

  return isCan;
}

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.getArea = () => this.width * this.height;
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = Object.create(proto);

  Object.entries(JSON.parse(json)).forEach((el) => {
    const [key, value] = el;
    obj[key] = value;
  });

  return obj;
}

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  return arr.sort((a, b) => (a.country + a.city > b.country + b.city ? 1 : -1));
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  const tempObj = {};

  array.forEach((el) => {
    const key = keySelector(el);
    const value = valueSelector(el);
    if (tempObj[key]) {
      tempObj[key].push(value);
    } else {
      tempObj[key] = [value];
    }
  });

  return new Map(Object.entries(tempObj));
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */
class MySuperBaseElementSelector {
  constructor() {
    this.selectorsArr = [];
    this.output = '';
    this.uniqElObj = {
      element: false,
      id: false,
      pseudoElement: false,
    };
    this.prevTag = false;
    this.orderTagList = {
      element: 0,
      id: 1,
      class: 2,
      attribute: 3,
      pseudoClass: 4,
      pseudoElement: 5,
    };
  }

  checkOrder(tag) {
    // console.log('tag: ', tag)
    if (
      this.prevTag &&
      this.orderTagList[tag] < this.orderTagList[this.prevTag]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    } /* else {
      this.prevTag = tag;
    } */
  }

  element(value) {
    const tag = 'element';
    // this.checkOrder(this.orderTagList[tag]);
    if (
      this.prevTag &&
      this.orderTagList[tag] < this.orderTagList[this.prevTag]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    this.prevTag = tag;
    if (this.uniqElObj.element) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
    this.uniqElObj.element = true;
    this.selectorsArr.push(value);
    return this;
  }

  id(value) {
    const tag = 'id';
    // this.checkOrder(this.orderTagList[tag]);
    if (
      this.prevTag &&
      this.orderTagList[tag] < this.orderTagList[this.prevTag]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    this.prevTag = tag;
    if (this.uniqElObj.id) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
    this.uniqElObj.id = true;
    this.selectorsArr.push(`#${value}`);
    return this;
  }

  class(value) {
    const tag = 'class';
    // this.checkOrder(this.orderTagList[tag]);
    if (
      this.prevTag &&
      this.orderTagList[tag] < this.orderTagList[this.prevTag]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    this.prevTag = tag;
    this.selectorsArr.push(`.${value}`);
    return this;
  }

  attr(value) {
    const tag = 'attribute';
    // this.checkOrder(this.orderTagList[tag]);
    if (
      this.prevTag &&
      this.orderTagList[tag] < this.orderTagList[this.prevTag]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    this.prevTag = tag;
    this.selectorsArr.push(`[${value}]`);
    return this;
  }

  pseudoClass(value) {
    const tag = 'pseudoClass';
    // this.checkOrder(this.orderTagList[tag]);
    if (
      this.prevTag &&
      this.orderTagList[tag] < this.orderTagList[this.prevTag]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    this.prevTag = tag;
    this.selectorsArr.push(`:${value}`);
    return this;
  }

  pseudoElement(value) {
    const tag = 'pseudoElement';
    // this.checkOrder(this.orderTagList[tag]);
    if (
      this.prevTag &&
      this.orderTagList[tag] < this.orderTagList[this.prevTag]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    this.prevTag = tag;
    if (this.uniqElObj.pseudoElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
    this.uniqElObj.pseudoElement = true;
    this.selectorsArr.push(`::${value}`);
    return this;
  }

  stringify() {
    return this.selectorsArr.join('');
  }

  combine(selector1, combinator, selector2) {
    this.selectorsArr.push(
      `${selector1.stringify()} ${combinator} ${selector2.stringify()}`
    );
    return this;
  }
}

const cssSelectorBuilder = {
  element(value) {
    return new MySuperBaseElementSelector().element(value);
  },
  id(value) {
    return new MySuperBaseElementSelector().id(value);
  },
  class(value) {
    return new MySuperBaseElementSelector().class(value);
  },
  attr(value) {
    return new MySuperBaseElementSelector().attr(value);
  },
  pseudoClass(value) {
    return new MySuperBaseElementSelector().pseudoClass(value);
  },
  pseudoElement(value) {
    return new MySuperBaseElementSelector().pseudoElement(value);
  },
  combine(selector1, combinator, selector2) {
    return new MySuperBaseElementSelector().combine(
      selector1,
      combinator,
      selector2
    );
  },
};

module.exports = {
  shallowCopy,
  mergeObjects,
  removeProperties,
  compareObjects,
  isEmptyObject,
  makeImmutable,
  makeWord,
  sellTickets,
  Rectangle,
  getJSON,
  fromJSON,
  group,
  sortCitiesArray,
  cssSelectorBuilder,
};

// const builder = cssSelectorBuilder;

// Test simple selectors
//! builder.element('div').stringify();// 'div');
//! builder.id('nav-bar').stringify();// '#nav-bar');
//! builder.class('warning').stringify();// '.warning');
//! builder.attr('href$=".png"').stringify();// '[href$=".png"]');
//! builder.pseudoClass('invalid').stringify();// ':invalid');
//! builder.pseudoElement('first-letter').stringify();// '::first-letter');

// Test complex selectors
//! builder.element('li').id('main').stringify();//, 'li#main');
//! builder.element('div').class('container').stringify();//, 'div.container');
//! builder.element('div').class('container').class('clickable').stringify();//, 'div.container.clickable');
//! builder.id('main').class('container').class('editable').stringify();//, '#main.container.editable');
//! builder.element('li').id('home-menu').class('active').stringify();//, 'li#home-menu.active');
//! builder.class('container').class('nav-bar').class('navbar-inverted').stringify();//, '.container.nav-bar.navbar-inverted');
//! builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify();//, 'a[href$=".png"]:focus');
//! builder.element('p').pseudoClass('first-of-type').pseudoElement('first-letter').stringify();//,'p:first-of-type::first-letter');
//! builder.element('input').pseudoClass('focus').pseudoClass('invalid').stringify();//, 'input:focus:invalid');

// Test combined selectors
//! builder.combine(builder.element('p').pseudoClass('focus'), '>', builder.element('a').attr('href$=".png"')).stringify();// 'p:focus > a[href$=".png"]'
//! builder.combine(builder.element('p').id('introduction'), '~', builder.element('img').attr('href$=".png"')).stringify();// 'p#introduction ~ img[href$=".png"]'
//! builder.combine(builder.id('charter1').class('touch'), '+', builder.element('table')).stringify();// '#charter1.touch + table'
//! builder.combine(builder.element('ul').class('animable'), ' ', builder.element('li').pseudoClass('nth-of-type(1)')).stringify();// 'ul.animable   li:nth-of-type(1)'

//! builder.combine(
//!             builder
//!               .element('div')
//!               .id('main')
//!               .class('container')
//!               .class('draggable'),
//!             '+',
//!             builder.combine(
//!               builder.element('table').id('data'),
//!               '~',
//!               builder.combine(
//!                 builder.element('tr').pseudoClass('nth-of-type(even)'),
//!                 ' ',
//!                 builder.element('td').pseudoClass('nth-of-type(even)')
//!               )
//!             )
//!           )
//!           .stringify();// 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'

// Test validation
// builder.element('table').element('div'),
// builder.id('id1').id('id2'),
// builder.pseudoElement('after').pseudoElement('before'),
// Element, id and pseudo-element should not occur more then one time inside the selector/,

// builder.class('draggable').class('animated'),
// builder.attr('href').attr('title'),
// builder.pseudoClass('invalid').pseudoClass('focus'),
// Element, id and pseudo-element should not occur more then one time inside the selector/

// builder.id('id').element('div'),
// builder.class('main').id('id'),
// builder.attr('href').class('download-link'),
// builder.pseudoClass('hover').attr('title'),
// builder.pseudoElement('after').pseudoClass('valid'),
// builder.pseudoElement('after').id('id'),
// Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element/,
