/**
 * Allows text inputs to display a placeholder message until it gets focus, at which point the input
 * is set to empty.
 *
 * This simulated the placeholder attribute in html5.
 * http://dev.w3.org/html5/spec/Overview.html#the-placeholder-attribute
 *
 * @copyright Clock Limited 2010
 * @license http://opensource.org/licenses/bsd-license.php New BSD License
 * @author Paul Serby <paul.serby@clock.co.uk>
 */
(function ($) {
	$.fn.placeholder = function (text) {

		function onBlur(event) {
			checkIfEmpty($(this));
		}

		function checkIfEmpty(control) {
			if (control.val() === '') {
				control.val(text);
				control.addClass('placeholder');
			}
		}

		function onFocus(event) {
			$(this).removeClass('placeholder');
			if ($(this).val() === text) {
				$(this).val('');
			}
		}

		return this.each(function () {
			
			if (!('placeholder' in document.createElement('input'))) {
				checkIfEmpty($(this).blur(onBlur).focus(onFocus).addClass('placeholder'));
			} else {
				$(this).attr('placeholder', text);
			}

		});
	};
})(jQuery);
