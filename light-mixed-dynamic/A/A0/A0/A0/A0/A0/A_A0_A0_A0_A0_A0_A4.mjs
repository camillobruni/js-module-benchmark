export async function f_A_A0_A0_A0_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A0_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A0_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A0_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A0_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A0_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6870539293;a-=6870539293;
a+=7130937780;a-=7130937780;
a+=9255920157;a-=9255920157;
a+=8244896602;a-=8244896602;
a+=9375441574;a-=9375441574;
;
  return a+100;
}
