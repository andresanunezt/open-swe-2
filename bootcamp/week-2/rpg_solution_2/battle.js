const Player = require('./Player/Player.js')
const Monster = require('./Monster/Monster.js')
const Map = require('./Map/Map.js')

//create instances for each class

//player instance
let newPlayer = new Player('Brad', 20, {
    'punch': 5
})

//monster instance
let monster = new Monster('Ulala', 10, {
    'whip': 8
})


//map instance
let newMap = new Map()

//generate a new map
newMap.generateMap()

//generate a player
newMap.generatePlayer()

//generate monsters on the map
newMap.generateMonsters()


//////////////// battle function ////////////////
function battle(map, player, monster){
    //if there is collision, commence battle
    if(map.collision === true) {
        console.log(`===COLLISION OCCURED, BATTLE BEGIN ===`)
        console.log(map.map)

        //if either player is alive or monster is alive
        while(player.hp > 0 || monster.hp > 0) {
            //if either one of them dies, console log the winner and return
            if(player.hp <= 0) {
                console.log('MONSTER HAS WON')
                return
            }
            if(monster.hp <= 0) {
                console.log('PLAYER HAS WON')
                return
            }

            //randomize the attack
            let firstMove = Math.floor(Math.random() * 2)
            //0 player 1 Monster

            if(firstMove === 0) {
                //player is going to attack the monster
                //How can the player 'attack the monster'? player.punch
                //What happens to the Monster's hp if it gets attacked?
                console.log(`player attacks monster! Player uses PUNCH`)
                monster.hp = monster.hp - player.attacks.punch
                console.log(`Current Stats: Player hp: ${player.hp}, Monster hp: ${monster.hp}`)
            }
            else {
                //monster is going to attack the player
                console.log(`monster attacks player! MONSTER USES WHIP!!`)
                player.hp = player.hp - monster.attacks.whip
                console.log(`Current Stats: Player hp: ${player.hp}, Monster hp: ${monster.hp}`)
            }
        }
    } else {
        //if there is no collision, console log ('no collision restart game')
        console.log(map.map)
        console.log(`===NO COLLISION RESTART GAME===`)
    }
    
}

//////////////// battle function ////////////////

battle(newMap, newPlayer, monster)

