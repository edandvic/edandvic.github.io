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
    {id: 1,   group: 1,  ceremony: true,  pie: true,  first_name: 'John',        last_name: 'Jesper'},
    {id: 2,   group: 1,  ceremony: true,  pie: true,  first_name: 'Anne',        last_name: 'Pharo'},
    {id: 3,   group: 2,  ceremony: true,  pie: true,  first_name: 'Natalie',     last_name: 'Hogg'},
    {id: 4,   group: 2,  ceremony: true,  pie: true,  first_name: 'Peter',       last_name: 'Hogg'},
    {id: 5,   group: 2,  ceremony: true,  pie: true,  first_name: 'Alexandra',   last_name: 'Hogg'},
    {id: 6,   group: 2,  ceremony: true,  pie: true,  first_name: 'Daniel',      last_name: 'Hogg'},
    {id: 7,   group: 3,  ceremony: true,  pie: true,  first_name: 'Elouise',     last_name: 'Statham'},
    {id: 8,   group: 3,  ceremony: true,  pie: true,  first_name: 'Matthew',     last_name: 'Statham'},
    {id: 9,   group: 3,  ceremony: true,  pie: true,  first_name: 'Thomas',      last_name: 'Statham'},
    {id: 10,  group: 3,  ceremony: true,  pie: true,  first_name: 'Hannah',      last_name: 'Statham'},
    {id: 11,  group: 4,  ceremony: true,  pie: true,  first_name: 'Emily',       last_name: 'Jesper'},
    {id: 12,  group: 4,  ceremony: true,  pie: true,  first_name: 'Saadat',      last_name: 'Mir'},
    {id: 13,  group: 5,  ceremony: true,  pie: true,  first_name: 'Sheila',      last_name: 'Hennis'},
    {id: 14,  group: 5,  ceremony: true,  pie: true,  first_name: 'John',        last_name: 'Hennis'},
    {id: 15,  group: 6,  ceremony: true,  pie: true,  first_name: 'Colin',       last_name: 'Forbear'},
    {id: 16,  group: 6,  ceremony: true,  pie: true,  first_name: 'Bernie',      last_name: 'Forbear'},
    {id: 17,  group: 7,  ceremony: true,  pie: true,  first_name: 'Valerie',     last_name: 'Brown'},
    {id: 18,  group: 7,  ceremony: true,  pie: true,  first_name: 'John',        last_name: 'Brown'},
    {id: 19,  group: 8,  ceremony: true,  pie: true,  first_name: 'Maria',       last_name: 'Brown'},
    {id: 20,  group: 8,  ceremony: true,  pie: true,  first_name: 'Simon',       last_name: ''},
    {id: 21,  group: 8,  ceremony: true,  pie: true,  first_name: 'Elsbeth',     last_name: 'Smith'},
    {id: 22,  group: 8,  ceremony: true,  pie: true,  first_name: 'Jacob',       last_name: 'Smith'},
    {id: 23,  group: 9,  ceremony: true,  pie: true,  first_name: 'Jonathan',    last_name: 'Brown'},
    {id: 24,  group: 9,  ceremony: true,  pie: true,  first_name: 'Carol',       last_name: 'Brown'},
    {id: 25,  group: 9,  ceremony: true,  pie: true,  first_name: 'Max',         last_name: 'Brown'},
    {id: 26,  group: 9,  ceremony: true,  pie: true,  first_name: 'Ben',         last_name: 'Brown'},
    {id: 27,  group: 9,  ceremony: true,  pie: true,  first_name: 'Robin',       last_name: 'Brown'},
    {id: 28,  group: 10, ceremony: true,  pie: true,  first_name: 'Gary',        last_name: 'Clements'},
    {id: 29,  group: 10, ceremony: true,  pie: true,  first_name: 'Marian',      last_name: 'Clements'},
    {id: 30,  group: 10, ceremony: true,  pie: true,  first_name: 'Matthew',     last_name: 'Clements'},
    {id: 31,  group: 11, ceremony: true,  pie: true,  first_name: 'Matthew',     last_name: 'McQuillan'},
    {id: 32,  group: 11, ceremony: true,  pie: true,  first_name: 'Diana',       last_name: 'Policarpo'},
    {id: 33,  group: 12, ceremony: true,  pie: true,  first_name: 'Kevin',       last_name: 'Nichols'},
    {id: 34,  group: 13, ceremony: false, pie: false, first_name: 'Josceline',   last_name: 'Howe'},
    {id: 35,  group: 13, ceremony: false, pie: false, first_name: 'Gabriel',     last_name: ''},
    {id: 36,  group: 14, ceremony: true,  pie: true,  first_name: 'Lucy',        last_name: 'Day'},
    {id: 37,  group: 14, ceremony: true,  pie: true,  first_name: 'Michaeljohn', last_name: 'Day'},
    {id: 38,  group: 15, ceremony: true,  pie: true,  first_name: 'Georgina',    last_name: 'Whitehead'},
    {id: 39,  group: 15, ceremony: true,  pie: true,  first_name: 'Lee',         last_name: 'Whitehead'},
    {id: 40,  group: 16, ceremony: true,  pie: true,  first_name: 'Katy',        last_name: 'Harris'},
    {id: 41,  group: 16, ceremony: true,  pie: true,  first_name: 'Russell',     last_name: ''},
    {id: 42,  group: 17, ceremony: true,  pie: true,  first_name: 'Kiri',        last_name: 'Baker'},
    {id: 43,  group: 17, ceremony: true,  pie: true,  first_name: 'Charles',     last_name: 'Baker',      nick: 'Charlie'},
    {id: 44,  group: 18, ceremony: true,  pie: true,  first_name: 'Vivian',      last_name: 'Frost',      nick: 'Viv'},
    {id: 45,  group: 19, ceremony: true,  pie: true,  first_name: 'Alex',        last_name: 'Frost'},
    {id: 46,  group: 20, ceremony: true,  pie: true,  first_name: 'Alison',      last_name: 'Bik'},
    {id: 47,  group: 20, ceremony: true,  pie: true,  first_name: 'Babur',       last_name: 'Bik',        nick: 'Bik'},
    {id: 48,  group: 21, ceremony: false, pie: false, first_name: 'Cara',        last_name: 'Tabaku'},
    {id: 49,  group: 21, ceremony: false, pie: false, first_name: 'Leo',         last_name: 'Tabaku'},
    {id: 50,  group: 22, ceremony: false, pie: false, first_name: 'Joanna',      last_name: 'Wardle',     nick: 'Jo'},
    {id: 51,  group: 23, ceremony: false, pie: false, first_name: 'Emma',        last_name: 'Kitching'},
    {id: 52,  group: 23, ceremony: false, pie: false, first_name: 'Alastair',    last_name: 'Kitching'},
    {id: 53,  group: 24, ceremony: true,  pie: true,  first_name: 'Ben',         last_name: 'Piper',      nick: 'Ben'},
    {id: 54,  group: 24, ceremony: true,  pie: true,  first_name: 'Isobel',      last_name: 'Mccarroll'},
    {id: 55,  group: 25, ceremony: true,  pie: true,  first_name: 'Tomos',       last_name: 'Evans'},
    {id: 56,  group: 25, ceremony: true,  pie: true,  first_name: 'Megan',       last_name: 'Waller'},
    {id: 57,  group: 26, ceremony: true,  pie: true,  first_name: 'Matthew',     last_name: 'White',      nick: 'Matt'},
    {id: 58,  group: 26, ceremony: true,  pie: true,  first_name: 'Ellen',       last_name: 'White'},
    {id: 59,  group: 27, ceremony: true,  pie: true,  first_name: 'Tristan',     last_name: 'Igglesden'},
    {id: 60,  group: 27, ceremony: true,  pie: true,  first_name: 'Anna',        last_name: 'Igglesden'},
    {id: 61,  group: 28, ceremony: true,  pie: true,  first_name: 'Damien',      last_name: 'Green'},
    {id: 62,  group: 29, ceremony: true,  pie: true,  first_name: 'Steven',      last_name: 'Titman'},
    {id: 63,  group: 30, ceremony: true,  pie: true,  first_name: 'Richard',     last_name: 'Hooker'},
    {id: 64,  group: 30, ceremony: true,  pie: true,  first_name: 'Lisa',        last_name: 'Frith'},
    {id: 65,  group: 31, ceremony: true,  pie: true,  first_name: 'Jacob',       last_name: 'Chivers',    nick: 'Jake'},
    {id: 66,  group: 31, ceremony: true,  pie: true,  first_name: 'Emma',        last_name: 'Lewis'},
    {id: 67,  group: 32, ceremony: false, pie: false, first_name: 'Mary',        last_name: 'Togher'},
    {id: 68,  group: 33, ceremony: true,  pie: true,  first_name: 'Matthew',     last_name: 'Stuttard',   nick: 'Matt'},
    {id: 69,  group: 33, ceremony: true,  pie: true,  first_name: 'Joanna',      last_name: 'Stuttard'},
    {id: 70,  group: 34, ceremony: true,  pie: true,  first_name: 'Thom',        last_name: 'Cooper'},
    {id: 71,  group: 34, ceremony: true,  pie: true,  first_name: 'Sara',        last_name: 'Martin'},
    {id: 72,  group: 35, ceremony: true,  pie: true,  first_name: 'James',       last_name: 'McKay',      nick: 'Jim'},
    {id: 73,  group: 35, ceremony: true,  pie: true,  first_name: 'Claire',      last_name: 'Grant'},
    {id: 74,  group: 36, ceremony: true,  pie: true,  first_name: 'Benjamin',    last_name: 'Wolfson',    nick: 'Ben'},
    {id: 75,  group: 36, ceremony: true,  pie: true,  first_name: 'Kelsey',      last_name: 'Wolfson'},
    {id: 76,  group: 37, ceremony: true,  pie: true,  first_name: 'Jennifer',    last_name: 'Low',        nick: 'Jen'},
    {id: 77,  group: 37, ceremony: true,  pie: true,  first_name: 'Karl',        last_name: 'Moon'},
    {id: 78,  group: 38, ceremony: true,  pie: true,  first_name: 'Amy',         last_name: 'Poulsom'},
    {id: 79,  group: 39, ceremony: true,  pie: true,  first_name: 'George',      last_name: 'Hathway'},
    {id: 80,  group: 40, ceremony: true,  pie: true,  first_name: 'David',       last_name: 'Holtey'},
    {id: 81,  group: 40, ceremony: true,  pie: true,  first_name: 'Wingyee',     last_name: 'Lam'},
    {id: 82,  group: 41, ceremony: true,  pie: true,  first_name: 'Lauren',      last_name: 'Penhaligon'},
    {id: 83,  group: 42, ceremony: true,  pie: true,  first_name: 'Veronica',    last_name: "O'Hara"},
    {id: 84,  group: 42, ceremony: true,  pie: true,  first_name: 'Danny',       last_name: "O'Hara"},
    {id: 85,  group: 42, ceremony: true,  pie: true,  first_name: 'Megan',       last_name: "O'Hara"},
    {id: 86,  group: 42, ceremony: true,  pie: true,  first_name: 'Lauren',      last_name: "O'Hara"},
    {id: 87,  group: 43, ceremony: true,  pie: true,  first_name: 'Josie',       last_name: 'Valenciano'},
    {id: 88,  group: 43, ceremony: true,  pie: true,  first_name: 'Sinue',       last_name: 'Valenciano'},
    {id: 89,  group: 43, ceremony: true,  pie: false, first_name: 'Diego',       last_name: 'Valenciano'},
    {id: 90,  group: 43, ceremony: true,  pie: false, first_name: 'Ruby',        last_name: 'Valenciano'},
    {id: 91,  group: 44, ceremony: true,  pie: true,  first_name: 'Terry',       last_name: 'Curtis'},
    {id: 92,  group: 45, ceremony: true,  pie: true,  first_name: 'Thomas',      last_name: 'Campbell'},
    {id: 93,  group: 46, ceremony: true,  pie: true,  first_name: 'Lauren',      last_name: 'Wilson-Kelly'},
    {id: 94,  group: 47, ceremony: true,  pie: true,  first_name: 'John',        last_name: 'Rubidge'},
    {id: 95,  group: 47, ceremony: true,  pie: true,  first_name: 'Lynne',       last_name: 'Rubidge'},
    {id: 96,  group: 48, ceremony: true,  pie: true,  first_name: 'Mark',        last_name: 'Curtis'},
    {id: 97,  group: 48, ceremony: true,  pie: true,  first_name: 'Madeline',    last_name: 'Curtis'},
    {id: 98,  group: 48, ceremony: true,  pie: true,  first_name: 'Elliott',     last_name: 'Curtis'},
    {id: 99,  group: 48, ceremony: true,  pie: true,  first_name: 'Becky',       last_name: 'Curtis'},
    {id: 100, group: 48, ceremony: true,  pie: true,  first_name: 'Molly',       last_name: 'Curtis'},
    {id: 101, group: 49, ceremony: true,  pie: true,  first_name: 'Emily',       last_name: 'Ward'},
    {id: 102, group: 49, ceremony: true,  pie: true,  first_name: 'Annabelle',   last_name: 'Ward'},
    {id: 103, group: 50, ceremony: true,  pie: true,  first_name: 'Jonathan',    last_name: 'Ward'},
    {id: 104, group: 51, ceremony: true,  pie: true,  first_name: 'Stephanie',   last_name: 'Ward'},
    {id: 105, group: 51, ceremony: true,  pie: true,  first_name: 'Nigel',       last_name: 'Ward'},
    {id: 106, group: 51, ceremony: true,  pie: true,  first_name: 'Hannah',      last_name: 'Ward'},
    {id: 107, group: 52, ceremony: true,  pie: true,  first_name: 'Sherrie-jane',last_name: 'Jackson'},
    {id: 108, group: 53, ceremony: true,  pie: true,  first_name: 'May',         last_name: 'Coady'},
    {id: 109, group: 53, ceremony: true,  pie: true,  first_name: 'Andrew',      last_name: 'Coady'},
    {id: 110, group: 54, ceremony: true,  pie: true,  first_name: 'Ken',         last_name: 'Clements'},
    {id: 111, group: 54, ceremony: true,  pie: true,  first_name: 'Jill',        last_name: 'Clements'},
    {id: 112, group: 55, ceremony: true,  pie: true,  first_name: 'Anna',        last_name: 'Forbear'},
    {id: 113, group: 55, ceremony: true,  pie: true,  first_name: 'James',       last_name: "O'Connor"},
    {id: 114, group: 56, ceremony: true,  pie: true,  first_name: 'Sarah',       last_name: "Forbear"},
    {id: 115, group: 57, ceremony: true,  pie: true,  first_name: 'Patrick',     last_name: "Forbear"},
    {id: 116, group: 57, ceremony: true,  pie: true,  first_name: 'Marie',       last_name: "Waye"},
    {id: 117, group: 58, ceremony: true,  pie: true,  first_name: 'Kate',        last_name: "Forbear"},
    {id: 118, group: 59, ceremony: true,  pie: true,  first_name: 'Robert',      last_name: "Mann"},
    {id: 119, group: 59, ceremony: true,  pie: true,  first_name: 'Anita',       last_name: "Mann"},
    {id: 120, group: 60, ceremony: true,  pie: true,  first_name: 'Ian',         last_name: "Lewin"},
    {id: 121, group: 60, ceremony: true,  pie: true,  first_name: 'Christine',   last_name: "Lewin"},
    {id: 122, group: 61, ceremony: false, pie: false, first_name: 'Rhian',       last_name: 'Rosser'},
    {id: 123, group: 61, ceremony: false, pie: false, first_name: 'Tom',         last_name: 'McGrath'},
    {id: 124, group: 62, ceremony: false, pie: false, first_name: 'Clara',       last_name: 'de Los Arcos Diez'},
    {id: 125, group: 62, ceremony: false, pie: false, first_name: 'Adam',        last_name: ''},
    {id: 126, group: 63, ceremony: false, pie: false, first_name: 'Joanna',      last_name: 'Wardle'},
    {id: 127, group: 64, ceremony: false, pie: false, first_name: 'Emma',        last_name: 'Kitching'},
    {id: 128, group: 64, ceremony: false, pie: false, first_name: 'Alistair',    last_name: 'Kitching'},
    {id: 129, group: 65, ceremony: true,  pie: true,  first_name: 'John',        last_name: 'Guzek'},
    {id: 130, group: 66, ceremony: false, pie: false, first_name: 'Ed',          last_name: 'Parsons'},
    {id: 131, group: 67, ceremony: false, pie: false, first_name: 'Nick',        last_name: 'Mortimer'},
    {id: 132, group: 67, ceremony: false, pie: false, first_name: 'Zara',        last_name: 'Mckenzie'},
    {id: 133, group: 68, ceremony: false, pie: false, first_name: 'Charlie',     last_name: 'Yetton'},
    {id: 133, group: 68, ceremony: false, pie: false, first_name: 'Charlie',     last_name: 'Yetton'},
    {id: 134, group: 69, ceremony: true,  pie: true,  first_name: 'Ian',         last_name: 'Dudley'},
    {id: 135, group: 69, ceremony: true,  pie: true,  first_name: 'Stanislava',  last_name: 'Dikova'},
    {id: 136, group: 70, ceremony: false, pie: false, first_name: 'Nicola',      last_name: 'Harrison'},
    {id: 137, group: 70, ceremony: false, pie: false, first_name: 'Lloyd',       last_name: 'Harrison'},
    {id: 138, group: 71, ceremony: false, pie: false, first_name: 'Ollie',       last_name: 'Lewin'},
    {id: 139, group: 71, ceremony: false, pie: false, first_name: 'Eva',         last_name: ''},
    {id: 140, group: 72, ceremony: false, pie: false, first_name: 'Barnaby',     last_name: 'Lewin'},
    {id: 141, group: 72, ceremony: false, pie: false, first_name: 'Laura',       last_name: ''},
    {id: 142, group: 73, ceremony: false, pie: false, first_name: 'Jeremy',      last_name: 'Lewin'},
    {id: 143, group: 73, ceremony: false, pie: false, first_name: 'Jasmine',     last_name: ''},
    {id: 144, group: 74, ceremony: false, pie: false, first_name: 'Rob',         last_name: 'Gill'},
    {id: 145, group: 74, ceremony: false, pie: false, first_name: 'Jade',        last_name: 'Grizzle'},
    {id: 146, group: 75, ceremony: true,  pie: true,  first_name: 'Michelle',    last_name: 'Cartin'},
    {id: 147, group: 75, ceremony: true,  pie: true,  first_name: 'James',       last_name: 'Burns'},
    {id: 148, group: 76, ceremony: true,  pie: true,  first_name: 'Siobhan',     last_name: 'Murphy'},
    {id: 149, group: 76, ceremony: true,  pie: true,  first_name: 'Diarmuid',    last_name: 'Dooley'},
    {id: 150, group: 77, ceremony: false, pie: false, first_name: 'Laura',       last_name: 'Moth'},
    {id: 151, group: 77, ceremony: false, pie: false, first_name: 'Piers',       last_name: 'Moth'},
    {id: 152, group: 78, ceremony: false, pie: false, first_name: 'Fish',        last_name: 'Moth'},
    {id: 153, group: 78, ceremony: false, pie: false, first_name: 'Piers',       last_name: 'Moth'},
    {id: 154, group: 79, ceremony: false, pie: false, first_name: 'Sophie',      last_name: 'Portas'},
    {id: 998, group: 99, ceremony: true,  pie: true,  first_name: 'Edward',      last_name: 'Clements',    nick: 'Ed'},
    {id: 999, group: 99, ceremony: true,  pie: true,  first_name: 'Victoria',    last_name: 'Jesper',      nick: 'Vic'}
  ];

  this.search = function(form) {
    results = _.findWhere(invitees, form);
    if (!results || results.length == 0) {
      form = {nick: form.first_name, last_name: form.last_name};
      results = _.findWhere(invitees, form);
    };
    return results;
  };

  this.get = function(id) {
    return _.findWhere(invitees, {id: parseInt(id)});
  };

  this.getGroup = function(id) {
    return _.where(invitees, {group: parseInt(id)});
  };

  this.getList = function() {
    return invitees;
  };

}]);

myApp.controller('SearchCtrl', ['$scope', '$location', 'invitees', function($scope, $location, invitees) {

  $scope.invitee = {}

  $scope.submit = function(form) {
    var result = invitees.search(form);
    console.log('result ', result);
    if (result) {
      $location.url("/rsvp/"+result.id+"/names");
    };
  };

  $scope.list = invitees.getList();

}]);

myApp.controller('NamesCtrl', ['$scope', '$routeParams', '$location',
  'invitees', 'Data', function($scope, $routeParams, $location, invitees, Data) {

  $scope.names = {};

  $scope.submit = function(names) {
    if ($scope.invitees[0].ceremony) {
      $location.url("/rsvp/"+$routeParams.id+"/pies");
    } else {
      $scope.loading = true;
      Data.submit($scope.invitees).then(function() {
        $scope.loading = false;
        $location.url("/rsvp/thankyou");
      }, function() {
        $scope.loading = false;
      });
    }
  };

  $scope.back = function(e) {
    e.stopPropagation();
    e.preventDefault();
    $location.url("/rsvp/search");
  };

  invitee = invitees.get($routeParams.id);
  $scope.invitees = invitees.getGroup(invitee.group);
  _.each($scope.invitees, function(invitee) {
    invitee.attending = true;
  });

  $scope.loading = false

}]);

myApp.controller('PiesCtrl', ['$scope', '$routeParams', '$http', '$location',
    'invitees', function($scope, $routeParams, $http, $location, invitees) {

  $scope.pies = [
    'Steak & Ale',
    'Venison, Stout & Prune',
    'Potato, Leek & Cheese',
    'Chicken & Mushroom'
  ];

  $scope.back = function(e) {
    e.stopPropagation();
    e.preventDefault();
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
     return '&' + param.replace(',','') + '=' + mapParams(invitees, param);
  };

  setParams = function(invitees) {
    return appendParam(invitees, 'first_name') +
      appendParam(invitees, 'last_name') +
      appendParam(invitees, 'pie') +
      appendParam(invitees, 'attending');
  };

  $scope.submit = function(invitees) {
    $scope.loading = true;
    _.each(invitees, function(invitee) {
      if (typeof(invitee.pie) && invitee.pie == true) {
        invitee.pie = '';
      } else if (typeof(invitee.pie) && invitee.pie == false) {
        invitee.pie = "Bangers & Mash";
      } else {
        invitee.pie = invitee.pie.replace(',','');
      };
    });

    var params = setParams(invitees);
    url = 'https://script.google.com/macros/s/AKfycbz4Ato2HMxsKRGQbPWdZXuHOCSpvBXgzBGgt91agEaxTyvyPiRF/exec?jsonp=success'
      + params
    $http({method: 'JSONP', url: url}).then(function(response) {
      console.log('success ', response);
    }, function(err) {
      $scope.loading = false;
      console.log('err ', err);
    });
  };

  $scope.loading = false;
  invitee = invitees.get($routeParams.id);
  $scope.invitees = invitees.getGroup(invitee.group);

}]);

myApp.controller('ThankyouCtrl', ['$scope', '$routeParams', '$http', 'invitees',
    function($scope, $routeParams, $http, invitees) {

}]);

myApp.service('Data', ['$http', '$q', '$location', function($http, $q, $location) {

  success = function(x) {
    $location.url("/rsvp/thankyou");
  };

  mapParams = function(invitees, param) {
    return _.map(invitees, function(i) {
      return encodeURIComponent(i[param]);
    }).join();
  };

  appendParam = function(invitees, param) {
     return '&' + param.replace(',','') + '=' + mapParams(invitees, param);
  };

  setParams = function(invitees) {
    return appendParam(invitees, 'first_name') +
      appendParam(invitees, 'last_name') +
      appendParam(invitees, 'pie') +
      appendParam(invitees, 'attending');
  };

  this.submit = function(invitees) {
    _.each(invitees, function(invitee) {
      invitee.pie = '';
    });
    defer = $q.defer()
    var params = setParams(invitees);
    url = 'https://script.google.com/macros/s/AKfycbz4Ato2HMxsKRGQbPWdZXuHOCSpvBXgzBGgt91agEaxTyvyPiRF/exec?jsonp=success'
      + params
    $http({method: 'JSONP', url: url}).then(function(response) {
      defer.resolve();
    }, function(err) {
      defer.reject();
    });
    return defer.promise;
  };

}]);
