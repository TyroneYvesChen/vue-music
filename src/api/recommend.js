import jsop from "common/js/jsonp"
import {commonParams, options} from "common/js/config"

export  function gitRecommend() {
  const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsop(url, data, options)
}
