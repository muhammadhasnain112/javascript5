
           

        let test = prompt("Enter your Password")
        let check = test.charCodeAt()

        if (test.length > 5) {
            if (check >= 65 && check <= 90 || check >= 97 && check <= 122) {
                alert("Your Password Is Good")

            } else {
                alert("Password Cannot Begin With A Number")
            }
        } else {
            alert("Please Enter A Valid Password Greater Then 5")
        }
