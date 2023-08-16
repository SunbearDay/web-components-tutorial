// This file will be the web component.
// It only needs to run, not be imported by main.js.

const template = document.createElement('template')
template.innerHTML = `
    <style>
        :host {
            /* The shadow root. */
            background-color: #333; /* default */
            color: white;
            display: block; /* critical */
        }

        ::slotted(h2) {
            /* Represents an h2 element that has been placed into a slot */
            font-weight: 300;
        }

        .root {
            position: relative;
            padding: 2rem;
        }

        .character {
            position: absolute;
            z-index: 10;
            top: -10rem;
            left: 0;
            font-size: 10rem;
            line-height: 1;
            color: hsla(60 50% 80% / 0.32);
        }
    </style>
    <div class="root">
        <h1>Big Bang Theory</h1>
        <slot name="title">
            Default text if no title used in HTML.
        </slot>
    </div>
`

class BigBang extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'closed' })

        let clone = template.content.cloneNode(true)
        this.root.append(clone)
    }

    // Define the allowed attributes.
    static get observedAttributes() {
        // Belongs to the HTMLElement.
        // Return the attributes we want to observe.
        return ['character', 'color']
    }

    // Sync attributes with properties as you want.
    get character() {
        return this.getAttribute('character')
    }

    set character(value) {
        this.setAttribute('character', value)
    }

    get color() {
        return this.getAttribute('color')
    }

    set color(value) {
        this.setAttribute('color', value)
    }

    // Handle values and changes to the attributes.
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'character') {
            const div = this.root.querySelector('.root')
            let p = div.querySelector('p')
                ? div.querySelector('p')
                : document.createElement('p')
            p.className = 'character'
            p.textContent = newVal
            div.append(p)
        }

        if (attrName === 'color') {
            this.style.backgroundColor = newVal
        }
    }
}

window.customElements.define('big-bang', BigBang)