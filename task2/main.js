
//1
const checkValues = (obj, value) => {
    return  Object.values(obj).includes(value);
  };

  //2
  const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
    return Object.keys(obj);
  };

  //3
  const coresponding={
      GraceHopper: '222-303-5938',
      AdaLovelace: '222-349-9842',
      AlanTuring: '222-853-5933'
    }
    
  const updateNumbers = (obj) => {
    let print=[];
    
    for(const x in obj)
    {
      //let str=(x+':'+obj[x]);
      print.push(x+':'+obj[x])
    }
    return print;
  }; 

  //4
  const PassedOrFailed = function (studentGrades) {
    for(let x in studentGrades)
    {
      
        if(studentGrades[x].grade<studentGrades[x].total/2)
        {return 'The student have failed'; }
    }
    return 'The student have passed';
  };
  
  const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
  };
  
  const studentTwo = {
    math: { grade: 59, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
  };

  //5
  const  totalCharacters= (arr) => {
    let totalLen=0;
     for(let x of arr)
     {
       totalLen+= (x.length);
     }
     return totalLen;
  };

  //6
  const houseSize = (arr) =>  {
    let arrobj=[];
   for(let i=0 ;i<arr.length;i+=2)
   {
     let obj={house:arr[i] , member:arr[i+1]};
     arrobj.push(obj);
   }
    return arrobj;
  };

  //7
  const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
  };
  
  const createDog = function (name , dogBreed, furColor) {
    for(let x in uniqueDogs)
    {
      if(x==name) return `The dog isn't unique enough`;
    }
     uniqueDogs[name] = {breed:dogBreed , color:furColor};
     console.log(uniqueDogs);
     return `Added the dog successfully`;
  };
 
