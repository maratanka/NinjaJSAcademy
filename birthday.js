/*Zadanie domowe:

Napisac klase BirthDay ktora bedzie tworzyc sie za pomoca: dzien, miesiac, rok. new BirthDay(26, 9,1995)

Ma
Umiec policzyc ile minelo miesiecy z dnia urodzin. 
Ile minelo dni. 
Oraz metode ktora przyjmie drugi BirthDay i porowna ich. Zwroci true jezeli jest wieksze. Przyklad

Const b1 = nee BirthDay(26, 9, 1995)
Conat b2 = new BirthDay(27, 9, 1995)

b1.moreThan(b2) // true

Oraz napisac method equal. Zwraca true jezeli rowne sa.*/


class BirthDay{
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;

        let today = new Date();
        let currentYear = today.getFullYear();

        let age = currentYear - year;

        console.log(age);


        // let dateString = year + "/" + month + "/" + day;
        // var birthYear = dateString.getFullYear();
        // var birthMonth = dateString.getMonth();
        // var birthDay = dateString.getDate();
    }
      

    monthsFromBirthday(dateString){
        let today = new Date();
        let birthDate = new Date(dateString);
        var today = new Date();
        var currentYear = today.getFullYear();
        var age = currentYear - birthYear;
  

    }

    moreThan(b1, b2){
        if(this.b1 > this.b2){
            console.log(true);
        } 
    
    equalTo(b1, b2){
       if(this.b1 == this.b2){
           console.log(true);
       }
   }

    }
    }

  
}

b1 = new BirthDay(26, 9, 1995);
b2 = new BirthDay(27, 9, 1995);