// This file will be the web component.
// It only needs to run, not be imported by main.js.

const template = document.createElement('template')
template.innerHTML = `
    <style>
        /* We can import stylesheets! */
        /* import url(); */

        div {
            /* border: 1px solid red; */
            padding: 3rem;
            margin: 3rem;
        }

        :host {
            /* For the shadow root. */
            background-color: lavender;
            display: block;
        }

        :host(big-bang) {
            /* Apply only for the specified element. */
            background-color: gold;
        }

        :host-context(main) {
            /* Not available in Firefox yet. */
            background-color: gold;
        }

        ::slotted(h2) {
            font-size: 4rem;
        }

        ::part() {
            /* Does not work here. */
        }
    </style>
    <div>
        <slot name="list"></slot>
        <h1>Big Bang Theory</h1>
        <slot name="title">
            Default text if no title used in HTML.
        </slot>
    </div>
`

class BigBang extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'closed' })

        // let div = document.createElement('div')
        // div.textContent = 'Big Bang Theory'
        // shadowRoot.append(div)

        let clone = template.content.cloneNode(true)
        shadowRoot.append(clone)
    }
}

window.customElements.define('big-bang', BigBang)