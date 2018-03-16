export const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))

export const timeout = <T = any>(promise: Promise<T>, time: number) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(`Timeout after ${time}ms`), time)
    }),
  ])
}
