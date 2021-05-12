function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    
    let validURL = Client.validURL(formText)
    if (! validURL) {
        alert("Not valid URL");
        return false;
    }

    async function postURL(url='', data={}){
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    postURL('http://localhost:8080/sentimentAnalysis',{
        "txt": formText
    })
    //.then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = JSON.stringify(res)
    })
}



export { handleSubmit }
