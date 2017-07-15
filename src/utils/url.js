/**
 * Created by huayi on 2017/7/8.
 */
// 接口主机地址
let host = ''
host = 'https://www.baidu.com/'

// 请求的地址
let url = {
  index: '/index'
}
// 导出地址
const addHost = (u) => {
  for (const _u in u) {
    if (u.hasOwnProperty(_u)) {
      url[_u] = `${host}${url[_u]}`
    }
  }
  return url
}

url = addHost(url)

export default url
