var app = angular.module('app', [
    'ngRoute',
    'lumx'
]);

app.filter('moment', function () {
    return function (dateString, format) {
        return moment(dateString).format(format);
    };
});

app.run(['$route', '$q', '$rootScope',
    function ($route, $q, $rootScope) {
    }
]);

app.filter('capitalize', function () {
    return function (input, scope) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
});
