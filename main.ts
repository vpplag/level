let x = 0
let y = 0
let x2 = 0
let y2 = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    x2 = Math.map(x, -1023, 1023, 0, 4)
    y2 = Math.map(y, -1023, 1023, 0, 4)
    led.plot(x2, y2)
    basic.pause(100)
    led.unplot(x2, y2)
    if (Math.abs(x) < 32 && Math.abs(y) < 32) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
})
