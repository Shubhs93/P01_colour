const btn8=document.getElementById('btn8')
const btn9=document.getElementById('btn9')
const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')
const btn3=document.getElementById('btn3')
const btn4=document.getElementById('btn4')
const btn5=document.getElementById('btn5')
const btn6=document.getElementById('btn6')
const btn7=document.getElementById('btn7')
var arr=[1,4,7,8,9,6,3,2]

btn5.addEventListener('click',function(){
  let brr=[]
  
    for(var i=0;i<=arr.length-1;i++){
      if(i==7){
        brr[i]=arr[0]
      }else{
        brr[i]=arr[i+1]
      }
      

    }
    
  
    btn1.innerText=brr[0]
    btn2.innerText=brr[7]
    btn3.innerText=brr[6]
    btn4.innerText=brr[1]
    
    btn6.innerText=brr[5]
    btn7.innerText=brr[2]
    btn8.innerText=brr[3]
    btn9.innerText=brr[4]
    console.log(brr)

    arr=brr
})



