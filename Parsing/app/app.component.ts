import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';
import { Product } from "./product";
  
@Component({
    selector: 'my-app',
    templateUrl: `app/men.html`,
    providers: [HttpService]
})

export class AppComponent implements OnInit { 
  
 Products: Product[] = [];

	ngOnInit(){
		console.log("Start Script!!");
	    
	    var names = document.getElementsByClassName("name");
	    console.log("names size: " + names.length);
	    var prices = document.getElementsByClassName("price");
	    // console.log("price size: " + prices.length);
	    var images = document.getElementsByClassName("product-img");
	    // console.log("images size: " + images.length);

	    //Из этих массивов будем брать рандомную категорию
	    	//Мужские категории
	    var categories: string[] = ["Cвитшоты","Блейзеры","Ботинки","Брюки","Джинсы","Комбинезоны","Кроссовки","Куртки","Майки","Рубашки"];
	    const brands: string[] = ["Cheap Monday","Cheap Monday","Crooked Tongues","Defend London","Diesel","Dolce & Gabbana","Ellesse","Emporio Armani","Fred Perry","G-Star"];
	    const sizes: string[] = ["EU 37","EU 38","EU 38.5","EU 39","EU 38.5","EU 40.5","EU 41","EU 42","EU 42.5","EU 43"];
	    
	    //Женские категории
	    // const categories: string[] = ["Брюки","Джемперы","Джинсы","Кардиганы","Колготки","Комбинезоны","Косметика","Куртки","Пальто","Платья"];
	    // const brands: string[] = ["Abbott Lyon","Adidas","Aeryne","Defend", "Armani Exchange",
	    // 							"Bec & Bridge","Daisy Street Plus","Elise Ryan","Marc Jacobs","New Look Plus"];
	    // const sizes: string[] = ["36/38","38","42/44","46","48","50","54","58","60/62","64"];




	    const colors: string[] = ["Бежевый","Белый","Желтый","Зеленый","Золотой","Коричневый","Красный","Кремовый","Медный","Оранжевый"];

	    // console.log("Names 0: " + names[0].innerHTML);
	    // console.log("Prices 0 :" + prices[0].textContent.replace(/\s+/g,"").slice(0, -4));

	    for (let i = 0; i < 200; i++){

	    	let name = names[i].innerHTML;//Имя
		    let price = parseFloat(prices[i * 2].textContent.replace(/\s+/g,"").slice(0, -4));//Цена
		    //Массив со ссылками на изображения
		    let linkArray = [];
	 
		    //Главное изображение
		    let src = images[i].getAttribute("src");
		    let srcMain = src.slice(0, src.lastIndexOf("?"));
		    linkArray.push(srcMain);
		    // console.log("main link: " + srcMain);
	    
		    //2,3,4 src
		    for (let i = 2; i < 5; i++){
		         let curr =  srcMain.slice(0, srcMain.lastIndexOf("-")-1) + i;
		         linkArray.push(curr);
		         // console.log(i + ": " + curr);
		    }
	    
	   		this.Products.push(new Product(i + 1, name, price, linkArray, 
	   			categories[Math.floor(Math.random() * 10)], 
	   			brands[Math.floor(Math.random() * 10)], 
	   			sizes[Math.floor(Math.random() * 10)], 
	   			colors[Math.floor(Math.random() * 10)]));
	    }

	    this.submit(this.Products);

	    console.log(this.Products);
	    console.log("Данные отправлены");
	}//End of ngOnInit
 


    receivedUser: Object; // полученный пользователь
    done: boolean = false;

    constructor(private httpService: HttpService){}

    submit(products: Product[]){
        this.httpService.postData(products).subscribe((data) => {this.receivedUser=data; this.done=true;});
    }
}