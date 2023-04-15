export const useDebounce = (func: { (text: any): Promise<void>; apply?: any; }, timeout = 300) => {
  let timer: string | number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}