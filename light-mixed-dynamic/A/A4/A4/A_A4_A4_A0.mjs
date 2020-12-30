export async function f_A_A4_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A0_A0.mjs').then(m => m.f_A_A4_A4_A0_A0()),
    import('./A0/A_A4_A4_A0_B1.mjs').then(m => m.f_A_A4_A4_A0_B1()),
    import('./A0/A_A4_A4_A0_C2.mjs').then(m => m.f_A_A4_A4_A0_C2()),
    import('./A0/A_A4_A4_A0_D3.mjs').then(m => m.f_A_A4_A4_A0_D3()),
    import('./A0/A_A4_A4_A0_A4.mjs').then(m => m.f_A_A4_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6112747266;a-=6112747266;
a+=3221129175;a-=3221129175;
a+=3696006822;a-=3696006822;
a+=4545331622;a-=4545331622;
a+=9936562385;a-=9936562385;
a+=5222316854;a-=5222316854;
a+=4921322042;a-=4921322042;
a+=2179211641;a-=2179211641;
a+=1804776066;a-=1804776066;
a+=6910172819;a-=6910172819;
a+=1533876130;a-=1533876130;
;
  return a+100;
}
