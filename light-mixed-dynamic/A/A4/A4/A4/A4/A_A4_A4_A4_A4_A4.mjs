export async function f_A_A4_A4_A4_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A4_A4_A4_A0.mjs').then(m => m.f_A_A4_A4_A4_A4_A4_A0()),
    import('./A4/A_A4_A4_A4_A4_A4_B1.mjs').then(m => m.f_A_A4_A4_A4_A4_A4_B1()),
    import('./A4/A_A4_A4_A4_A4_A4_C2.mjs').then(m => m.f_A_A4_A4_A4_A4_A4_C2()),
    import('./A4/A_A4_A4_A4_A4_A4_D3.mjs').then(m => m.f_A_A4_A4_A4_A4_A4_D3()),
    import('./A4/A_A4_A4_A4_A4_A4_A4.mjs').then(m => m.f_A_A4_A4_A4_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6439947192;a-=6439947192;
a+=3696568842;a-=3696568842;
a+=2583218333;a-=2583218333;
a+=7286411980;a-=7286411980;
a+=4517278201;a-=4517278201;
a+=1853392494;a-=1853392494;
a+=4511149572;a-=4511149572;
;
  return a+100;
}
