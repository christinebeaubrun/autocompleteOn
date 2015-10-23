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

function staticSource(arr, config) {
  return {
    matcher: function (str) {
      if (config.prefix) {  // allow for prefix-only matches
        return new RegExp('^' + str, 'i');
      } else {
        return new RegExp(str, 'i');
      }
    },

    matching: function (str) {
      var result = [];
      var m = this.matcher(str)
      return arr.filter(function (x) { return x.match(m); });
    }
  };
}

function autocompleteOnInput(elt, source) {
  function display(arr) {
    // should overwrite old displayed stuff.
  }
  elt.onkeyup = function () {
    var results = source.matching(elt.value.trim());
    display(results)
  }
}
