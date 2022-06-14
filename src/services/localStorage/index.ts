export const save = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
export const remove = (key: string) => {
  return localStorage.removeItem(key);
};
export const get = (key: string) => {
  return localStorage.getItem(key);
};
