let votes = {
    "BJP": 0,
    "BRS": 0,
    "CONGRESS": 0
};

let voters = [];

function vote(party) {
    let voterId = document.getElementById("voterId").value.trim();
    let message = document.getElementById("message");

    // Voter ID validation:
    // First 3 alphabets + remaining 7 numbers
    let pattern = /^[A-Za-z]{3}[0-9]{7}$/;

    if (!pattern.test(voterId)) {
        message.innerText =
            "Voter ID must be 10 characters: first 3 alphabets, last 7 numbers";
        message.style.color = "red";
        return;
    }

    if (voters.includes(voterId)) {
        message.innerText = "This Voter ID has already voted!";
        message.style.color = "red";
        return;
    }

    // Store vote
    voters.push(voterId);
    votes[party]++;

    message.innerText = "Vote submitted successfully!";
    message.style.color = "green";
    document.getElementById("voterId").value = "";

    //  COUNT SHOWN ONLY IN CONSOLE
    console.clear();
    console.log("📊 CURRENT VOTE COUNT (SECRET)");
    console.log("BJP PARTY:", votes["BJP"]);
    console.log("BRS PARTY:", votes["BRS"]);
    console.log("CONGRESS PARTY:", votes["CONGRESS"]);
    console.log("👥 Total Voters:", voters.length);
}