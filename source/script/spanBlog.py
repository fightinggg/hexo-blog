import os
from shutil import copyfile
import random
import datetime
import time


os.environ['TZ'] = 'Asia/Shanghai'
time.tzset()  # Python time tzset() 根据环境变量TZ重新初始化时间相关设置。


def converting(source_num, source_hex, target_hex):
    # （2， 36）之间的进制转换
    if source_hex > 36 or source_hex < 2:
        return '2 <= source_hex <= 36'
    if target_hex > 36 or target_hex < 2:
        return '2 <= target_hex <= 36'
    str_36 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    dict_36 = {}
    for i in range(len(str_36)):
        dict_36[str_36[i]] = i
    str_b = str_36[:target_hex]
    result = ''
    source_str = str(source_num).lower()
    decimal_num = 0
    for i in range(len(source_str)):
        decimal_num += dict_36[source_str[-i-1]] * (source_hex ** i)
    quotient_int = decimal_num
    while quotient_int:
        remainder = quotient_int % target_hex
        quotient_int = quotient_int // target_hex
        result = str_b[remainder] + result
        if quotient_int and quotient_int < target_hex:
            result = str_b[quotient_int] + result
            break
    return result



def buildHead(urlPath):
    return "转载自 [link](https://fightinggg.github.io"+urlPath+")\n"
            

def linkHead(date):
    if(date == ""):
        return buildHead("/404.html");
    timeArray = datetime.datetime.strptime(date, "%Y-%m-%d %H:%M:%S")
    timestamp = int(time.mktime(timeArray.timetuple()))
    url = converting(timestamp, 10, 36)
    return buildHead("/"+url+".html");


def copyfileAndAddLink(src, dst):
    f = open(src)
    blog = f.read()
    blog = blog.split('\n')

    if(blog[0] != "---"):
        print("warn: ", src)

    date = ""
    i = 1
    while(i < len(blog) and blog[i] != "---"):
        if(blog[i][0:6] == "date: "):
            date = blog[i][6:]
        i = i + 1

    i = i + 1
    newBlog = ""
    while(i < len(blog)):
        newBlog = newBlog + blog[i] + "\n"
        i = i + 1

    f = open(dst, 'w')
    f.write(linkHead(date)+newBlog)


def dfs(path):
    for root, dirs, files in os.walk(path):
        if(root[0:16] == "source/_posts/实习"):
            continue
        for file in files:
            if not os.path.exists(".tmp"):
                os.makedirs(".tmp")
            copyfileAndAddLink(root+"/"+file, ".tmp/"+file)


def cleanAndCreateDir(path):
    if not os.path.exists(path):
        os.makedirs(path)
    for old in os.listdir(path):
        os.remove(path+"/"+old)


def randomBlog(name, size):
    for root, dirs, files in os.walk(".tmp"):
        cleanAndCreateDir(".tmp/"+name)
        for file in random.sample(files, size):
            if len(os.listdir(".tmp/"+name)) < size:
                copyfile(root+"/"+file, ".tmp/"+name+"/"+file)
            else:
                print(name, "has enough file")
                break
        break


if __name__ == "__main__":
    dfs("source/_posts")
    randomBlog("csdn", 10)
    randomBlog("juejin", 50)
    randomBlog("zhihu", 2)
    randomBlog("jianshu", 2)
    randomBlog("kaiyuanzhongguo", 0) # bug
