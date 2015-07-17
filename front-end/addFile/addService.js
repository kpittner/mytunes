(function() {
  'use strict';
  angular
    .module('addFile')
    .factory('addService', ['$http', '$rootScope', function($http, $rootScope) {
      var url = 'https://shrouded-sierra-3476.herokuapp.com/api/songs.json'

      function addSong(song) {
        $http.post(url, song).then(function (res) {
          $rootScope.$broadcast("song:added");
        });
      };
      function getSongs() {
        return $http.get(url).then(function(songs){
          // console.log(songs.data)
          return songs.data;
        })
      };
      function getSong() {
        return $http.get(url + '/' + id).then(function(song){
          // console.log(song.data)
          return song.data;
        })
      }





      return {
        addSong: addSong,
        getSongs: getSongs
      };

    }]);
}());
