export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function transformHyperLinks(text: string) {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
  const detectURL = text.match(urlRegex)

  let resultPost = text

  detectURL?.forEach((url) => {
    resultPost = resultPost.replace(
      url,
      '<a href= "' + url + '" role="link" > ' + url.trim() + '</a>'
    )
  })

  return resultPost
}

export function strToObj(str: string) {
  var obj = {}
  if (str && typeof str === 'string') {
    var objStr = str.match(/\{(.)+\}/g)
    eval('obj =' + objStr)
  }
  return obj
}

export function strToArray(str: string) {
  let services = str.split(',')
  services[0] = services[0].substring(1)
  services[services.length - 1] = services[services.length - 1].substring(
    0,
    services[services.length - 1].length - 1
  )
  services.forEach((x, i) => {
    services[i] = services[i].includes('"')
      ? services[i].replaceAll('"', '').trim()
      : services[i].replaceAll("'", '').trim()
  })
  return services
}
