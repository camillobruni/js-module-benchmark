export async function f_A_A0_A4_A4_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A4_A4_A0_A4_A0_A0.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_A0()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_B1.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_B1()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_C2.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_C2()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_D3.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_D3()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_A4.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=8025081720;a-=8025081720;
a+=3290030078;a-=3290030078;
a+=1385050406;a-=1385050406;
a+=8665001985;a-=8665001985;
a+=8756712307;a-=8756712307;
;
  return a+100;
}