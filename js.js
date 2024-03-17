let user = {}


for (let i = 1; i <= 3; i++) {
    var n = prompt('Введите своё имя')
    do {
        var a = +prompt('Введите свой возраст')
    } while (isNaN(a) || a == 0);
    user[i] = {
        name: n,
        age: a
    };
}

console.log(user);