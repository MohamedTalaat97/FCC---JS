// Only change code below this line
function urlSlug(title) {
    let result = title.toLowerCase().split(' ').filter(e => e != '').join('-')
    console.log(result)
  return result


}
// Only change code above this line
urlSlug(" Winter Is  Coming")