
    const addOne = (arr) => {
        let newArr=[];
        arr.forEach((number) => {
            number++;
            newArr.push(number);
            
        });
        console.log(newArr);
      };


      const addExclamation = (arr) => {
        let newArr=[];
        arr.forEach((string)=>{
            string=string+"!";
            newArr.push(string);

        });
        console.log(newArr);
      };

      const addOneByMap = (arr) => {
        let newArr=arr.map((number)=>{
            return ++number;

        });
        console.log(newArr);
      };

      const addQuestion = (arr) => {
        let newArr=arr.map((string)=>{
            return string+"?";

        });
        console.log(newArr);
      };

      const forLoopTwoToThe = (arr) => {
        let newArr=arr.map((int)=>{
            return Math.pow(2,int);

        });
        console.log(newArr);
      };


      const typeNum = (arr) => {
        let newArr=arr.filter((value)=>{
            return (typeof value=="number");

        });
        console.log(newArr);
      };

      const containsAnd = (arr) => {
        let newArr=arr.filter((string)=>{
            return (string.includes("and"));

        });
        console.log(newArr);
      };

      const oddValues = (arr) => {
        let newArr=arr.filter((number)=>{
            return (number%2);

        });
        console.log(newArr);
      };

      const addValues = (arr) => {
        let newArr=arr.reduce((acc,number,index)=>{
            return acc+number;

        });
        console.log(newArr);
      };

      const countNumberOfElements = (arr) => {
        let count=arr.reduce((acc,value,index)=>{
            return ++acc
        },0);
        console.log(count);

      };
      
      
      
        


