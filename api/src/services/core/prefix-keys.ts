export const prefixKeys = <T>(prefix = '', obj: T): T => {
  return Object.keys(obj).reduce((obj, prop) => {
    if (typeof obj[prop] === 'object') {
      obj[prop] = prefixKeys(prefix, obj[prop])
    } else if (typeof obj[prop] === 'undefined') {
      obj[prop] = `${prefix}${prop}`
    } else {
      obj[prop] = `${prefix}${obj[prop]}`
    }

    return obj
  }, {} as T)
}
