export async function f_A_A4_A0_A4_A4_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A4_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_A0_A4_A0()),
    import('./A4/A_A4_A0_A4_A4_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_A0_A4_B1()),
    import('./A4/A_A4_A0_A4_A4_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_A0_A4_C2()),
    import('./A4/A_A4_A0_A4_A4_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_A0_A4_D3()),
    import('./A4/A_A4_A0_A4_A4_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5937837936;a-=5937837936;
a+=6956614487;a-=6956614487;
a+=8191061366;a-=8191061366;
;
  return a+100;
}