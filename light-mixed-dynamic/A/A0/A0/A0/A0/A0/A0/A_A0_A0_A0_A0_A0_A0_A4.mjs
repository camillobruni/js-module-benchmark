export async function f_A_A0_A0_A0_A0_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A0_A0_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A0_A0_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A0_A0_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A0_A0_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A0_A0_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7149423080;a-=7149423080;
a+=2660150361;a-=2660150361;
a+=9017387352;a-=9017387352;
;
  return a+100;
}
