const getValueInput = () =>{

    let weightContainer = document.getElementById('weight').value; 
    let sexContainer = document.getElementById('sex').value;
    let activityContainer = document.getElementById('activity').value;

    if(activityContainer==="easy"){
        let act = (weightContainer*100)/4.4;
        let calori;
        if(sexContainer==="male")
            calori=weightContainer*1.3*24;
        else
            calori=weightContainer*1.2*24;
        document.getElementById("calories-cal").innerHTML = `${calori} cal`; 
        document.getElementById("water-cal").innerHTML = `${act.toFixed(0)} mL`; 
    }

    if(activityContainer==="easy"){
        let act = (weightContainer*100)/3;
        let calori;
        if(sexContainer==="male")
            calori=weightContainer*1.3*24;
        else
            calori=weightContainer*1.2*24;
        document.getElementById("calories-cal").innerHTML = `${calori} cal`; 
        document.getElementById("water-cal").innerHTML = `${act.toFixed(0)} mL`; 
    }

    else if(activityContainer==="meduim"){
        let act = (weightContainer*100)/2.8;
        let calori;
        if(sexContainer==="male")
            calori=weightContainer*1.4*24;
        else
            calori=weightContainer*1.3*24;
        document.getElementById("calories-cal").innerHTML = `${calori} cal`; 
        document.getElementById("water-cal").innerHTML = `${act.toFixed(0)} mL`; 
    }

    else if(activityContainer==="hard"){
        let act = (weightContainer*100)/2.6;
        let calori;
        if(sexContainer==="male")
            calori=weightContainer*1.5*24;
        else
            calori=weightContainer*1.4*24;
        document.getElementById("calories-cal").innerHTML = `${calori} cal`; 
        document.getElementById("water-cal").innerHTML = `${act.toFixed(0)} mL`; 
    }

    else{
        let act = (weightContainer*100)/2.4;
        let calori;
        if(sexContainer==="male")
            calori=weightContainer*1.55*24;
        else
            calori=weightContainer*1.45*24;
        document.getElementById("calories-cal").innerHTML = `${calori} cal`; 
        document.getElementById("water-cal").innerHTML = `${act.toFixed(0)} mL`; 
    }

    if(weightContainer != 0 ){
        let x=document.getElementById("resulta");
        x.style.display = "block";
    }
    else{
        let x=document.getElementById("resulta");
        x.style.display = "none";
        alert("please fill out the form!");
    }
    
  }