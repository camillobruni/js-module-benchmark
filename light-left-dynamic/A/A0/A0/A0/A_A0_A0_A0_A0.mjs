export async function f_A_A0_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_D3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6451791215;a-=6451791215;
a+=5854448705;a-=5854448705;
a+=4623034556;a-=4623034556;
a+=9692489114;a-=9692489114;
a+=3926669025;a-=3926669025;
a+=7385793007;a-=7385793007;
a+=6687100780;a-=6687100780;
a+=4625990498;a-=4625990498;
a+=2333846646;a-=2333846646;
a+=4781317539;a-=4781317539;
a+=9445537568;a-=9445537568;
a+=9319305806;a-=9319305806;
a+=3138373487;a-=3138373487;
a+=3398853353;a-=3398853353;
a+=7573079327;a-=7573079327;
;
  return a+100;
}
