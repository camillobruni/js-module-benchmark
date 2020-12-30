export async function f_A_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6174180979;a-=6174180979;
a+=5088338968;a-=5088338968;
a+=6316595380;a-=6316595380;
a+=2130501068;a-=2130501068;
a+=2456459228;a-=2456459228;
a+=5382089784;a-=5382089784;
a+=6902475585;a-=6902475585;
a+=3521885346;a-=3521885346;
a+=5703660976;a-=5703660976;
a+=9044560092;a-=9044560092;
a+=5266423817;a-=5266423817;
;
  return a+100;
}
