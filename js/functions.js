function play_sound(player, sound_num) {
  new Audio(`sound/${player}_${sound_num}.wav`).play();
}
