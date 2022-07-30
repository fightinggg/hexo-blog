CXX = g++-9

INCLUDE += -I 
INCLUDE += /usr/local/Cellar/boost/1.72.0/include 


LIB += -L
LIB += /usr/local/Cellar/boost/1.72.0/lib 

CFLAGS += -std=c++11
CFLAGS += -o3
CFLAGS += -g
CFLAGS += $(INCLUDE) 
CFLAGS += $(LIB)


DATA_STRUCTURE_CPP = $(wildcard data_structure/*.cpp)
DATA_STRUCTURE_I = $(DATA_STRUCTURE_CPP:%.cpp=pre_compiled/%.i)
DATA_STRUCTURE_S = $(DATA_STRUCTURE_CPP:%.cpp=compiled/%.s)
DATA_STRUCTURE_O = $(DATA_STRUCTURE_CPP:%.cpp=obj/%.o)

.PHONY: data_structure



# 预处理
pre_compiled/%.i : %.cpp
	@if [ ! -d $(dir $@) ]; then mkdir -p $(dir $@); fi;
	$(CXX) $(CFLAGS) -E -o $@ $<

# 编译
compiled/%.s : pre_compiled/%.i
	@if [ ! -d $(dir $@) ]; then mkdir -p $(dir $@); fi;
	$(CXX) $(CFLAGS) -S -o $@ $<

# 汇编
obj/%.o : compiled/%.s
	@if [ ! -d $(dir $@) ]; then mkdir -p $(dir $@); fi;
	$(CXX) $(CFLAGS) -c -o $@ $<


debug:
	$(CXX) $(CFLAGS)  debug.cpp  -o ./test
	./test
all:
	python3 debug.py

tree:
	$(CXX) test.cpp -g -o ./test  -fstack-protector-all -O3
heap:
	$(CXX) test_heap.cpp -o ./test_heap -g

