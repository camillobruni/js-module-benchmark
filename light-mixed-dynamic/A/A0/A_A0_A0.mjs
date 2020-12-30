export async function f_A_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0()),
    import('./A0/A_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_B1()),
    import('./A0/A_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_C2()),
    import('./A0/A_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_D3()),
    import('./A0/A_A0_A0_A4.mjs').then(m => m.f_A_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6551909622;a-=6551909622;
a+=3405777596;a-=3405777596;
a+=4963450212;a-=4963450212;
a+=1866233639;a-=1866233639;
a+=6245121864;a-=6245121864;
a+=2714952823;a-=2714952823;
a+=1568917561;a-=1568917561;
a+=6255327532;a-=6255327532;
a+=1351433272;a-=1351433272;
a+=8492530038;a-=8492530038;
a+=6355537641;a-=6355537641;
a+=8225276722;a-=8225276722;
a+=2132414893;a-=2132414893;
a+=6313481395;a-=6313481395;
;
  return a+100;
}
