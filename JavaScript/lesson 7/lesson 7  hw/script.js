console.log(longestStringForLoop(['Alexandr', 'Barbara', 'Imran', 'John', 'Michael', 'Timur', 'John']));


function longestStringForLoop(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
}




// https://stackoverflow.com/questions/51178129/find-the-longest-word-in-an-array-javascript