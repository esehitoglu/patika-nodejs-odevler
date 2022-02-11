
let arg = process.argv.slice(2)

field = (r) =>{
    let field = 3.14 * r
    console.log(field)
}

field( arg[0] )