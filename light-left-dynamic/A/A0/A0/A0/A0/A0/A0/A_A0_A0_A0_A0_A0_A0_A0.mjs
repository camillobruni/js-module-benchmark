export async function f_A_A0_A0_A0_A0_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_A0_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_A0_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_A0_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A0_D3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=8407550533;a-=8407550533;
a+=2635512568;a-=2635512568;
a+=1322153467;a-=1322153467;
a+=7034958781;a-=7034958781;
a+=1247512795;a-=1247512795;
a+=8748177048;a-=8748177048;
a+=9843861922;a-=9843861922;
a+=2623554454;a-=2623554454;
a+=2179348672;a-=2179348672;
a+=3717248540;a-=3717248540;
;
  return a+100;
}
