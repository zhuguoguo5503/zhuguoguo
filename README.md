# 助果果开发规约

## 一、Java 编程规约

### (一) 命名风格

1. 【强制】代码中的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。

2. 【强制】代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式 也要避免采用。

3. 【强制】类名使用 UpperCamelCase 风格，但以下情形例外：DO / BO / DTO / VO / AO / PO / UID 等。

4. 【强制】方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格，必须遵从 驼峰形式。

5. 【强制】常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。

6. 【强制】抽象类命名使用 Abstract 或 Base 开头；异常类命名使用 Exception 结尾；测试类 命名以它要测试的类的名称开始，以 Test 结尾。

7. 【强制】类型与中括号紧挨相连来表示数组。

8. 【强制】POJO 类中布尔类型的变量，都不要加 is 前缀，否则部分框架解析会引起序列化错误。
    > 说明：定义为基本数据类型 Boolean isDeleted 的属性，它的方法也是 isDeleted()，RPC 框架在反向解析的时候，“误以为”对应的属性名称是 deleted，导致属性获取不到，进而抛 出异常。

9. 【强制】包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用 单数形式，但是类名如果有复数含义，类名可以使用复数形式。

10. 【强制】杜绝完全不规范的缩写，避免望文不知义。

11. 【推荐】为了达到代码自解释的目标，任何自定义编程元素在命名时，使用尽量完整的单词 组合来表达其意。

12. 【推荐】如果模块、接口、类、方法使用了设计模式，在命名时需体现出具体模式。
    > 说明：将设计模式体现在名字中，有利于阅读者快速理解架构设计理念。

13. 【推荐】接口类中的方法和属性不要加任何修饰符号（public 也不要加），保持代码的简洁 性，并加上有效的 Javadoc 注释。尽量不要在接口里定义变量，如果一定要定义变量，肯定是 与接口方法相关，并且是整个应用的基础常量。

14. 接口和实现类的命名有两套规则：  
    1）【强制】对于 Service 和 DAO 类，基于 SOA 的理念，暴露出来的服务一定是接口，内部 的实现类用 Impl 的后缀与接口区别。  
    2） 【推荐】 如果是形容能力的接口名称，取对应的形容词为接口名（通常是–able 的形式）。 正例：AbstractTranslator 实现 Translatable 接口。

15. 【参考】枚举类名建议带上 Enum 后缀，枚举成员名称需要全大写，单词间用下划线隔开。
    > 说明：枚举其实就是特殊的类，域成员均为常量，且构造方法被默认强制是私有。

16. 【参考】各层命名规约：

    A) Service/DAO 层方法命名规约

        1） 获取单个对象的方法用 get 做前缀。
        2） 获取多个对象的方法用 list 做前缀，复数形式结尾。
        3） 获取统计值的方法用 count 做前缀。
        4） 插入的方法用 save/insert 做前缀。
        5） 删除的方法用 remove/delete 做前缀。
        6） 修改的方法用 update 做前缀。

    B) 领域模型命名规约

        1） 数据对象：xxxDO，xxx 即为数据表名。
        2） 数据传输对象：xxxDTO，xxx 为业务领域相关的名称。
        3） 展示对象：xxxVO，xxx 一般为网页名称。
        4） POJO 是 DO/DTO/BO/VO 的统称，禁止命名成 xxxPOJO。

### (二)常量定义

1. 【强制】不允许任何魔法值（即未经预先定义的常量）直接出现在代码中。

2. 【强制】在 long 或者 Long 赋值时，数值后使用大写的 L，不能是小写的 l，小写容易跟数字 1 混淆，造成误解。
    > 说明：Long a = 2l; 写的是数字的 21，还是 Long 型的 2?

3. 【推荐】不要使用一个常量类维护所有常量，要按常量功能进行归类，分开维护。
    > 说明：大而全的常量类，杂乱无章，使用查找功能才能定位到修改的常量，不利于理解和维护。

4. 【推荐】常量的复用层次有五层：跨应用共享常量、应用内共享常量、子工程内共享常量、包内共享常量、类内共享常量。  
    1） 跨应用共享常量：放置在二方库中，通常是 client.jar 中的 constant 目录下。  
    2） 应用内共享常量：放置在一方库中，通常是子模块中的 constant 目录下。  
    3） 子工程内部共享常量：即在当前子工程的 constant 目录下。  
    4） 包内共享常量：即在当前包下单独的 constant 目录下。  
    5） 类内共享常量：直接在类内部 private static final 定义。

5. 【推荐】如果变量值仅在一个固定范围内变化用 enum 类型来定义。
    > 说明：如果存在名称之外的延伸属性应使用 enum 类型。

### (三)代码格式

1. 【强制】大括号的使用约定。如果是大括号内为空，则简洁地写成{}即可，不需要换行；如果是非空代码块则：  
    1） 左大括号前不换行。  
    2） 左大括号后换行。  
    3） 右大括号前换行。  
    4） 右大括号后还有 else 等代码则不换行；表示终止的右大括号后必须换行。

2. 【强制】左小括号和字符之间不出现空格；同样，右小括号和字符之间也不出现空格；而左大括号前需要空格。详见第 5 条下方正例提示。

3. 【强制】if/for/while/switch/do 等保留字与括号之间都必须加空格。

4. 【强制】任何二目、三目运算符的左右两边都需要加一个空格。
    > 说明：运算符包括赋值运算符=、逻辑运算符&&、加减乘除符号等。

5. 【强制】采用 4 个空格缩进，禁止使用 tab 字符。
    > 说明：如果使用 tab 缩进，必须设置 1 个 tab 为 4 个空格。IDEA 设置 tab 为 4 个空格时，请勿勾选 Use tab character；而在 eclipse 中，必须勾选 insert spaces for tabs。

6. 【强制】注释的双斜线与注释内容之间有且仅有一个空格。

7. 【强制】单行字符数限制不超过 120 个，超出需要换行，换行时遵循如下原则：  
    1） 第二行相对第一行缩进 4 个空格，从第三行开始，不再继续缩进，参考示例。  
    2） 运算符与下文一起换行。  
    3） 方法调用的点符号与下文一起换行。  
    4） 方法调用中的多个参数需要换行时，在逗号后进行。  
    5） 在括号前不要换行。

8. 【强制】方法参数在定义和传入时，多个参数逗号后边必须加空格。

9. 【强制】IDE 的 text file encoding 设置为 UTF-8; IDE 中文件的换行符使用 Unix 格式，不要使用 Windows 格式。

10. 【推荐】单个方法的总行数不超过 80 行。
    > 说明：包括方法签名、结束右大括号、方法内代码、注释、空行、回车及任何不可见字符的总行数不超过 80 行。

11. 【推荐】没有必要增加若干空格来使某一行的字符与上一行对应位置的字符对齐。
    > 说明：增加 sb 这个变量，如果需要对齐，则给 a、b、c 都要增加几个空格，在变量比较多的情况下，是非常累赘的事情。

12. 【推荐】不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性。
    > 说明：任何情形，没有必要插入多个空行进行隔开。

### (四)OOP 规约

1. 【强制】避免通过一个类的对象引用访问此类的静态变量或静态方法，无谓增加编译器解析成本，直接用类名来访问即可。

2. 【强制】所有的覆写方法，必须加@Override 注解。
    > 说明：getObject()与 get0bject()的问题。一个是字母的 O，一个是数字的 0，加 @Override 可以准确判断是否覆盖成功。另外，如果在抽象类中对方法签名进行修改，其实现类会马上编译报错。

3. 【强制】相同参数类型，相同业务含义，才可以使用 Java 的可变参数，避免使用 Object。
    > 说明：可变参数必须放置在参数列表的最后。（提倡同学们尽量不用可变参数编程）

4. 【强制】外部正在调用或者二方库依赖的接口，不允许修改方法签名，避免对接口调用方产生影响。接口过时必须加 @Deprecated 注解，并清晰地说明采用的新接口或者新服务是什么。

5. 【强制】不能使用过时的类或方法。
    > 说明：java.net.URLDecoder 中的方法 decode(String encodeStr) 这个方法已经过时，应该使用双参数 decode(String source, String encode)。接口提供方既然明确是过时接口，那么有义务同时提供新的接口；作为调用方来说，有义务去考证过时方法的新实现是什么。

6. 【强制】Object 的 equals 方法容易抛空指针异常，应使用常量或确定有值的对象来调用 equals。
    > 说明：推荐使用 java.util.Objects#equals（JDK7 引入的工具类）

7. 【强制】所有的相同类型的包装类对象之间值的比较，全部使用 equals 方法比较。
    > 说明：对于 Integer var = ? 在-128 至 127 范围内的赋值，Integer 对象是在 IntegerCache.cache 产生，会复用已有对象，这个区间内的 Integer 值可以直接使用==进行判断，但是这个区间之外的所有数据，都会在堆上产生，并不会复用已有对象，这是一个大坑，推荐使用 equals 方法进行判断。

8. 关于基本数据类型与包装数据类型的使用标准如下：  
    1） 【强制】所有的 POJO 类属性必须使用包装数据类型。  
    2） 【强制】RPC 方法的返回值和参数必须使用包装数据类型。  
    3） 【推荐】所有的局部变量使用基本数据类型。
    > 说明：POJO 类属性没有初值是提醒使用者在需要使用时，必须自己显式地进行赋值，任何 NPE 问题，或者入库检查，都由使用者来保证。

9. 【强制】定义 DO/DTO/VO 等 POJO 类时，不要设定任何属性默认值。

10. 【强制】序列化类新增属性时，请不要修改 serialVersionUID 字段，避免反序列失败；如果完全不兼容升级，避免反序列化混乱，那么请修改 serialVersionUID 值。
    > 说明：注意 serialVersionUID 不一致会抛出序列化运行时异常。

11. 【强制】构造方法里面禁止加入任何业务逻辑，如果有初始化逻辑，请放在 init 方法中。

12. 【强制】POJO 类必须写 toString 方法。使用 IDE 中的工具：source> generate toString 时，如果继承了另一个 POJO 类，注意在前面加一下 super.toString。
    > 说明：在方法执行抛出异常时，可以直接调用 POJO 的 toString()方法打印其属性值，便于排查问题。

13. 【强制】禁止在 POJO 类中，同时存在对应属性 xxx 的 isXxx()和 getXxx()方法。
    > 说明：框架在调用属性 xxx 的提取方法时，并不能确定哪个方法一定是被优先调用到。

14. 【推荐】使用索引访问用 String 的 split 方法得到的数组时，需做最后一个分隔符后有无内容的检查，否则会有抛 IndexOutOfBoundsException 的风险。
    > 说明：
    > ``` Java
    > String str = "a,b,c,,";
    > String[] ary = str.split(",");
    > // 预期大于 3，结果是 3
    > System.out.println(ary.length);
    > ```

15. 【推荐】当一个类有多个构造方法，或者多个同名方法，这些方法应该按顺序放置在一起，便于阅读，此条规则优先于第 16 条规则。

16. 【推荐】 类内方法定义的顺序依次是：公有方法或保护方法 > 私有方法 > getter/setter 方法。
    >说明：公有方法是类的调用者和维护者最关心的方法，首屏展示最好；保护方法虽然只是子类关心，也可能是“模板设计模式”下的核心方法；而私有方法外部一般不需要特别关心，是一个黑盒实现；因为承载的信息价值较低，所有 Service 和 DAO 的 getter/setter 方法放在类体最后。

17. 【推荐】setter 方法中，参数名称与类成员变量名称一致，this.成员名 = 参数名。在 getter/setter 方法中，不要增加业务逻辑，增加排查问题的难度。

18. 【推荐】循环体内，字符串的连接方式，使用 StringBuilder 的 append 方法进行扩展。
    > 说明：下例中，反编译出的字节码文件显示每次循环都会 new 出一个 StringBuilder 对象，然后进行 append 操作，最后通过 toString 方法返回 String 对象，造成内存资源浪费。

19. 【推荐】final 可以声明类、成员变量、方法、以及本地变量，下列情况使用 final 关键字：  
    1） 不允许被继承的类，如：String 类。  
    2） 不允许修改引用的域对象。  
    3） 不允许被重写的方法，如：POJO 类的 setter 方法。  
    4） 不允许运行过程中重新赋值的局部变量。  
    5） 避免上下文重复使用一个变量，使用 final 描述可以强制重新定义一个变量，方便更好地进行重构。

20. 【推荐】慎用 Object 的 clone 方法来拷贝对象。
    > 说明：对象的 clone 方法默认是浅拷贝，若想实现深拷贝需要重写 clone 方法实现域对象的深度遍历式拷贝。

21. 【推荐】类成员与方法访问控制从严：  
    1） 如果不允许外部直接通过 new 来创建对象，那么构造方法必须是 private。  
    2） 工具类不允许有 public 或 default 构造方法。  
    3） 类非 static 成员变量并且与子类共享，必须是 protected。  
    4） 类非 static 成员变量并且仅在本类使用，必须是 private。  
    5） 类 static 成员变量如果仅在本类使用，必须是 private。  
    6） 若是 static 成员变量，考虑是否为 final。  
    7） 类成员方法只供类内部调用，必须是 private。  
    8） 类成员方法只对继承类公开，那么限制为 protected。
    > 说明：任何类、方法、参数、变量，严控访问范围。过于宽泛的访问范围，不利于模块解耦。
    >> 思考：如果是一个 private 的方法，想删除就删除，可是一个 public 的 service 成员方法或成员变量，删除一下，不得手心冒点汗吗？变量像自己的小孩，尽量在自己的视线内，变量作用域太大，无限制的到处跑，那么你会担心的。

### (五)集合处理

1. 【强制】关于 hashCode 和 equals 的处理，遵循如下规则：  
    1） 只要重写 equals，就必须重写 hashCode。  
    2） 因为 Set 存储的是不重复的对象，依据 hashCode 和 equals 进行判断，所以 Set 存储的对象必须重写这两个方法。  
    3） 如果自定义对象作为 Map 的键，那么必须重写 hashCode 和 equals。
    > 说明：String 重写了 hashCode 和 equals 方法，所以我们可以非常愉快地使用 String 对象作为 key 来使用。

2. 【强制】ArrayList的subList结果不可强转成ArrayList，否则会抛出 ClassCastException 异常，即 java.util.RandomAccessSubList cannot be cast to java.util.ArrayList。
    > 说明：subList 返回的是 ArrayList 的内部类 SubList，并不是 ArrayList 而是 ArrayList 的一个视图，对于 SubList 子列表的所有操作最终会反映到原列表上。

3. 【强制】在 subList 场景中，高度注意对原集合元素的增加或删除，均会导致子列表的遍历、增加、删除产生 ConcurrentModificationException 异常。

4. 【强制】使用集合转数组的方法，必须使用集合的 toArray(T[] array)，传入的是类型完全一样的数组，大小就是 list.size()。
    > 说明：使用 toArray 带参方法，入参分配的数组空间不够大时，toArray 方法内部将重新分配内存空间，并返回新数组地址；如果数组元素个数大于实际所需，下标为 [ list.size() ] 的数组元素将被置为 null，其它数组元素保持原值，因此最好将方法入参数组大小定义与集合元素个数一致。

5. 【强制】使用工具类 Arrays.asList()把数组转换成集合时，不能使用其修改集合相关的方法，它的 add/remove/clear 方法会抛出 UnsupportedOperationException 异常。
    > 说明：asList 的返回对象是一个 Arrays 内部类，并没有实现集合的修改方法。Arrays.asList 体现的是适配器模式，只是转换接口，后台的数据仍是数组。
    > ``` Java
    > String[] str = new String[] { "you", "wu" };
    > List list = Arrays.asList(str);
    > ```
    > 第一种情况：list.add("yangguanbao"); 运行时异常。  
    > 第二种情况：str[0] = "gujin"; 那么 list.get(0)也会随之修改。

6. 【强制】泛型通配符<? extends T>来接收返回的数据，此写法的泛型集合不能使用 add 方法，而<? super T>不能使用 get 方法，作为接口调用赋值时易出错。
    > 说明：扩展说一下 PECS(Producer Extends Consumer Super)原则：第一、频繁往外读取内容的，适合用<? extends T>。第二、经常往里插入的，适合用<? super T>。

7. 【强制】不要在 foreach 循环里进行元素的 remove/add 操作。remove 元素请使用 Iterator 方式，如果并发操作，需要对 Iterator 对象加锁。
    > 说明：以上代码的执行结果肯定会出乎大家的意料，那么试一下把“1”换成“2”，会是同样的结果吗？

8. 【强制】在 JDK7 版本及以上，Comparator 实现类要满足如下三个条件，不然 Arrays.sort，Collections.sort 会报 IllegalArgumentException 异常。
    > 说明：三个条件如下:  
    > 1） x，y 的比较结果和 y，x 的比较结果相反。  
    > 2） x>y，y>z，则 x>z。  
    > 3） x=y，则 x，z 比较结果和 y，z 比较结果相同。

9. 【推荐】集合泛型定义时，在 JDK7 及以上，使用 diamond 语法或全省略。
    > 说明：菱形泛型，即 diamond，直接使用<>来指代前边已经指定的类型。

10. 【推荐】集合初始化时，指定集合初始值大小。
    > 说明：HashMap 使用 HashMap(int initialCapacity) 初始化。

11. 【推荐】使用 entrySet 遍历 Map 类集合 KV，而不是 keySet 方式进行遍历。
    > 说明：keySet 其实是遍历了 2 次，一次是转为 Iterator 对象，另一次是从 hashMap 中取出 key 所对应的 value。而 entrySet 只是遍历了一次就把 key 和 value 都放到了 entry 中，效率更高。如果是 JDK8，使用 Map.foreach 方法。

12. 【推荐】高度注意 Map 类集合 K/V 能不能存储 null 值的情况，如下表格：

    |集合类|Key|Value|Super|说明|
    |-|-|-|-|-|
    |Hashtable|不允许为 null|不允许为 null|Dictionary|线程安全|
    |ConcurrentHashMap|不允许为 null|不允许为 null|AbstractMap|锁分段技术  （JDK8:CAS）|
    |TreeMap|不允许为 null|允许为 null|AbstractMap|线程不安全|
    |HashMap|允许为 null|允许为 null|AbstractMap|线程不安全|

13. 【参考】合理利用好集合的有序性(sort)和稳定性(order)，避免集合的无序性(unsort)和不稳定性(unorder)带来的负面影响。
    > 说明：有序性是指遍历的结果是按某种比较规则依次排列的。稳定性指集合每次遍历的元素次序是一定的。

14. 【参考】利用 Set 元素唯一的特性，可以快速对一个集合进行去重操作，避免使用 List 的 contains 方法进行遍历、对比、去重操作。

### (六)并发处理

1. 【强制】获取单例对象需要保证线程安全，其中的方法也要保证线程安全。
    > 说明：资源驱动类、工具类、单例工厂类都需要注意。

2. 【强制】创建线程或线程池时请指定有意义的线程名称，方便出错时回溯。

3. 【强制】线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。
    >说明：使用线程池的好处是减少在创建和销毁线程上所消耗的时间以及系统资源的开销，解决资源不足的问题。如果不使用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。

4. 【强制】线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险。
    > 说明：Executors 返回的线程池对象的弊端如下：  
    > 1）FixedThreadPool 和 SingleThreadPool:  
    > 允许的请求队列长度为 Integer.MAX_VALUE，可能会堆积大量的请求，从而导致 OOM。  
    > 2）CachedThreadPool 和 ScheduledThreadPool:  
    > 允许的创建线程数量为 Integer.MAX_VALUE，可能会创建大量的线程，从而导致 OOM。

5. 【强制】SimpleDateFormat 是线程不安全的类，一般不要定义为 static 变量，如果定义为 static，必须加锁，或者使用 DateUtils 工具类。
    > 说明：如果是 JDK8 的应用，可以使用 Instant 代替 Date，LocalDateTime 代替 Calendar，DateTimeFormatter 代替 SimpleDateFormat，官方给出的解释：simple beautiful strong immutable thread-safe。

6. 【强制】高并发时，同步调用应该去考量锁的性能损耗。能用无锁数据结构，就不要用锁；能锁区块，就不要锁整个方法体；能用对象锁，就不要用类锁。
    > 说明：尽可能使加锁的代码块工作量尽可能的小，避免在锁代码块中调用 RPC 方法。

7. 【强制】对多个资源、数据库表、对象同时加锁时，需要保持一致的加锁顺序，否则可能会造成死锁。
    > 说明：线程一需要对表 A、B、C 依次全部加锁后才可以进行更新操作，那么线程二的加锁顺序也必须是 A、B、C，否则可能出现死锁。

8. 【强制】并发修改同一记录时，避免更新丢失，需要加锁。要么在应用层加锁，要么在缓存加锁，要么在数据库层使用乐观锁，使用 version 作为更新依据。
    > 说明：如果每次访问冲突概率小于 20%，推荐使用乐观锁，否则使用悲观锁。乐观锁的重试次数不得小于 3 次。

9. 【强制】多线程并行处理定时任务时，Timer 运行多个 TimeTask 时，只要其中之一没有捕获抛出的异常，其它任务便会自动终止运行，使用  ScheduledExecutorService 则没有这个问题。

10. 【推荐】使用 CountDownLatch 进行异步转同步操作，每个线程退出前必须调用 countDown 方法，线程执行代码注意 catch 异常，确保 countDown 方法被执行到，避免主线程无法执行至 await 方法，直到超时才返回结果。
    > 说明：注意，子线程抛出异常堆栈，不能在主线程 try-catch 到。

11. 【推荐】避免 Random 实例被多线程使用，虽然共享该实例是线程安全的，但会因竞争同一 seed 导致的性能下降。
    > 说明：Random 实例包括 java.util.Random 的实例或者 Math.random()的方式。

12. 【推荐】在并发场景下，通过双重检查锁（double-checked locking）实现延迟初始化的优化问题隐患(可参考 The "Double-Checked Locking is Broken" Declaration)，推荐解决方案中较为简单一种（适用于 JDK5 及以上版本），将目标属性声明为 volatile 型。

13. 【参考】volatile 解决多线程内存不可见问题。对于一写多读，是可以解决变量同步问题，但是如果多写，同样无法解决线程安全问题。如果是 count++操作，使用如下类实现：
    ``` Java
    AtomicInteger count = new AtomicInteger();
    count.addAndGet(1);
    ```
    如果是 JDK8，推荐使用 LongAdder 对象，比 AtomicLong 性能更好（减少乐观锁的重试次数）。

14. 【参考】 HashMap 在容量不够进行 resize 时由于高并发可能出现死链，导致 CPU 飙升，在开发过程中可以使用其它数据结构或加锁来规避此风险。

15. 【参考】ThreadLocal 无法解决共享对象的更新问题，ThreadLocal 对象建议使用 static 修饰。这个变量是针对一个线程内所有操作共享的，所以设置为静态变量，所有此类实例共享此静态变量 ，也就是说在类第一次被使用时装载，只分配一块存储空间，所有此类的对象(只要是这个线程内定义的)都可以操控这个变量。

### (七)控制语句

1. 【强制】在一个 switch 块内，每个 case 要么通过 break/return 等来终止，要么注释说明程序将继续执行到哪一个 case 为止；在一个 switch 块内，都必须包含一个 default 语句并且放在最后，即使空代码。

2. 【强制】在 if/else/for/while/do 语句中必须使用大括号。即使只有一行代码，避免采用单行的编码方式：if (condition) statements;

3. 【强制】在高并发场景中，避免使用”等于”判断作为中断或退出的条件。
    > 说明：如果并发控制没有处理好，容易产生等值判断被“击穿”的情况，使用大于或小于的区间判断条件来代替。

4. 【推荐】表达异常的分支时，少用 if-else 方式，这种方式可以改写成：
    ``` Java
    if (condition) {
        ...
    return obj;
    }
    // 接着写 else 的业务逻辑代码;
    ```
    > 说明：如果非得使用 if()...else if()...else...方式表达逻辑，【强制】避免后续代码维护困难，请勿超过 3 层。

5. 【推荐】除常用方法（如 getXxx/isXxx）等外，不要在条件判断中执行其它复杂的语句，将复杂逻辑判断的结果赋值给一个有意义的布尔变量名，以提高可读性。
    > 说明：很多 if 语句内的逻辑相当复杂，阅读者需要分析条件表达式的最终结果，才能明确什么样的条件执行什么样的语句，那么，如果阅读者分析逻辑表达式错误呢？

6. 【推荐】循环体中的语句要考量性能，以下操作尽量移至循环体外处理，如定义对象、变量、获取数据库连接，进行不必要的 try-catch 操作（这个 try-catch 是否可以移至循环体外）。

7. 【推荐】避免采用取反逻辑运算符。
    > 说明：取反逻辑不利于快速理解，并且取反逻辑写法必然存在对应的正向逻辑写法。

8. 【推荐】接口入参保护，这种场景常见的是用作批量操作的接口。

9. 【参考】下列情形，需要进行参数校验：  
    1） 调用频次低的方法。  
    2） 执行时间开销很大的方法。此情形中，参数校验时间几乎可以忽略不计，但如果因为参数错误导致中间执行回退，或者错误，那得不偿失。  
    3） 需要极高稳定性和可用性的方法。  
    4） 对外提供的开放接口，不管是 RPC/API/HTTP 接口。  
    5） 敏感权限入口。

10. 【参考】下列情形，不需要进行参数校验：  
    1） 极有可能被循环调用的方法。但在方法说明里必须注明外部参数检查要求。  
    2） 底层调用频度比较高的方法。毕竟是像纯净水过滤的最后一道，参数错误不太可能到底层才会暴露问题。一般 DAO 层与 Service 层都在同一个应用中，部署在同一台服务器中，所以 DAO 的参数校验，可以省略。  
    3） 被声明成 private 只会被自己代码所调用的方法，如果能够确定调用方法的代码传入参数已经做过检查或者肯定不会有问题，此时可以不校验参数。

### (八)注释规约

1. 【强制】类、类属性、类方法的注释必须使用 Javadoc 规范，使用/**内容*/格式，不得使用 // xxx 方式。
    > 说明：在 IDE 编辑窗口中，Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释；在 IDE 中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。

2. 【强制】所有的抽象方法（包括接口中的方法）必须要用 Javadoc 注释、除了返回值、参数、异常说明外，还必须指出该方法做什么事情，实现什么功能。
    > 说明：对子类的实现要求，或者调用注意事项，请一并说明。

3. 【强制】所有的类都必须添加创建者和创建日期。

4. 【强制】方法内部单行注释，在被注释语句上方另起一行，使用//注释。方法内部多行注释使用/* */注释，注意与代码对齐。

5. 【强制】所有的枚举类型字段必须要有注释，说明每个数据项的用途。

6. 【推荐】与其“半吊子”英文来注释，不如用中文注释把问题说清楚。专有名词与关键字保持英文原文即可。

7. 【推荐】代码修改的同时，注释也要进行相应的修改，尤其是参数、返回值、异常、核心逻辑等的修改。
    > 说明：代码与注释更新不同步，就像路网与导航软件更新不同步一样，如果导航软件严重滞后，就失去了导航的意义。

8. 【参考】谨慎注释掉代码。在上方详细说明，而不是简单地注释掉。如果无用，则删除。
    > 说明：代码被注释掉有两种可能性：1）后续会恢复此段代码逻辑。2）永久不用。前者如果没有备注信息，难以知晓注释动机。后者建议直接删掉（代码仓库保存了历史代码）。

9. 【参考】对于注释的要求：第一、能够准确反应设计思想和代码逻辑；第二、能够描述业务含义，使别的程序员能够迅速了解到代码背后的信息。完全没有注释的大段代码对于阅读者形同天书，注释是给自己看的，即使隔很长时间，也能清晰理解当时的思路；注释也是给继任者看的，使其能够快速接替自己的工作。

10. 【参考】好的命名、代码结构是自解释的，注释力求精简准确、表达到位。避免出现注释的一个极端：过多过滥的注释，代码的逻辑一旦修改，修改注释是相当大的负担。

11. 【参考】特殊注释标记，请注明标记人与标记时间。注意及时处理这些标记，通过标记扫描，经常清理此类标记。线上故障有时候就是来源于这些标记处的代码。  
    1） 待办事宜（TODO）:（ 标记人，标记时间，[预计处理时间]）  
    表示需要实现，但目前还未实现的功能。这实际上是一个 Javadoc 的标签，目前的 Javadoc 还没有实现，但已经被广泛使用。只能应用于类，接口和方法（因为它是一个 Javadoc 标签）。  
    2） 错误，不能工作（FIXME）:（标记人，标记时间，[预计处理时间]）  
    在注释中用 FIXME 标记某代码是错误的，而且不能工作，需要及时纠正的情况。

### (九)其它

1. 【强制】在使用正则表达式时，利用好其预编译功能，可以有效加快正则匹配速度。
    > 说明：不要在方法体内定义：Pattern pattern = Pattern.compile(“规则”);

2. 【强制】velocity 调用 POJO 类的属性时，建议直接使用属性名取值即可，模板引擎会自动按规范调用 POJO 的 getXxx()，如果是 boolean 基本数据类型变量（boolean 命名不需要加 is 前缀），会自动调用 isXxx()方法。
    > 说明：注意如果是 Boolean 包装类对象，优先调用 getXxx()的方法。

3. 【强制】后台输送给页面的变量必须加$!{var}——中间的感叹号。
    > 说明：如果 var 等于 null 或者不存在，那么${var}会直接显示在页面上。

4. 【强制】注意 Math.random() 这个方法返回是 double 类型，注意取值的范围 0≤x<1（能够取到零值，注意除零异常），如果想获取整数类型的随机数，不要将 x 放大 10 的若干倍然后取整，直接使用 Random 对象的 nextInt 或者 nextLong 方法。

5. 【强制】获取当前毫秒数 System.currentTimeMillis(); 而不是 new Date().getTime();
    > 说明：如果想获取更加精确的纳秒级时间值，使用 System.nanoTime()的方式。在 JDK8 中，针对统计时间等场景，推荐使用 Instant 类。

6. 【推荐】不要在视图模板中加入任何复杂的逻辑。
    > 说明：根据 MVC 理论，视图的职责是展示，不要抢模型和控制器的活。

7. 【推荐】任何数据结构的构造或初始化，都应指定大小，避免数据结构无限增长吃光内存。

8. 【推荐】及时清理不再使用的代码段或配置信息。
    > 说明：对于垃圾代码或过时配置，坚决清理干净，避免程序过度臃肿，代码冗余。

## 二、Java 异常日志

### (一)异常处理

1. 【强制】Java 类库中定义的可以通过预检查方式规避的 RuntimeException 异常不应该通过 catch 的方式来处理，比如：NullPointerException，IndexOutOfBoundsException 等等。
    > 说明：无法通过预检查的异常除外，比如，在解析字符串形式的数字时，不得不通过 catch NumberFormatException 来实现。

2. 【强制】异常不要用来做流程控制，条件控制。
    > 说明：异常设计的初衷是解决程序运行中的各种意外情况，且异常的处理效率比条件判断方式要低很多。

3. 【强制】catch 时请分清稳定代码和非稳定代码，稳定代码指的是无论如何不会出错的代码。对于非稳定代码的 catch 尽可能进行区分异常类型，再做对应的异常处理。
    > 说明：对大段代码进行 try-catch，使程序无法根据不同的异常做出正确的应激反应，也不利于定位问题，这是一种不负责任的表现。

4. 【强制】捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，请将该异常抛给它的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的内容。

5. 【强制】有 try 块放到了事务代码中，catch 异常后，如果需要回滚事务，一定要注意手动回滚事务。

6. 【强制】finally 块必须对资源对象、流对象进行关闭，有异常也要做 try-catch。
    > 说明：如果 JDK7 及以上，可以使用 try-with-resources 方式。

7. 【强制】不要在 finally 块中使用 return。
    > 说明：finally 块中的 return 返回后方法结束执行，不会再执行 try 块中的 return 语句。

8. 【强制】捕获异常与抛异常，必须是完全匹配，或者捕获异常是抛异常的父类。
    > 说明：如果预期对方抛的是绣球，实际接到的是铅球，就会产生意外情况。

9. 【推荐】方法的返回值可以为 null，不强制返回空集合，或者空对象等，必须添加注释充分说明什么情况下会返回 null 值。
    > 说明：本手册明确防止 NPE 是调用者的责任。即使被调用方法返回空集合或者空对象，对调用者来说，也并非高枕无忧，必须考虑到远程调用失败、序列化失败、运行时异常等场景返回null 的情况。

10. 【推荐】防止 NPE，是程序员的基本修养，注意 NPE 产生的场景：  
    1）返回类型为基本数据类型，return 包装数据类型的对象时，自动拆箱有可能产生 NPE。  
    2） 数据库的查询结果可能为 null。  
    3） 集合里的元素即使 isNotEmpty，取出的数据元素也可能为 null。  
    4） 远程调用返回对象时，一律要求进行空指针判断，防止 NPE。  
    5） 对于 Session 中获取的数据，建议 NPE 检查，避免空指针。  
    6） 级联调用 obj.getA().getB().getC()；一连串调用，易产生 NPE。  

11. 【推荐】定义时区分 unchecked / checked 异常，避免直接抛出 new RuntimeException()，更不允许抛出 Exception 或者 Throwable，应使用有业务含义的自定义异常。推荐业界已定义过的自定义异常，如：DAOException / ServiceException 等。

12. 【参考】对于公司外的 http/api 开放接口必须使用“错误码”；而应用内部推荐异常抛出；跨应用间 RPC 调用优先考虑使用 Result 方式，封装 isSuccess()方法、“错误码”、“错误简短信息”。
    > 说明：关于 RPC 方法返回方式使用 Result 方式的理由：  
    > 1）使用抛异常返回方式，调用方如果没有捕获到就会产生运行时错误。  
    > 2）如果不加栈信息，只是 new 自定义异常，加入自己的理解的 error message，对于调用端解决问题的帮助不会太多。如果加了栈信息，在频繁调用出错的情况下，数据序列化和传输的性能损耗也是问题。

13. 【参考】避免出现重复的代码（Don’t Repeat Yourself），即 DRY 原则。
    > 说明：随意复制和粘贴代码，必然会导致代码的重复，在以后需要修改时，需要修改所有的副本，容易遗漏。必要时抽取共性方法，或者抽象公共类，甚至是组件化。

### (二)日志规约

1. 【强制】应用中不可直接使用日志系统（Log4j、Logback）中的 API，而应依赖使用日志框架 SLF4J 中的 API，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一。
    ``` Java
    import org.slf4j.Logger;
    import org.slf4j.LoggerFactory;

    private static final Logger logger = LoggerFactory.getLogger(Abc.class);
    ```

2. 【强制】日志文件至少保存 15 天，因为有些异常具备以“周”为频次发生的特点。

3. 【强制】应用中的扩展日志（如打点、临时监控、访问日志等）命名方式：appName_logType_logName.log。  
    logType:日志类型，如 stats/monitor/access 等；  
    logName:日志描述。  
    这种命名的好处：通过文件名就可知道日志文件属于什么应用，什么类型，什么目的，也有利于归类查找。
    > 说明：推荐对日志进行分类，如将错误日志和业务日志分开存放，便于开发人员查看，也便于通过日志对系统进行及时监控。

4. 【强制】对 trace/debug/info 级别的日志输出，必须使用条件输出形式或者使用占位符的方式。
    > 说明：logger.debug("Processing trade with id: " + id + " and symbol: " + symbol);如果日志级别是 warn，上述日志不会打印，但是会执行字符串拼接操作，如果 symbol 是对象，会执行 toString()方法，浪费了系统资源，执行了上述操作，最终日志却没有打印。

5. 【强制】避免重复打印日志，浪费磁盘空间，务必在 log4j.xml 中设置 additivity=false。

6. 【强制】异常信息应该包括两类信息：案发现场信息和异常堆栈信息。如果不处理，那么通过关键字 throws 往上抛出。

7. 【推荐】谨慎地记录日志。生产环境禁止输出 debug 日志；有选择地输出 info 日志；如果使用 warn 来记录刚上线时的业务行为信息，一定要注意日志输出量的问题，避免把服务器磁盘撑爆，并记得及时删除这些观察日志。
    > 说明：大量地输出无效日志，不利于系统性能提升，也不利于快速定位错误点。记录日志时请思考：这些日志真的有人看吗？看到这条日志你能做什么？能不能给问题排查带来好处？

8. 【推荐】可以使用 warn 日志级别来记录用户输入参数错误的情况，避免用户投诉时，无所适从。如非必要，请不要在此场景打出 error 级别，避免频繁报警。
    > 说明：注意日志输出的级别，error 级别只记录系统逻辑出错、异常或者重要的错误信息。

9. 【推荐】尽量用英文来描述日志错误信息，如果日志中的错误信息用英文描述不清楚的话使用中文描述即可，否则容易产生歧义。国际化团队或海外部署的服务器由于字符集问题，【强制】使用全英文来注释和描述日志错误信息。

## 三、单元测试

1. 【强制】好的单元测试必须遵守 AIR 原则。
    > 说明：单元测试在线上运行时，感觉像空气（AIR）一样并不存在，但在测试质量的保障上，却是非常关键的。好的单元测试宏观上来说，具有自动化、独立性、可重复执行的特点。
    * A：Automatic（自动化）
    * I：Independent（独立性）
    * R：Repeatable（可重复）

2. 【强制】单元测试应该是全自动执行的，并且非交互式的。测试用例通常是被定期执行的，执行过程必须完全自动化才有意义。输出结果需要人工检查的测试不是一个好的单元测试。单元测试中不准使用 System.out 来进行人肉验证，必须使用 assert 来验证。

3. 【强制】保持单元测试的独立性。为了保证单元测试稳定可靠且便于维护，单元测试用例之间决不能互相调用，也不能依赖执行的先后次序。

4. 【强制】单元测试是可以重复执行的，不能受到外界环境的影响。
    > 说明：单元测试通常会被放到持续集成中，每次有代码 check in 时单元测试都会被执行。如果单测对外部环境（网络、服务、中间件等）有依赖，容易导致持续集成机制的不可用。

5. 【强制】对于单元测试，要保证测试粒度足够小，有助于精确定位问题。单测粒度至多是类级别，一般是方法级别。
    > 说明：只有测试粒度小才能在出错时尽快定位到出错位置。单测不负责检查跨类或者跨系统的交互逻辑，那是集成测试的领域。

6. 【强制】核心业务、核心应用、核心模块的增量代码确保单元测试通过。
    > 说明：新增代码及时补充单元测试，如果新增代码影响了原有单元测试，请及时修正。

7. 【强制】单元测试代码必须写在如下工程目录：src/test/java，不允许写在业务代码目录下。
    > 说明：源码构建时会跳过此目录，而单元测试框架默认是扫描此目录。

8. 【推荐】单元测试的基本目标：语句覆盖率达到 70%；核心模块的语句覆盖率和分支覆盖率都要达到 100%
    > 说明：在工程规约的应用分层中提到的 DAO 层，Manager 层，可重用度高的 Service，都应该进行单元测试。

9. 【推荐】编写单元测试代码遵守 BCDE 原则，以保证被测试模块的交付质量。
    * B：Border，边界值测试，包括循环边界、特殊取值、特殊时间点、数据顺序等。
    * C：Correct，正确的输入，并得到预期的结果。
    * D：Design，与设计文档相结合，来编写单元测试。
    * E：Error，强制错误信息输入（如：非法数据、异常流程、非业务允许输入等），并得到预期的结果。

10. 【推荐】对于数据库相关的查询，更新，删除等操作，不能假设数据库里的数据是存在的，或者直接操作数据库把数据插入进去，请使用程序插入或者导入数据的方式来准备数据。

11. 【推荐】和数据库相关的单元测试，可以设定自动回滚机制，不给数据库造成脏数据。或者对单元测试产生的数据有明确的前后缀标识。

12. 【推荐】对于不可测的代码建议做必要的重构，使代码变得可测，避免为了达到测试要求而书写不规范测试代码。

13. 【推荐】在设计评审阶段，开发人员需要和测试人员一起确定单元测试范围，单元测试最好覆盖所有测试用例。

14. 【推荐】单元测试作为一种质量保障手段，不建议项目发布后补充单元测试用例，建议在项目提测前完成单元测试。

15. 【参考】为了更方便地进行单元测试，业务代码应避免以下情况：
    * 构造方法中做的事情过多。
    * 存在过多的全局变量和静态方法。
    * 存在过多的外部依赖。
    * 存在过多的条件语句。
    > 说明：多层条件语句建议使用卫语句、策略模式、状态模式等方式重构。

16. 【参考】不要对单元测试存在如下误解：
    * 那是测试同学干的事情。本文是开发手册，凡是本文内容都是与开发同学强相关的。
    * 单元测试代码是多余的。系统的整体功能与各单元部件的测试正常与否是强相关的。
    * 单元测试代码不需要维护。一年半载后，那么单元测试几乎处于废弃状态。
    * 单元测试与线上故障没有辩证关系。好的单元测试能够最大限度地规避线上故障。

## 四、安全规约

1. 【强制】隶属于用户个人的页面或者功能必须进行权限控制校验。
    > 说明：防止没有做水平权限校验就可随意访问、修改、删除别人的数据，比如查看他人的私信内容、修改他人的订单。

2. 【强制】用户敏感数据禁止直接展示，必须对展示数据进行脱敏。
    > 说明：中国大陆个人手机号码显示为:158****9119，隐藏中间 4 位，防止隐私泄露。

3. 【强制】用户输入的 SQL 参数严格使用参数绑定或者 METADATA 字段值限定，防止 SQL 注入，禁止字符串拼接 SQL 访问数据库。

4. 【强制】用户请求传入的任何参数必须做有效性验证。
    > 说明：忽略参数校验可能导致：
    * page size 过大导致内存溢出
    * 恶意 order by 导致数据库慢查询
    * 任意重定向
    * SQL 注入
    * 反序列化注入
    * 正则输入源串拒绝服务 ReDoS
    > 说明：Java 代码用正则来验证客户端的输入，有些正则写法验证普通用户输入没有问题，但是如果攻击人员使用的是特殊构造的字符串来验证，有可能导致死循环的结果。

5. 【强制】禁止向 HTML 页面输出未经安全过滤或未正确转义的用户数据。

6. 【强制】表单、AJAX 提交必须执行 CSRF 安全验证。
    > 说明：CSRF(Cross-site request forgery)跨站请求伪造是一类常见编程漏洞。对于存在 CSRF 漏洞的应用/网站，攻击者可以事先构造好 URL，只要受害者用户一访问，后台便在用户不知情的情况下对数据库中用户参数进行相应修改。

7. 【强制】在使用平台资源，譬如短信、邮件、电话、下单、支付，必须实现正确的防重放的机制，如数量限制、疲劳度控制、验证码校验，避免被滥刷而导致资损。
    > 说明：如注册时发送验证码到手机，如果没有限制次数和频率，那么可以利用此功能骚扰到其它用户，并造成短信平台资源浪费。

8. 【推荐】发贴、评论、发送即时消息等用户生成内容的场景必须实现防刷、文本内容违禁词过滤等风控策略。

## 五、MySQL 数据库

### (一)建表规约

1. 【强制】表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。
    > 说明：任何字段如果为非负数，必须是 unsigned。
    >> 注意：POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在\<resultMap\>设置从 is_xxx 到 Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取值含义与取值范围。

2. 【强制】表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。
    > 说明：MySQL 在 Windows 下不区分大小写，但在 Linux 下默认是区分大小写。因此，数据库名、表名、字段名，都不允许出现任何大写字母，避免节外生枝。

3. 【强制】表名不使用复数名词。
    > 说明：表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于 DO 类名也是单数形式，符合表达习惯。

4. 【强制】禁用保留字，如 desc、range、match、delayed 等，请参考 MySQL 官方保留字。

5. 【强制】主键索引名为 pk_字段名；唯一索引名为 uk_字段名；普通索引名则为 idx_字段名。
    > 说明：pk_ 即 primary key；uk_ 即 unique key；idx_ 即 index 的简称。

6. 【强制】小数类型为 decimal，禁止使用 float 和 double。
    > 说明：float 和 double 在存储的时候，存在精度损失的问题，很可能在值的比较时，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数分开存储。

7. 【强制】如果存储的字符串长度几乎相等，使用 char 定长字符串类型。

8. 【强制】varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率。

9. 【强制】表必备三字段：id, gmt_create, gmt_modified。
    > 说明：其中 id 必为主键，类型为 bigint unsigned、单表时自增、步长为 1。gmt_create,gmt_modified 的类型均为 datetime 类型，前者现在时表示主动创建，后者过去分词表示被动更新。

10. 【推荐】表的命名最好是加上“业务名称_表的作用”。

11. 【推荐】库名与应用名称尽量一致。

12. 【推荐】如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释。

13. 【推荐】字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循：  
    1）不是频繁修改的字段。  
    2）不是 varchar 超长字段，更不能是 text 字段。

14. 【推荐】单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。
    > 说明：如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。

15. 【参考】合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度。

### (二)索引规约

1. 【强制】业务上具有唯一特性的字段，即使是多个字段的组合，也必须建成唯一索引。
    > 说明：不要以为唯一索引影响了 insert 速度，这个速度损耗可以忽略，但提高查找速度是明显的；另外，即使在应用层做了非常完善的校验控制，只要没有唯一索引，根据墨菲定律，必然有脏数据产生。

2. 【强制】超过三个表禁止 join。需要 join 的字段，数据类型必须绝对一致；多表关联查询时，保证被关联的字段需要有索引。
    > 说明：即使双表 join 也要注意表索引、SQL 性能。

3. 【强制】在 varchar 字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据实际文本区分度决定索引长度即可。
    > 说明：索引的长度与区分度是一对矛盾体，一般对字符串类型数据，长度为 20 的索引，区分度会高达 90%以上，可以使用 count(distinct left(列名, 索引长度))/count(*)的区分度来确定。

4. 【强制】页面搜索严禁左模糊或者全模糊，如果需要请走搜索引擎来解决。
    > 说明：索引文件具有 B-Tree 的最左前缀匹配特性，如果左边的值未确定，那么无法使用此索引。

5. 【推荐】如果有 order by 的场景，请注意利用索引的有序性。order by 最后的字段是组合索引的一部分，并且放在索引组合顺序的最后，避免出现 file_sort 的情况，影响查询性能。

6. 【推荐】利用覆盖索引来进行查询操作，避免回表。
    > 说明：如果一本书需要知道第 11 章是什么标题，会翻开第 11 章对应的那一页吗？目录浏览一下就好，这个目录就是起到覆盖索引的作用。

7. 【推荐】利用延迟关联或者子查询优化超多分页场景。
    > 说明：MySQL 并不是跳过 offset 行，而是取 offset+N 行，然后返回放弃前 offset 行，返回 N 行，那当 offset 特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行 SQL 改写。

8. 【推荐】SQL 性能优化的目标：至少要达到 range 级别，要求是 ref 级别，如果可以是 consts 最好。
    > 说明：  
    > 1）consts 单表中最多只有一个匹配行（主键或者唯一索引），在优化阶段即可读取到数据。  
    > 2）ref 指的是使用普通的索引（normal index）。  
    > 3）range 对索引进行范围检索。

9. 【推荐】建组合索引的时候，区分度最高的在最左边。
    > 说明：存在非等号和等号混合时，在建索引时，请把等号条件的列前置。如：where c>? and d=? 那么即使 c 的区分度更高，也必须把 d 放在索引的最前列，即索引 idx_d_c。

10. 【推荐】防止因字段类型不同造成的隐式转换，导致索引失效。

11. 【参考】创建索引时避免有如下极端误解：  
    1）宁滥勿缺。认为一个查询就需要建一个索引。  
    2）宁缺勿滥。认为索引会消耗空间、严重拖慢更新和新增速度。  
    3）抵制惟一索引。认为业务的惟一性一律需要在应用层通过“先查后插”方式解决。

### (三)SQL 语句

1. 【强制】不要使用 count(列名)或 count(常量)来替代 count(*)，count(*)是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。
    > 说明：count(*)会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行。

2. 【强制】count(distinct col) 计算该列除 NULL 之外的不重复行数，注意 count(distinct col1, col2) 如果其中一列全为 NULL，那么即使另一列有不同的值，也返回为 0。

3. 【强制】当某一列的值全是 NULL 时，count(col)的返回结果为 0，但 sum(col)的返回结果为 NULL，因此使用 sum()时需注意 NPE 问题。

4. 【强制】使用 ISNULL()来判断是否为 NULL 值。
    > 说明：NULL 与任何值的直接比较都为 NULL。  
    > 1） NULL<>NULL 的返回结果是 NULL，而不是 false。  
    > 2） NULL=NULL 的返回结果是 NULL，而不是 true。  
    > 3） NULL<>1 的返回结果是 NULL，而不是 true。  

5. 【强制】在代码中写分页查询逻辑时，若 count 为 0 应直接返回，避免执行后面的分页语句。

6. 【强制】不得使用外键与级联，一切外键概念必须在应用层解决。
    > 说明：以学生和成绩的关系为例，学生表中的 student_id是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群；级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库的插入速度。

7. 【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。

8. 【强制】数据订正（特别是删除、修改记录操作）时，要先 select，避免出现误删除，确认无误才能执行更新语句。

9. 【推荐】in 操作能避免则避免，若实在避免不了，需要仔细评估 in 后边的集合元素数量，控制在 1000 个之内。

10. 【参考】如果有国际化需要，所有的字符存储与表示，均以 utf-8 编码，注意字符统计函数的区别。
    > 说明：
    > ``` SQL
    > SELECT LENGTH("轻松工作")； 返回为 12
    > SELECT CHARACTER_LENGTH("轻松工作")； 返回为 4
    > ```
    > 如果需要存储表情，那么选择 utf8mb4 来进行存储，注意它与 utf-8 编码的区别。

11. 【参考】TRUNCATE TABLE 比 DELETE 速度快，且使用的系统和事务日志资源少，但 TRUNCATE 无事务且不触发 trigger，有可能造成事故，故不建议在开发代码中使用此语句。
    > 说明：TRUNCATE TABLE 在功能上与不带 WHERE 子句的 DELETE 语句相同。

### (四)ORM 映射

1. 【强制】在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明。
    > 说明：  
    > 1）增加查询分析器解析成本。  
    > 2）增减字段容易与 resultMap 配置不一致。  
    > 3）无用字段增加网络消耗，尤其是 text 类型的字段。  

2. 【强制】POJO 类的布尔属性不能加 is，而数据库字段必须加 is_，要求在 resultMap 中进行字段与属性之间的映射。
    > 说明：参见定义 POJO 类以及数据库字段定义规定，在\<resultMap\>中增加映射，是必须的。在 MyBatis Generator 生成的代码中，需要进行对应的修改。

3. 【强制】不要用 resultClass 当返回参数，即使所有类属性名与数据库字段一一对应，也需要定义；反过来，每一个表也必然有一个 POJO 类与之对应。
    > 说明：配置映射关系，使字段与 DO 类解耦，方便维护。

4. 【强制】sql.xml 配置参数使用：#{}，#param# 不要使用${} 此种方式容易出现 SQL 注入。

5. 【强制】iBATIS 自带的 queryForList(String statementName,int start,int size)不推荐使用。
    > 说明：其实现方式是在数据库取到 statementName 对应的SQL语句的所有记录，再通过 subList 取 start,size 的子集合。

6. 【强制】不允许直接拿 HashMap 与 Hashtable 作为查询结果集的输出。
说明：resultClass=”Hashtable”，会置入字段名和属性值，但是值的类型不可控。

7. 【强制】更新数据表记录时，必须同时更新记录对应的 gmt_modified 字段值为当前时间。

8. 【推荐】不要写一个大而全的数据更新接口。传入为 POJO 类，不管是不是自己的目标更新字段，都进行 update table set c1=value1,c2=value2,c3=value3; 这是不对的。执行 SQL 时，不要更新无改动的字段，一是易出错；二是效率低；三是增加 binlog 存储。

9. 【参考】@Transactional 事务不要滥用。事务会影响数据库的 QPS，另外使用事务的地方需要考虑各方面的回滚方案，包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等。

10. 【参考】\<isEqual\>中的 compareValue 是与属性值对比的常量，一般是数字，表示相等时带上此条件；\<isNotEmpty\>表示不为空且不为 null 时执行；\<isNotNull\>表示不为 null 值时执行。







## 七、工程结构

### (一)应用分层

1. 【推荐】图中默认上层依赖于下层，箭头关系表示可直接依赖，如：开放接口层可以依赖于 Controller 层，也可以直接依赖于 Service 层，依此类推：

    ![应用分层][base64image]

    * 开放接口层：可直接封装 Service 方法暴露成 RPC 接口；通过 Web 封装成 http 接口；进行网关安全控制、流量控制等。
    * Controller 层：主要是对访问控制进行转发，各类基本参数校验，或者不复用的业务简单处理等。
    * Service 层：相对具体的业务逻辑服务层。
    * Manager 层：通用业务处理层，它有如下特征：  

            1） 对第三方平台封装的层，预处理返回结果及转化异常信息；  
            2） 对 Service 层通用能力的下沉，如缓存方案、中间件通用处理；  
            3） 与 Mapper 层交互，对多个 Mapper 的组合复用。  
    * Mapper 层：数据访问层，与底层 MySQL、Oracle、Hbase 等进行数据交互。
    * 外部接口或第三方平台：包括其它部门 RPC 开放接口，基础平台，其它公司的 HTTP 接口。

2. 【参考】 （分层异常处理规约）在 Mapper 层，产生的异常类型有很多，无法用细粒度的异常进行 catch，使用 catch(Exception e)方式，并 throw new DAOException(e)，不需要打印日志，因为日志在 Manager/Service 层一定需要捕获并打印到日志文件中去，如果同台服务器再打日志，浪费性能和存储。在 Service 层出现异常时，必须记录出错日志到磁盘，尽可能带上参数信息，相当于保护案发现场。如果 Manager 层与 Service 同机部署，日志方式与 Mapper 层处理一致，如果是单独部署，则采用与 Service 一致的处理方式。Controller 层绝不应该继续往上抛异常，因为已经处于顶层，如果意识到这个异常将导致页面无法正常渲染，那么就应该直接跳转到友好错误页面，加上用户容易理解的错误提示信息。开放接口层要将异常处理成错误码和错误信息方式返回。

3. 【参考】分层领域模型规约：
    * DO（Data Object）：此对象与数据库表结构一一对应，通过 DAO 层向上传输数据源对象。
    * DTO（Data Transfer Object）：数据传输对象，Service 或 Manager 向外传输的对象。
    * BO（Business Object）：业务对象，由 Service 层输出的封装业务逻辑的对象。
    * AO（Application Object）：应用对象，在 Web 层与 Service 层之间抽象的复用对象模型，极为贴近展示层，复用度不高。
    * VO（View Object）：显示层对象，通常是 Web 向模板渲染引擎层传输的对象。
    * Query：数据查询对象，各层接收上层的查询请求。注意超过 2 个参数的查询封装，禁止使用 Map 类来传输。

### (二)二方库依赖

1. 【强制】定义 GAV 遵从以下规则：  
    1） GroupID 格式：com.{公司/BU }.业务线 [.子业务线]，最多 4 级。
    > 说明：{公司/BU} 例如：alibaba/taobao/tmall/aliexpress 等 BU 一级；子业务线可选。

    2） ArtifactID 格式：产品线名-模块名。语义不重复不遗漏，先到中央仓库去查证一下。  
    3） Version：详细规定参考下方。

2. 【强制】二方库版本号命名方式：主版本号.次版本号.修订号  
    1） 主版本号：产品方向改变，或者大规模 API 不兼容，或者架构不兼容升级。  
    2） 次版本号：保持相对兼容性，增加主要功能特性，影响范围极小的 API 不兼容修改。  
    3） 修订号：保持完全兼容性，修复 BUG、新增次要功能特性等。
    > 说明：注意起始版本号必须为：1.0.0，而不是 0.0.1 正式发布的类库必须先去中央仓库进行查证，使版本号有延续性，正式版本号不允许覆盖升级。如当前版本：1.3.3，那么下一个合理的版本号：1.3.4 或 1.4.0 或 2.0.0

3. 【强制】线上应用不要依赖 SNAPSHOT 版本（安全包除外）。
    > 说明：不依赖 SNAPSHOT 版本是保证应用发布的幂等性。另外，也可以加快编译时的打包构建。

4. 【强制】二方库的新增或升级，保持除功能点之外的其它 jar 包仲裁结果不变。如果有改变，必须明确评估和验证，建议进行 dependency:resolve 前后信息比对，如果仲裁结果完全不一致，那么通过 dependency:tree 命令，找出差异点，进行\<excludes\>排除 jar 包。

5. 【强制】二方库里可以定义枚举类型，参数可以使用枚举类型，但是接口返回值不允许使用枚举类型或者包含枚举类型的 POJO 对象。

6. 【强制】依赖于一个二方库群时，必须定义一个统一的版本变量，避免版本号不一致。
    > 说明：依赖 springframework-core,-context,-beans，它们都是同一个版本，可以定义一个变量来保存版本：${spring.version}，定义依赖的时候，引用该版本。

7. 【强制】禁止在子项目的 pom 依赖中出现相同的 GroupId，相同的 ArtifactId，但是不同的 Version。
    > 说明：在本地调试时会使用各子项目指定的版本号，但是合并成一个 war，只能有一个版本号出现在最后的 lib 目录中。可能出现线下调试是正确的，发布到线上却出故障的问题。

8. 【推荐】所有 pom 文件中的依赖声明放在\<dependencies\>语句块中，所有版本仲裁放在\<dependencyManagement\>语句块中。
    > 说明：\<dependencyManagement\>里只是声明版本，并不实现引入，因此子项目需要显式的声明依赖，version 和 scope 都读取自父 pom。而\<dependencies\>所有声明在主 pom 的\<dependencies\>里的依赖都会自动引入，并默认被所有的子项目继承。

9. 【推荐】二方库不要有配置项，最低限度不要再增加配置项。

10. 【参考】为避免应用二方库的依赖冲突问题，二方库发布者应当遵循以下原则：  
    1）精简可控原则。移除一切不必要的 API 和依赖，只包含 Service API、必要的领域模型对象、Utils 类、常量、枚举等。如果依赖其它二方库，尽量是 provided 引入，让二方库使用者去依赖具体版本号；无 log 具体实现，只依赖日志框架。  
    2）稳定可追溯原则。每个版本的变化应该被记录，二方库由谁维护，源码在哪里，都需要能方便查到。除非用户主动升级版本，否则公共二方库的行为不应该发生变化。

### (三)服务器

1. 【推荐】高并发服务器建议调小 TCP 协议的 time_wait 超时时间。
    > 说明：操作系统默认 240 秒后，才会关闭处于 time_wait 状态的连接，在高并发访问下，服务器端会因为处于 time_wait 的连接数太多，可能无法建立新的连接，所以需要在服务器上调小此等待值。

2. 【推荐】调大服务器所支持的最大文件句柄数（File Descriptor，简写为 fd）。
    > 说明：主流操作系统的设计是将 TCP/UDP 连接采用与文件一样的方式去管理，即一个连接对应于一个 fd。主流的 linux 服务器默认所支持最大 fd 数量为 1024，当并发连接数很大时很容易因为 fd 不足而出现“open too many files”错误，导致新的连接无法建立。 建议将 linux 服务器所支持的最大句柄数调高数倍（与服务器的内存数量相关）。

3. 【推荐】给 JVM 环境参数设置-XX:+HeapDumpOnOutOfMemoryError 参数，让 JVM 碰到 OOM 场景时输出 dump 信息。
    > 说明：OOM 的发生是有概率的，甚至相隔数月才出现一例，出错时的堆内信息对解决问题非常有帮助。

4. 【推荐】在线上生产环境，JVM 的 Xms 和 Xmx 设置一样大小的内存容量，避免在 GC 后调整堆大小带来的压力。

5. 【参考】服务器内部重定向使用 forward；外部重定向地址使用 URL 拼装工具类来生成，否则会带来 URL 维护不一致的问题和潜在的安全风险。

[base64image]:data:image/png;base64,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