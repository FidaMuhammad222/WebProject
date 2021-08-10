const url = require('url');

const myurl = new URL('http://mywebsite.com/hello.html?id=88&status=active');

//Serilized Url

console.log(myurl.href);
//Host Name
console.log(myurl.host);
//PathName
console.log(myurl.pathname);
//Serialized query
console.log(myurl.search);
//Param Objects
console.log(myurl.searchParams);
//Add Param 
myurl.searchParams.append('abc','322');
console.log(myurl.searchParams);
//loop Through Params
myurl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`));
