$("#github").on("submit", function() {
  var user = $("#user");

  emptyCurrentList();

  // Using the github API https://developer.github.com/v3/repos/#list-user-repositories
  $.ajax({
    url: "https://api.github.com/users/" + user + "/repos?client_id=1699520b1a1353e2d28f&client_secret=19f0b5d59aa52197d1c3e59ce8d85233738cda20",
    success: function(repos) {
      iterateThroughData(repos);
    },
    error: function(data) {
      insertError();
    }
  });
});

function iterateThroughData(repos) {
  _.forEachRight(repos, function(repo) {
    insertHTML(repo);
  });
}

function insertHTML(repo) {
  $("#repositories").append("<li>" + repo.title + "</li>");
}

function emptyCurrentList() {
  $("#repositories").empty();
}

function insertError() {
  $("#repositories").append("<li>Uh oh, we're having a problem!</li>");
}
