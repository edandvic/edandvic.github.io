/* Ed & Vic */

var myApp = angular.module('edandvic', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/rsvp/search', {
      templateUrl: '/template/search.html',
      controller: 'SearchCtrl'
    })
    .when('/rsvp/:id/names', {
      templateUrl: '/template/names.html',
      controller: 'NamesCtrl'
    })
    .when('/rsvp/:id/pies', {
      templateUrl: '/template/pies.html',
      controller: 'PiesCtrl'
    })
    .when('/rsvp/thankyou', {
      templateUrl: '/template/thankyou.html',
      controller: 'ThankyouCtrl'
    })
    .otherwise({
      redirectTo: '/rsvp/search'
    })
});

myApp.service('invitees', ['$window', function(win) {

  var invitees = [
    {id: 1,  group: 1,  first_name: 'John',    last_name: 'Jesper'},
    {id: 2,  group: 1,  first_name: 'Anne',    last_name: 'Pharo'},
    {id: 3,  group: 2,  first_name: 'Natalie', last_name: 'Hogg'},
    {id: 4,  group: 2,  first_name: 'Peter',   last_name: 'Hogg'},
    {id: 98, group: 99, first_name: 'Ed',      last_name: 'Clements'},
    {id: 99, group: 99, first_name: 'Vic',     last_name: 'Jesper'},
  ];

  this.search = function(form) {
    return _.findWhere(invitees, form);
  };

  this.get = function(id) {
    return _.findWhere(invitees, {id: parseInt(id)});
  };

  this.getGroup = function(id) {
    return _.where(invitees, {group: parseInt(id)});
  };

}]);

myApp.controller('SearchCtrl', ['$scope', '$location', 'invitees', function($scope, $location, invitees) {

  $scope.invitee = {}

  $scope.submit = function(form) {
    console.log('submit form ', form);
    var result = invitees.search(form);
    console.log('result ', result);
    if (result) {
      $location.url("/rsvp/"+result.id+"/names");
    };
  };

}]);

myApp.controller('NamesCtrl', ['$scope', '$routeParams', '$location',
    'invitees', function($scope, $routeParams, $location, invitees) {

  $scope.names = {};

  $scope.submit = function(names) {
    console.log('submit ', names);
    $location.url("/rsvp/"+$routeParams.id+"/pies");
  };

  $scope.back = function() {
    $location.url("/rsvp/search");
  };

  invitee = invitees.get($routeParams.id);
  $scope.invitees = invitees.getGroup(invitee.group);
  _.each($scope.invitees, function(invitee) {
    $scope.names[invitee.id] = true
  });

}]);

myApp.controller('PiesCtrl', ['$scope', '$routeParams', '$http', '$location',
    'invitees', function($scope, $routeParams, $http, $location, invitees) {

  $scope.pies = [
    'Steak & Ale',
    'Venison, Stout & Prune',
    'Potato, Leek & Cheese',
    'Chicken & Mushroom'
  ];

  $scope.back = function() {
    $location.url("/rsvp/"+$routeParams.id+"/names");
  }

  success = function(x) {
    $location.url("/rsvp/thankyou");
  };

  mapParams = function(invitees, param) {
    return _.map(invitees, function(i) {
      return encodeURIComponent(i[param]);
    }).join();
  };

  appendParam = function(invitees, param) {
     return '&' + param + '=' + mapParams(invitees, param);
  };

  setParams = function(invitees) {
    return appendParam(invitees, 'first_name') +
      appendParam(invitees, 'last_name') +
      appendParam(invitees, 'pie');
  };

  $scope.submit = function(invitees) {
    console.log('submit ', invitees);

    var params = setParams(invitees);
    url = 'https://script.google.com/macros/s/AKfycbz4Ato2HMxsKRGQbPWdZXuHOCSpvBXgzBGgt91agEaxTyvyPiRF/exec?jsonp=success'
      + params
    $http({method: 'JSONP', url: url}).then(function(response) {
      console.log('success ', response);
    }, function(err) {
      console.log('err ', err);
    });
  };

  invitee = invitees.get($routeParams.id);
  $scope.invitees = invitees.getGroup(invitee.group);

}]);

myApp.controller('ThankyouCtrl', ['$scope', '$routeParams', '$http', 'invitees',
    function($scope, $routeParams, $http, invitees) {

}]);
