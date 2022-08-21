const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']// Code your solution here
function findMatching(drivers,names){
    const matching = drivers.filter(function(name){
        return name.toLowerCase() === names.toLowerCase()
    })
    return matching
    } 

     
function fuzzyMatch(array, string){
    const driverNames = array.filter(name => name.charAt() === string.charAt());
     
    return driverNames;
}
     
     
 function matchName(driver, string){  
    const match = driver.filter(details => details.name === string);
     
     return match;
     }
     
console.log(matchName(drivers, "Bobby"));
