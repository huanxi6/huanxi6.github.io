//按下小车移动
var id;
var duimianche;
window.onkeydown = function (e) {
    key = e.keyCode

    var speed = 80
    switch (key) {
        case 37:
            a = car.offsetLeft - speed
            if (a <= 150) {
                a = 150
            }
            car.style.left = a + "px"
            break;
        case 39:
            b = car.offsetLeft + speed
            if (b > 310) {
                b = 310
            }
            car.style.left = b + "px"
            break;
        default:
            break;
    }
}
window.onkeyup = function (e) {
    speed = 10
}

//添加对面赛车
var ids2;
function addCar(x, y) {
    var cars = document.createElement("img")
    cars = document.createElement("img")
    cars.src = 'img/car2.png'
    cars.className = "car2"
    cars.style.cssText = `position:absolute;transform: rotate(180deg);`
    cars.style.left = x + "px"
    cars.style.top = y + "px"
    box.appendChild(cars)
}

//随机出现对面车辆
var suijiche2
suijiche2 = setInterval(function () {
    var arr = [150, 230, 310]
    ran2 = Math.floor(Math.random() * arr.length)
    car2Left = arr[ran2]
    addCar(car2Left, -50)
}, 700)

//对面车辆速度
var speed2 = 1
var index = 1
var duichesudu
duichesudu = setInterval(function () {
    index++
    if (index >= 5) {
        speed2 = 5
    }
    time2.innerHTML++
}, 1000)
duimianche = setInterval(function () {
    che2 = document.querySelectorAll("#box .car2")
    for (var i = 0; i < che2.length; i++) {
        che2[i].style.top = che2[i].offsetTop + speed2 + 'px'
        if (che2[i].offsetTop > 600) {
            box.removeChild(che2[i])
        }
    }
}, 1)


var chedao
//结束
var last
last = setInterval(function () {
    youcar = document.querySelectorAll("#box .car2")
    for (let i = 0; i < youcar.length; i++) {
        mycarTop = car.offsetTop - 50  //我的车的TOP
        mycarLeft = car.offsetLeft //我的车的Left
        youcarTop = youcar[i].offsetTop //对面车Top
        youcarLeft = youcar[i].offsetLeft //对面车Left    
        youcarWidth = youcar[i].offsetWidth //你车宽
        if (mycarLeft >= youcarLeft && mycarLeft <= youcarLeft + youcarWidth && youcarTop == mycarTop) {
            console.log("")
            clearInterval(id)
            clearInterval(duimianche)
            clearInterval(suijiche2)
            clearInterval(last)
            clearInterval(duichesudu)
            clearInterval(chedao)
            asd.innerHTML = "Вы держитесь в течение " + time2.innerHTML + "секунд"
            box2.style.display = "block"
        }

    }

})

//




btn.onclick = function () {
    history.go(0)
}

//背景移动
var x = 0
chedao = setInterval(function () {
    bg.style.top = -x + "px"
    x++
    if (x == 600) {
        x = 0
    }
}, 10)