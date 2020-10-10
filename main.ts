input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(40)
    for (let iy = 0; iy <= 4; iy++) {
        for (let ix = 0; ix <= 4; ix++) {
            led.plot(ix, iy)
            basic.pause(40)
            led.unplot(ix, iy)
        }
    }
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(40)
    for (let ix = 0; ix <= 4; ix++) {
        for (let iy = 0; iy <= 4; iy++) {
            led.plot(ix, iy)
            basic.pause(40)
            led.unplot(ix, iy)
        }
    }
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
