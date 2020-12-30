export async function f_A_A4_A4_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A0_A0_A0_A0.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_A0()),
    import('./A0/A_A4_A4_A0_A0_A0_B1.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_B1()),
    import('./A0/A_A4_A4_A0_A0_A0_C2.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_C2()),
    import('./A0/A_A4_A4_A0_A0_A0_D3.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_D3()),
    import('./A0/A_A4_A4_A0_A0_A0_A4.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6392833337;a-=6392833337;
a+=4855872088;a-=4855872088;
a+=2956940197;a-=2956940197;
a+=5409034764;a-=5409034764;
a+=1981569118;a-=1981569118;
a+=7516848236;a-=7516848236;
a+=5595454423;a-=5595454423;
;
  return a+100;
}
