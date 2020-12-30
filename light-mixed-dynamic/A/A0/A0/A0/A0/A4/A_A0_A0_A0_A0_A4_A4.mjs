export async function f_A_A0_A0_A0_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A0_A0_A4_A4_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_A4_A0()),
    import('./A4/A_A0_A0_A0_A0_A4_A4_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_A4_B1()),
    import('./A4/A_A0_A0_A0_A0_A4_A4_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_A4_C2()),
    import('./A4/A_A0_A0_A0_A0_A4_A4_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_A4_D3()),
    import('./A4/A_A0_A0_A0_A0_A4_A4_A4.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9226397069;a-=9226397069;
a+=3068020797;a-=3068020797;
a+=6105175114;a-=6105175114;
a+=2054570118;a-=2054570118;
a+=1795657079;a-=1795657079;
;
  return a+100;
}
