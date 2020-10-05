input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(40)
    for (let ir = 0; ir <= 4; ir++) {
        for (let ic = 0; ic <= 4; ic++) {
            led.plot(ic, ir)
            basic.pause(40)
            led.unplot(ic, ir)
        }
    }
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
