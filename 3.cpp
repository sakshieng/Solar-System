//𝕊𝕒𝕜𝕤𝕙𝕚 ℂ𝕠𝕕𝕖𝕤 𝕙𝕖𝕣𝕖
int multiply(int a,int b){
int mod = 1e9 + 7;
long long res = a%mod;
res *= (b%mod);
res = res % mod;
return res;
}
long long binpow(long long a,long long b)
{
    long long ans = 1;
    while(b > 0)
    {
        if((b & 1) == 1) ans *= a;
        a *= a;
        b = b >> 1;
    }
    return ans;
}
long long gcd(long long  a,long long  b)
{
if(b == 0) return a;
return gcd(b, a%b);
}

long long lcm(long long a,long long b)
{
return (a / gcd(a,b)) * b;
}

//Euler Totient function
int[] phi = new int[n + 1];
for (int i = 1; i <= n; ++i) {
  phi[i] += i;
  for (int j = 2 * i; j <= n; j += i) {
    phi[j] -= phi[i];
  }
}

//Floyd-Warshall
for(int k = 0; k < n; k++)
  for(int i = 0; i < n; i++)
    for(int j = 0; j < n; j++)
      d[i][j] = min(d[i][j], d[i][k] + d[k][j]);

const int INF = 1e9;
const int MOD = 1e9 + 7;
#define Sakshi ios_base::sync_with_stdio(false);
#define sakshi cin.tie(NULL);
#include <bits/stdc++.h>
using namespace std;
int main()
{
long long t; 
cin>>t;
while(t--)
    {
        
    }
    return 0;
}