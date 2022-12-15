
/*Bài tập 1 */
function timKQ(){
  const diemChuanEL=document.getElementById("diemchuan").value*1;
  const diemMonMot=document.getElementById("diemmonmot").value*1;
  const diemMonHai=document.getElementById("diemmonhai").value*1;
  const diemMonBa=document.getElementById("diemmonba").value*1;
  const doiTuong=document.getElementById("doi-tuong").value*1;
  const khuVuc=document.getElementById("khu-vuc").value*1;  


  var diemTong=diemMonMot+diemMonHai+diemMonBa+doiTuong+khuVuc;
  
  if(diemTong>=diemChuanEL &&diemMonMot>0&&diemMonHai>0&&diemMonBa>0)
  {
    document.getElementById("ketQua").innerHTML=`<h2 class="mt-5 text-danger text-center">Bạn đã đậu. Điểm tổng của bạn là: ${diemTong} </h2>`
  }
  else if(diemTong<diemChuanEL&&diemMonMot>0&&diemMonHai>0&&diemMonBa>0){
  document.getElementById("ketQua").innerHTML=`<h2 class="mt-5 text-danger text-center">Bạn đã rớt. Điểm tổng của bạn là: ${diemTong} </h2>`}
  else{
    document.getElementById("ketQua").innerHTML=`<h2 class="mt-5 text-danger text-center">Bạn đã rớt. Do có môn có điểm bằng 0 </h2>`

  }
}
/*Bài tập 2 */
function tinhTien(){
    var HotenEL=document.getElementById("hoten").value;
 
    var SoKWEL=document.getElementById("so-kw").value*1;

    
    var Tinhtientra=document.value*1;

    Tinhtientra=0;
    if(0<SoKWEL&& SoKWEL<=50){
        Tinhtientra=SoKWEL*500;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${HotenEL} , số tiền điện phải trả là ${Tinhtientra} VNĐ  </h2>`
    }

    else if(SoKWEL>50 && SoKWEL<=100){
        Tinhtientra=50*500+(SoKWEL-50)*650;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${HotenEL} , số tiền điện phải trả là ${Tinhtientra} VNĐ  </h2>`
    }
    else if( SoKWEL>100 && SoKWEL<=200){
        Tinhtientra=50*500+50*650+(SoKWEL-100)*850;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${HotenEL} , số tiền điện phải trả là ${Tinhtientra} VNĐ  </h2>`
    }
    else if( SoKWEL>200 && SoKWEL<=350){
        Tinhtientra=50*500+50*650+100*850+(SoKWEL-200)*1100;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${HotenEL} , số tiền điện phải trả là ${Tinhtientra} VNĐ  </h2>`
    }
    else{
        Tinhtientra=50*500+50*650+100*850+150*1100+(SoKWEL-350)*1300;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${HotenEL} , số tiền điện phải trả là ${Tinhtientra} VNĐ  </h2>`

    }
}







