/**
 * Module dependencies.
 */

const Tip = require('@pirxpilot/tip');

/**
 * Initialize a `Popover` with the given `content`
 * and optional `title`.
 *
 * @param {Mixed} content
 * @param {Mixed} title
 * @api public
 */

const template = `
<div class="popover-wrapper">
  <span class="popover-title"></span>
  <div class="popover-content"></div>
</div>
`;

class Popover extends Tip {
  constructor(content, title) {
    super(template);
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
    const contentEl = this.el.querySelector('.popover-content');
    if (typeof content === 'string') contentEl.innerHTML = content;
    else contentEl.appendChild(content);
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
    const titleEl = this.el.querySelector('.popover-title');
    if (typeof title === 'string') titleEl.innerHTML = title;
    else titleEl.appendChild(title);
    return this;
  }

  /**
   * Hide the title.
   *
   * @return {Popover}
   * @api private
   */

  hideTitle() {
    const titleEl = this.el.querySelector('.popover-title');
    titleEl.remove();
    return this;
  }
}

/**
 * Expose `Popover`.
 */

module.exports = Popover;
