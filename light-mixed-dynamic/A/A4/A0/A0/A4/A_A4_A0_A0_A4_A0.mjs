export async function f_A_A4_A0_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A0_A4_A0_A0.mjs').then(m => m.f_A_A4_A0_A0_A4_A0_A0()),
    import('./A0/A_A4_A0_A0_A4_A0_B1.mjs').then(m => m.f_A_A4_A0_A0_A4_A0_B1()),
    import('./A0/A_A4_A0_A0_A4_A0_C2.mjs').then(m => m.f_A_A4_A0_A0_A4_A0_C2()),
    import('./A0/A_A4_A0_A0_A4_A0_D3.mjs').then(m => m.f_A_A4_A0_A0_A4_A0_D3()),
    import('./A0/A_A4_A0_A0_A4_A0_A4.mjs').then(m => m.f_A_A4_A0_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9725768601;a-=9725768601;
a+=4497551158;a-=4497551158;
a+=1756539759;a-=1756539759;
a+=6389265909;a-=6389265909;
a+=5014146345;a-=5014146345;
a+=3216444766;a-=3216444766;
a+=6111107927;a-=6111107927;
;
  return a+100;
}
