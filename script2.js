
//TODO:create array of user choices                                             DONE
//TODO:declare variables                                                        DONE
//TODO: make function to equal choices for the array                            DONE
//TODO: find if else solution for computerChoices with button prev ex           DONE
//TODO:show them results                                                        DONE (not properly working yet tho)



(function () {
    console.log('test excercise')



    const userChoices = ['rock', 'paper', 'scissors'];
    let userChoice;
    let computerChoice;


    document.getElementById('rock').addEventListener('click', function (){
        userChoice = userChoices[0]
    });
    document.getElementById('paper').addEventListener('click', function (){
        userChoice = userChoices[1]
    });
    document.getElementById('scissors').addEventListener('click', function (){
        userChoice = userChoices[2]
    });

    
    document.getElementById("user-game-button-begin").addEventListener('click', function () {

    computerChoice = userChoices[Math.floor(Math.random()*userChoices.length)];

    if (userChoice === computerChoice) {
        document.getElementById('result-tie').innerHTML = `It's a tie!`
    } else {

        if (userChoice === userChoices[0]    && computerChoice === userChoices[2]
            || userChoice === userChoices[1] && computerChoice === userChoices[0]
            || userChoice === userChoices[2] && computerChoice === userChoices[1])
        {
            document.getElementById('result-win').innerHTML = `You have won the round!`
        } else {
            document.getElementById('result-loss').innerHTML = `You have lost the round!`
        }
    }

});

    })();