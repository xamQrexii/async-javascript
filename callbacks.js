// create array of objects for posts
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];


// create getPosts function to show posts on html page
function getPosts() {

    let output = '';
    setTimeout(() => {
       
       posts.forEach((post, index) => {
           output += `<li>${post.title}</li>`;
           document.body.innerHTML = output;                          
       }); 
    }, 1000);    
    
}

// create function to create new post
function createPost(post, callback) {

    setTimeout((abc) => {
    
       posts.push(post);
       callback();       
    }, 2000);

}

// call function with callback
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);