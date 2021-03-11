#include<bits/stdc++.h>
using namespace std;

const int maxn=105;

bool edge[maxn][maxn]; int vertn; //

int dfs_ans,found,mcp[maxn],suf[maxn][maxn]; // dfs
void dfs(int d){ // begin with d =1 which means choose one point 
    if(suf[d][0]==0){
        if(dfs_ans<d) {
            dfs_ans=d;
            found=1;
        }
        return ;
    }

    for(int i=1;i<=suf[d][0]&&!found;++i) {
        if(d+suf[d][0]-i+1<=dfs_ans) break;// cut 
        if(d+mcp[suf[d][i]]<=dfs_ans) break;// cut 
        for(int j=i+1;j<=suf[d][0];++j){
            if(edge[suf[d][i]][suf[d][j]]) suf[d+1][++suf[d+1][0]]=suf[d][j];
        }
        dfs(d+1);
        suf[d+1][0]=0;
    }
}

int max_cluster(){
    mcp[vertn+1]=0;
    for(int i=vertn;i>=1;i--) {
        for(int j=i+1;j<=vertn;++j) if(edge[i][j]) suf[1][++suf[1][0]]=j;
        dfs(1);
        found=0;
        suf[1][0]=0;
        mcp[i]=dfs_ans;
    }
    return mcp[1];
}

bool check(int x){
    int s=sqrt(x)+0.5;
    return s*s==x;
}
int main(){
    vertn=100;
    for(int i=1;i<=vertn;++i){
        for(int j=1;j<=vertn;++j){
            if(check(i)||check(j)||check(i+j)) edge[i][j]=0;
            else edge[i][j]=1;
        }
    }
    cout<<max_cluster()<<endl;
}