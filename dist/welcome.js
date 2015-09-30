System.register([], function (_export) {
	'use strict';

	var Welcome;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [],
		execute: function () {
			Welcome = (function () {
				function Welcome() {
					_classCallCheck(this, Welcome);

					this.heading = 'Aurelia Navigation App';
					this.firstName = 'Daniel';
					this.lastName = 'Anderson';
				}

				_createClass(Welcome, [{
					key: 'submit',
					value: function submit() {
						alert('Welcome, ' + this.fullName + '!');
					}
				}, {
					key: 'fullName',
					get: function get() {
						return this.firstName + ' ' + this.lastName;
					}
				}]);

				return Welcome;
			})();

			_export('Welcome', Welcome);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7S0FDYSxPQUFPOzs7Ozs7Ozs7QUFBUCxVQUFPO2FBQVAsT0FBTzsyQkFBUCxPQUFPOztVQUVuQixPQUFPLEdBQUcsd0JBQXdCO1VBQ2xDLFNBQVMsR0FBRyxRQUFRO1VBQ3BCLFFBQVEsR0FBRyxVQUFVOzs7aUJBSlQsT0FBTzs7WUFVYixrQkFBRTtBQUNQLFdBQUssZUFBYSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUM7TUFDcEM7OztVQU5XLGVBQUU7QUFDYixhQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztNQUM1Qzs7O1dBUlcsT0FBTyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xyXG5cdFxyXG5cdGhlYWRpbmcgPSAnQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCc7XHJcblx0Zmlyc3ROYW1lID0gJ0RhbmllbCc7XHJcblx0bGFzdE5hbWUgPSAnQW5kZXJzb24nO1xyXG5cdFxyXG5cdGdldCBmdWxsTmFtZSgpe1xyXG5cdFx0cmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcclxuXHR9XHJcblx0XHJcblx0c3VibWl0KCl7XHJcblx0XHRhbGVydChgV2VsY29tZSwgJHt0aGlzLmZ1bGxOYW1lfSFgKTtcclxuXHR9XHJcblx0XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
