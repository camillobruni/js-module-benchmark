export async function f_A_A0_A0_A4_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A4_A0_A4_A0_A0.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A0_A0()),
    import('./A0/A_A0_A0_A4_A0_A4_A0_B1.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A0_B1()),
    import('./A0/A_A0_A0_A4_A0_A4_A0_C2.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A0_C2()),
    import('./A0/A_A0_A0_A4_A0_A4_A0_D3.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A0_D3()),
    import('./A0/A_A0_A0_A4_A0_A4_A0_A4.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6028985496;a-=6028985496;
a+=4138920481;a-=4138920481;
a+=4064302018;a-=4064302018;
a+=4417301670;a-=4417301670;
a+=2294733911;a-=2294733911;
;
  return a+100;
}
