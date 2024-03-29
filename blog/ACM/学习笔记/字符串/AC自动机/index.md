---
date: 2018-11-06 15:14:26
updated: 2018-11-06 15:14:26
---

# AC自动机
所谓AC自动机，其实是kmp算法与字典树的结合,不懂这两个，是无法学会的。
# 自动机
自动机，是一个五元组，包括了状态的非空有穷集合，符号的有限集合，状态转移函 数， 开始状态，终止状态集合，而在字典树上，增加了两个新的东西，一个标记了终止状态集合，另一个辅助了状态转移函数。 我们利用字典树上 的节点来表示状态，而边则用来表示状态转移函数的一部分。

<!-- more -->

# 匹配
当AC自动机建立好了以后，我们就可以在AC自动机上进行匹配了，我们在自动机上一 个一个 节点忘下跑，一直到失配，即到达AC自动机上某个节点后，此节点所代表的字符串，与母串的当前前缀子串相差刚好只为最后一个字母，这 时候，我们跳跃到fail指针即可进行后面的继续匹配。
# file指针
fail指针当然跳得越深越好，这时候fail所代表的意义到底是什么呢？很明显，此时 要求与母串有 尽可能长得公共前缀，也就是说与失配发生的时候AC自动机所在节点（所表示的状态）表示的字符串的尽可能长的后缀相同的新节点 ， 这里我们明显可以采取树形dp来得到。
# 内存开销
我们用fail[u]表示节点u的失配指针，用`nex[u][i]`表示节点u的指向 字符i的节点， 于是我们发现 了转移式子： `fail[nex[u][i]]= nex[fail[u]][i]`;如果fail[u]有儿子i的话，但如果没有呢？我们又要不断往上面跳跃对吧。 复杂度不是特别高，能忍受，当然这是在u有节点i的情况下。如果没有节点呢？sorry，这个问题有点复杂，一般的AC自动机不关心这种事情。因为那 会增加很多额外的开销，我们不愿意去给他们建立新节点来储存fail指针的。
# 字典图
有一种AC自动机，他索性把字典树建成了字典图，如果nex指针指向空节点，他 一定会导致失配，他的nex指针就直接指向了应该是fail指针的地方，很漂亮的做法，但是我们失去了很多，比方说，树没有了，AC自动机不能再加入新 的模式串了。这让我们很难受，抉择产生了，要么选择字典树+好几倍的新空间开销，要么选择字典图。
# 更好的解决方案
笔者对此思考了很久，很久，考虑到我们要么用-1要么用0来表示nex指针指向的 是空节点，也就是说，负数没有被使用到，我们可以这样做，如果一条边在字典树上，我们正常储存，如果他不在字典树，而是在字典图上，那我们存储 他所指向的节点的相反数，一者表示此指针指向空节点，再者表示此指针指向的节点的fail指针，这样的做法集合了上诉两种做法的优点于一身。下面是我的代码。

```cpp
struct Aho_Corasick_automation{
    static const int maxn=1e6+5;
    int trans[maxn][26],fail[maxn],end[maxn];
    int root,cnt;

    inline int new_node(){
        //fail指针不需要初始化,因为在bfs的时候他被更新
        for(int i=0;i<26;i++)trans[cnt][i]=0;
        end[cnt]=0;
        return cnt++;
    }

    void ini(){
        cnt=0;
        root=new_node();
    }

    void extend(char*buf){
        int len=(int)strlen(buf+1);
        int u=root;
        for(int i=1;i<=len;i++){
            if(trans[u][buf[i]-'a']==0)
                trans[u][buf[i]-'a']=new_node();
            u=trans[u][buf[i]-'a'];
        }
        end[u]++;
    }

    void get_fail(){
        queue<int>q;
        q.push(root);
        while(!q.empty()){
            int u=q.front();q.pop();
            for(int i=0;i<26;i++){
                if(trans[u][i]==0){
                    trans[u][i]=-abs(trans[fail[u]][i]);//采用负数来表示非树边。。
                }
                else{
                    q.push(trans[u][i]);
                    fail[trans[u][i]]=abs(trans[fail[u]][i]);
                    if(u==root)fail[trans[u][i]]=root;
                }
            }
        }
    }

    int query(char*buf){//统计母串里面出现了几种子串
        int len=(int)strlen(buf+1);
        int u=root ,ret=0;
        for(int i=1;i<=len;i++){
            u=abs(trans[u][buf[i]-'a']);
            for(int p=u;p!=root;p=fail[p]){
                if(end[p]==-1)break;
                ret+=end[p];
                end[p]=-1;//为什么要搞-1呢？可以用来剪枝，预防这样的特殊数据-> aaaaaaaaaaa......
            }
        }
        return ret;
    }

    void debug(){
        for(int i=0;i<35;i++)printf(" ");
        for(int j=0;j<26;j++){
            printf("%2c",j+'a');
        }
        puts("");
        for(int i=0;i<cnt;i++){
            printf("id=%3d | fail=%3d | end=%3d | chi=[",i,fail[i],end[i]);
            for(int j=0;j<26;j++){
                printf("%2d",trans[i][j]);
            }
            printf("]\n");
        }
    }
};
```