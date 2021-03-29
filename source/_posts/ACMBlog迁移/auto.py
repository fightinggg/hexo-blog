import os
from shutil import copyfile
import random
import datetime
import time
import re

def removeHtml(blog):
    blog = blog.strip()

    if(blog[0:22]=='<!DOCTYPE html>\n<html>'):
        blog = blog[22:].strip()

    if(blog[-7:]=='</html>'):
        blog = blog[:-7].strip()
    return blog

def removeHead(blog):
    if(blog.find('<head>')==0):
        beg = blog.find('</head>')
        blog = blog[beg+7:].strip()
    return blog

def removeBody(blog):
    blog = blog.replace('<body>','')
    blog = blog.replace('</body>','')
    return blog.strip()

def addHead(url, blog):
    blog = "转移自<a href='"+url+"'>老blog</a>\n\n"+blog
    return blog

def removeAll(path,fileName,blog):
    # blog = removeHtml(blog)
    # blog = removeHead(blog)
    # blog = removeBody(blog)
    # blog = addHead("https://fightinggg.github.io/ACM/"+path[24:]+"/"+fileName,blog)
    return blog

def dealwith(path,fileName):
    f = open(path+"/"+fileName,'r')
    blog = f.read()
    blog = removeAll(path,fileName,blog)
    if not os.path.exists(".tmp/"+path):
        os.makedirs(".tmp/"+path)
    out = open(path+"/"+fileName,'w')
    out.write(blog)

def dfs(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if(file[-5:] == '.html'):
                dealwith(root,file)


if __name__ == "__main__":
    if not os.path.exists(".tmp"):
        os.makedirs(".tmp")
    dfs("source/_posts/ACMBlog迁移")