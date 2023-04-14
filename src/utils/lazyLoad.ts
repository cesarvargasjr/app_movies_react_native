export const lazyLoad = async (millis: number) => {
  await new Promise((resolve) => setTimeout(resolve, millis));
};