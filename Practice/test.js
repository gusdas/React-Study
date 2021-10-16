class Song {
  name;
  nextSong;

  constructor(name) {
    this.name = name;
  }

  /**
   * @return {boolean} true if the playlist is repeating, false if not.
   */
  isRepeatingPlaylist() {
    // Your code goes here

    if (this.nextSong.nextSong.name === this.name) return true;
  }
}

let first = new Song('Hello');
let second = new Song('Eye of the tiger');

first.nextSong = second;
second.nextSong = first;

console.log(first.isRepeatingPlaylist());
