function registerEvent(){
    let date = document.getElementById("eventDate").value;
    let time = document.getElementById("eventTime").value;
    let participants = document.getElementById("participants").value;
    let msg = document.getElementById("successMsg");

    if(date === "" || time === "" || participants === ""){
        alert("Please fill all fields!");
        return;
    }

    msg.innerHTML = `✅ Registered for ${date} at ${time} (Max ${participants} participants)`;
    msg.style.display = "block";
}

function showInfo(type){
    let info = {
        about: "Trees provide oxygen, improve air quality and support wildlife.",
        importance: "Trees reduce pollution, control climate and protect nature.",
        plant: "Steps: Dig hole → Place sapling → Cover soil → Water regularly."
    };

    document.getElementById("treeInfo").innerHTML = info[type];
}
function showWhy(type){
    let text = {
        air: "🌿 Clean Air: Trees absorb harmful gases and release oxygen, making our environment healthier and breathable.",
        
        nature: "🌳 Save Nature: Trees support biodiversity and protect ecosystems from destruction and imbalance.",
        
        future: "🌍 Better Future: Planting trees today ensures a sustainable and greener future for upcoming generations."
    };

    document.getElementById("whyText").innerHTML = text[type];
    document.getElementById("whyPopup").style.display = "flex";
}

function closeWhy(){
    document.getElementById("whyPopup").style.display = "none";
}
function suggestPlant(){
    let purpose = document.getElementById("purpose").value;
    let result = document.getElementById("result");

    let suggestion = "";

    if(purpose === "shade"){
        suggestion = "🌳 Banyan Tree – Provides dense shade and lives long.";
    }
    else if(purpose === "fruit"){
        suggestion = "🥭 Mango Tree – Gives fruit and grows well in India.";
    }
    else if(purpose === "oxygen"){
        suggestion = "🌿 Neem Tree – Produces high oxygen and medicinal benefits.";
    }
    else{
        suggestion = "⚠ Please select a purpose.";
    }

    result.innerHTML = suggestion;
}