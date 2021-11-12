const axios = require("axios")
const moment = require("moment/moment")
const {powerballConfigProvider} = require("../config/powerball")
const {parseGameNumbers} = require("../helpers/parse-game-numbers")
const {calculatePickPrize} = require("./calculate-pick-prize")

function checkTicketServiceCtor(getWiningNumbers) {
    return async ({date, picks}) => {
        const wins = await getWiningNumbers(date)
        if (wins.length !== 0) {
            const win = parseGameNumbers(wins[0].winning_numbers)
            picks = picks.map((pick) => parseGameNumbers(pick))
            const totalPrize = picks.reduce((accumulator, prize) => accumulator + calculatePickPrize(prize, win, wins[0].multiplier), 0)

            return {picks, totalPrize}
        } else {
            return {error: "there were no draws on this date", date, picks, totalPrize: 0}
        }
    }
}

module.exports = {
    internal: {checkTicketServiceCtor},
    checkTicketService: checkTicketServiceCtor(
        async (date) => {
            // istanbul ignore next - adapter
            const formattedDate = moment(date).format("YYYY-MM-DD")
            return (await axios.get(`${powerballConfigProvider.POWERBALL_RESULTS_URL}?draw_date=${formattedDate}`, {
                method: "GET",
            })).data
        }
    )
}