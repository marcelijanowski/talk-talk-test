import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import registerDirectives from './directives';

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', ['ngSanitize']);

ngModule.controller('appController', function ($scope) {
  $scope.data = [{
    title: 'What is a Card Module ?',
    image: 'http://media.secure-mobiles.com/product-images/samsung-galaxy-a3-black.small.centre.jpg',
    text: '<p>A presentation-card is a HTML component which allows us to wrap HTML content around a predefined template.</p>' + 
          '<p>This allows us to maintain a degree of control around the presentation of content, without completly restricting the development team.</p>' +
          '<p>Things we\'re looking at:</p>' +
          '<ul>' +
            '<li>Visual attention to detail.</li>' +
            '<li>Cleanliness of code.</li>' +
            '<li>Reusability of code</li>' +
            '<li>Maintainability of code</li>' +
          '</ul>'
  }, {
    title: 'Alternating Code',
    image: 'http://media.secure-mobiles.com/product-images/htc-one-a9-silver.small.centre.jpg',
    text: '<p>One of the most important things when building for the presentation layer is ensuring that your code is protected against breakages from BAU activities</p>' +
          '<p>This could be simple mistake made via a CMS or by slight changes in any visual assets you may have been provided.' +
          '<p>More things we\'re looking at' +
          '<ul>' +
          '<li>Use of BEM Methodology</li>' +
          '<li>Use of directvies</li>' +
          '<li>DRY</li>' +
          '<li>Use of dependency inversion principle</li>' +
          '</ul>'
  }]
});

registerDirectives(ngModule);