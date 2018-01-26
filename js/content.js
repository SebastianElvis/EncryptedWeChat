console.log('main.js is executed!');
console.log('Let\'s encrypt everything on WeChat!');

$('#chatArea > div.box_ft.ng-scope > div.action > a')
    .before('<a class="btn btn_send" id="btn_enc" href="javascript:;">Encrypt</a>');

$('#btn_enc').click(function(){
    var editArea = $('#editArea');
    console.log("I'm going to encrypt your message!");
    var text = editArea.html();
    console.log("The text is -> " + text);

    var enveloped_req = {
        plaintext: text,
        sender_pr : "",
        receiver_pu : ""
    };

    chrome.runtime.sendMessage(enveloped_req, function(response) {
      console.log(response.farewell);
    });
    //
    // console.log("The encryptedText is -> " + encryptedtext);
    // editArea.html(encryptedtext);
});
