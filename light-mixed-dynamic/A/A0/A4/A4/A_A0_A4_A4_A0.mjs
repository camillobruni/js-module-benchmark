export async function f_A_A0_A4_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A4_A4_A0_A0.mjs').then(m => m.f_A_A0_A4_A4_A0_A0()),
    import('./A0/A_A0_A4_A4_A0_B1.mjs').then(m => m.f_A_A0_A4_A4_A0_B1()),
    import('./A0/A_A0_A4_A4_A0_C2.mjs').then(m => m.f_A_A0_A4_A4_A0_C2()),
    import('./A0/A_A0_A4_A4_A0_D3.mjs').then(m => m.f_A_A0_A4_A4_A0_D3()),
    import('./A0/A_A0_A4_A4_A0_A4.mjs').then(m => m.f_A_A0_A4_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7274402289;a-=7274402289;
a+=7051574663;a-=7051574663;
a+=5244718415;a-=5244718415;
a+=8470857311;a-=8470857311;
a+=4339445129;a-=4339445129;
a+=1222937075;a-=1222937075;
a+=7676616888;a-=7676616888;
a+=1940585540;a-=1940585540;
a+=4324760416;a-=4324760416;
;
  return a+100;
}
