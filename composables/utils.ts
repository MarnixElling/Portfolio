declare global {
  interface Window {
    timeouts: ReturnType <typeof setTimeout>[];
  }
}

export const debounce = (callback: () => void, id: number, timeout = 300) => {
  if (!window.timeouts) {
    window.timeouts = [];
  }

  if (id in window.timeouts) {
    clearTimeout(window.timeouts[id]);
  }

  window.timeouts[id] = setTimeout(callback, timeout);
};
