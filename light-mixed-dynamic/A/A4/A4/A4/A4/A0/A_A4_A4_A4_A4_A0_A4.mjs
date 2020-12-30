export async function f_A_A4_A4_A4_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A4_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A4_A4_A4_A0_A4_A0()),
    import('./A4/A_A4_A4_A4_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A4_A4_A4_A0_A4_B1()),
    import('./A4/A_A4_A4_A4_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A4_A4_A4_A0_A4_C2()),
    import('./A4/A_A4_A4_A4_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A4_A4_A4_A0_A4_D3()),
    import('./A4/A_A4_A4_A4_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A4_A4_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2107399006;a-=2107399006;
a+=5767704001;a-=5767704001;
a+=1905693528;a-=1905693528;
a+=9703935925;a-=9703935925;
a+=8165166909;a-=8165166909;
;
  return a+100;
}
