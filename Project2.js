let Loader = document.getElementById("loading");
window.addEventListener("load", function(){
    Loader.style.display = "none";
})

let items = ["pizza","burger","fish","cold drink","chicken karahi"];
function orderNow(){
	swal({   
        title: "Enter Item Name!",   
        text: "What Would You Like To Order:",   
        content: "input"
    }).then((value)=>{
        if (value === "")
        {
            swal("Order Not Placed!", "You Did Not Give The Required Information.", "error");
        }
        else{
            swal({   
                title: "Enter Item Quantity!",   
                text: "Enter The Quantity Of Item You Are Ordering (In Digits):",   
                content: "input",
                button: "Confirm Order"
            }).then((confirmOrder)=>{
                if (confirmOrder){
                    swal("Success! Your Order Has Been Placed!", {
                        icon: "success",
                    });
                }
                else{
                    swal("Order Not Placed!", "You Did Not Give The Required Information.", "error");
                }
            })
        }
    });
}  

const sendMessage = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    
    if (name === "" || email === "" || phone === "" || message === "")
    {
        swal('Message Not Sent Successfully!', 'You Did Fill The Input Fields Correctly!','error');
    }
    else
    {
        swal('Message Sent Successfully!','Your Message has been Sent!','success');
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('message').value = "";
    }
}