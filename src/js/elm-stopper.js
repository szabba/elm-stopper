import Elm from './elm-stopper.elm.js'

class ElmStopper extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        Elm.Main.embed(this.shadowRoot)
    }
}

customElements.define('elm-stopper', ElmStopper)