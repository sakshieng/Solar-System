#include <bits/stdc++.h> 
using namespace std; 
#define ll long long 
 
 
const ll md=1000000007; 

bool palindrome( string& str){ 
    
    for(int i=0 ;i<str.size()/2 ;i++){
        
        if(str[i]!=str[str.size()-i-1])
        {
            return false;  
        }
           
    } 
    return true; 
} 

vector<ll>previous; 

void help(){ 
    ll n; 
    cin>>n; 
    unordered_map<ll,ll>map; 
    vector<ll>arr(n); 
    for(ll i=0;i<n;i++){ 
        cin>>arr[i]; 
        map[arr[i]]++;
    }
    ll r=0; 
    r+=n; 
    for(ll i=0;i<n;i++){
        
        for(ll j=0;j<previous.size();j++){ 
            
            ll m=arr[i]^previous[j]; 
            r+=map[m]; 
            
        } 
    } 
    
    cout<<r/2<<'\n'; 
} 

int main() { 
 
    int test; 
    cin>>test; 
    
    for(int i=0;i<(1<<15);i++){ 
        
        string str=to_string(i);
        
        if(palindrome(str)){ 
            previous.push_back(i); 
        } 
        
    } 
    
    for(int i=0;i<test;i++)
    help();
    return 0;
}