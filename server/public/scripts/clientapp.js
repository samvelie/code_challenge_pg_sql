$(document).ready(function () {

  // get treats on load
  getTreats();

  /**---------- Event Handling ----------**/
  $('#searchButton').on('click', function (event) {
    event.preventDefault();

    var queryString = $('#search').val();

    searchTreats(queryString);
  });

  /**---------- AJAX Functions ----------**/

  // GET /treats
  function getTreats() {
    $.ajax({
      method: 'GET',
      url: '/treats',
    })
    .done(function (treatArray) {
      console.log('GET /treats returned ', treatArray);

      $.each(treatArray, function (index, treat) {
        appendTreat(treat);
      });
    });
  }

  // GET /treats?q=thing
  function searchTreats(query) {
    $.ajax({
      method: 'GET',
      url: '/treats?q=' + query,
    })
    .done(function (treatArray) {
      console.log('GET /treats?q=', query, 'returned ', treatArray);

      $.each(treatArray, function (index, treat) {
        appendTreat(treat);
      });
    });
  }

  // POST /treats
  function postTreat(treat) {
    $.ajax({
      method: 'POST',
      url: '/treats',
      data: treat,
    })
    .done(function () {
      console.log('POST /treats sent ', treat);

      getTreats();
    });
  }

  /** ---------- DOM Functions ----------**/
  function appendTreat(treat) {
    console.log(treat);
    // append a treat to the DOM and add data attributes
    // treat-display -> treat row -> treat
    var $treats = $('#treat-display');
    console.log($treats);

    var treatCount = $treats.children().children().length;
    console.log(treatCount);

    if (treatCount % 2 === 0) {
      // add a treat row
      $treats.append('<div class="treat row"></div>');
    }

    var $treat = $('<div class="six columns individual-treat">' +
                  '<div class="image-wrap">' +
                  '<img src="' + treat.pic + '" class="u-max-full-width" />' +
                  '<div class="toggle row">' +
                  '<div class="six columns">' +
                  '<button class="edit u-full-width">Edit</button>' +
                  '</div>' +
                  '<div class="six columns">' +
                  '<button class="delete u-full-width">Delete</button>' +
                  '</div>' +
                  '</div>' +
                  '</div>' +
                  '<h3>' + treat.name + '</h3>' +
                  '<p>' + treat.description + '</p>' +
                  '</div>');

    $treat.data('id', treat.id);

    $('.treat:last-of-type').append($treat);
  }
});
