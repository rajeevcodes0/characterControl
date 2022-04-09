import { checkAndTransform } from "./utils.mjs";

const addKeyDownEventListener = (key1, imageStateUpdater) => {
  const key2 = checkAndTransform(key1);
  if (key2) {
    document.addEventListener("keydown", (event) => {
      if (event.key === key1 || event.key === key2) {
        imageStateUpdater();
        keyPressNotificationManager(event.key);
      }
    });
  }
};

export { addKeyDownEventListener };
