---
date: 2018-10-15 14:22:47
updated: 2018-10-15 14:22:47
---



```c++
// 最低位的1 ->                  x&-x
// 去掉最低位的1 ->               x&(x-1)
// 有效数字全是1 ->               (x&(x+1))==0
//把最低位的0 变成1->              x|(x+1)
//取出最低位的0并变成1             (~x)&(x+1)
//取出第k位（约定最低位为第0位）     x&(1<<k)


/* all
 
 bit cnt one            ->      cnt_one(x)              ->  int __builtin_popcount (unsigned int x);
 bit rev                ->      rev_dig(x)              ->
 high bit               ->      high_one(x)
 count leading zero     ->      cnt_leading_zero(x)     ->  int __builtin_clz (unsigned int x);
 count trailing zero    ->      cnt_trailing_zero(x)    ->  int __builtin_ctz (unsigned int x);
 get trailing one       ->      get_trailing_one(x)     ->  x&(x^(x+1))
 
 */
typedef unsigned int u32;
namespace bit{
    
    //count the digits of one in binary number
    u32 co[65536u];//bit cnt one
    void cnt_one_ini() {
        for (u32 i = 1; i < 65536u; i++)
            co[i] = co[i >> 1] + (1 & i);
    }
    u32 cnt_one(u32 x) {
        return co[x & 0xffffu] + co[x >> 16];
    }
    
    
    //reverse the digits in binary number
    u32 rd[65536u];//bit rev data
    void rev_digit_ini() {
        for (u32 i = 1; i < 65536u; i++)
            rd[i] = (rd[i >> 1] >> 1) | ((i & 1) << 15);
    }
    u32 rev_dig(u32 x) {
        return rd[x >> 16] | (rd[x & 0xffffu] << 16);
    }
    
    
    //get the highest digit one in binary number
    u32 ho[65536u];//high bit data
    void high_one_ini(){
        ho[1]=1;
        for(u32 i=2;i<65536u;i++){
            ho[i]=ho[i>>1]<<1;// only the one have the highest digit one 1;
        }
    }
    u32 high_one(u32 x){
        return x<65536u ? ho[x]:(ho[x>>16]<<16);
    }
    
    
    //count leading zero
    u32 clz[65536u];//leading zero count
    void cnt_leading_zero_int(){
        clz[0]=16;
        for(u32 i=1;i<65536u;i++){
            clz[i]=clz[i>>1]-1;
        }
    }
    u32 cnt_leading_zero(u32 x){
        if(x<65536u){
            return clz[x]+16;
        }
        else {
            return clz[x>>16];
        }
    }
    
    //count trailing zero
    u32 ctz[65536u];//trailing zero count
    void cnt_trailing_zero_int(){
        ctz[0]=16;
        for(u32 i=1;i<65526u;i++){
            ctz[i]=i&1 ? 0: ctz[i>>1]+1;
        }
    }
    u32 cnt_trailing_zero(u32 x){
        if(x<65536u){
            return ctz[x];
        }
        else {
            return ctz[x&65535u];
        }
    }
    
    //count leading one is more diffcult using count leading zero
    
    
    //提取第k个1
    int kthbit(u32 x, int k) {
        int s[5], ans = 0, t;
        s[0] = x;
        s[1] = x - ((x & 0xAAAAAAAAu) >> 1);
        s[2] = ((s[1] & 0xCCCCCCCCu) >> 2) + (s[1] & 0x33333333u); s[3] = ((s[2] >> 4) + s[2]) & 0x0F0F0F0Fu;
        s[4] = ((s[3] >> 8) + s[3]) & 0x00FF00FFu; t = s[4] & 65535u;
        if (t < k) k -= t, ans |=16, x >>=16;
        t = (s[3] >> ans) & 255u;
        if (t < k) k -= t, ans |= 8, x >>= 8; t = (s[2] >> ans) & 15u;
        if (t < k) k -= t, ans |= 4, x >>= 4; t = (s[1] >> ans) & 3u;
        if (t < k) k -= t, ans |= 2, x >>= 2; t = (s[0] >> ans) & 1u;
        if (t < k) k -= t, ans |= 1, x >>= 1; return ans;
    }
};
```
