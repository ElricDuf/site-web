window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entierement chargé et analysé")
    setTimeout(function(){
        document.getElementById("loader").style.top="-100vh";
    },1000)
})
