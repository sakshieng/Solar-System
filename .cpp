
const int INF = 1e9;
const int MOD = 1e9 + 7;
#define Sakshi ios_base::sync_with_stdio(false);
#define sakshi cin.tie(NULL);
#include <bits/stdc++.h>
using namespace std;
bool isPalindrome(int number) {
    std::string str = std::to_string(number);
    std::string reversedStr = str;
    std::reverse(reversedStr.begin(), reversedStr.end());

    return str == reversedStr;
}
int main()
{
long long t; 
cin>>t;
while(t--)
    {
        int a;cin>>a;
        int arr[a];
        for(int i=0;i<a;++i){
            cin>>arr[i];
            
        }  
        int cnt =0;
         for (int i = 0; i < a; i++) {
        for (int j = i + 1; j < a; j++) {
            int result = arr[i] ^ arr[j];
            // cout << arr[i] << " XOR " << arr[j] << " = " << result << endl;
            if(isPalindrome(result) ) cnt++;
        }
    }
    cout<<cnt<<endl;
    }
    return 0;
}