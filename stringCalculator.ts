
class StringCalculator {
    add(numbers: string) {
        if(numbers == ""){
            return 0;
        }
        let numString = "";
        let delimiter:any;
        if(numbers.substring(0,2)=="//")
        {
            const split = numbers.split('\n', 2);
            numString = split[1];
            delimiter = new RegExp(split[0].substring(2));
        }
        let splitNumbers:any; 

        if(delimiter)
        {
            splitNumbers = numString.split(delimiter);
        }else{
            splitNumbers = numbers.split(/\n|,/); 
        }
        
        let totalSum = 0;
        for(const num of splitNumbers){
            totalSum+= Number(num);
        }
        return totalSum;
    }
}
export default StringCalculator;