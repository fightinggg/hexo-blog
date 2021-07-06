---
date: 2021-06-26 14:45:00
updated: 2021-06-26 14:45:00
mathjax: true
typora-root-url: ..\..\..
---



# 版本

使用6.2.4

# sds.h sds.c 

## 内存对齐

`__attribute__((__packed__))`可以让编译器对结构体不进行内存对齐，[详细参考](https://blog.csdn.net/wuxing26jiayou/article/details/79609025)

```c
#include <stdint.h>
#include <stdio.h>

struct __attribute__((__packed__)) sdshdr64 {
    uint64_t len;        /* used */
    uint64_t alloc;      /* excluding the header and null terminator */
    unsigned char flags; /* 3 lsb of type, 5 unused bits */
    char buf[];
};

struct _sdshdr64 {
    uint64_t len;        /* used */
    uint64_t alloc;      /* excluding the header and null terminator */
    unsigned char flags; /* 3 lsb of type, 5 unused bits */
    char buf[];
};

int main() {
    printf("packed: %d\n", sizeof(struct sdshdr64));
    printf("nopacked: %d\n", sizeof(struct _sdshdr64));
}
/*
gcc a.c -o a && ./a
packed: 17
nopacked: 24
*/
```

## 宏\#\#

\#\#后标识的字符串会被替换，然后其左右的内容加上自己会被合并到一起，编译器将其视为标识符进行解析，[详细参考](https://blog.csdn.net/mitu405687908/article/details/51084441?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control)



<!-- more -->

## sds.h 源码

`sds` 可以被简单的认为是一个 `char*`

```c
typedef char *sds;
```

接下来是5种 `sds` 他们是`sdshdr5`, `sdshdr8`, `sdshdr16`, `sdshdr32`, `sdshdr64`, 分别可以储存长度为$2^5$, $2^8$, $2^{16}$, $2^{32}$, $2^{64}$ 的字符串。

`__attribute__ ((__packed__))`是编译器指令，可以取消内存对齐，让内存紧凑排列，这部分首先看后四个结构体，他们的内存结构定义几乎一摸一样。

- len: 字符串的长度

- alloc： 分配的空间大小

- flags： 字符串的类型（5种），所以只有最低的三位有意义，高5位不做使用。

- buf： 字符串的实际内容

对于`sdshdr5`,他比较特殊，实际上他的len和alloc一定相等，并储存于flags的高5位上，借此实现了内存压缩。

```c
/* Note: sdshdr5 is never used, we just access the flags byte directly.
 * However is here to document the layout of type 5 SDS strings. */
struct __attribute__ ((__packed__)) sdshdr5 {
    unsigned char flags; /* 3 lsb of type, and 5 msb of string length */
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr8 {
    uint8_t len; /* used */
    uint8_t alloc; /* excluding the header and null terminator */
    unsigned char flags; /* 3 lsb of type, 5 unused bits */
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr16 {
    uint16_t len; /* used */
    uint16_t alloc; /* excluding the header and null terminator */
    unsigned char flags; /* 3 lsb of type, 5 unused bits */
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr32 {
    uint32_t len; /* used */
    uint32_t alloc; /* excluding the header and null terminator */
    unsigned char flags; /* 3 lsb of type, 5 unused bits */
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr64 {
    uint64_t len; /* used */
    uint64_t alloc; /* excluding the header and null terminator */
    unsigned char flags; /* 3 lsb of type, 5 unused bits */
    char buf[];
};
```

sds 把字符串的内容，以及他的元信息（字符串类型、字符串长度、字符串分配的空间）储存在了一起，让内存排列更加紧致。

# adlist.c adlist.h

很普通的链表，并没有什么很特殊的地方，注意`listIter`的`direction`是迭代器的方向。

```c
typedef struct listNode {
    struct listNode *prev;
    struct listNode *next;
    void *value;
} listNode;

typedef struct listIter {
    listNode *next;
    int direction;
} listIter;

typedef struct list {
    listNode *head;
    listNode *tail;
    void *(*dup)(void *ptr);
    void (*free)(void *ptr);
    int (*match)(void *ptr, void *key);
    unsigned long len;
} list;
```



# mt19937-64.c mt19937-64.h

## 梅森素数

在OEIS上，梅森素数有[这些](https://oeis.org/A000043/list), 维基百科上也有[说明](https://zh.wikipedia.org/wiki/%E6%A2%85%E6%A3%AE%E7%B4%A0%E6%95%B0#%E6%A2%85%E6%A3%AE%E7%B4%A0%E6%95%B0%E5%88%97%E8%A1%A8), 我们需要注意到的是$2^{19937}-1$是一个梅森素数

## 线性反馈移位寄存器

线性反馈移位寄存器（Linear Feedback Shifting Register，简称 LFSR）

假设你有一个寄存器，寄存器中储存着一些二进制位，寄存器中有几个位被标记了，接下来会有无限轮操作，每轮操作如下

- 寄存器输出最低位x（x=0或1）。
- 寄存器选择被标记的位和x，取出其值，放到一起进行异或，得到y（y=0或1）。
- 寄存器把自己右移1位，然后把值y放入最高位。



具体来说，你有一个$8$位寄存器，初始储存着$00001111$，其中$3$,$5$,$7$位被标记了，于是开始操作。

第一轮输出$x=1$，然后从低位到高位选择了$1$,$0$,$0$, 最后$y=1 \oplus1 \oplus 0 \oplus 0=0$，寄存器变成了$00000111$

第二轮输出$x=1$，然后从低位到高位选择了$1$,$0$,$0$, 最后$y=1 \oplus1 \oplus 0 \oplus 0=0$，寄存器变成了$00000011$

第三轮输出$x=1$，然后从低位到高位选择了$0$,$0$,$0$, 最后$y=1 \oplus 0 \oplus 0 \oplus 0=1$，寄存器变成了$10000001$

第四轮输出$x=1$，然后从低位到高位选择了$0$,$0$,$0$, 最后$y=1 \oplus 0 \oplus 0 \oplus 0=1$，寄存器变成了$11000000$

第五轮输出$x=0$，然后从低位到高位选择了$0$,$0$,$1$, 最后$y=0 \oplus 0 \oplus 0 \oplus 1=1$，寄存器变成了$11100000$

......



## 梅森旋转算法

这是一个随机数生成算法，这里有一篇有趣的[Blog](https://liam.page/2018/01/12/Mersenne-twister/)，有兴趣可以读一下。这里引用一些主要内容。

梅森旋转算法（Mersenne Twister Algorithm，简称 MT）

>$32$ 位的梅森旋转算法能够产生周期为 $P$ 的 $w$-比特的随机数序列$\{\vec x_i\}$；其中 $w=32$。这也就是说，每一个$\vec x$ 是一个长度为 $32$ 的行向量，并且其中的每一个元素都是二元数域$\mathbb{F}_2 \overset{\text{def}}{=} \{0, 1\}$中的元素。现在，我们定义如下一些记号，来描述梅森旋转算法是如何进行旋转（线性移位）的。
>
>- $n$：参与梅森旋转的随机数个数；
>- $r$：$[0, w)$ 之间的整数；
>- $m$：$(0, n]$之间的整数；
>- $\mathbf{A}$：$w \times w$ 的常矩阵；
>- $\vec x^{(u)}$：$\vec x$的最高 $w - r$ 比特组成的数（低位补零）；
>- $\vec x^{(l)}$：$\vec x$的最低 r 比特组成的数（高位补零）。
>
>梅森旋转算法，首先需要根据随机数种子初始化$ n $个行向量：
>$$
>\vec x_0, \vec x_1, \ldots, \vec x_{n - 1}.
>$$
>而后根据下式，从$ k=0$ 开始依次计算 $\vec x_{n}$：
>$$
>\begin{equation}\vec x_{k + n} \overset{\text{def}}{=} \vec x_{k + m}\oplus \bigl(\vec x_{k}^{(u)}\mid \vec x_{k + 1}^{(l)}\bigr)\mathbf{A}.\label{eq:twister}\end{equation}
>$$
>
>
>其中，$\vec x\mid \vec x'$表示两个二进制数按位或；$\vec x\oplus \vec x'$表示两个二进制数按位半加（不进位，也就是按位异或）；$\vec x\mathbf A$ 则表示按位半加的矩阵乘法。在 MT 中，$\mathbf A$ 被定义为
>$$
>\begin{pmatrix}
>& 1 \\
>& & 1 \\
>& & & \ddots \\
>& & & & 1 \\
>a_{w - 1} & a_{w - 2} & a_{w - 3} & \cdots & a_0
>\end{pmatrix}
>$$

我们现在看看这个计算和旋转有什么关系。首先不考虑矩阵$\mathbf A$.

则有$\vec x_{k + n} \overset{\text{def}}{=} \vec x_{k + m}\oplus \bigl(\vec x_{k}^{(u)}\mid \vec x_{k + 1}^{(l)}\bigr)$, 这个式子笔者看了很久才明白他就是$w$轮线性反馈移位寄存器变换。下图是计算$x_n$的时候的异或情况， 可以看到$x_n$的每一个位都是独立的异或

![](https://raw.githubusercontent.com/fightinggg/drawio-data/master/redis-src/redis-src-mt19937.svg)

> 回过头来看 2 式，不难发现，这其实相当于一个 $nw - r$ 级的线性反馈移位寄存器（取 $\vec x_k^{(u)}$的最高 $w−r$ 位与 $\vec x_{k + 1}^{(l)}$的最低 $r $位进行迭代异或，再经过一个不影响周期的线性变换 $\mathbf A$）。只不过，2 式每一次运算，相当于 $LFSR$ 进行了 $w$ 轮计算。若 $w$ 与 $nw−r$ 互素，那么这一微小的改变是不会影响 $LFSR$ 的周期的。考虑到 $LFSR$ 的计算过程像是在「旋转」，这即是「梅森『旋转』」名字的来由。



## mt19937源码

主要的计算都在这里

```c
unsigned long long genrand64_int64(void)
{
    //...
    for (i=0;i<NN-MM;i++) {
        x = (mt[i]&UM)|(mt[i+1]&LM);
        mt[i] = mt[i+MM] ^ (x>>1) ^ mag01[(int)(x&1ULL)];
    }
    for (;i<NN-1;i++) {
        x = (mt[i]&UM)|(mt[i+1]&LM);
        mt[i] = mt[i+(MM-NN)] ^ (x>>1) ^ mag01[(int)(x&1ULL)];
    }
    //...
}

```

然后是`63`位生成

```c
/* generates a random number on [0, 2^63-1]-interval */
long long genrand64_int63(void)
{
    return (long long)(genrand64_int64() >> 1);
}
```

实数的生成

```c
/* generates a random number on [0,1]-real-interval */
double genrand64_real1(void)
{
    return (genrand64_int64() >> 11) * (1.0/9007199254740991.0);
}

/* generates a random number on [0,1)-real-interval */
double genrand64_real2(void)
{
    return (genrand64_int64() >> 11) * (1.0/9007199254740992.0);
}

/* generates a random number on (0,1)-real-interval */
double genrand64_real3(void)
{
    return ((genrand64_int64() >> 12) + 0.5) * (1.0/4503599627370496.0);
}
```





# dict.c dict.h

## 字典源码

字典结构体定义，需要注意这里有两个dictht，即两个字典，这涉及到了一个重hash问题，redis使用了渐进式rehash算法，即把重hash分布到各个地方(插入、查询等)，使得重hash的复杂度降低为$O1$，

redis是单线程，绝对不能出现过于耗时的操作，否则影响redis延时

```c
typedef struct dict {
    dictType *type;
    void *privdata;
    dictht ht[2];
    long rehashidx; /* rehashing not in progress if rehashidx == -1 */
    int16_t pauserehash; /* If >0 rehashing is paused (<0 indicates coding error) */
} dict;

```



# server.h server.c-1-跳表

跳表定义在这里

```c
/* ZSETs use a specialized version of Skiplists */
typedef struct zskiplistNode {
    sds ele;
    double score;
    struct zskiplistNode *backward;
    struct zskiplistLevel {
        struct zskiplistNode *forward;
        unsigned long span;
    } level[];
} zskiplistNode;

typedef struct zskiplist {
    struct zskiplistNode *header, *tail;
    unsigned long length;
    int level;
} zskiplist;
```



# intset.c intset.h

整数集合，这里可以储存整数

```c
typedef struct intset {
    uint32_t encoding;
    uint32_t length;
    int8_t contents[];
} intset;

intset *intsetNew(void);
intset *intsetAdd(intset *is, int64_t value, uint8_t *success);
intset *intsetRemove(intset *is, int64_t value, int *success);
uint8_t intsetFind(intset *is, int64_t value);
int64_t intsetRandom(intset *is);
uint8_t intsetGet(intset *is, uint32_t pos, int64_t *value);
uint32_t intsetLen(const intset *is);
size_t intsetBlobLen(intset *is);
int intsetValidateIntegrity(const unsigned char *is, size_t size, int deep);
```

encoding是编码方式，指的是contents中的数据如何储存，编码方式分为三种

```c
/* Note that these encodings are ordered, so:
 * INTSET_ENC_INT16 < INTSET_ENC_INT32 < INTSET_ENC_INT64. */
#define INTSET_ENC_INT16 (sizeof(int16_t))
#define INTSET_ENC_INT32 (sizeof(int32_t))
#define INTSET_ENC_INT64 (sizeof(int64_t))
```

length是数字的个数

contents是内容，但是他不一定是8位的整数，取决于encoding的值。



## 整数集合升级

由于整数集合初始情况储存的是INTSET_ENC_INT16，当你插入一个32位的数字以后，会出现溢出，这时候就需要进行升级，就直接开辟新的空间然后拷贝过去，复杂的$O(N)$

不支持降级





# ziplist.c ziplist.h

压缩列表

# server.h server.c-2-对象

redis对象都在这里统一起来

```c 
typedef struct redisObject {
    unsigned type:4;
    unsigned encoding:4;
    unsigned lru:LRU_BITS; /* LRU time (relative to global lru_clock) or
                            * LFU data (least significant 8 bits frequency
                            * and most significant 16 bits access time). */
    int refcount;
    void *ptr;
} robj;
```



# server.h-3-db

这次主要关注redisServer，这个结构体有460行，笔者省去了一些,可以砍刀redisDb是一个数组，dbnum记录他的数量，一般情况下，dbnum为6

```c
struct redisServer {
    // ...
    redisDb *db;
    // ...
    int dbnum;                      /* Total number of configured DBs */
    // ...
};
```

然后是客户端这边, 注意到client,. 这里也有一个指针，当然他指向的就是当前使用的db，而不是数组。

```c
typedef struct client {
    // ...
    redisDb *db;            /* Pointer to currently SELECTed DB. */
    // ...
} client;
```

看完服务器和客户端，然后看db

```c
/* Redis database representation. There are multiple databases identified
 * by integers from 0 (the default database) up to the max configured
 * database. The database number is the 'id' field in the structure. */
typedef struct redisDb {
    dict *dict;                 /* The keyspace for this DB */
    dict *expires;              /* Timeout of keys with a timeout set */
    dict *blocking_keys;        /* Keys with clients waiting for data (BLPOP)*/
    dict *ready_keys;           /* Blocked keys that received a PUSH */
    dict *watched_keys;         /* WATCHED keys for MULTI/EXEC CAS */
    int id;                     /* Database ID */
    long long avg_ttl;          /* Average TTL, just for stats */
    unsigned long expires_cursor; /* Cursor of the active expire cycle. */
    list *defrag_later;         /* List of key names to attempt to defrag one by one, gradually. */
} redisDb;
```

对于redisDb，笔者这里引用一下《Redis设计与实现》中的一个图，读者可以看的更加清晰

> ![](/images/image-2021-06-30-16.09.00.000.png)



# rio.c rio.h

rio即redis io， 主要实现了redis中的io操作, rio是一个结构体，他就是`_rio`, 下面是源码。

```c
struct _rio {
    /* Backend functions.
     * Since this functions do not tolerate short writes or reads the return
     * value is simplified to: zero on error, non zero on complete success. */
    size_t (*read)(struct _rio *, void *buf, size_t len);
    size_t (*write)(struct _rio *, const void *buf, size_t len);
    off_t (*tell)(struct _rio *);
    int (*flush)(struct _rio *);
    /* The update_cksum method if not NULL is used to compute the checksum of
     * all the data that was read or written so far. The method should be
     * designed so that can be called with the current checksum, and the buf
     * and len fields pointing to the new block of data to add to the checksum
     * computation. */
    void (*update_cksum)(struct _rio *, const void *buf, size_t len);

    /* The current checksum and flags (see RIO_FLAG_*) */
    uint64_t cksum, flags;

    /* number of bytes read or written */
    size_t processed_bytes;

    /* maximum single read or write chunk size */
    size_t max_processing_chunk;

    /* Backend-specific vars. */
    union {
        /* In-memory buffer target. */
        struct {
            sds ptr;
            off_t pos;
        } buffer;
        /* Stdio file pointer target. */
        struct {
            FILE *fp;
            off_t buffered; /* Bytes written since last fsync. */
            off_t autosync; /* fsync after 'autosync' bytes written. */
        } file;
        /* Connection object (used to read from socket) */
        struct {
            connection *conn;   /* Connection */
            off_t pos;    /* pos in buf that was returned */
            sds buf;      /* buffered data */
            size_t read_limit;  /* don't allow to buffer/read more than that */
            size_t read_so_far; /* amount of data read from the rio (not buffered) */
        } conn;
        /* FD target (used to write to pipe). */
        struct {
            int fd;       /* File descriptor. */
            off_t pos;
            sds buf;
        } fd;
    } io;
};
```

简单来说，他的这些字段，分别对应这些内容：

|         字段         |         内容         |
| :------------------: | :------------------: |
|         read         |  读数据，是函数指针  |
|        write         |  写数据，是函数指针  |
|         tell         |   tell，是函数指针   |
|        flush         |  flush，是函数指针   |
|     update_cksum     |  校验和，是函数指针  |
|        cksum         |      当前校验和      |
|        flags         |   是否发生读写错误   |
|   processed_bytes    |   已经处理的字节数   |
| max_processing_chunk | 单次最大处理的字节数 |
|          io          |    具体的读写目标    |

这里的函数指针主要作用是给后面的下面这些函数使用，这种编程方式有一点像面向对象中的抽象类。注意看，下面的`rioWrite`使用了对象`r`的`write`方法，实现了任意 长度`len`的写入。而对象`r`的`write`方法是不支持任意长度len的。`rioRead`也是同理了。

```c
static inline size_t rioWrite(rio *r, const void *buf, size_t len) {
    if (r->flags & RIO_FLAG_WRITE_ERROR) return 0;
    while (len) {
        size_t bytes_to_write = (r->max_processing_chunk && r->max_processing_chunk < len) ? r->max_processing_chunk : len;
        if (r->update_cksum) r->update_cksum(r,buf,bytes_to_write);
        if (r->write(r,buf,bytes_to_write) == 0) {
            r->flags |= RIO_FLAG_WRITE_ERROR;
            return 0;
        }
        buf = (char*)buf + bytes_to_write;
        len -= bytes_to_write;
        r->processed_bytes += bytes_to_write;
    }
    return 1;
}

static inline size_t rioRead(rio *r, void *buf, size_t len) {
    if (r->flags & RIO_FLAG_READ_ERROR) return 0;
    while (len) {
        size_t bytes_to_read = (r->max_processing_chunk && r->max_processing_chunk < len) ? r->max_processing_chunk : len;
        if (r->read(r,buf,bytes_to_read) == 0) {
            r->flags |= RIO_FLAG_READ_ERROR;
            return 0;
        }
        if (r->update_cksum) r->update_cksum(r,buf,bytes_to_read);
        buf = (char*)buf + bytes_to_read;
        len -= bytes_to_read;
        r->processed_bytes += bytes_to_read;
    }
    return 1;
}

static inline off_t rioTell(rio *r) {
    return r->tell(r);
}

static inline int rioFlush(rio *r) {
    return r->flush(r);
}
```

这里有一个有趣的函数

```c
/* Flushes any buffer to target device if applicable. Returns 1 on success
 * and 0 on failures. */
static int rioBufferFlush(rio *r) {
    UNUSED(r);
    return 1; /* Nothing to do, our write just appends to the buffer. */
}
```

其中的`UNUSED`来自于一个宏` #define UNUSED(V) ((void) V)`, 其作用是消除编译器的警告： 变量未使用。

最后是整个`bufferio`的源码, 定义了一些函数，这些函数只给rioBufferIO这个对象使用。这是一种单例模式。

```c
/* ------------------------- Buffer I/O implementation ----------------------- */

/* Returns 1 or 0 for success/failure. */
static size_t rioBufferWrite(rio *r, const void *buf, size_t len) {
    r->io.buffer.ptr = sdscatlen(r->io.buffer.ptr,(char*)buf,len);
    r->io.buffer.pos += len;
    return 1;
}

/* Returns 1 or 0 for success/failure. */
static size_t rioBufferRead(rio *r, void *buf, size_t len) {
    if (sdslen(r->io.buffer.ptr)-r->io.buffer.pos < len)
        return 0; /* not enough buffer to return len bytes. */
    memcpy(buf,r->io.buffer.ptr+r->io.buffer.pos,len);
    r->io.buffer.pos += len;
    return 1;
}

/* Returns read/write position in buffer. */
static off_t rioBufferTell(rio *r) {
    return r->io.buffer.pos;
}

/* Flushes any buffer to target device if applicable. Returns 1 on success
 * and 0 on failures. */
static int rioBufferFlush(rio *r) {
    UNUSED(r);
    return 1; /* Nothing to do, our write just appends to the buffer. */
}

static const rio rioBufferIO = {
    rioBufferRead,
    rioBufferWrite,
    rioBufferTell,
    rioBufferFlush,
    NULL,           /* update_checksum */
        0,              /* current checksum */
        0,              /* flags */
        0,              /* bytes read or written */
        0,              /* read/write chunk size */
    { { NULL, 0 } } /* union for io-specific vars */
};

void rioInitWithBuffer(rio *r, sds s) {
    *r = rioBufferIO;
    r->io.buffer.ptr = s;
    r->io.buffer.pos = 0;
}
```

文件io和缓冲区io相差不大，注意关注文件io的写函数，这里涉及到一个[异步刷盘](https://blog.csdn.net/mengyafei43/article/details/38319783)的问题。

redis对多个操作系统做了兼容,在linux下`redis_fsync`就是`fsync`，文件读写也有自己的缓冲区，一旦开启了自动同步`io.file.autosync`，则每写入一定数量`io.file.buffered`的数据，就进行同步`fsync(fileno(fp))`。

```c
/* Returns 1 or 0 for success/failure. */
static size_t rioFileWrite(rio *r, const void *buf, size_t len) {
    size_t retval;

    retval = fwrite(buf,len,1,r->io.file.fp);
    r->io.file.buffered += len;

    if (r->io.file.autosync &&
        r->io.file.buffered >= r->io.file.autosync)
    {
        fflush(r->io.file.fp);
        if (redis_fsync(fileno(r->io.file.fp)) == -1) return 0;
        r->io.file.buffered = 0;
    }
    return retval;
}
```

接下来的两个io分别是connection io和 file descriptor io, 前者只实现了从socket中读取数据的接口，后者只实现了向fd中写数据的接口（`This target is used to write the RDB file to pipe, when the master just streams the data to the replicas without creating an RDB on-disk image (diskless replication option)`）。

# rdb.c rdb.h

## rdbSaveRio

直接看函数`rdbSaveRio`的实现，第一部分是一些准备工作，RDB的版本被储存到了字符串magic中

```c
int rdbSaveRio(rio *rdb, int *error, int rdbflags, rdbSaveInfo *rsi) {
    // ...
    dictIterator *di = NULL;
    dictEntry *de;
    char magic[10];
    uint64_t cksum;
    size_t processed = 0;
    int j;
    long key_count = 0;
    long long info_updated_time = 0;
    char *pname = (rdbflags & RDBFLAGS_AOF_PREAMBLE) ? "AOF rewrite" :  "RDB";

    if (server.rdb_checksum)
        rdb->update_cksum = rioGenericUpdateChecksum;
    snprintf(magic,sizeof(magic),"REDIS%04d",RDB_VERSION);
    // ...
}

```



第二部分`rdbWriteRaw`直接把magic版本数据写入rdb输出流，`rdbSaveInfoAuxFields`写入了一些kv对，分别是`redis-ver`,`redis-bits`,`ctime`和`used-mem`。

对于`rdbSaveModulesAux`，他是module.c和module.h中的内容，大概就是保存了一个modules字典。

```c
int rdbSaveInfoAuxFields(rio *rdb, int rdbflags, rdbSaveInfo *rsi) {
    // ...
    if (rdbSaveAuxFieldStrStr(rdb,"redis-ver",REDIS_VERSION) == -1) return -1;
    if (rdbSaveAuxFieldStrInt(rdb,"redis-bits",redis_bits) == -1) return -1;
    if (rdbSaveAuxFieldStrInt(rdb,"ctime",time(NULL)) == -1) return -1;
    if (rdbSaveAuxFieldStrInt(rdb,"used-mem",zmalloc_used_memory()) == -1) return -1;
    // ...
    return 1;
}

int rdbSaveRio(rio *rdb, int *error, int rdbflags, rdbSaveInfo *rsi) {
    // ...
    if (rdbWriteRaw(rdb,magic,9) == -1) goto werr;
    if (rdbSaveInfoAuxFields(rdb,rdbflags,rsi) == -1) goto werr;
    if (rdbSaveModulesAux(rdb, REDISMODULE_AUX_BEFORE_RDB) == -1) goto werr;
    // ...
}
```

第三部分开始处理数据库,其主体如下。依次写入了数据库的编号、数据库kv个数，数据库超时kv个数。

```c
int rdbSaveRio(rio *rdb, int *error, int rdbflags, rdbSaveInfo *rsi) {
    // ...
    for (j = 0; j < server.dbnum; j++) {
        redisDb *db = server.db+j;
        dict *d = db->dict;
        if (dictSize(d) == 0) continue;
        di = dictGetSafeIterator(d);

        /* Write the SELECT DB opcode */
        if (rdbSaveType(rdb,RDB_OPCODE_SELECTDB) == -1) goto werr;
        if (rdbSaveLen(rdb,j) == -1) goto werr;

        /* Write the RESIZE DB opcode. */
        uint64_t db_size, expires_size;
        db_size = dictSize(db->dict);
        expires_size = dictSize(db->expires);
        if (rdbSaveType(rdb,RDB_OPCODE_RESIZEDB) == -1) goto werr;
        if (rdbSaveLen(rdb,db_size) == -1) goto werr;
        if (rdbSaveLen(rdb,expires_size) == -1) goto werr;

        /* Iterate this DB writing every entry */
        while((de = dictNext(di)) != NULL) {
            // ...
        }
    }
    // ...
}
```



第三部分的`while`循环中，对整个数据库的kv字典进行了迭代，依次写入了rio的流。

```c
/* Iterate this DB writing every entry */
while((de = dictNext(di)) != NULL) {
    sds keystr = dictGetKey(de);
    robj key, *o = dictGetVal(de);
    long long expire;

    initStaticStringObject(key,keystr);
    expire = getExpire(db,&key);
    if (rdbSaveKeyValuePair(rdb,&key,o,expire) == -1) goto werr;

    /* When this RDB is produced as part of an AOF rewrite, move
             * accumulated diff from parent to child while rewriting in
             * order to have a smaller final write. */
    if (rdbflags & RDBFLAGS_AOF_PREAMBLE &&
        rdb->processed_bytes > processed+AOF_READ_DIFF_INTERVAL_BYTES)
    {
        processed = rdb->processed_bytes;
        aofReadDiffFromParent();
    }

    /* Update child info every 1 second (approximately).
             * in order to avoid calling mstime() on each iteration, we will
             * check the diff every 1024 keys */
    if ((key_count++ & 1023) == 0) {
        long long now = mstime();
        if (now - info_updated_time >= 1000) {
            sendChildInfo(CHILD_INFO_TYPE_CURRENT_INFO, key_count, pname);
            info_updated_time = now;
        }
    }
}
```

最后一部分，写入了结束符和checksum

```c
/* If we are storing the replication information on disk, persist
     * the script cache as well: on successful PSYNC after a restart, we need
     * to be able to process any EVALSHA inside the replication backlog the
     * master will send us. */
if (rsi && dictSize(server.lua_scripts)) {
    di = dictGetIterator(server.lua_scripts);
    while((de = dictNext(di)) != NULL) {
        robj *body = dictGetVal(de);
        if (rdbSaveAuxField(rdb,"lua",3,body->ptr,sdslen(body->ptr)) == -1)
            goto werr;
    }
    dictReleaseIterator(di);
    di = NULL; /* So that we don't release it again on error. */
}

if (rdbSaveModulesAux(rdb, REDISMODULE_AUX_AFTER_RDB) == -1) goto werr;

/* EOF opcode */
if (rdbSaveType(rdb,RDB_OPCODE_EOF) == -1) goto werr;

/* CRC64 checksum. It will be zero if checksum computation is disabled, the
     * loading code skips the check in this case. */
cksum = rdb->cksum;
memrev64ifbe(&cksum);
if (rioWrite(rdb,&cksum,8) == 0) goto werr;
return C_OK;
```

## rdbSave

首先rdbSave创建了一个名为`temp-pid.rdb`的文件，该文件将用于输出rdb的结果。

```c
int rdbSave(char *filename, rdbSaveInfo *rsi) {
    char tmpfile[256];
    char cwd[MAXPATHLEN]; /* Current working dir path for error messages. */
    FILE *fp = NULL;
    rio rdb;
    int error = 0;

    snprintf(tmpfile,256,"temp-%d.rdb", (int) getpid());
    fp = fopen(tmpfile,"w");
    if (!fp) {
        char *cwdp = getcwd(cwd,MAXPATHLEN);
        serverLog(LL_WARNING,
            "Failed opening the RDB file %s (in server root dir %s) "
            "for saving: %s",
            filename,
            cwdp ? cwdp : "unknown",
            strerror(errno));
        return C_ERR;
    }
    // ...
}
```

然后使用该文件初始化rio流，并根据配置文件rio是否进行自动刷盘。

```c
int rdbSave(char *filename, rdbSaveInfo *rsi) {
    // ...
    rioInitWithFile(&rdb,fp);
    startSaving(RDBFLAGS_NONE);

    if (server.rdb_save_incremental_fsync)
        rioSetAutoSync(&rdb,REDIS_AUTOSYNC_BYTES);
    // ...
} 
```

接着执行`rdbSaveRio`，并刷盘

```c
int rdbSave(char *filename, rdbSaveInfo *rsi) {
    // ...
    if (rdbSaveRio(&rdb,&error,RDBFLAGS_NONE,rsi) == C_ERR) {
        errno = error;
        goto werr;
    }

    /* Make sure data will not remain on the OS's output buffers */
    if (fflush(fp)) goto werr;
    if (fsync(fileno(fp))) goto werr;
    if (fclose(fp)) { fp = NULL; goto werr; }
    fp = NULL;
    // ...
} 
```

最后把这个rdb文件命名为`filename`，并结束rdb。

## rdbSaveBackground

fork出一个子进程，子进程执行rdb任务。

```c
int rdbSaveBackground(char *filename, rdbSaveInfo *rsi) {
    pid_t childpid;

    if (hasActiveChildProcess()) return C_ERR;

    server.dirty_before_bgsave = server.dirty;
    server.lastbgsave_try = time(NULL);

    if ((childpid = redisFork(CHILD_TYPE_RDB)) == 0) {
        int retval;

        /* Child */
        redisSetProcTitle("redis-rdb-bgsave");
        redisSetCpuAffinity(server.bgsave_cpulist);
        retval = rdbSave(filename,rsi);
        if (retval == C_OK) {
            sendChildCowInfo(CHILD_INFO_TYPE_RDB_COW_SIZE, "RDB");
        }
        exitFromChild((retval == C_OK) ? 0 : 1);
    } else {
        /* Parent */
        if (childpid == -1) {
            server.lastbgsave_status = C_ERR;
            serverLog(LL_WARNING,"Can't save in background: fork: %s",
                strerror(errno));
            return C_ERR;
        }
        serverLog(LL_NOTICE,"Background saving started by pid %ld",(long) childpid);
        server.rdb_save_time_start = time(NULL);
        server.rdb_child_type = RDB_CHILD_TYPE_DISK;
        return C_OK;
    }
    return C_OK; /* unreached */
}
```











# Makefile

# acl.c


# ae.c
# ae.h
# ae_epoll.c
# ae_evport.c
# ae_kqueue.c
# ae_select.c
# anet.c
# anet.h
# aof.c
# asciilogo.h
# atomicvar.h
# bio.c
# bio.h
# bitops.c
# blocked.c
# childinfo.c
# cli_common.c
# cli_common.h
# cluster.c
# cluster.h
# config.c
# config.h
# connection.c
# connection.h
# connhelpers.h
# crc16.c
# crc16_slottable.h
# crc64.c
# crc64.h
# crcspeed.c
# crcspeed.h
# db.c
# debug.c
# debugmacro.h
# defrag.c


# endianconv.c
# endianconv.h
# evict.c
# expire.c
# fmacros.h
# geo.c
# geo.h
# geohash.c
# geohash.h
# geohash_helper.c
# geohash_helper.h
# help.h
# hyperloglog.c
# latency.c
# latency.h
# lazyfree.c
# listpack.c
# listpack.h
# listpack_malloc.h
# localtime.c
# lolwut.c
# lolwut.h
# lolwut5.c
# lolwut6.c
# lzf.h
# lzfP.h
# lzf_c.c
# lzf_d.c
# memtest.c
# mkreleasehdr.sh
# module.c
# modules
# monotonic.c
# monotonic.h
# multi.c
# networking.c
# notify.c
# object.c
# pqsort.c
# pqsort.h
# pubsub.c
# quicklist.c
# quicklist.h
# rand.c
# rand.h
# rax.c
# rax.h
# rax_malloc.h
# redis-benchmark.c
# redis-check-aof.c
# redis-check-rdb.c
# redis-cli.c
# redis-trib.rb
# redisassert.c
# redisassert.h
# redismodule.h
# release.c
# replication.c
# scripting.c
# sdsalloc.h
# sentinel.c
# server.c
# server.h
# setcpuaffinity.c
# setproctitle.c
# sha1.c
# sha1.h
# sha256.c
# sha256.h
# siphash.c
# slowlog.c
# slowlog.h
# solarisfixes.h
# sort.c
# sparkline.c
# sparkline.h
# stream.h
# syncio.c
# t_hash.c
# t_list.c
# t_set.c
# t_stream.c
# t_string.c
# t_zset.c
# testhelp.h
# timeout.c
# tls.c
# tracking.c
# util.c
# util.h
# valgrind.sup
# version.h
# zipmap.c
# zipmap.h
# zmalloc.c
# zmalloc.h