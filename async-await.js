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

// create function with promise
function createPost(post) {

    // create new promise
    return new Promise((resolve, reject) => {

        setTimeout((abc) => {
    
            posts.push(post);
            
            // creat flag for error / set it to true to get an error
            const error = false;

            // if no error it resolve, if error it reject
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }

         }, 2000);
    });
}


// async / await
async function init() {

    await createPost({ title: 'Post Three', body: 'This is post two' });
    getPosts();

}

// call async function
init();

// async / await / fetchs
async function fetchUsers() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);    

}

// call async function
fetchUsers();