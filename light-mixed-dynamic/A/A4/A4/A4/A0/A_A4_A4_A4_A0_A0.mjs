export async function f_A_A4_A4_A4_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A4_A0_A0_A0.mjs').then(m => m.f_A_A4_A4_A4_A0_A0_A0()),
    import('./A0/A_A4_A4_A4_A0_A0_B1.mjs').then(m => m.f_A_A4_A4_A4_A0_A0_B1()),
    import('./A0/A_A4_A4_A4_A0_A0_C2.mjs').then(m => m.f_A_A4_A4_A4_A0_A0_C2()),
    import('./A0/A_A4_A4_A4_A0_A0_D3.mjs').then(m => m.f_A_A4_A4_A4_A0_A0_D3()),
    import('./A0/A_A4_A4_A4_A0_A0_A4.mjs').then(m => m.f_A_A4_A4_A4_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4721710142;a-=4721710142;
a+=4072648580;a-=4072648580;
a+=3414834563;a-=3414834563;
a+=1368087081;a-=1368087081;
a+=5208377781;a-=5208377781;
a+=1403176324;a-=1403176324;
a+=5264265884;a-=5264265884;
;
  return a+100;
}
