

class Product{
	constructor(imgPath, name, priceList, id, link){
        this.imgPath = imgPath;
        this.name = name;
        this.priceList = priceList;
        this.id = id;
        this.link = link;
	} 
    getPriceByCurrency(currency){
     	for(const price of this.priceList) {
          if (price.currency == currency) {
            return price.value;
			}
		}
		return undefined;
     }
}

class Price {
    constructor(value, currency){
      this.value = value;
      this.currency = currency;
    }
  }

const imgPath = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg';
const name = 'super car';
const priceList = [];
priceList.push(new Price(300000, 'USD'));
priceList.push(new Price(270000, 'EUR'));
priceList.push(new Price(1200000, 'PLN'));
const id = 'asdajkldfahsjldfjashjldfkajhsdf';
const link =  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg';

product = new Product(imgPath, name, priceList, id, link);