(function () {
  'use strict';
  var message = document.getElementById('notification-message');
  var preview = document.getElementById('notification-preview');
  var clear = document.getElementById('notification-clear');
  var count = document.getElementById('notification-count');
  var status = document.getElementById('notification-goldhen');
  var availability = document.getElementById('notification-delivery');
  if (!message || !preview || !clear || !count || !status || !availability) return;
  function update() {
    preview.textContent = /\S/.test(message.value) ? message.value : 'Your notification message will appear here.';
    count.textContent = String(message.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length) + ' characters';
    clear.disabled = message.value.length === 0;
  }
  message.oninput = update;
  clear.onclick = function () { message.value = ''; update(); message.focus(); };
  status.onchange = function () {
    availability.textContent = status.value === 'active' ? 'GoldHEN is manually confirmed active, but no notification connection is available. Nothing can be sent.' : 'GoldHEN must be active on the console, and a compatible notification service must be connected before sending.';
  };
  update();
}());