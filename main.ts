input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Angry)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    for (let index2 = 0; index2 < 4; index2++) {
        basic.showIcon(IconNames.Confused)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(100)
    }
})
