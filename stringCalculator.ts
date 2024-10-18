
class StringCalculator {
    add(numbers: string) {
        if(numbers == ""){
            return 0;
        }

        let splitNumbers = numbers.split(/\n|,/); 
        let totalSum = 0;
        for(const num of splitNumbers){
            totalSum+= Number(num);
        }
        return totalSum;
    }
}

export default StringCalculator;