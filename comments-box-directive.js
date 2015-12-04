angular.module('comments.ui').directive('commentsBox', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<div></div>',
    link: function(scope, element, attrs) {
      Blaze.renderWithData(Template.commentsBox, attrs, element[0]);
    }
  }
});