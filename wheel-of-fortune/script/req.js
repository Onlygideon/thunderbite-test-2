const spinButton = document.querySelector('.button');


// Make simultaneous GET requests to the mock DB files
function getDatas() {
    axios.all([
        axios.get('../data/db.json'),
        axios.get('../data/recentWin.json')
    ])

    .then(res => {
        console.log(res[0].data);
        console.log(res[1].data);
    })

    .catch(err => console.error(err))
}


// Event listener
spinButton.addEventListener('click', getDatas);