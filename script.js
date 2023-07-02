// Note i cannot test this due to it being too harsh on my pc

emotion="1"

setInterval(function(){
    if (emotion == "1"){
        var beta = document.getElementById("face");
        beta.src = 'uwu.jpg';
    }
    if (emotion == "2"){
        var beta = document.getElementById("face");
        beta.src = 'norm.jpg';
    }
    if (emotion == "3"){
        var beta = document.getElementById("face");
        beta.src = 'meh.jpg';
    }
}, 1000)



const input = document.getElementById("main-text");

// Add an event listener for the keydown event
input.addEventListener("keydown", function(event) {
// Check if the key pressed is Enter (key code 13)
if (event.keyCode === 13) {
    // Call your function here
    process_mgr();
    }
});

    // Function to be executed when Enter is pressed
function process_mgr() {
    query=(document.getElementById("main-text").value)
    input.value=""
    speak(query)
    test=(Math.floor(Math.random() * 4))


}


function start(){
   // JavaScript code
fetch('run.php')
.then(response => {
  if (response.ok) {
    console.log('Python file started successfully.');
  } else {
    console.error('Failed to start Python file.');
  }
})
.catch(error => {
  console.error('An error occurred:', error);
});

}

function speak(str){
    fetch('write.php', {
  method: 'POST',
  body: ('data=' + str ), // The data you want to write to the file
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to write to file');
    }
    console.log('Data written to file successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  });


}

setInterval(function(){
    fetch('file.php')
  .then(response => response.text())
  .then(data => {
    console.log(data);
    lfm=data // or do something else with the data
  })
  .catch(error => {
    console.error('Error:', error);
  });
if (lfm ==""){

}
else{
    string=""
    for (char in lfm){
        setTimeout(function() {
            string=(string + lfm[char])
            document.getElementById("response").innerHTML=(string)
          }, 130);
    }
}}, 300
)