export async function f_A_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0()),
    import('./A0/A_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_B1()),
    import('./A0/A_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_C2()),
    import('./A0/A_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_D3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4693665162;a-=4693665162;
a+=2957524451;a-=2957524451;
a+=2239178346;a-=2239178346;
a+=7826157318;a-=7826157318;
a+=9620961261;a-=9620961261;
a+=6193155418;a-=6193155418;
a+=1982049156;a-=1982049156;
a+=5150244427;a-=5150244427;
a+=2755872508;a-=2755872508;
a+=1736354465;a-=1736354465;
a+=8599661243;a-=8599661243;
a+=4272241539;a-=4272241539;
a+=5073380765;a-=5073380765;
a+=1354875277;a-=1354875277;
a+=5432525165;a-=5432525165;
a+=9945764974;a-=9945764974;
a+=4626483299;a-=4626483299;
a+=5258993825;a-=5258993825;
;
  return a+100;
}
