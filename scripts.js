//QUESTION 1
console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// QUESTION 2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

//QUESTION 3
let num ='10'
num = Number(num)

console.log(num ===10)

//QUESTION 4
let num2 = parseFloat(9.8)
num2= Math.round(num2)
console.log(num2, num2===10)

// QUESTION 5
let string1= 'python'
console.log(string1.includes('on'))

let string2= 'jargon'
console.log(string2.includes('on'))

//QUESTION 6
let string3= 'I hope this course is not full of jargon'
console.log(string3.includes('jargon'))

//QUESTION 7
let num1= Math.random()
num1= Math.floor(num1 *101)
console.log(num1)



// Question 11

console.log('1\t1\t1\t1\t\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\t\n4\t1\t4\t16\t64\t\n5\t1\t5\t25\t125\t' )

//QUESTION 12
let string4= 'You cannot end a sentence with because because because is a conjunction'
console.log(string4.search('because'))
console.log(string4.substring(31,54))

// EXERCISE 3

// QUESTION 1
let string5= 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let pattern =/love/gi

console.log(string5.match(pattern))
console.log('love occurs :',string5.match(pattern).length, 'times')


//QUESTION 2
let string6= 'You cannot end a sentence with because because because is a conjunction' 
let pattern2 =/because/gi

console.log(string6.match(pattern2))
console.log('because occurs :',string6.match(pattern2).length, 'times')

//QUESTION 3
let string7= 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(string7.search('5000'))
console.log(string7.search('10000'))
console.log(string7.search('15000'))
console.log(string7[10] * string7[43] * string7[68])

