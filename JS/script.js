const inputId = [
    "name", "email", "msg"
]

let myMessage = {}

const submitBtn = document.querySelector('#frm-btn')

submitBtn.addEventListener('click', (e)=> {

    console.log("Message Submitted")

    saveMessage(true)
})

function saveMessage(save) {

    inputId.forEach((ele) => {

        const input = document.querySelector("#" + ele)

        switch(ele) {

            case "name":
                save? myMessage["name"] = input.value : input.value = ""
            break

            case "email":
                save? myContact["email"] = input.value : input.value = ""
            break

            case "contactaddress":
                save?  myContact["message"] = input.value : input.value = ""
            break
        }
    })

    
    if (save) {
        console.log(myContact)
    }

}

function toggleMode() {

    var element = document.querySelector("#body-theme");

    element.classList.toggle(".light-theme");

  }

const toggleBtn = document.querySelector(".toggle")

toggleBtn.addEventListener('click', (e)=> {
    toggleMode()
})

