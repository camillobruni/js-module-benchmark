export async function f_A_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A0()),
    import('./A4/A_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_B1()),
    import('./A4/A_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_C2()),
    import('./A4/A_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_D3()),
    import('./A4/A_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7639603802;a-=7639603802;
a+=5289697056;a-=5289697056;
a+=6667018133;a-=6667018133;
a+=3916972355;a-=3916972355;
a+=4465842572;a-=4465842572;
a+=6262860756;a-=6262860756;
a+=5599189947;a-=5599189947;
a+=6857913352;a-=6857913352;
a+=5216749458;a-=5216749458;
a+=3697049066;a-=3697049066;
a+=8138831356;a-=8138831356;
;
  return a+100;
}
