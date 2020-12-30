export async function f_A_A0_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_D3()),
    import('./A0/A_A0_A0_A0_A0_A4.mjs').then(m => m.f_A_A0_A0_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4197142186;a-=4197142186;
a+=8155857755;a-=8155857755;
a+=3913653135;a-=3913653135;
a+=7292021138;a-=7292021138;
a+=6507459592;a-=6507459592;
a+=1744044638;a-=1744044638;
a+=1225192169;a-=1225192169;
a+=4721431727;a-=4721431727;
a+=8578216543;a-=8578216543;
;
  return a+100;
}
