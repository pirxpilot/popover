/**
 * Module dependencies.
 */

const Tip = require('@pirxpilot/tip');

const q = require('query');

/**
 * Initialize a `Popover` with the given `content`
 * and optional `title`.
 *
 * @param {Mixed} content
 * @param {Mixed} title
 * @api public
 */

class Popover extends Tip {
  constructor(content, title) {
    super(require('./template.html'));
    this.classname = 'popover';
    this.el.classList.add('popover');
    if (title) this.title(title);
    else this.hideTitle();
    this.content(content);
    if (Popover.effect) this.effect(Popover.effect);
  }

  /**
   * Replace `content`.
   *
   * @param {Mixed} content
   * @return {Popover}
   * @api public
   */

  content(content) {
    const contentEl = q('.popover-content', this.el);
    if (typeof content === 'string')
      contentEl.innerHTML = content;
    else
      contentEl.appendChild(content);
    return this;
  }

  /**
   * Change `title`.
   *
   * @param {String} title
   * @return {Popover}
   * @api public
   */

  title(title) {
    const titleEl = q('.popover-title', this.el);
    if (typeof title === 'string')
      titleEl.innerHTML = title;
    else
      titleEl.appendChild(title);
    return this;
  }

  /**
   * Hide the title.
   *
   * @return {Popover}
   * @api private
   */

  hideTitle() {
    const titleEl = q('.popover-title', this.el);
    titleEl.parentNode.removeChild(titleEl);
    return this;
  }
}

/**
 * Expose `Popover`.
 */

module.exports = Popover;
