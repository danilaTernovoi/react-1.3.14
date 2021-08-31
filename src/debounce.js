export function debounce(fn, debounceTime) {
  let timeout
  return () => {
    const fnCall = () => fn.apply(this, arguments)

    clearTimeout(timeout)

    timeout = setTimeout(fnCall, debounceTime)
  }
}
