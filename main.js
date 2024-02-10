document.getElementById('disappearBtn').addEventListener('click', function() {
    this.style.display = 'none';
  });
  


  document.getElementById('randomTextDiv').addEventListener('click', function() {
    this.style.display = 'none';
  });
  


  function checkAnswer(selectedOption) {
    var correctAnswer = "paris";
    var questionElement = document.getElementById("question1");
  
    if (selectedOption === correctAnswer) {
      questionElement.style.color = "green";
    } else {
      questionElement.style.color = "red";
    }
  }