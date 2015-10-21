/*

  AutocompleteOn function
  Argument(s)
  -- custom list of strings  [Array]

  ex.
  var fruits = ['apple','orange','banana'];
  autocompleteOn( fruits );

*/

var autocompleteOn = function ( arr) {
  var $textInputField = document.createElement( 'input' );
  $textInputField.type = 'text';
  document.body.appendChild( $textInputField );

  var $list = document.createElement( 'ul' );
  document.body.appendChild( $list );

  $textInputField.onkeyup = function () {
    var me = this;
    var inputVal = me.value.trim();
    var suggestionDropdown = arr;
    var matches = [];

    if ( inputVal !== "" ) {
      suggestionDropdown.forEach( function ( word ) {
        var regexMatch = new RegExp( inputVal, 'gi');
        if ( word.match( regexMatch ) ) {
          matches.push(word);
        }
      });
    }

    $list.innerHTML = "";

    matches.forEach( function ( match ) {
      var li = document.createElement('li');
      li.innerHTML = match;
      $list.appendChild(li);
    });
  };
};


var fruits = ['apple','orange','banana'];
autocompleteOn( fruits );