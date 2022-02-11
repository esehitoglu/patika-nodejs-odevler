

const post = [
    { name:"ensar" , age:"30" },
    { name:"erkek ismi :)" , age:"25" },
    { name:"bla bla" , age:"24" }
]

const listPost = () =>{
    post.map( p =>{
        console.log(p.name)
    })
}

const addPost = ( newPost , callback ) =>{
    post.push(newPost)
    callback()
}

//listPost()

addPost( { name: "bici bici" , age:"40" } , listPost )

