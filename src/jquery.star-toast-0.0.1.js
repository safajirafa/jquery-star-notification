/*!
 * An iOS toast (like) notification to star and unstar items
 * Author: @safajirafa
 * Licensed under the MIT license
 */

/*global jQuery, window, document*/
;(function ( $, window, document, undefined ) {
	'use strict';

	$.fn.starNotification = function ( options ) {
		options = $.extend( {}, $.fn.starNotification.options, options );

		return this.each(function () {

			var elem = $(this);

			// Notification box html
			var $notificationBox = $('<div>').addClass('star-notification');
			var $starType = $('<span></span>');
			var $starLabel = $('<label></label>');

			//subscribe to 'starNotification' custom event
			elem.on( 'starNotification', function( e, action ) {

				switch(action){
					case 'starred':

						$starType.html(options.starChar);
						$starLabel.text(options.starLabel);

						// Create notification
						$notificationBox.append($starType).append($starLabel);
						break;

					case 'unstarred':
						$starType.html(options.unstarChar);
						$starLabel.text(options.unstarLabel);

						// Create notification
						$notificationBox.append($starType).append($starLabel);
						break;
				}

				// Append notification while user can see it
				$('body').append($notificationBox);

				// Remove DOM notificationBox to avoid "trash" after shown
				setTimeout(function() {
					$('.star-notification').remove();
				}, options.fadeOutTime);

			});

		});
	};

	// Globally overriding options
	// Here are our publicly accessible default plugin options
	// that are available in case the user doesn't pass in all
	// of the values expected. The user is given a default
	// experience but can also override the values as necessary.
	// eg. $fn.starNotification.key ='otherval';

	$.fn.starNotification.options = {

		fadeOutTime: 800, // Same time as animation duration in css
		starChar: '&#9733;',
		unstarChar: '&#9734;',
		starLabel: 'Starred',
		unstarLabel: 'Unstarred'
	};

})( jQuery, window, document );

//Publishing event notifications
//usage:
// $(document).trigger("starNotification", 'starred');
// $(document).trigger("starNotification", 'unstarred');
