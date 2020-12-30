export async function f_A_A4_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A4_A0_A0.mjs').then(m => m.f_A_A4_A0_A4_A0_A0()),
    import('./A0/A_A4_A0_A4_A0_B1.mjs').then(m => m.f_A_A4_A0_A4_A0_B1()),
    import('./A0/A_A4_A0_A4_A0_C2.mjs').then(m => m.f_A_A4_A0_A4_A0_C2()),
    import('./A0/A_A4_A0_A4_A0_D3.mjs').then(m => m.f_A_A4_A0_A4_A0_D3()),
    import('./A0/A_A4_A0_A4_A0_A4.mjs').then(m => m.f_A_A4_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4104865797;a-=4104865797;
a+=9852887109;a-=9852887109;
a+=2999946351;a-=2999946351;
a+=2686101392;a-=2686101392;
a+=1119204785;a-=1119204785;
a+=6289761017;a-=6289761017;
a+=9672662948;a-=9672662948;
a+=2705581967;a-=2705581967;
a+=9631248720;a-=9631248720;
;
  return a+100;
}
