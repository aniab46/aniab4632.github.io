        

const dg=6;
const hr=document.querySelector("#hr");
const mn=document.querySelector('#mn');
const sc=document.querySelector('#sc');
     
setInterval(()=>{

        let day=new Date();
        let hh=day.getHours()*30;
        let mm=day.getMinutes()*dg;
        let ss=day.getSeconds()*dg;
        let a= (100)*"deg";

        hr.style.transform="rotate(" + (hh + (mm/12)) + "deg)";
        mn.style.transform="rotate(" + (mm + 360) + "deg)";
        sc.style.transform="rotate(" + (ss + 360) + "deg)";


})

const constantDeg=6;
const ghonta=document.querySelector('.ghonta');
const minit=document.querySelector('.minit');
const sekend=document.querySelector('.sekend');

setInterval(setTiming,1000);

function setTiming(){
        
        let day=new Date();
        let gg=day.getHours()*30;
        let mmmn=day.getMinutes()*constantDeg;
        let sk=day.getSeconds()*constantDeg;

        ghonta.style.transform="rotate(" + (gg + (mmmn/12)) + "deg)";
        minit.style.transform="rotate(" + (mmmn) + "deg)";
        sekend.style.transform="rotate(" + (sk) + "deg)";

        
}
setTiming();
