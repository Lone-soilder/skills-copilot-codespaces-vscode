const posts = [
    {title: 'post one' , body: 'this is post one body'},
    { title: 'post two' , body: 'this is post one body'}]

function getPost(){

    setTimeout(()=>{
        posts.forEach((post)=>{
            console.log(`${post.title}+ ${post.body}`);
        })
    },1000);
}

//getPost();

function createPost(post){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;  
        
            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong");
            }
        },2000);
    })
}

createPost({title:"post three", body:'this is post three body..'})
.then(getPost)
.catch(err=> console.log(err));