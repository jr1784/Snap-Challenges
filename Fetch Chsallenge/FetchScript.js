function handleOnLoad() {
    fetch("https://ddc-web-student.cnm.edu/apis/")
        .then(reply => reply.json())
        .then(posts => {
            // console.log(posts.data)
            const cards = posts.data.reduce((accumulator, currentValue)=>{
                const card =`

                    <div class="col">
                        <div class="card">
                            
                                <div class="card-body">
                                    <h5 class="card-title">${currentValue.title}</h5>
                                    <p class="card-text">${currentValue.body}</p>
                                </div>
                        </div>
                    </div>
                `




                 accumulator = accumulator + card
                return accumulator
            },"")
            document.getElementById("target").innerHTML = cards



        })
}