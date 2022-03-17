const {
    PCGame,
    ConsoleGame,
    Songs,
    Moives,
    Tv
} = require('medias-info')

PCGame({ name: '' }).then(res => { console.log(res) })
ConsoleGame({ name: '' }).then(res => { console.log(res) })
Songs({ name: '' }).then(res => { console.log(res) })
Moives({ name: '' }).then(res => { console.log(res) })
Tv({ name: '' }).then(res => { console.log(res) })

// --------- OR --------- //

const Data /* Or Every Var You Want */ = require('medias-info')

Data.PCGame({ name: '' }).then(res => { console.log(res) })
Data.ConsoleGame({ name: '' }).then(res => { console.log(res) })
Data.Songs({ name: '' }).then(res => { console.log(res) })
Data.Moives({ name: '' }).then(res => { console.log(res) })
Data.Tv({ name: '' }).then(res => { console.log(res) })

/************************************
    
    * Available function are : 👇
    * PCGame (Required Name Input)
    * ConsoleGame (Required Name Input)
    * Songs (Required Name Input)
    * Moives (Required Name Input)
    * Tv (Required Name Input)
    
************************************/