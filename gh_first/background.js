console.log("Background");

chrome.runtime.onInstalled.addListener(()=>{
    chrome.tabs.create({
        "url": "https://www.youtube.com/watch?v=GNcArfbLhI0"
    })
})
