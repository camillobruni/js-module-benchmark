export async function f_A_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A0.mjs').then(m => m.f_A_A4_A4_A0()),
    import('./A4/A_A4_A4_B1.mjs').then(m => m.f_A_A4_A4_B1()),
    import('./A4/A_A4_A4_C2.mjs').then(m => m.f_A_A4_A4_C2()),
    import('./A4/A_A4_A4_D3.mjs').then(m => m.f_A_A4_A4_D3()),
    import('./A4/A_A4_A4_A4.mjs').then(m => m.f_A_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6611086464;a-=6611086464;
a+=9518618378;a-=9518618378;
a+=3334096377;a-=3334096377;
a+=1996977879;a-=1996977879;
a+=6383380107;a-=6383380107;
a+=3089096925;a-=3089096925;
a+=2000664594;a-=2000664594;
a+=6799093341;a-=6799093341;
a+=3825724549;a-=3825724549;
a+=5319227388;a-=5319227388;
a+=8731238457;a-=8731238457;
a+=4691539463;a-=4691539463;
a+=7554078796;a-=7554078796;
a+=3941775549;a-=3941775549;
;
  return a+100;
}
