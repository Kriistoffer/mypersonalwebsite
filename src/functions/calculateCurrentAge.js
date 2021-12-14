export const calculateCurrentAge = (input) => {
    let birthDate = input;
    let currentDate = new Date();

    let myAge = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    
    if (month < 0 || (month === 0 && currentDate < birthDate))
    {
        myAge--;
    }

    return myAge;
};