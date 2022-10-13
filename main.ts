input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showString("2A19 ray lee")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.showString("flying airplane")
        basic.showIcon(IconNames.Triangle)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
