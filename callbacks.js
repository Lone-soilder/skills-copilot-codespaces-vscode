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

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title:"post three", body:'this is post three body..'}, getPost);