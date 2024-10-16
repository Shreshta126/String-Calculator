
class StringCalculator {
    add(numbers: string) {
        if(numbers == ""){
            return 0;
        }

        var splitNumbers = numbers.split(","); 
        let totalSum = 0;
        
        for(const num of splitNumbers){
            totalSum+= Number(num);
        }
        return totalSum;
    }
}

export default StringCalculator;