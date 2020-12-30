export async function f_A_A0_A0_A4_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A4_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_A0()),
    import('./A0/A_A0_A0_A4_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_B1()),
    import('./A0/A_A0_A0_A4_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_C2()),
    import('./A0/A_A0_A0_A4_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_D3()),
    import('./A0/A_A0_A0_A4_A0_A0_A4.mjs').then(m => m.f_A_A0_A0_A4_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4787712750;a-=4787712750;
a+=3247709414;a-=3247709414;
a+=6915935553;a-=6915935553;
a+=9285127140;a-=9285127140;
a+=3853908973;a-=3853908973;
a+=9791669011;a-=9791669011;
a+=4848409296;a-=4848409296;
;
  return a+100;
}
