const localStorageUtils = {
  get: (key: string) => {
    try {
      if (typeof window !== 'undefined') {
        const data = localStorage.getItem(key);
        if (data) {
          return JSON.parse(data);
        }
        return data;
      }
    } catch {}
  },
  set: (key: string, value: any) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch {}
  },
  remove: (key: string) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch {}
  },
  clear: () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    } catch {}
  },
};

export { localStorageUtils };
