import os
from shutil import copyfile
import random
import shutil


def dfs(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if not os.path.exists(".tmp"):
                os.makedirs(".tmp")
            copyfile(root+"/"+file, ".tmp/"+file)
        for sonPath in dirs:
            dfs(sonPath)


def randomBlog(name, size):
    for root, dirs, files in os.walk(".tmp"):
        for file in random.sample(files, size):
            if not os.path.exists(".tmp/"+name):
                os.makedirs(".tmp/"+name)
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
