
# cat
&emsp;&emsp; cat是浏览文件
&emsp;&emsp; 就能看到配置文件了
```
cat ~/.vimrc
```
&emsp;&emsp; -n 能够显示行号
```
cat -n ~/.vimrc
```
&emsp;&emsp; more是一个类似于vim的东西，能够把文件分页，用空格看下一行，用enter看下一页，用&lt;C-F&gt;和&lt;C-B&gt;翻页，用=输出行号，用fb也可以翻页。
```
cat -n ~/.vimrc | more
```

<!---more-->
# more
&emsp;&emsp; 直接完成
```
more ~/.vimrc 
```

# less
&emsp;&emsp; 基于显示的懒加载方案，打开文件非常快
&emsp;&emsp; 几乎和more一样，就是开大文件快一点，可以用来打开日志。
```
less ~/.vimrc
```

