function calculatePickPrize(pick, win, multiplier){
    const powerBallMatch = pick.powerball === win.powerball
    const whiteBallsMatch = pick.whiteballs.filter((number) => win.whiteballs.includes(number))
    let prize = 0
    switch (whiteBallsMatch.length) {
        case 5:
            prize = powerBallMatch ? 2000000 : 1000000
            break
        case 4:
            prize = powerBallMatch ? 50000 : 100
            break
        case 3:
            prize = powerBallMatch ? 100 : 7
            break
        case 2:
            prize = powerBallMatch ? 7 : 0
            break
        case 1:
            prize = powerBallMatch ? 4 : 0
            break
        case 0:
            prize = powerBallMatch ? 4 : 0
            break
    }
    if(!multiplier){
        multiplier = 1
    }
    pick.prize =  prize*multiplier
    pick.hasWon = prize !== 0
    return pick.prize
}

module.exports = {
    calculatePickPrize
}