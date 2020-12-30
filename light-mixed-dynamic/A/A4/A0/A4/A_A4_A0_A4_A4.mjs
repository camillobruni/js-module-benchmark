export async function f_A_A4_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A4_A0()),
    import('./A4/A_A4_A0_A4_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_A4_B1()),
    import('./A4/A_A4_A0_A4_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_A4_C2()),
    import('./A4/A_A4_A0_A4_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_A4_D3()),
    import('./A4/A_A4_A0_A4_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9909061707;a-=9909061707;
a+=5820982797;a-=5820982797;
a+=2835798140;a-=2835798140;
a+=4553608678;a-=4553608678;
a+=2119397122;a-=2119397122;
a+=5308471636;a-=5308471636;
a+=1939120084;a-=1939120084;
a+=3335207861;a-=3335207861;
a+=6445047856;a-=6445047856;
;
  return a+100;
}
