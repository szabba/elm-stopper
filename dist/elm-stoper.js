'use strict';

var _elmStoperElm = require('./elm-stoper.elm.js');

var _elmStoperElm2 = _interopRequireDefault(_elmStoperElm);

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

var ElmStoper = function (_CustomElement2) {
    _inherits(ElmStoper, _CustomElement2);

    function ElmStoper() {
        _classCallCheck(this, ElmStoper);

        var _this = _possibleConstructorReturn(this, (ElmStoper.__proto__ || Object.getPrototypeOf(ElmStoper)).call(this));

        _this.attachShadow({ mode: 'open' });
        _elmStoperElm2.default.Main.embed(_this.shadowRoot);
        return _this;
    }

    return ElmStoper;
}(_CustomElement);

customElements.define('elm-stoper', ElmStoper);