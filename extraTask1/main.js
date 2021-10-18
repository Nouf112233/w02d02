const items  = [{
    item: 'switch',
    purchasePrice: 399},
    {
    item: 'nike',
    purchasePrice: 150
    }]
  
  const addPurchases = (arr) => {
    let totalPur= arr.reduce((acc,value,index)=>{
        return acc+=value.purchasePrice;
    },0);
    console.log(totalPur);
  };

  const sortNumbers = (arr) => {
    arr.sort(function(a, b){return a-b});
    console.log(arr);
   
  };

  const sortBackwards = (arr) => {
    arr.sort(function(a, b){return b-a});
    console.log(arr);
   
  };
  