export const save = (key: string, value: any): void => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key: string): string | null => {
  return localStorage.getItem(key);
};
