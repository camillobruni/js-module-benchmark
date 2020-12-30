export async function f_A_A4_A4_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A0_A4_A4_A0.mjs').then(m => m.f_A_A4_A4_A0_A4_A4_A0()),
    import('./A4/A_A4_A4_A0_A4_A4_B1.mjs').then(m => m.f_A_A4_A4_A0_A4_A4_B1()),
    import('./A4/A_A4_A4_A0_A4_A4_C2.mjs').then(m => m.f_A_A4_A4_A0_A4_A4_C2()),
    import('./A4/A_A4_A4_A0_A4_A4_D3.mjs').then(m => m.f_A_A4_A4_A0_A4_A4_D3()),
    import('./A4/A_A4_A4_A0_A4_A4_A4.mjs').then(m => m.f_A_A4_A4_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2989259720;a-=2989259720;
a+=6034089828;a-=6034089828;
a+=1204510871;a-=1204510871;
a+=3313870152;a-=3313870152;
a+=2841968537;a-=2841968537;
a+=2711038377;a-=2711038377;
a+=7748278609;a-=7748278609;
;
  return a+100;
}
