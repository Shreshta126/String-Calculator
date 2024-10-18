
class StringCalculator {
    add(numbers: string) {
        if(numbers == ""){
            return 0;
        }
        let delimiterNumString = "";
        let delimiterRgx:any;
        if(numbers.substring(0,2)=="//")
        {
            const split = numbers.split('\n', 2);
            delimiterNumString = split[1];
            let delimiterArr = split[0].substring(2).split(/\[|\]/);
            delimiterArr = delimiterArr.filter(item => item !== "");
            delimiterRgx = new RegExp(delimiterArr.join('|'));
        }
        let splitNumbers:any; 

        if(delimiterRgx){
            splitNumbers = delimiterNumString.split(delimiterRgx);
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