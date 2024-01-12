input.onButtonPressed(Button.A, function () {
    basic.showString("Violão 6c")
    basic.showIcon(IconNames.EighthNote)
    music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("E grave")
    basic.showIcon(IconNames.QuarterNote)
    for (let index = 0; index < 6; index++) {
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        continue;
    }
})
