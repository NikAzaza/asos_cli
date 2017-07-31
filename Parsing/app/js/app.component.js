"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_service_1 = require("./http.service");
var product_1 = require("./product");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.Products = [];
        this.done = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("Start Script!!");
        var names = document.getElementsByClassName("name");
        console.log("names size: " + names.length);
        var prices = document.getElementsByClassName("price");
        // console.log("price size: " + prices.length);
        var images = document.getElementsByClassName("product-img");
        // console.log("images size: " + images.length);
        //Из этих массивов будем брать рандомную категорию
        //Мужские категории
        var categories = ["Cвитшоты", "Блейзеры", "Ботинки", "Брюки", "Джинсы", "Комбинезоны", "Кроссовки", "Куртки", "Майки", "Рубашки"];
        var brands = ["Cheap Monday", "Cheap Monday", "Crooked Tongues", "Defend London", "Diesel", "Dolce & Gabbana", "Ellesse", "Emporio Armani", "Fred Perry", "G-Star"];
        var sizes = ["EU 37", "EU 38", "EU 38.5", "EU 39", "EU 38.5", "EU 40.5", "EU 41", "EU 42", "EU 42.5", "EU 43"];
        //Женские категории
        // const categories: string[] = ["Брюки","Джемперы","Джинсы","Кардиганы","Колготки","Комбинезоны","Косметика","Куртки","Пальто","Платья"];
        // const brands: string[] = ["Abbott Lyon","Adidas","Aeryne","Defend", "Armani Exchange",
        // 							"Bec & Bridge","Daisy Street Plus","Elise Ryan","Marc Jacobs","New Look Plus"];
        // const sizes: string[] = ["36/38","38","42/44","46","48","50","54","58","60/62","64"];
        var colors = ["Бежевый", "Белый", "Желтый", "Зеленый", "Золотой", "Коричневый", "Красный", "Кремовый", "Медный", "Оранжевый"];
        // console.log("Names 0: " + names[0].innerHTML);
        // console.log("Prices 0 :" + prices[0].textContent.replace(/\s+/g,"").slice(0, -4));
        for (var i = 0; i < 200; i++) {
            var name_1 = names[i].innerHTML; //Имя
            var price = parseFloat(prices[i * 2].textContent.replace(/\s+/g, "").slice(0, -4)); //Цена
            //Массив со ссылками на изображения
            var linkArray = [];
            //Главное изображение
            var src = images[i].getAttribute("src");
            var srcMain = src.slice(0, src.lastIndexOf("?"));
            linkArray.push(srcMain);
            // console.log("main link: " + srcMain);
            //2,3,4 src
            for (var i_1 = 2; i_1 < 5; i_1++) {
                var curr = srcMain.slice(0, srcMain.lastIndexOf("-") - 1) + i_1;
                linkArray.push(curr);
            }
            this.Products.push(new product_1.Product(i + 1, name_1, price, linkArray, categories[Math.floor(Math.random() * 10)], brands[Math.floor(Math.random() * 10)], sizes[Math.floor(Math.random() * 10)], colors[Math.floor(Math.random() * 10)]));
        }
        this.submit(this.Products);
        console.log(this.Products);
        console.log("Данные отправлены");
    }; //End of ngOnInit
    AppComponent.prototype.submit = function (products) {
        var _this = this;
        this.httpService.postData(products).subscribe(function (data) { _this.receivedUser = data; _this.done = true; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/men.html",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map