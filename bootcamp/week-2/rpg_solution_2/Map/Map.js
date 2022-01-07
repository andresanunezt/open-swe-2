class Map {
    constructor(){
        this.map = []
        this.collision = false
    }

    //generate a map
    generateMap() {  
        for(let i = 0; i < 4; i++) {
            let row = [0,0,0,0]
            this.map.push(row)
        }
    }

    //spawn 1 player
    generatePlayer() {
        //generate a random x,y coordinate
        let pX = Math.floor(Math.random() * 3)
        let pY = Math.floor(Math.random() * 3)
        //assign the string 'p' to the map(x,y)
        this.map[pX][pY] = 'p'
    }

    //spawn 6 monsters
    generateMonsters() {
        //keep a monster count
        let monster = 0
        //loop until I have 6 monsters 
        while(monster < 6) {
            //create random xy coordinates for monster    
            let mX = Math.floor(Math.random() * 3)
            let mY = Math.floor(Math.random() * 3)

            //if there is an existing monster in that position or if there is a current collision -> skip
            if(this.map[mX][mY] === 'm' || this.map[mX][mY] === 'battle') {
                continue
            }

            //if a player is currently in that position -> 
            //change collision status = true, 
            //change current string -> 'battle'
            if(this.map[mX][mY] === 'p') {
                this.collision = true
                this.map[mX][mY] = 'battle'
                console.log(`THERE IS A COLLISION!`)
                monster++
            } else {
            //assign position to = 'm'
            //increment monster
                this.map[mX][mY] = 'm'
                monster++
            }
        }
    }

}

module.exports = Map