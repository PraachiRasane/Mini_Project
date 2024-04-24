function rewards()
{
    // window.alert("Book your room now to earn exciting cash prices and rewards !!!");
    alert("Book your room now to earn exciting rewards and cash prices !!");
}
function meeting()
{
    // window.alert("Book your room now to earn exciting cash prices and rewards !!!");
    alert("Log into your Google Account to sync your meetings with calendar.To book meeting venue , Call booking counter at +91 9988776655");
}
function subscribe()
{
    const input=prompt("Please type in your email address to recieve latest updates about offers , memberships perks and much more!!");
    while(!isemail(input))
    {
        alert("Invalid Email");
        input=prompt("Try again !!");
    }
    alert("You have been Successfully added to our Newsletter Community !! We hope to see you soon !! ");
}
function isemail(email)
{
    return /\S+@+\S+\.\S/.test(email);
}
document.getElementById("subscribeBtn").addEventListener("click", function() {
    window.open("subscribe.html", "_blank");
});
