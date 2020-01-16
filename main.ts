enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (hero, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKindLegacy.Enemy, function (villian) {
    villian.setImage(img`
. . d d d d d d d d d d d d . . 
. . d d d d d d d d d d d d . . 
. . d d d d d d d d d d d d . . 
. . d d d 1 1 1 1 1 1 d d d . . 
. . d d d 1 1 1 1 1 1 d d d . . 
. . d d d 1 1 1 1 1 1 d d d . . 
. . d d d 1 1 1 1 f f d d d . . 
. . d d d 1 1 1 1 f f d d d . . 
. . d d d 1 1 1 1 f f d d d . . 
. . d d d d d d d d d d d d . . 
. . d d d d d d d d d d d d . . 
. . d d d d d d d d d d d d . . 
. . . d d d d d d d d d d . . . 
. . . d d d d d d d d d d . . . 
. . . d d d d d d d d d d . . . 
. . . d d d d d d d d d d . . . 
`)
    villian.setPosition(0, Math.randomRange(0, 120))
    villian.vx = 80
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 . 4 4 4 4 4 
. . . . . 2 2 4 4 2 2 2 2 4 . 4 
. . . . 2 2 4 4 2 4 4 4 4 2 4 . 
. . . 2 2 4 2 2 2 4 4 2 4 4 . . 
. . 2 2 4 2 2 4 4 4 2 2 4 4 4 . 
. 2 2 4 2 4 4 4 2 2 2 4 4 . 4 . 
. 2 4 4 4 4 4 2 2 4 4 4 4 4 4 4 
. 2 4 2 4 4 4 2 4 4 4 4 4 . 4 4 
. 2 4 4 2 2 2 4 4 4 4 4 4 4 4 . 
. 2 4 4 4 4 4 4 2 2 4 4 4 . 4 4 
. 2 2 4 4 2 2 4 2 4 4 4 4 4 4 . 
. . 2 2 2 4 2 2 2 2 2 4 . 4 4 . 
. . . . 2 2 4 4 4 4 2 2 . . 4 . 
. . . . . 2 2 4 4 4 4 2 2 4 4 4 
. . . . . . 2 2 2 4 2 2 4 . 4 . 
`, hero, -50, 0)
})
sprites.onOverlap(SpriteKindLegacy.Projectile, SpriteKindLegacy.Enemy, function (fire, villian) {
    villian.destroy()
    fire.destroy()
    info.changeScoreBy(1)
    villian = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
})
info.onCountdownEnd(function () {
    game.splash("You survived!")
    game.over(true)
})
let villian: Sprite = null
let fire: Sprite = null
let hero: Sprite = null
game.splash("Directions for Game: Survive the Wave")
hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . f f f e e e . . . . . . 
. . . . e 1 e e e e . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . 1 1 e e e e . . . . e . 
. . . . . . e e e . . . . . e . 
e e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e . 
e . . . e e e e e e . . . . . . 
e . . . e e e e e e . . . . . . 
e . . . e e e e e e . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . 5 5 5 f 5 5 . . . . . . 
. . . . e e e 1 e e . . . . . . 
`, SpriteKindLegacy.Player)
hero.x = 150
controller.moveSprite(hero, 0, 100)
hero.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(50)
forever(function () {
    villian = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
    villian = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
    villian.setPosition(0, Math.randomRange(0, 120))
    villian.vx = 80
    pause(500)
})
