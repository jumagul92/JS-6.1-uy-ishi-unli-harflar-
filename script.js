let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis quidem, saepe nihil eaque obcaecati ex sequi adipisci iusto cumque architecto qui earum voluptate accusantium dolorum animi cupiditate labore quae?"
let array = lorem.split("");

for (let i = 0; i < array.length; i++) {
   if (array[i]=="e" || array[i]=="u" || array[i]=="i" || array[i]=="o" || array[i]=="a") {
     array.splice(i, 1)
     
   }
}

let word = array.join("")
console.log(word);