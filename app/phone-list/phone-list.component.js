'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListController($http) {
      var self = this;
      self.orderProp = 'id';

      $http.get('phones/agreements.json').then(function(response) {
        self.agreements = response.data;
      });
    }]
  });
