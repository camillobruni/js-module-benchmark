export async function f_A_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A4_A0.mjs').then(m => m.f_A_A0_A4_A0()),
    import('./A4/A_A0_A4_B1.mjs').then(m => m.f_A_A0_A4_B1()),
    import('./A4/A_A0_A4_C2.mjs').then(m => m.f_A_A0_A4_C2()),
    import('./A4/A_A0_A4_D3.mjs').then(m => m.f_A_A0_A4_D3()),
    import('./A4/A_A0_A4_A4.mjs').then(m => m.f_A_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2816629559;a-=2816629559;
a+=1462143976;a-=1462143976;
a+=5807312704;a-=5807312704;
a+=2596260977;a-=2596260977;
a+=4354693701;a-=4354693701;
a+=1679428475;a-=1679428475;
a+=1111764526;a-=1111764526;
a+=4562046227;a-=4562046227;
a+=2314987701;a-=2314987701;
a+=4782156087;a-=4782156087;
a+=5260949448;a-=5260949448;
a+=7997991208;a-=7997991208;
a+=8354778933;a-=8354778933;
a+=9603203320;a-=9603203320;
;
  return a+100;
}
