import jpg from './assets/a.jpg'
import './x.css'
// console.log(jpg);
const app1 = document.getElementById("app1")
app1.innerHTML = `
<img src = "${jpg}">
`
let button = document.createElement('button')
button.innerText = '懒加载'
app1.appendChild(button)
button.onclick = () => {
    const promise = import('./lazy.js')   //import异步用 = ,是拿不到lazy.js的。所以用promise接收
    promise.then((module) => {                  //加载成功调用第一个函数，加载失败调用第二个函数
        const fn = module.default
        fn()
    } , () => {
        console.log('模块加载错误');
    } )
}

