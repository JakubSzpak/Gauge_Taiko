/* globals gauge*/
"use strict";
const {openBrowser, closeBrowser,goto} = require('taiko');
const assert = require("assert");

step("Open browser", async() =>{
    try{
        await openBrowser({args: [
            '--window-size=1440,900',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote'],
            headless:false});
        console.log("Browser opened successfully!");
    }catch(e){
        console.error("[ERROR] Unable to open browser, "+e);
    }
});

step("Close browser", async() =>{
    try{
        await closeBrowser();
        console.log("Browser closed successfully!");
    }catch(e){
        console.error("[ERROR] Unable to close browser, "+e);
    }
});

step("Go to website with url: <url>", async(url) =>{
   try{
       await goto(url);
       console.log("Goes to website with url: "+url);
   }catch(e){
       console.error("[ERROR] Unable to open website with url: "+url+", "+e);
    }
});