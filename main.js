class LottoNumbers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  render(numbers = this.generateNumbers()) {
    this.shadowRoot.innerHTML = `
      <style>
        .lotto-number {
          background-color: var(--card-background-color);
          color: var(--text-color);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          box-shadow: 0 2px 4px var(--shadow-color);
        }
      </style>
      ${numbers.map(number => `<div class="lotto-number">${number}</div>`).join('')}
    `;
  }
}

customElements.define('lotto-numbers', LottoNumbers);

document.getElementById('generate-btn').addEventListener('click', () => {
  document.querySelector('lotto-numbers').render();
});
