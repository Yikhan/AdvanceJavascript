
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
var src2 = 'https://img2.mukewang.com/5c35e6ec0001500a05000445-140-140.jpg'

var result1 = loadImg(src1)
var result2 = loadImg(src2)

// 1. 基本操作 可以用catch代替then里面的error函数处理，最后的catch可以捕获前面所有的错误
function test1 () {
  result1.then( (img) => {
    console.log('Succuess', img.width)
  }).catch( (error) => {
    console.log(error)
  })
  // promise可以重复使用，结果不变
  result1.then( (img) => {
    console.log('Success again', img.width)
  }).catch( (error) => {
    console.log(error)
  })
}

// 2. 串联操作
function test2 () {
  result1.then( (img1) => {
    console.log('first image loaded', img1.width)
    // 根据Promise标准，then函数必须要返回一个promise
    // 没有手动return的话返回的就是当前的promise
  }).then( (img1) => {
    console.log('first image loaded, go to next', img1.width)
    return result2 // 手动返回第二个promise 否则后面的then还是第一个图片的promise
  }).then( (img2) => {
    console.log('second image loaded', img2.width)
  }).catch( (error) => {
    console.log(error)
  })
}

// 3. Promise All and Race
// all会等待所有promise都完成后才触发成功，而race谁快就执行谁
// Promise 的状态 Pending -> Fullfilled or Rejected
// 状态变化不可逆
function test3 () {
  Promise.all([result1, result2]).then( (datas) => {
    // all返回一个数组
    console.log('all', datas[0])
    console.log('all', datas[1])
  })
  
  Promise.race([result1,result2]).then( (data) => {
    console.log('race', data)
  })
}



// 执行所需要实验的函数例子
test1()