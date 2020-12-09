//currying test https://www.youtube.com/watch?v=iZLP4qOwY8I

//full function without currying

let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'

console.log(dragon('Bolinha', 'huge', 'fire'))