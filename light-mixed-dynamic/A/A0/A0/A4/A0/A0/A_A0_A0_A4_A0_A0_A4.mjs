export async function f_A_A0_A0_A4_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A4_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A4_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A4_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A4_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A4_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7510004974;a-=7510004974;
a+=3447033273;a-=3447033273;
a+=3017239115;a-=3017239115;
a+=2553010589;a-=2553010589;
a+=5253497496;a-=5253497496;
;
  return a+100;
}
