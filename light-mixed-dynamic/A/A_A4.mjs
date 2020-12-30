export async function f_A_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0.mjs').then(m => m.f_A_A4_A0()),
    import('./A4/A_A4_B1.mjs').then(m => m.f_A_A4_B1()),
    import('./A4/A_A4_C2.mjs').then(m => m.f_A_A4_C2()),
    import('./A4/A_A4_D3.mjs').then(m => m.f_A_A4_D3()),
    import('./A4/A_A4_A4.mjs').then(m => m.f_A_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=3888428113;a-=3888428113;
a+=8369765685;a-=8369765685;
a+=7387663906;a-=7387663906;
a+=5270392898;a-=5270392898;
a+=5015665315;a-=5015665315;
a+=5722882846;a-=5722882846;
a+=9556603051;a-=9556603051;
a+=6141595750;a-=6141595750;
a+=7398260291;a-=7398260291;
a+=7455901912;a-=7455901912;
a+=4120873355;a-=4120873355;
a+=3021187504;a-=3021187504;
a+=4343573045;a-=4343573045;
a+=2928354097;a-=2928354097;
a+=1528399779;a-=1528399779;
a+=3141330500;a-=3141330500;
;
  return a+100;
}
