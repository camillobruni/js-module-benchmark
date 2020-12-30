export async function f_A_A4_A0_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_A0()),
    import('./A4/A_A4_A0_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_B1()),
    import('./A4/A_A4_A0_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_C2()),
    import('./A4/A_A4_A0_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_D3()),
    import('./A4/A_A4_A0_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=3734381209;a-=3734381209;
a+=2969642840;a-=2969642840;
a+=9631258268;a-=9631258268;
a+=1570655210;a-=1570655210;
a+=1217351703;a-=1217351703;
a+=1504337523;a-=1504337523;
a+=5771175487;a-=5771175487;
;
  return a+100;
}
