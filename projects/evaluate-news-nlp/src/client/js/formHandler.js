function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)

    //console.log("::: Form Submitted :::")

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
