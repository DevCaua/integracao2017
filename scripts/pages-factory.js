angular.module("ocurso").factory("localStorage", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
  if (event.key === 'my-storage') {
    $rootScope.$apply();
  }
});
  return {
    setData: function(val) {
      $window.localStorage && $window.localStorage.setItem('my-storage', val);
      return this;
    },
    getData: function() {
      return $window.localStorage && $window.localStorage.getItem('my-storage');
    },
    clearData: function() {
      return $window.localStorage.clear();
    }
  };
});
