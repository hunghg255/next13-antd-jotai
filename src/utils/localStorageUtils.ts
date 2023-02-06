const localStorageUtils = {
  get: (key: string) => {
    try {
      if (typeof window !== undefined) {
        const data = localStorage.getItem(key);
        if (data) {
          return JSON.parse(data);
        }
        return data;
      }
    } catch (error) {}
  },
  set: (key: string, value: any) => {
    try {
      if (typeof window !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {}
  },
  remove: (key: string) => {
    try {
      if (typeof window !== undefined) {
        localStorage.removeItem(key);
      }
    } catch (error) {}
  },
  clear: () => {
    try {
      if (typeof window !== undefined) {
        localStorage.clear();
      }
    } catch (error) {}
  },
};

export { localStorageUtils };
