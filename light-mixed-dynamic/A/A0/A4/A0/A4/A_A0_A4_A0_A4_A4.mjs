export async function f_A_A0_A4_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A4_A0_A4_A4_A0.mjs').then(m => m.f_A_A0_A4_A0_A4_A4_A0()),
    import('./A4/A_A0_A4_A0_A4_A4_B1.mjs').then(m => m.f_A_A0_A4_A0_A4_A4_B1()),
    import('./A4/A_A0_A4_A0_A4_A4_C2.mjs').then(m => m.f_A_A0_A4_A0_A4_A4_C2()),
    import('./A4/A_A0_A4_A0_A4_A4_D3.mjs').then(m => m.f_A_A0_A4_A0_A4_A4_D3()),
    import('./A4/A_A0_A4_A0_A4_A4_A4.mjs').then(m => m.f_A_A0_A4_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=1264954063;a-=1264954063;
a+=4740532880;a-=4740532880;
a+=9483851566;a-=9483851566;
a+=2065235861;a-=2065235861;
a+=8594957019;a-=8594957019;
a+=1013057995;a-=1013057995;
a+=9510477597;a-=9510477597;
;
  return a+100;
}
