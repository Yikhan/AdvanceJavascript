
function loadImg(src) {
  var promise = new Promise(function (resolve, reject) {
    var img = document.createElement('img')
    // 注意对img设置状态函数要放在给img.src赋值之前，否则不会触发，因为src赋值后图片就会马上加载
    // 再给onload和onerror赋值就晚了
    img.onload = function () {
      // 把创建好的img节点返回
      resolve(img)
    }
    img.onerror = function () {
      reject('Fails to load image!')
    }
    img.src = src
  })
  // 最后一定要返回promise
  return promise
}


var src1 = 'https://www.imooc.com/static/img/index/logo.png'
var src2 = 'https://img1.sycdn.imooc.com/szimg/5cb68a1408ed350506000338.jpg'

var result1 = loadImg(src1)
result1.then( (img) => {
  console.log('Succuess', img.width)
}).catch( (error) => {
  console.log(error)
})
