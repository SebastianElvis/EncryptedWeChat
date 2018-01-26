// This works!
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        // if (request.greeting == "hello")
        //     sendResponse({
        //         farewell: "goodbye"
        //     });
        var enveloped_res = {
            farewell: request.plaintext + " fuck you!"
        }

        sendResponse(enveloped_res);
    }
);
