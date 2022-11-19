function addUser(){
    Player1_name = document.getElementById("input_1").value;
    Player2_name = document.getElementById("input_2").value;

    localStorage.setItem("Player1_name", Player1_name)
    localStorage.setItem("Player2_name", Player2_name)

    window.location = "quiz_game_page.html";
}