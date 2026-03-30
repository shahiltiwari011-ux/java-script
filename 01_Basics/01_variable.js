const accountId = 12555
let accountGmail = "hi@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

console.table([accountId , accountGmail , accountPassword , accountCity])

/*

perfer not to use var
because of issue in block scope and functional scope

*/

accountGmail = "jd@gmail.com"
accountPassword = "25555366"
accountCity = "stan"

console.table([accountId , accountGmail , accountPassword , accountCity , accountState])

