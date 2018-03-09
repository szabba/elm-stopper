import { Elm } from './elm-stopper.elm.js'

class ElmStopper extends HTMLElement {
    constructor() {
        super()
        Elm.Stopper.Main.embed(this.shadowRoot)
    }
}

customElements.define('elm-stopper', ElmStopper)