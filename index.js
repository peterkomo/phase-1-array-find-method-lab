// code your solution hefunction superbowlWin(arr) {
    function superbowlWin(arr) {
        const winningYear = arr.find(function(obj) {
          return obj.result === "W";
        });
        return winningYear ? winningYear.year : undefined;
      }
      