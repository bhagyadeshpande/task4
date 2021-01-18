var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
  var countrydata = JSON.parse(this.response);
  
   // Countries in Asian region  
   const regions = countrydata.filter((country)=>{
         return country.region === "Asia";         
   })
   console.log(regions);  
   
   //countries having population lesser than 2 lacs
   var smallcountry = countrydata.filter((nation)=>{
         return nation.population<=200000;
   })
   console.log(smallcountry);
   
   //displaying the name, capital and flag of countries
   countrydata.forEach(element => {
         console.log("Name: "+element.name + " Capital: " + element.capital + 
         " Flag: " + element.flag);
   });
      
   // displaying the total population of countries
   var population = countrydata.reduce((acc,element) => {
         return acc + element.population },0)
         console.log(population);
   
      //displaying the countries with "USD"/ dollars as currency
      let currencyarr = [];
      for(i=0;i<countrydata.length;i++){
      currencyarr.push(countrydata[i].currencies);
      }
      for(i=0; i<currencyarr.length;i++){
      for(j=0;j<currencyarr[i].length;j++){
      if(currencyarr[i][j].code === "USD"){
      console.log(countrydata[i]);
      }  
      } }      
}
      

