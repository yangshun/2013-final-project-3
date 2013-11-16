function ArenaController($scope, $timeout, $location) {

	$scope.time_left = '';
	$scope.current_url = window.location.origin;
	$scope.radiant_score = 0;
	$scope.dire_score = 0;

	function seconds_to_string(sec) {
		function less_than_ten(value) {
			return value < 10 ? '0' + value.toString() : value.toString();
		}
		return less_than_ten(Math.floor(sec/60)) + ':' + less_than_ten(sec%60);
	}

	function decrement() {
    if (typeof game !== 'undefined') {
		  $scope.time_left = seconds_to_string(Math.floor(game.roundTime - game.timePassed));
    }
    $timeout(decrement, 1000);
	}

  $scope.toggleSound = function() {
    $scope.sound_on = !$scope.sound_on;
    // TODO: toggle sound
  }

  $scope.pauseGame = function() {
    $scope.game_paused = !$scope.game_paused;
    game.pause();
  }

  PubSub.subscribe('game.score.changed', function (msg, score) {
    $scope.radiant_score = score["red"] || 0;
    $scope.dire_score = score["yellow"] || 0;
  });

  PubSub.subscribe('game.restart', function() {
    $scope.radiant_score = 0;
    $scope.dire_score = 0;
  });

  decrement();
}

