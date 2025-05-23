import { config } from "@/config/config";

export function debounce(fn, delay) {
    let timer = null;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  }
