//𝕊𝕒𝕜𝕤𝕙𝕚 ℂ𝕠𝕕𝕖𝕤 𝕙𝕖𝕣𝕖
const long long m = 1e9 + 7;
long long binpow(long long a, long long b, long long m) {
    a %= m;
    long long res = 1;
    while (b > 0) {
        if (b & 1)
            res = res * a % m;
        a = a * a % m;
        b >>= 1;
    }
   return res;
}

#include <bits/stdc++.h>
using namespace std;
int main()
{
long long t; 
cin>>t;
while(t--)
    {
        int mod = 1e9 + 7;
        int a;
        cin>>a;
        int arr[a];
        for(int i=0;i<a;++i){
            cin >> arr[i];
        }
        int cnt = 0;
        for(int i=0;i<a;++i){
            if(arr[i] % 2 == 0) cnt++;
        }
        int b = binpow(2,cnt,m) -1;
        int c =  binpow(2,cnt,m);
        if(cnt == a) cout<<b%mod<<endl;
        else cout<<c%mod<<endl;
    }
    return 0;
}

