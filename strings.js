let word ="beautiful";
console.log(word[5]);
console.log(word[6]);
console.log(word[7]);
console.log(word[8]);
const food= "I was feeling hungry today";
  let specIndex=5;
let output= food.slice(0,specIndex) + "eat";
console.log(output);

 const story="The quick brown fox jumped over the lazy dog";
  story.search()
  const string1= "We are  now going to school";
   findstring = "now";
   if(findstring){
    console.log(true)
   }
   else{
    console.log(false)
   }
   const string2="The child was sitting on the table before it fell";
   find="sitting";
   if(find){
    console.log(true)
   }
   else{
    console.log(false)
   }
   //uppercase
   let w= "wonderful";
   let w2 =w.toUpperCase();
   //lowercase
   console.log(w2);
   let a = "amazing";
   a2= a.toLowerCase();
   console.log(a2);
   let b= "BEneath";
   b2= b.toLowerCase()
   console.log(b2)
   //title case
   
   let c="A beautiful wedding";
    c=c.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
       console.log(c);

    
    

    

