function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/member/skillsMember.html',
    controller: function() {
      this.skills = skills;
    },
    controllerAs: 'skillsMember'
  };
}