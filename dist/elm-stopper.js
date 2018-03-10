'use strict';

var _elmStopperElm = require('./elm-stopper.elm.js');

var _elmStopperElm2 = _interopRequireDefault(_elmStopperElm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var ElmStopper = function (_CustomElement2) {
    _inherits(ElmStopper, _CustomElement2);

    function ElmStopper() {
        _classCallCheck(this, ElmStopper);

        var _this = _possibleConstructorReturn(this, (ElmStopper.__proto__ || Object.getPrototypeOf(ElmStopper)).call(this));

        _this.attachShadow({ mode: 'open' });
        _elmStopperElm2.default.Main.embed(_this.shadowRoot);
        return _this;
    }

    return ElmStopper;
}(_CustomElement);

customElements.define('elm-stopper', ElmStopper);