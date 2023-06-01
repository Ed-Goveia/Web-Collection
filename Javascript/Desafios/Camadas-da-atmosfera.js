function solucao(altitude) {

    if (altitude <= 20) { return "Troposfera";} 
    else if (altitude <= 50) {return "Estratosfera";}
    else if (altitude <= 80) {return "Mesosfera";}
    else if (altitude <= 450) {return "Termosfera";} 
    else if (altitude <= 900) {return "Exosfera";}

}
