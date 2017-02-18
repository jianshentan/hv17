/* global $*/
/* global mobile */
/* global ga */
/* global goog_report_conversion */

/* GA Event Tracking */

$(document).ready(function() {
  // nav
  $("#nav-back-to-top").click(function() { sendStatic('navigation', 'click', 'nav-back-to-top'); });
  $("#nav-about").click(function() { sendStatic('navigation', 'click', 'nav-about'); });
  $("#nav-contact").click(function() { sendStatic('navigation', 'click', 'nav-contact'); });
  $("#nav-medium").click(function() { sendStatic('navigation', 'click', 'nav-medium'); });
  
  // meatface
  $("#meatface-title").click(function() { sendLink('meatface', 'click', 'meatface-title'); });
  $("#meatface-client").click(function() { sendLink('meatface', 'click', 'meatface-client'); });
  $("#meatface-content-1").click(function() { sendLink('meatface', 'click', 'meatface-content-1'); });
  $("#meatface-project").click(function() { sendLink('meatface', 'click', 'meatface-project'); });
  
  // SDF
  $("#sdf-title").click(function() { sendLink('sdf', 'click', 'sdf-title'); });
  $("#sdf-project").click(function() { sendLink('sdf', 'click', 'sdf-project'); });
  
  // Pinkhouse
  $("#pinkhouse-project").click(function() { sendLink('pinkhouse', 'click', 'pinkhouse-project'); });
  
  // OKgrl2
  $("#okgrl-content-1").click(function() { sendLink('okgrl', 'click', 'okgrl-content-1'); });
  $("#okgrl-project").click(function() { sendLink('okgrl', 'click', 'okgrl-project'); });
  
  // Gradient
  $("#gradient-project").click(function() { sendLink('gradient', 'click', 'gradient-project'); });
  
  // SUPA
  $("#supa-content-1").click(function() { sendLink('supa', 'click', 'supa-content-1')});
  
  // Bitelabs
  $("#bitelabs-title").click(function() { sendLink('bitelabs', 'click', 'bitelabs-title'); });
  $("#bitelabs-project").click(function() { sendLink('bitelabs', 'click', 'bitelabs-project'); });
  
  // LAAGP
  $("#laagp-project").click(function() { sendLink('laagp', 'click', 'laagp-project'); });
  
  // click email link
  $("#about-email-link, #about-email-link").click(function() { 
    sendLink('contact', 'click', 'email');
    goog_report_conversion("mailto:friend@hellovelocity.com");
  });
  
  // highlight email link
  $(window).mouseup(function() {
    var selectedText = window.getSelection().toString();
    if (selectedText.includes("friend@hellovelocity.com")) {
      ga('send', 'event', 'contact', 'select', 'contact-email');
      goog_report_conversion("mailto:friend@hellovelocity.com");
    }
  });
  
  // mc subscribe button
  $("#mc-embedded-subscribe").click(function() {
    sendLink('contact', 'click', 'subscribe');
    goog_report_conversion();
  });
  
  // Social Media
  $("#social-media-facebook").click(function() { sendLink('social-media', 'click', 'social-media-facebook'); });
  $("#social-media-instagram").click(function() { sendLink('social-media', 'click', 'social-media-instagram'); });
  $("#social-media-twitter").click(function() { sendLink('social-media', 'click', 'social-media-twitter'); });
  $("#social-media-medium").click(function() { sendLink('social-media', 'click', 'social-media-medium'); });
  
  function sendLink(category, action, label) {
    ga('send', 'event', {
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      transport: 'beacon'
    }); 
  };
  
  function sendStatic(category, action, label) {
    ga('send', 'event', category, action, label);
  };
  
});