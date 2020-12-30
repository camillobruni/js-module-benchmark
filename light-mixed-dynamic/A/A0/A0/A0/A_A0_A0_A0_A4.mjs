export async function f_A_A0_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=3264845955;a-=3264845955;
a+=7336322271;a-=7336322271;
a+=8311392812;a-=8311392812;
a+=7649157990;a-=7649157990;
a+=2823308926;a-=2823308926;
a+=3959893602;a-=3959893602;
a+=6996699167;a-=6996699167;
a+=6135936421;a-=6135936421;
a+=4431044065;a-=4431044065;
;
  return a+100;
}
