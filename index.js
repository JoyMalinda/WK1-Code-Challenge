function studentGradeGenerator(input) {
    if(input > 79) {
        return A
    } else if (input >= 60 && input <= 79) {
        return B
    } else if (input > 49 && input <= 59) {
        return C
    } else if (input >= 40 && input <= 49) {
        return D
    } else (input < 40);{
        return E
    }}
studentGradeGenerator();

function speedDetector (input) {
    let demeritPoints = (input - 70)/2;
    if(input < 70) {
        return "Ok"
    } else if(input > 70 && demeritPoints <= 12){
        return `Points:${demeritPoints}`
    } else(demeritPoints > 12);{
        return "License suspended"
    }}
speedDetector();

