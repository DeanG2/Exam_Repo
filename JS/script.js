const inputId = [
    "name", "email", "message"
]

let myMessage = {}

const submitBtn = document.querySelector('#frm-btn')

submitBtn.addEventListener("click", (e) => {
    console.log("Message Submitted")

    saveMessage(true)
})

function saveCancelAction(save) {

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
        contactList.push(myContact)
        console.log(myContact)
    }

}
