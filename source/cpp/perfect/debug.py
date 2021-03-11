#实现HTTP客户端的程序
# coding: utf-8

import socket

s = socket.socket()
host = "localhost"
port = 4000
s.connect((host, port))

http_request = "GET / HTTP/1.1\r\nhost:{}\r\n\r\n".format(host)
request = http_request.encode('utf-8')
print('请求:\n', request)
s.send(request)

s.re

response = s.recv(1000000000)
print('响应:\n', response)
#print('响应的 str 格式:\n', response.decode('utf-8'))

response = s.recv(1000000000)
print('响应:\n', response)



s.close()
