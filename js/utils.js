function encryptOnBlur(){
  var editArea = $('#editArea');
  editArea.blur(function(){
    console.log("edieArea is blurred!");
    console.log("I'm going to encrypt your message!");
    var text = editArea.html();
    console.log("The text is -> " + text);

    var key = "Im the key!";
    var encryptedtext = CryptoJS.AES.encrypt(text, key).toString();

    console.log("The encryptedText is -> " + encryptedtext);
    editArea.html(encryptedtext);
  });
}
