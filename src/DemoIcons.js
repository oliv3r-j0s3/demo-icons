import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './demo-icons.css.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import { bbvaAccount } from '@bbva-web-components/bbva-foundations-icons';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <demo-icons></demo-icons>
 * ```
 */

// algunas versiones de cells, requieren que invoques el ícono como función
// si se usará en el formato: bbva:icon
// bbvaAccount();
export class DemoIcons extends LitElement {
  static get properties() {
    return {
      /**
       * Description for property
       */
      name: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.name = 'the jungle';
  }

  static get styles() {
    return [styles, getComponentSharedStyles('demo-icons-shared-styles')];
  }

  render() {
    return html`
      <p>Welcome to ${this.name}</p>
      <!-- <bbva-core-icon icon="bbva:account"></bbva-core-icon> -->
      <bbva-core-icon icon="${bbvaAccount()}"></bbva-core-icon>
      <bbva-core-icon icon="${bbvaAccount()}"></bbva-core-icon>
      <bbva-core-icon icon="${bbvaAccount()}"></bbva-core-icon>
      <slot></slot>
    `;
  }
}

//comandos>
// cells lit-component:create demo-icons @demo
// npm install (en la raíz del proyecto)
// installar elementos de este proyecto>
// npm install @bbva-web-components/bbva-core-icon
// @bbva-web-components/bbva-foundations-icons
// Para ejecutar - cells lit-component:serve
