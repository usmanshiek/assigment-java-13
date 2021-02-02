// Changing case 1;
var cities = ["Karachi","Hyderabad","TandoALLahyar","panjab"];

    var myCity = prompt("enter your city")
    alert(myCity.toUpperCase());
    alert(myCity.toLowerCase());

    for(var i=0;i< cities.length;i++){
        if(cities[i] === myCity){
            alert("City Found");
        }
    }

//changing case 2:

var sentence ="the quick brown fox jumped over the lazy dog";

var capitalizeString =(str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

var capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');

console.log(capitalizeWords(sentence));
// Strings: measuring length and extracting parts[1]
 var a= prompt("Enter Your favourite Mobile","iphone");
document.write(a+"<br>");
var b = a.length;
document.write(b);
// Strings: measuring length and extracting parts[2];
var a=prompt("enter your name!");
var b = a.charAt(a.length-1);
document.write(b);
// Strings: finding segments[1];
var  word ="Pakistani";

document.write(word.indexOf ("n"));

// Strings: finding segments[2];

var names = prompt("Enter Your Good Name:");
for (var i =0; i <=names.length ; i++){
    if(names.charAt(i) === "@"){
        alert("Invalid Name");
        break;
    }else if(names.charAt(i) === "!"){
        alert("Invalid Name");
        break;
    }else if(names.charAt(i) === ","){
        alert("Invalid Name");
        break;
    }else if(names.charAt(i) === "."){
        alert("Invalid Name");
        break;
    }else{
        document.write(names);
       
    }
}
// Strings: finding segments[3];

var a = "The quick brown fox jumps over the lazy dog";
document.write(a.indexOf("the"));
// Strings: replacing characters[1]
var city = "Hyderabad";
var b = city.replace("Hyder","Islam");
document.write("My Favourite city is "+b);
// Strings: replacing characters[2]:

var str = "Ali and Sami are best friends. They play cricket and football together"
var b =str.replace(/and/g,"&");
document.write(b)

// ROUNDING NO:
var number = 3.45214;
document.write(number+"<br>")
var b=Math.round(3.45214);
document.write(b+"<br>");
var c=Math.floor(3.45214);
document.write(c+"<br>");
var d=Math.ceil(3.45214);
document.write(d+"<br>");
number = -2.678 ;
document.write(number+"<br>")
var b=Math.round(-2.678 );
document.write(b+"<br>");
var c=Math.floor(-2.678 );
document.write(c+"<br>");
var d=Math.ceil(-2.678 );
document.write(d+"<br>");
var a="472";
document.write(a+"<br>");
// Generating random numbers[1]
var diceRoll = Math.floor( Math.random() * 6 ) +1;
alert('You rolled a ' + diceRoll);
// Generating random numbers[2];
var a = prompt("Enter 1st UserName ")
// var b = prompt("Enter 2nd UserName ")
var random = Math.random() * 2;
var round = Math.round(random)
document.write(round )
if (round <= 1) {
      document.write(a + "  Won the toss");
}
else {
      document.write(b + "  Won the toss")
}


// Generating random numbers[3];


  
   
    var y = Math.floor(Math.random() * 10 + 1); 

    var guess = 1; 
      
    
      
  var x=prompt("Enter your number");
  
   if( x == y ) {     
      alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS "); 
}else if(x > y ){    
       guess++
       alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
   } 
   else{ 
       guess++; 
       alert("OOPS SORRY!! TRY A GREATER NUMBER") 
   } 

//    Converting strings to integers and decimals[1];
var a=Pakistani;
var b=a.charAt(2);
document.write(b);


// Converting strings to numbers, numbers to strings[1]
var b=Number(a)
document.write(b+"<br>");
document.write(typeof a+"<br>");
document.write(typeof b+"<br>");
// Converting strings to numbers, numbers to strings[2]
var a=35.36;
document.write(a+"<br>");
var b=toString(35.36);
document.write(b+"<br>");
var b= a.toString(); 
document.write(b+"<br>");
var c= b.replace(".", "");
document.write(c);

// Converting strings to integers and decimals
var weight = prompt("enter your weight");
var round = parseInt(weight);
document.write(round );
// Controlling the length of decimals
var  percentage = 30 / 45 * 100;
document.write(percentage+"<br>");
var b =percentage.toFixed(2);
document.write(b);