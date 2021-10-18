const items  = [{
    item: 'switch',
    purchasePrice: 399},
    {
    item: 'nike',
    purchasePrice: 150
    }]
  
  const addPurchases = (arr) => {
    let totalPur= arr.reduce((acc,value,index)=>{
        acc+=value.purchasePrice;
    },0);
    console.log(totalPur);
  };
  