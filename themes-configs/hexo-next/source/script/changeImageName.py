import os
from shutil import copyfile
import random
import datetime
import time
import re

os.environ['TZ'] = 'Asia/Shanghai'
time.tzset()  # Python time tzset() 根据环境变量TZ重新初始化时间相关设置。

def copyFile(src, dst):
    print(src,dst)
    f = open(src,'rb')
    blog = f.read()
    
    f = open(dst, 'wb')
    f.write(blog)


def dfs(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if not os.path.exists(".tmp"):
                os.makedirs(".tmp")
            if(file[-4:] == '.png' and len(file) == len('image-20190503010000001.png')):
                year = file[6:10]
                month = file[10:12]
                day = file[12:14]
                hour = file[14:16]
                minus = file[16:18]
                second = file[18:20]
                mill = file[20:23]

                print(year,month,day,hour,minus,second,mill,file)
                copyFile(root+"/"+file,
                 ".tmp/image-"+year+"-"+month+"-"+day+"-"+hour+"."+minus+"."+second+"."+mill+".png");



if __name__ == "__main__":
    dfs("source/images")
