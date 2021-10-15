---
date: 2018-10-15 10:52:34
updated: 2018-10-15 10:52:34
---

```c++
const double eps=1e-8;
struct MCMF{
    static const int maxn=200,maxm=40000;
    struct star{int v,nex;double c,w;} edge[maxm<<1];
    int head[maxn],cnt,n;
    int inq[maxn],pre[maxn];
    double dist[maxn];

    void ini(int n){
        cnt=-1;this->n=n;
        for(int i=0;i<=n;i++) head[i]=-1;
    }
    void add_star(int u, int v, double c, double w){
        //cout<<"     "<<u<<" "<<v<<" "<<c<<" "<<w<<endl;
        edge[++cnt]=star{v,head[u],c, w}; head[u]=cnt;
        edge[++cnt]=star{u,head[v],0,-w}; head[v]=cnt;
    }
    void minCostMaxFlow(int s, int t,double&flow,double&cost){
        flow=cost=0;
        while(true){
            for(int i=0;i<=n;i++) dist[i]=1e9;
            queue<int>que; que.push(s);
            inq[s]=1; dist[s]=0;

            while(!que.empty()){
                int u=que.front();
                que.pop(); inq[u]=0;
                for(int i=head[u];~i;i=edge[i].nex){
                    int v=edge[i].v;
                    double c=edge[i].c,w=edge[i].w;
                    if(c>eps&&dist[v]>dist[u]+w+eps){
                    // if(c>0&&dist[v]>dist[u]+w){
                        dist[v]=dist[u]+w;
                        pre[v]=i;
                        if(!inq[v]) que.push(v);
                        inq[v]=1;
                    }
                }
            }
            if(dist[t]==1e9) return ;
            double addf=1e9;
            for(int x=t;x!=s;x=edge[pre[x]^1].v) addf=min(addf,edge[pre[x]].c);
            for(int x=t;x!=s;x=edge[pre[x]^1].v){
                edge[pre[x]].c-=addf;
                edge[pre[x]^1].c+=addf;
            }
            flow+=addf;
            cost+=dist[t]*addf;
        }
    }
} g;
```
