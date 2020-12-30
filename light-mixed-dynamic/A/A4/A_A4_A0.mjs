export async function f_A_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A0.mjs').then(m => m.f_A_A4_A0_A0()),
    import('./A0/A_A4_A0_B1.mjs').then(m => m.f_A_A4_A0_B1()),
    import('./A0/A_A4_A0_C2.mjs').then(m => m.f_A_A4_A0_C2()),
    import('./A0/A_A4_A0_D3.mjs').then(m => m.f_A_A4_A0_D3()),
    import('./A0/A_A4_A0_A4.mjs').then(m => m.f_A_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6341395481;a-=6341395481;
a+=6734754035;a-=6734754035;
a+=4167990619;a-=4167990619;
a+=9942647272;a-=9942647272;
a+=5608011720;a-=5608011720;
a+=7879368935;a-=7879368935;
a+=9470668777;a-=9470668777;
a+=9703604956;a-=9703604956;
a+=8485940135;a-=8485940135;
a+=7933792446;a-=7933792446;
a+=3823300612;a-=3823300612;
a+=7494811381;a-=7494811381;
a+=6587044625;a-=6587044625;
a+=1391658956;a-=1391658956;
;
  return a+100;
}
