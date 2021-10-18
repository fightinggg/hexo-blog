---
date: 2019-11-09 14:01:16
updated: 2019-11-09 14:01:16
---

### 软件工程与软件需求
<details>
<summary>什么是软件</summary>
软件是使硬件充分、自动、智能化地发挥作用的纽带<br>
软件是用户和计算机硬件之间的接口和桥梁    
</details>

<details>
<summary>软件开发的目标是什么</summary>
为用户提供满意的软件产品或服务
</details>

<!---more-->


<details>
<summary>什么是需求</summary>
需求是在一定的时期,在一既定的价格水平下，消费者愿意并且能够购买的商品数量
</details>

<details> 
<summary>软件开发瀑布模型</summary>
需求分析、设计、编码、测试、维护
</details>

<details>
<summary>软件项目成功的主要因素</summary>
*用户的参与<br>
执行层的支持<br>
*清晰的需求描述<br>
合理的规划<br>
*现实的客户期望<br>
</details>

<details>
<summary>软件项目失败的主要因素</summary>
*不完整的需求<br>
*缺乏用户参与<br>
资源不足<br>
*不切实际的用户期望<br>
缺乏执行层的支持<br>
*需求变更频繁<br>
规划不足<br>
*提供了不再需要的<br>
缺乏IT管理<br>
技术能力不足<br>
</details>

<details>
<summary style="color:red;">需求工程包括那两个部分</summary>
需求开发和需求管理
</details>

<details>
<summary style="color:red;">需求开发包括哪些基本过程</summary>
业务需求定义、需求获取、需求分析与建模、需求描述、需求验证
</details>


###  需求定义

<details>
<summary>什么是业务需求定义</summary>
明确需求目标<br>
界定需求范围<br>
</details>

<details>
<summary>业务需求定义与那个层次的需求相关</summary>
定义业务需求
</details>

<details>
<summary>SMART原则</summary>
s=specific 明确的<br>
m=measurable 可衡量的<br>
a=attainable 可达到的<br>
r=relevant/realistic 相关的/现实的<br>
t=timebased/timebound 有时间期限的<br>
</details>

<details>
<summary>问题分析五步法是哪五步</summary>
问题定义达成共识<br>
分析问题，理解根本原因<br>
确定相关人员或用户<br>
定义解决方案的界限<br>
确定加在解决方案上的约束<br>
</details>

<details>
<summary>如何确定目标</summary>
找到问题 -> 利用鱼骨图和Pareto图分析
找到主因
</details>


<details>
<summary>定义需求范围三步法是哪三步</summary>
划分主题域,[使用构件图]<br>
确定主题域范围,[使用上下文关系图]<br>
标识业务事件与报表,[event,report]
</details>

<details>
<summary>SRS</summary>
软件需求规格说明书
</details>

###  需求捕获
<details>
<summary>换句话解释什么是需求捕获</summary>
需求捕获就是收集用户需求<br>
是熟悉用户的工作场景，了解业务事件、报表和流程，进而理解用户碰到的真正的问题和障碍
</details>

<details>
<summary style="color:red;">需求捕获有哪些策略</summary>
主动、聚焦、破解隐藏需求、破解阻碍心理、不忽视变更、协商
</details>

<details>
<summary style="color:red;">需求捕获有哪些主要方法</summary>
用户访谈、用户调查、文档考古、情节串联版、现场观摩、联合开发
</details>

<details>
<summary>需求捕获的常用工具</summary>
三表一图（业务属性表、业务活动表、业务岗位角色表、业务流程图）<br>
SERU (主题、事件、报表、用例)<br>
任务卡片<br>
场景说明
</details>

### 需求分析与建模
<details>
<summary>需求分析做什么</summary>
是业务分析<br>
是对业务相关人员、数据、事件、报表等作全面的分解和研究<br>
是对业务活动和流程的梳理和理解<br>
在上诉基础上通过流程图、活动图、数据流图对业务流程进行描述，通过类图、ER图对业务实体进行描述、通过用例图对需求场景和角色进行描述、并对上诉业务流程实体场景和角色的相关内容进行细化
</details>

<details>
<summary>需求分析的第一个周期是什么</summary>
理清框架和脉络
</details>

<details>
<summary style="color:red;">需求分析的第一阶段包括哪三个方面的分析</summary>
业务流程分析，业务实体分析，场景和角色分析
</details>

<details>
<summary>流程一般分为哪三个层次，一般有哪三种类型</summary>
三个层次：组织级、部门级、岗位级别<br>
三种类型：生产流程、管理流程、支持流程
</details>

<details>
<summary>业务流程分析的产物包括哪三种图</summary>
跨职责流程图、活动图、数据流图
</details>

<details>
<summary>什么是业务实体分析</summary>
业务实体分析是找出业务相关的数据、报表、术语，以及他们之间的关系。
</details>

<details>
<summary>业务实体分析与业务流程分析有什么区别</summary>
流程分析是识别出各种活动的顺序或步骤<br>
业务实体分析是识别出各种活动相关的数据输入、输出或其他相关角色、概念等。
</details>

<details>
<summary>业务实体分析等产物是什么</summary>
类图、E-R图
</details>

<details>
<summary>业务实体分析过程中进行类图绘制的主要步骤包括哪几步？</summary>
标识类、确定类的属性名和方法名、标识类间的关系、标识约束和规则
</details>

<details>
<summary>角色与使用场景分析中，参与者和用例是什么关系？</summary>
参与者是系统的使用者，是系统的直接参与者，在系统外，是用例的调用者；用例是系统的组成部分，在系统内。
</details>


<details>
<summary>需求分析的第二周期与第一周期的区别在哪里？试举例说明在第二周期中需明确的需求细节。</summary>
第一周期是理清框架和脉络，第二周期是确定细节。<br>
在第二周期中需明确的需求细节如：类成员函数的参数、属性的类型、取值范围等。<br>
</details>

<details>
<summary style="color:red;">需求分析的第二个周期做什么</summary>
填充细节<br>
流程分析的细节: 入口条件、输入、活动、输出、输出条件、活动间的依赖关系。描述方法：流程表、跨职责流程图、活动图<br>
实体分析的细节: 对第一阶段形成的报表、类图、E-R图等的细节进行填充<br>
场景分析的细节: 明确事件流、功能点、界面原型、规则与约束等
</details>

### 需求验证
<details>
<summary style="color:red;">需求验证的方法</summary>
形式化方法和人工技术评审
</details>


### 需求管理
<details>
<summary>什么是SRS，什么是需求项</summary>
SRS是软件需求规格说明书<br>
需求项是需求文档中相对独立的功能和非功能需求描述，被唯一的编号，不同的需求项之间没有矛盾没有重叠
</details>

<details>
<summary>需求项如何划分优先级</summary>
先做WBS<br>
业务优先判断，再做技术依赖，项目风险判断
</details>

<details>
<summary>什么是德尔菲(Delphi)法</summary>
也叫专家意见法，即应用背对背的通信方式征询专家小组成员的意见
</details>

<details>
<summary style="color:red;">需求管理包括哪些</summary>
基线管理、变更管理、跟踪管理
</details>


<details>
<summary style="color:red;">什么是版本，什么是基线</summary>
在项目开发过程中，绝大部分的配置项都要经过多次的修改才能最终确定下来。对配置项的任何修改都将产生新的版本。所以版本是某个配置项的状态标识。基线则是特定的版本，是一组配置项的集合。
</details>


<details>
<summary style="color:red;">需求管理的目的是什么</summary>
为了有效地控制和管理需求更改等
</details>

<details>
<summary style="color:red;">为什么需求跟踪要双向跟踪</summary>
</details>

<details>
<summary style="color:red;">需求变更影响分析从哪三个方面进行</summary>
业务影响分析、技术影响分析、项目影响分析
<details>
<summary style="color:red;">需求变更的技术影响分析指的是什么？</summary>
是指变更带来多大工作量的变化的分析。
</details>

<details>
<summary style="color:red;">需求变更的业务影响分析指的是什么？</summary>
影响的范围、影响哪些人、影响的结果这三个方面，最后得出变更的合理性、必要性、影响度方面的评价。
</details>

<details>
<summary style="color:red;">需求变更的项目影响分析又是指什么？</summary>
是指基于工作量分析，对整个项目在时间、进度、成本方面的影响。

</details>
</details>