console.log('main.js is executed!');
console.log('Let\'s encrypt everything on WeChat!');

$('#chatArea > div.box_ft.ng-scope > div.action > a')
    .before('<a class="btn btn_send" id="btn_enc" href="javascript:;">Encrypt</a>');



$('#btn_enc').click(function(){
    var editArea = $('#editArea');
    console.log("I'm going to encrypt your message!");
    var html = editArea.html();
    console.log("The text is -> " + html);

    var enveloped_req = {
        text: html
    };

    chrome.runtime.sendMessage(enveloped_req, function(response) {
        //console.log(response.farewell);
        var enctext = response.encrypted_text;
        //var enctext = "caoonima";
        console.log("The encryptedText is -> " + enctext);

        $('#editArea').html('');
        $('#editArea').sendkeys(enctext); // by jquery.sendkeys.js

    });
    //
    //
    // editArea.html(encryptedtext);
});
