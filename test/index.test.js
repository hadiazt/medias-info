const {
    PCGame,
    ConsoleGame,
    Songs,
    Moives,
    Tv
} = require('medias-info')

PCGame({ name: 'gta' }).then(res => { console.log(res) })
ConsoleGame({ name: 'gta' }).then(res => { console.log(res) })
Songs({ name: 'gta' }).then(res => { console.log(res) })
Moives({ name: 'gta' }).then(res => { console.log(res) })
Tv({ name: 'gta' }).then(res => { console.log(res) })

