//combined 3 arrays (products, prices and sales) in to an object/hash of objects/hashes.
//added functions to view, add, edit and delete specific records.

//created an array of guitar objects/hashes.
//added function to sort the object by any specified key.
//added functions to add, edit & delete records.
//added functions to caluculate cost of stock, set retail price and update revenues.

//function to capitalise 1st letters of words in string
//function to filter an array and return the even nos
//function to replace an item in an array
//function to total an array of ints
//function to turn an array of ints to an array of strings
//function to turn an array of strings to ints
//function to reverse the order of an array permanently
//function to reverse the order of an array temporarily using slice
//function to count the number of a specific character in a scentence



//combined 3 arrays (products, prices and sales) in to an object/hash of objects/hashes.
//added functions to view, add, edit and delete specific records.
products = ["peanuts", "chips", "pasty", "burger"]
prices = [1.50,2.99,3.40,4.99]
sales = [10, 5, 6, 7]
function joinArraysInToObject(arr1, arr2, arr3){
  result = {}
  for(let i = 0; i < arr1.length; i++ ) {
    result[arr1[i]] = {"product": arr1[i], "price": arr2[i].toFixed(2), "sales": arr3[i], "revenue": (arr2[i] * arr3[i]).toFixed(2)}
  }
  return result
}
prods_prices_sales = joinArraysInToObject(products, prices, sales)
objectLength = Object.keys(prods_prices_sales).length

function edit_product(stock_item, element, change){
  for (var [key, value] of Object.entries(prods_prices_sales)) {
    let p = prods_prices_sales[key]

    if (p['product'] === stock_item) {
      p[element] = change
    }
  }
}
edit_product("peanuts", "price", "0.23")
edit_product("chips", "sales", 25)

function prices_strings_to_ints(){
  for (var [key, value] of Object.entries(prods_prices_sales)){
    p = prods_prices_sales[key]
    p["price"] = parseFloat(p["price"]).toFixed(2)
  }
}
prices_strings_to_ints()

function update_revenue(){
  for (var [key, value] of Object.entries(prods_prices_sales)) {
    p = prods_prices_sales[key]
    //console.log(typeof parseInt(p["price"]), typeof p["sales"])
    p['revenue'] = p['price'] * p['sales']
    p['revenue'] = p['revenue'].toFixed(2)
  }
}
update_revenue()

function add_stock_item(product, price, sales, revenue){
  let ps = prods_prices_sales
  ps[product] = {"product": product, "price": price, "sales": sales, "revenue": revenue}
}
add_stock_item("mung beans", 45, 10, 450)
add_stock_item("ketsup", 2, 2, 4)
edit_product("mung beans", "price", 0.15)
prices_strings_to_ints()
update_revenue()

function delete_rec(item){
  for (var [key, value] of Object.entries(prods_prices_sales)){
    if (key === item){
      delete prods_prices_sales[key]
    }
  }
}
delete_rec("burger")

function view_item(item){
  for (var [key, value] of Object.entries(prods_prices_sales)) {
    if (key === item) {
      console.log(value)
    }
  }
}
view_item("pasty")

//created an array of guitar objects/hashes.
//added functions to add,edit & delete records.
//added functions to caluculate and update revenues from (sales * prices-costs).
//added function to sort the object.
guitars = [{"make": "fender", "model": "telecaster", "frets": 21}, {"make": "gibson", "model": "acoustic", "frets": 21}]

add_guitar_to_guitars_array("ibanez", "super strat", 28)
add_price_to_guitar(800, "super strat")
add_price_to_guitar(1000, "telecaster")
add_price_to_guitar(2000, "acoustic")
add_stock_of_guitar(10, "acoustic")
add_stock_of_guitar(20, "telecaster")
add_stock_of_guitar(15, "super strat")
calcultate_cost_of_stock()
set_retail_price(1.4)
calculate_profit_on_all_stock()

// console.log(guitars.sort(compareValues('stock_count', 'desc')))
//compareValues is passed to sort inorder to "guitars" the array of objects guitars.sort(compareValues('stock_count', 'desc'))
function compareValues(key, order='asc'){
  return function innerSort(a, b){
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = (typeof a.key === 'string')
      ? a[key].toUpperCase() : a[key]
    const varB = (typeof b.key === 'string')
      ? b[key].toUpperCase() : b[key]
    let comparison = 0

    if (varA > varB){
      comparison = 1
    }
    else if (varB > varA){
      comparison = -1
    }
    return (
      (order = 'desc') ? (comparison *-1) : comparison
    )
  }
}

function calculate_profit_on_all_stock(){
    for (let i = 0; i<guitars.length; i++){
        guitars[i]["profit_value"] = guitars[i]["stock_count"] * guitars[i]["retail_price"]
        guitars[i]["profit_less_costs"] = guitars[i]["profit_value"] - guitars[i]["wholesale_cost"]
    }
    return guitars
}

function set_retail_price(margin){
    for (let i = 0; i<guitars.length; i++){
        guitars[i]["retail_price"] = guitars[i]["price"] * margin
    }
    return guitars
}

function calcultate_cost_of_stock(){
    for (let i = 0; i<guitars.length; i++){
        guitars[i]["wholesale_cost"] = guitars[i]["stock_count"] * guitars[i]["price"]
    }
    return guitars
}

function add_stock_of_guitar(n, model){
    for (let i = 0; i < guitars.length; i++){
        if (guitars[i]["model"] === model){
            guitars[i]["stock_count"] = n
        }
    }
    return guitars
}

function add_price_to_guitar(price, model){
    for (let i = 0; i<guitars.length; i++){
        if (guitars[i]["model"] === model){
            guitars[i]["price"] = price
        }
    }
    return guitars
}

function change_guitar_model(old_model, new_model){
    let old = filter_by_guitar(old_model)
    old.model = new_model
    return old.model
}
// console.log(change_guitar_model("acoustic", "les paul"))

function filter_by_guitar(guitar_model) {
    result = guitars.filter(guitar => {
        return guitar.model === guitar_model
    })
    return guitars
}

// console.log(guitars[1].model)
// console.log(filter_by_guitar("acoustic"))

function add_guitar_to_guitars_array(make, model, frets){
    guitars.push(
        {"make": make, "model": model, "frets": frets}
    )
    return guitars
}
add_guitar_to_guitars_array("fender", "stratocaster", 21)
// console.log(guitars)

function remove_guitar_from_guitars_array(make, model, frets){
    target = guitars.findIndex(guitar => {
        return guitar.model === model
    })
    guitars.splice(target, 1)
}
remove_guitar_from_guitars_array("fender", "telecaster", 21)
add_guitar_to_guitars_array("Gibson", "Magic V", 21)

const numbers = ["1","2","3","5","6","7","10"]
const more_nums = [1,2,3,4,5]
let les_mots = "This is a test string to capitalise"
let the_words = "bigger rangling fortitude required"

function capitalize_1st_letters_of_words(string){
    words = string.split(" ")
    result = words.map(word => {
        let first = word[0].toUpperCase()
        let second = word.slice(1,word.length)
        result =  first + second
        return result
    })
    return result
}
// console.log(capitalize_1st_letters_of_words(les_mots))

function filter_evens(arr) {
    result = arr.filter(element =>{
        return element % 2 == 0
    })
    return result
}
// console.log(filter_evens(str_2_int(numbers)))

function replace_at_index(arr, index, item) {
    numbers.splice(index,0,item)
    return numbers
}
// console.log(replace_at_index(numbers, 0, "666"))

function total(arr) {
    result = arr.reduce((accumulator, currentvalue) => {
        return accumulator + currentvalue
    },0)
    return result
}
// console.log(total(str_2_int(numbers)))

//capitalise 1st letters of words in string
//filter an array and return the even nos
//replace an item in an array
//total an array of ints
//turn an array of ints to an array of strings
//turn an array of strings to ints
//reverse the order of an array permanently
//reverse the order of an array temporarily using slice
//count all the characters in a scentence matching input

function str_2_int(arr){
    result = arr.map(element => {
        return parseInt(element)
    })
    return result
}
// console.log(str_2_int(numbers))

function int_2_str(arr) {
    result = arr.map(element => {
        return element.toString()
    })
    return result
}
// console.log(str_2_int(int_2_str(str_2_int(numbers))))
// console.log(int_2_str(str_2_int(numbers)))

function reverse_list_perm(arr) {
    return arr.reverse()
}

function reverse_list_temp(arr){
    let result = arr.slice().reverse()
    return result
}

const add_end = (arr, item) => {
    arr.push(item)
}
add_end(numbers,"100000")

const add_start = (arr, item) => {
    arr.unshift(item)
}
add_start(numbers,"20202020")

const locate = (string) => {
    let target = numbers.findIndex(num =>{
        return num === string
    })
    return target
}

const remove = (arr, location) => {
    arr.splice(location, 1)
}

remove(numbers,locate("100000"))
// console.log(numbers)

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
function place(arr, item){
    found = arr.findIndex(e =>{
        return e === item
    })
    console.log(found, item)
}
// place(animals, "lion")

// const numbers = ["1","2","3","5","6","7","10"]
const place_num = (arr, item) => {
    result = arr.findIndex(e =>{
        return e === item
    })
    console.log(result, item)
}
// place_num(numbers, "7")

function countBs1(string){
    let count = 0
    for (let i = 0; i<string.length;i++){
        if (string.charAt(i) == "b" || string.charAt(i) == "B"){
            count+=1
        }
    }
    return count
}

const countBs2 = (string) => {
    sep = string.split("")
    count = 0
    sep.forEach(i => {
        if (i=="b" || i=="B"){
            count+=1
        }
    })
    return count
}

const countChars = (string, char) => {
    sep = string.split("")
    count = 0
    sep.forEach(i => {
        if (i==char.toLowerCase()){
            count+=1
        }
    })
    return count
}
// console.log(countBs1("BBbbsimon"))
// console.log(countBs2("BBbbsimon"))
// console.log(countChars("BBbbsimon", "S"))

const isEven = (n) => {
    if (n % 2 == 0) {
        return true
    }
    else if (n%2!=0) {
        return false
    }
    else {
        return (-n % 2 !=0) ? true : false
    }
}
// console.log(isEven(74))
