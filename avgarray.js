let grades = [34, 56, 78, 4, 23, 12, 14, 44];
       
    let total = 0;
   
     let avg;
     let count = 0;
     for (i=0; i<grades.length; i++){
         total += grades[i];
         count++;

     }
     avg = total/count;


    
// for(i=0; i<grades.length; i++){
     
 //    total += grades[i];
 //}
  //  avg = total/(grades.length);


 
 console.log(avg);