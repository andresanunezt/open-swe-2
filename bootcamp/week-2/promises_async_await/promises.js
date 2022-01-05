//define our promise
// let myPromise = new Promise((resolve, reject) => {
//     //define some sort of async task
//     //generate a random number 0,1 <-
//     // 0 <- we have found the user {}
//     // 1 <- we failed to find the user/information
//     const foundUser = Math.floor(Math.random() * 2) // 0 1
//     //if we have found our user
//     if(foundUser === 0) {
//         resolve(foundUser)
//     } else { //if we failed to find the user
//         reject(foundUser)
//     }
// })


// //define our callbacks
// myPromise.then((user) => {
//     console.log(`User has been found! ${user}`)
// }).catch((user) => {
//     console.log(`User failed to be found ${user}`)
// })

//Exercise
//create an array of four elements -> each element contains an object { username: '', password: ''}

//[{ username: '', password: ''},{ username: '', password: ''},{ username: '', password: ''},{ username: '', password: ''}] [x]

// Write a promise - generate a random number between 0 -> length-1 of the array [x]

// condition -> username has '@' ex: box@gmail.com '@' -> make sure the password has at least 1 captial letter, 1 lowercase letter

// resolve -> .then -> console.log 'username has valid email and email address (show email)'
// reject -> .catch -> console.log 'username or password not valid'

let db = [{ username: 'test123@gmail.com', password: 'abcABC'},{ username: 'test456@gmail.com', password: 'passwordisgood'},{ username: 'test789@gmail.com', password: 'passWord'},{ username: 'emailgmail.com', password: 'aA'}]

//checkForAt
function checkForAt(username) {
    if(username.includes('@')) {
        return true
    } else {
        return false
    }
}

//capAndLowCheck
function capAndLowCheck(password) {
    let cap = 0
    let low = 0
    //'abc' -> ['a','b','c']
    password.split('').map((char) => {
        if(char === char.toUpperCase()) {
            cap++
        }
        if(char === char.toLowerCase()) {
            low++
        }
    })
    //check if both counters are greater than 0 
    if(cap > 0 && low > 0) return true
    return false
    //(cap > 0 && low > 0) ? true : false
}

let myPromise = new Promise((resolve, reject) => {
    //define our async task
    const randomidx = Math.floor(Math.random() * db.length) //0 1 2 3
    const randomUser = db[randomidx] // {username: '', password: ''}

    //extract the username & password
    const username = randomUser.username
    const password = randomUser.password

    //store the results of helper functions below
    const checkForAtResult = checkForAt(username) // '@' 
    const capAndLowCheckResult = capAndLowCheck(password) // 1 low 1 cap

    //define our condition username & password should be valid
    if(checkForAtResult && capAndLowCheckResult) {
        resolve(randomUser)
    } else {
        reject(randomUser)
    }
})

myPromise.then((user) => {
    console.log(`Username and password valid ${user.username} ${user.password}`)
}).catch((user) => {
    console.log(`Username or password not valid ${user.username} ${user.password}`)
})

