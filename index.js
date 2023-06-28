const body = document.querySelector('body')

function submitData(name, email){
    const url = "http://localhost:3000/users";
    return fetch(url, {
        method:'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = data['id']
    })
    .catch(error => {
        document.body.innerHTML = error.message

   })
}