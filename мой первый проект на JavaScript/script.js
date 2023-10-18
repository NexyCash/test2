// Дефолт данные
let data = {
    name: "",
    username: "",
    age: ""
};

// Введение данных
function dataEntry() {
    if ((data.name == "") && (data.username == "") && (data.age == 0)) {
        data.name = prompt("Введите ваше имя: ");
        data.username = prompt("Введите вашу фамилию: ");
        data.age = prompt("Введите ваш возраст: ");
    } else {
        alert("Ошибка! Очистите данные.")
    }
};

// Обнуление данных
function dataReset() {
    data.name = "";
    data.username = "";
    data.age = "";
};

// Вывод данных
function dataOutput() {
    if ((data.name == null) || (data.username == null) || (data.age == null)) {
        alert("Ошибка! Данные не заполнены до конца.");
    } else {
        alert(`Ваше имя ${data.name}, ваша фамилия ${data.username}, вам ${data.age} лет`);
    }
};