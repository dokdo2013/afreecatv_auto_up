chrome.tabs.executeScript({
        file: "afreeca.js"
    }, function() {
    if(chrome.runtime.lastError) {
      console.error("Script injection failed: " + chrome.runtime.lastError.message);
    }
});