
class StringCalculator {
    add(numbers: string) {
        if(numbers == ""){
            return 0;
        }

        var splitNumbers = numbers.split(","); 
        let totalSum = 0;
        
        for(const num of splitNumbers){
            const numArr = num.split('\n');
            for(const n of numArr){
                totalSum+= Number(n);
            }
        }
        return totalSum;
    }
}

export default StringCalculator;