export async function f_A_A4_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A0_A0.mjs').then(m => m.f_A_A4_A0_A0_A0()),
    import('./A0/A_A4_A0_A0_B1.mjs').then(m => m.f_A_A4_A0_A0_B1()),
    import('./A0/A_A4_A0_A0_C2.mjs').then(m => m.f_A_A4_A0_A0_C2()),
    import('./A0/A_A4_A0_A0_D3.mjs').then(m => m.f_A_A4_A0_A0_D3()),
    import('./A0/A_A4_A0_A0_A4.mjs').then(m => m.f_A_A4_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=1263145844;a-=1263145844;
a+=3630974002;a-=3630974002;
a+=2851976098;a-=2851976098;
a+=6997077088;a-=6997077088;
a+=2382203053;a-=2382203053;
a+=8107509167;a-=8107509167;
a+=9519757306;a-=9519757306;
a+=4524901123;a-=4524901123;
a+=4363017666;a-=4363017666;
a+=2761410450;a-=2761410450;
a+=9175099249;a-=9175099249;
;
  return a+100;
}
