/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "your", "me", "they"];
  let adj = ["-great", "-big", "-small", "-medium"];
  let name = ["-anaconda", "-piton", "-cobra", "-cascabel"];
  let domain = [
    ".com",
    ".net",
    ".ve",
    ".us",
    ".es",
    ".co",
    ".el",
    ".ra",
    ".da",
    ".on"
  ];

  for (let w = 0; w < pronoun.length; w++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < name.length; y++) {
        for (let z = 0; z < domain.length; z++) {
          if (name[y].endsWith(domain[z])) {
            console.log(
              pronoun[w] +
                adj[x] +
                name[y].slice(0, -1 * domain[z].length) +
                "." +
                domain[z]
            );
          } else {
            console.log(pronoun[w] + adj[x] + name[y] + ".com");
          }
        }
      }
    }
  }
};
