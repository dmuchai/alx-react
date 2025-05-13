import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<div id="logo"></div>');
$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

const button = $('<button>Click here to get started</button>');
$('body').append(button);
$('body').append('<p id="count">0 clicks on the button</p>'); // ✅ Initial value
$('body').append('<p>Copyright - ALX</p>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

button.on('click', _.debounce(updateCounter, 300));
