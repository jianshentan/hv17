/* global $*/
/* global mobile */
/* global ga */
/* global goog_report_conversion */

/* GA Event Tracking */

// nav
$("#nav-back-to-top").click(function() { ga('send', 'event', 'navigation', 'click', 'nav-back-to-top'); });
$("#nav-about").click(function() { ga('send', 'event', 'navigation', 'click', 'nav-about'); });
$("#nav-contact").click(function() { ga('send', 'event', 'navigation', 'click', 'nav-contact'); });
$("#nav-medium").click(function() { ga('send', 'event', 'navigation', 'click', 'nav-medium'); });

// meatface
$("#meatface-title").click(function() { ga('send', 'event', 'meatface', 'click', 'meatface-title'); });
$("#meatface-client").click(function() { ga('send', 'event', 'meatface', 'click', 'meatface-client'); });
$("#meatface-content-1").click(function() { ga('send', 'event', 'meatface', 'click', 'meatface-content-1'); });
$("#meatface-project").click(function() { ga('send', 'event', 'meatface', 'click', 'meatface-project'); });

// SDF
$("#sdf-title").click(function() { ga('send', 'event', 'sdf', 'click', 'sdf-title'); });
$("#sdf-project").click(function() { ga('send', 'event', 'sdf', 'click', 'sdf-project'); });

// Pinkhouse
$("#pinkhouse-project").click(function() { ga('send', 'event', 'pinkhouse', 'click', 'pinkhouse-project'); });

// OKgrl2
$("#okgrl-content-1").click(function() { ga('send', 'event', 'okgrl', 'click', 'okgrl-content-1'); });
$("#okgrl-project").click(function() { ga('send', 'event', 'okgrl', 'click', 'okgrl-project'); });

// Gradient
$("#gradient-project").click(function() { ga('send', 'event', 'gradient', 'click', 'gradient-project'); });

// SUPA
$("#supa-content-1").click(function() { ga('send', 'event', 'supa', 'click', 'supa-content-1')});

// Bitelabs
$("#bitelabs-title").click(function() { ga('send', 'event', 'bitelabs', 'click', 'bitelabs-title'); });
$("#bitelabs-project").click(function() { ga('send', 'event', 'bitelabs', 'click', 'bitelabs-project'); });

// LAAGP
$("#laagp-project").click(function() { ga('send', 'event', 'laagp', 'click', 'laagp-project'); });

// click email link
$("#about-email-link, #about-email-link").click(function() { 
  ga('send', 'event', {
    eventCategory: 'contact', 
    eventAction: 'click', 
    eventLabel: 'email',
    transport: 'beacon'
  });
  goog_report_conversion("mailto:friend@hellovelocity.com");
});

// highlight email link
$(window).mouseup(function() {
  var selectedText = window.getSelection().toString();
  if (selectedText.includes("friend@hellovelocity.com")) {
    ga('send', 'event', 'contact', 'select', 'contact-email');
    goog_report_conversion("mailto:friend@hellovelocity.com");
    alert("hi")
  }
});

// mc subscribe button
$("#mc-embedded-subscribe").click(function() {
  ga('send', 'event', {
    eventCategory: 'contact', 
    eventAction: 'click', 
    eventLabel: 'subscribe',
    transport: 'beacon'
  });
  goog_report_conversion();
});

// Social Media
$("#social-media-facebook").click(function() { ga('send', 'event', 'social-media', 'click', 'social-media-facebook'); });
$("#social-media-instagram").click(function() { ga('send', 'event', 'social-media', 'click', 'social-media-instagram'); });
$("#social-media-twitter").click(function() { ga('send', 'event', 'social-media', 'click', 'social-media-twitter'); });
$("#social-media-medium").click(function() { ga('send', 'event', 'social-media', 'click', 'social-media-medium'); });








