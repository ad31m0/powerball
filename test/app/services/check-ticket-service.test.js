const {internal} = require("../../../app/services/check-ticket-service")
const {checkTicketServiceCtor} = internal

const getSut = () => {
    const getWinningNumbers = jest.fn(() => Promise.resolve([
            {
                "draw_date": "2018-02-28T00:00:00.000",
                "winning_numbers": "12 30 59 65 69 16",
                "multiplier": "1"
            }
        ]
    ))

    const checkTicketService = checkTicketServiceCtor(getWinningNumbers)

    return {checkTicketService, getWinningNumbers}
}

test('2 picks, win, loss', async () => {
    const {checkTicketService} = getSut()
    expect(await checkTicketService({
            "date": "2021-02-28",
            "picks": [
                "12 30 59 4 5 1",
                "12 30 1 4 5 1",
            ]
        }
    )).toEqual({
        "picks": [
            {
                "powerball": 1,
                "whiteballs": [
                    12,
                    30,
                    59,
                    4,
                    5
                ],
                "prize": 7,
                "hasWon": true
            },
            {
                "powerball": 1,
                "whiteballs": [
                    12,
                    30,
                    1,
                    4,
                    5
                ],
                "prize": 0,
                "hasWon": false
            }
        ],
        "totalPrize": 7
    })
})


test('5 picks', async () => {
    const {checkTicketService} = getSut()
    expect(await checkTicketService({
            "date": "2018-02-28",
            "picks": [
                "12 30 59 4 5 1",
                "12 30 3 4 5 1",
                "12 30 59 65 5 1",
                "12 30 59 65 5 16",
                "12 30 59 65 69 16"]
        }
    )).toEqual({
        "picks": [
            {
                "powerball": 1,
                "whiteballs": [
                    12,
                    30,
                    59,
                    4,
                    5
                ],
                "prize": 35,
                "hasWon": true
            },
            {
                "powerball": 1,
                "whiteballs": [
                    12,
                    30,
                    3,
                    4,
                    5
                ],
                "prize": 0,
                "hasWon": false
            },
            {
                "powerball": 1,
                "whiteballs": [
                    12,
                    30,
                    59,
                    65,
                    5
                ],
                "prize": 500,
                "hasWon": true
            },
            {
                "powerball": 16,
                "whiteballs": [
                    12,
                    30,
                    59,
                    65,
                    5
                ],
                "prize": 250000,
                "hasWon": true
            },
            {
                "powerball": 16,
                "whiteballs": [
                    12,
                    30,
                    59,
                    65,
                    69
                ],
                "prize": 10000000,
                "hasWon": true
            }
        ],
        "totalPrize": 10250535
    })
})

