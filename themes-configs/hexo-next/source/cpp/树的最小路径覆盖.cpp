//用最少条数的路径覆盖树
void dfs(int u,int father){
    int sum=0;
    for(int i=head[u];~i;i=edge[i].nex){
        if(edge[i].v==father) continue;
        dfs(edge[i].v,u);
        sum+=dp[edge[i].v][0];
    }
    dp[u][0]=sum+1;//子树路径覆盖的答案
    dp[u][1]=sum+1;
    vector<int>update;
    for(int i=head[u];~i;i=edge[i].nex){
        if(edge[i].v==father) continue;
        update.push_back(-dp[edge[i].v][0]+dp[edge[i].v][1]-1);
    }
    sort(update.begin(),update.end());
    if(update.size()>=1) {
        if(update[0]<0) dp[u][0]+=update[0];
        if(update[0]<0) dp[u][1]+=update[0];
    }
    if(update.size()>=2){
        if(update[1]<0) dp[u][0]+=update[1];
    }
}// dp[root][0] is min path cover the tree