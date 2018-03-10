import Elm from './elm-stoper.elm.js'

class ElmStoper extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        Elm.Main.embed(this.shadowRoot)
    }
}

customElements.define('elm-stoper', ElmStoper)