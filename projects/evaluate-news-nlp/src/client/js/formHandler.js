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
        //document.getElementById('results').innerHTML = JSON.stringify(res)
        document.getElementById('score_tag').innerHTML = `Score_tag : ${res.score_tag} <br>`
        document.getElementById('agreement').innerHTML = `Agreement : ${res.agreement} <br>`
        document.getElementById('subjectivity').innerHTML = `Subjectivity : ${res.subjectivity} <br>`
        document.getElementById('confidence').innerHTML = `Confidence : ${res.confidence} <br>`
        document.getElementById('irony').innerHTML = `Irony : ${res.irony} <br>`
        
    })
    .catch(() => {
        alert(`some thing went wrong, please try again`);
    });
}



export { handleSubmit }
