function validatePhoneNumber(str){
    const hypens = ['\-/g']
    if(str.length !== 10) {
        return false;
    }
    if(str.includes(hypens)){
        return false;
    }
    if(str.includes(' ')){
        return true;
    }
}