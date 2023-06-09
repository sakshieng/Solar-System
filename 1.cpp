
#include <bits/stdc++.h>
using namespace std;
int main()
{
long long t; 
cin>>t;
while(t--)
    {
        int a;
        cin>>a;
        int arr[a];
        for(int i=0;i<a;++i){
            cin >> arr[i];
        }
        int cnt = 0;
        for(int i=0;i<a;++i){
            for(int j=0;j<a;++j){
                if((arr[i]+arr[j]) % 2 == 0) cnt++; 
            }
        }
    cout<<cnt<<endl;
    }
    return 0;
}