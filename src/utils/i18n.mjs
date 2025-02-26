import { JSDOM } from "jsdom";

function decodeHtmlEntities(text) {
  const dom = new JSDOM();
  const doc = dom.window.document;
  const textNode = doc.createElement("div");
  textNode.innerHTML = text;
  console.log(textNode)
  return textNode.textContent || textNode.innerText;
}

export { decodeHtmlEntities };
