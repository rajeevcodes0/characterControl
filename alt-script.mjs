import { addKeyDownEventListener } from "./dom-utils.mjs";

function walk() {}
function idle() {}
function dead() {}
function jump() {}
function run() {}

void (function () {
  addKeyDownEventListener("w", walk);
  addKeyDownEventListener("i", idle);
  addKeyDownEventListener("d", dead);
  addKeyDownEventListener("j", jump);
  addKeyDownEventListener("r", run);
})();
