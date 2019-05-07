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

// call function with promise
createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(err => console.log(err));

// Promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then((values) => console.log(values));   