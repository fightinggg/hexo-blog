---
date: 2021-06-26 14:45:00
updated: 2021-06-26 14:45:00
---



# sds.h sds.c 

## 前置内容

### 内存对齐

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

### 宏\#\#

\#\#后标识的字符串会被替换，然后其左右的内容加上自己会被合并到一起，编译器将其视为标识符进行解析，[详细参考](https://blog.csdn.net/mitu405687908/article/details/51084441?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control)

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



# dict.c dict.h











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
# intset.c
# intset.h
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
# mt19937-64.c
# mt19937-64.h
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
# rdb.c
# rdb.h
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
# rio.c
# rio.h
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
# ziplist.c
# ziplist.h
# zipmap.c
# zipmap.h
# zmalloc.c
# zmalloc.h