export async function f_A_A4_A4_A4_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A4_A0_A4_A4_A0.mjs').then(m => m.f_A_A4_A4_A4_A0_A4_A4_A0()),
    import('./A4/A_A4_A4_A4_A0_A4_A4_B1.mjs').then(m => m.f_A_A4_A4_A4_A0_A4_A4_B1()),
    import('./A4/A_A4_A4_A4_A0_A4_A4_C2.mjs').then(m => m.f_A_A4_A4_A4_A0_A4_A4_C2()),
    import('./A4/A_A4_A4_A4_A0_A4_A4_D3.mjs').then(m => m.f_A_A4_A4_A4_A0_A4_A4_D3()),
    import('./A4/A_A4_A4_A4_A0_A4_A4_A4.mjs').then(m => m.f_A_A4_A4_A4_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=1028322270;a-=1028322270;
a+=9120512531;a-=9120512531;
a+=3702593023;a-=3702593023;
a+=4619043037;a-=4619043037;
a+=8351492243;a-=8351492243;
;
  return a+100;
}
