export async function f_A_A4_A4_A0_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A0_A0_A4_A0_A0.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_A0()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_B1.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_B1()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_C2.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_C2()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_D3.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_D3()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_A4.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=3996108636;a-=3996108636;
a+=1366299013;a-=1366299013;
a+=5683242737;a-=5683242737;
a+=9936211966;a-=9936211966;
a+=6794598808;a-=6794598808;
;
  return a+100;
}
