var form = document.getElementById('form');

form.addEventListener('submit',function(e){

    //prevent auto submission of the form
    e.preventDefault();
    
    // var user_id = document.getElementById('id');
    // var id_value=user_id.value;

    //fetch post request
    
    fetch("https://reqres.in/api/users",{
        method:'GET',
        headers:{
            "Content-Type": 'application/json, charset=UTF-8'
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
    })
    .catch((error)=>{
        console.log(error);
    })
})
