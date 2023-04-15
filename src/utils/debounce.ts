export const useDebounce = (func: any, timeout = 300) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      console.log(timer);
    }, timeout);
  };
}