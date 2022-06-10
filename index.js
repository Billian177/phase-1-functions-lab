// Code your solution in this file!
const street=43;
let blocks, feet, distanceT, fare;
function distanceFromHqInBlocks(street){
    return blocks= Math.abs(street-42);
}

function distanceFromHqInFeet(street) {
    return feet= distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet(street, street1) {
    return distanceT= Math.abs(street-street1)*264;
}

function calculatesFarePrice(street, street1) {
    let distanceT= distanceTravelledInFeet(street, street1)

    if (distanceT <=400) {
        return fare= 0;
    } else if (distanceT>400 && distanceT<= 2000) {
        return fare= ((distanceT-400)*2)/100;
    } else if(distanceT> 2000 && distanceT<= 2500){
        return fare= 25;
    } else{
        return 'cannot travel that far'
    }
}
