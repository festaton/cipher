$(document).ready(function() {


  var arr = [];

  function isLower(str) {
    return str.length === 1 && str.match(/[a-z]/); //regex to see if letter is lowercase
  }

  function isUpper(str) {
    return str.length === 1 && str.match(/[A-Z]/);
  }

  function cipher(text,key) {

    for(var i = 0; i < text.length; i++) {
      if(isLower(text[i])) { //does same as isAlpha w/ js syntax
        var asciNum = text[i].charCodeAt(); //js way to get ascii value from char
        arr.push(String.fromCharCode(((((asciNum - 97)+key)%26)+97)));

      }

      else if (isUpper(text[i])) {
        var asciNum = text[i].charCodeAt();
        arr.push(String.fromCharCode(((((asciNum - 65)+key)%26)+65)));
      }

      else if (text[i].charCodeAt() > 31 && text[i].charCodeAt() < 65) {
        arr.push(String.fromCharCode(text[i].charCodeAt()));
      }

    }
    return arr;
  }


  $("#cipherBtn").click(function() {
    if(!$("#key").val() || !$("#key").val().match(/[0-9]/)) {
      alert("Enter a valid key");
    }

    else {
      var theKey = parseInt($("#key").val()); //use parseInt to turn string into int
      var textToCipher = $('#toCipher').val(); //get text that's to be ciphered
      $('#result').html( cipher(textToCipher,theKey) ); //puts textToCipher into html of #result
    }

  });

  $("#clear").click(function() {
    location.reload(); //refreshes page
    //$('#toCipher').val(""); //clears textarea
    //$('#result').val(""); //clears textarea
  });

});
