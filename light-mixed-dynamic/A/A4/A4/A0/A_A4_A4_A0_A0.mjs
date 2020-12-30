export async function f_A_A4_A4_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A0_A0_A0.mjs').then(m => m.f_A_A4_A4_A0_A0_A0()),
    import('./A0/A_A4_A4_A0_A0_B1.mjs').then(m => m.f_A_A4_A4_A0_A0_B1()),
    import('./A0/A_A4_A4_A0_A0_C2.mjs').then(m => m.f_A_A4_A4_A0_A0_C2()),
    import('./A0/A_A4_A4_A0_A0_D3.mjs').then(m => m.f_A_A4_A4_A0_A0_D3()),
    import('./A0/A_A4_A4_A0_A0_A4.mjs').then(m => m.f_A_A4_A4_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5743612769;a-=5743612769;
a+=8171094127;a-=8171094127;
a+=1757438661;a-=1757438661;
a+=5818789342;a-=5818789342;
a+=6212683179;a-=6212683179;
a+=1756109898;a-=1756109898;
a+=9993613346;a-=9993613346;
a+=9183973469;a-=9183973469;
a+=7260224309;a-=7260224309;
;
  return a+100;
}
