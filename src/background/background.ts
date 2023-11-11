import browser from "webextension-polyfill";

browser.runtime.onMessage.addListener((msg, _sender, _response) => {
  console.log('message received from script: ', msg);
  return true;
});