function convertHTML(str) {
const convertHTML={ "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      "\"": "&quot;",
                      "'": "&apos;"}


  return str.split("").map(e=> {
    if(convertHTML.hasOwnProperty(e))
    {
      return convertHTML[e]
    }
    return e
  }).join("");
}

console.log(convertHTML("Dolce & Gabbana"));