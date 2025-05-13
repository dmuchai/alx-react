import $ from 'jquery';
import '../header/header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

$('body').prepend('<div id="logo"></div>');
$('#logo').css('background', `url(${logo}) no-repeat center center`);

$('body').prepend('<h1>ALX Dashboard</h1>');
