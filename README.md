# noMoreForm-fontend

不想再写单form应用了！

noMoreForm 拖拽式生成表单，发布表单并管理表单数据。



## 使用

- [Vue](https://cn.vuejs.org/)
- [iView](https://www.iviewui.com/docs/guide/install)
- [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)

> Ref：

- [vue-formbuilder](https://github.com/mrabit/vue-formbuilder)



## 运行





## 数据结构

### 表单模板数据

```json
{
    "template_form": [ // 模板控件数据list
        {	
            // 单个控件元数据
            "ele": "title",
            "obj": {
                "config": true,
                "hasLine": true,
                "label": "测试表单标题",
                "level": 3,
                "listIndex": 0,
                "loading": false,
                "marginBottom": 24,
                "marginTop": 20,
                "modalTitle": "标题",
                "textAlign": "center"
            }
        },
        …… // 具体看下面 单个控件元数据
    ]
}
```

其他属性慢慢添加，如是否可见，外观，css等。



### 单个控件元数据

> 相同的配置字段不多重复注释。

#### title

```json
{
    "ele": "title", // 控件元素名
    "obj": {
        "config": true, // 是否可配置
        "hasLine": true,
        "label": "测试表单标题", // 标题内容
        "level": 3, // 标题标签 h1-h6
        "listIndex": 0, // 控件在当前表单所有控件list的index索引值
        "loading": false,
        "marginBottom": 24, // 底部距离下个元素的距离（默认iview已提供一定值）
        "marginTop": 20, // 顶部距离上个元素的距离
        "modalTitle": "标题", // 配置框的title
        "textAlign": "center" // 对齐方式
    }
}
```



#### hr

```json
{
    "ele": "hr",
    "obj": {
        "config": true,
        "listIndex": 1,
        "loading": false,
        "marginBottom": 24,
        "marginTop": 20,
        "modalTitle": ""
    }
}
```



#### p

```json
{
    "ele": "p",
    "obj": {
        "color": "#1C8CEC", // 标签颜色
        "config": true,
        "label": "测试文本标签", // 标签内容
        "listIndex": 2,
        "loading": false,
        "marginBottom": 24,
        "marginTop": 10,
        "modalTitle": "文本标签",
        "textAlign": "center" // 对齐方式
    }
}
```



#### input

 ```json
{
    "ele": "input", 
    "obj": {
        "config": true, // 是否可配置
        "dict": "{\"id\":1,\"label\":\"姓名\",\"name\":\"realName\",\"type\":\"input\"}", // 对应数据字典
        "inlineBlock": false, // 是否内联
        "label": "姓名", // label值
        "listIndex": 3, 
        "loading": false, 
        "maxLength": 20, // 最大长度
        "modalTitle": "输入框", 
        "name": "realName", // 表单的name，若选择数据字典，则会对应赋值。默认为 当前控件类型+index值
        "placeholder": "", // input的占位符
        "relation": false, 
        "relation_name": "",
        "relation_value": "",
        "require": true, // 是否必要
        "ruleError": "该字段不能为空", // 校验未通过错误提示
        "type": "input", // 控件类型
        "value": "", 
        "visibility": true // 是否（渲染）可见
    }
}
 ```



#### radio

```json
{
    "ele": "radio",
    "obj": {
        "config": true,
        "dict": "{\"id\":1,\"items\":[{\"label_name\":\"男\",\"label_value\":\"1\"},{\"label_name\":\"女\",\"label_value\":\"2\"}],\"label\":\"性别\",\"name\":\"gender\",\"type\":\"radio\"}",
        "inlineBlock": false,
        "items": [ // items为选项的数据，只有radio select CheckBox拥有，数据字典选择自定义时，items和dict可能会不相同
            {
                "label_name": "男",
                "label_value": "1"
            },
            {
                "label_name": "女",
                "label_value": "2"
            }
        ],
        "label": "性别",
        "listIndex": 4,
        "loading": false,
        "modalTitle": "单选框",
        "name": "gender",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": true,
        "ruleError": "请选择",
        "type": "radio",
        "value": "",
        "visibility": true
    }
}
```



#### select

```json
{
    "ele": "select",
    "obj": {
        "config": true,
        "dict": "{\"id\":0,\"items\":[{\"label_name\":\"选项1\",\"label_value\":\"1\"},{\"label_name\":\"选项2\",\"label_value\":\"2\"}],\"label\":\"自定义\",\"name\":\"\",\"type\":\"select\"}", // 数据字典选择自定义，可以自由添加选项
        "inlineBlock": false,
        "items": [ // select下拉框的 显示值和value值，value为递增数字
            {
                "label_name": "想坐上时光机回到那个时候",
                "label_value": "1"
            },
            {
                "label_name": "想出去走走",
                "label_value": "2"
            },
            {
                "label_name": "想要经济自由",
                "label_value": "3"
            },
            {
                "label_name": "想要回去上学",
                "label_value": "4"
            }
        ],
        "label": "我想",
        "listIndex": 5,
        "loading": false,
        "modalTitle": "选择框",
        "name": "select5",
        "placeholder": "你最想做的事？",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": true,
        "ruleError": "请选择",
        "type": "select",
        "value": "",
        "visibility": true
    }
}
```



#### checkbox

```json
{
    "ele": "checkbox",
    "obj": {
        "config": true,
        "dict": "{\"id\":0,\"items\":[{\"label_name\":\"选项1\",\"label_value\":\"1\"},{\"label_name\":\"选项2\",\"label_value\":\"2\"}],\"label\":\"自定义\",\"name\":\"\",\"type\":\"checkbox\"}", // 数据字典选择自定义，可以自由添加选项
        "inlineBlock": false,
        "items": [ // checkbox 待选框选项
            {
                "label_name": "咖啡",
                "label_value": "1"
            },
            {
                "label_name": "牛奶",
                "label_value": "2"
            },
            {
                "label_name": "果汁",
                "label_value": "3"
            }
        ],
        "label": "喝什么",
        "listIndex": 6,
        "loading": false,
        "modalTitle": "多选框",
        "name": "checkbox6",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": true,
        "ruleError": "该选项不能为空",
        "type": "checkbox",
        "visibility": true
    }
}
```



#### datepicker

```json
{
    "ele": "datepicker",
    "obj": {
        "config": true,
        "format": "yyyy年MM月dd日", // 时间format格式
        "inlineBlock": false,
        "label": "时间选择",
        "listIndex": 7,
        "loading": false,
        "modalTitle": "时间选择",
        "name": "datepicker7",
        "placeholder": "请选择日期",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": true,
        "ruleError": "选项不能为空",
        "type": "datepicker",
        "value": "",
        "visibility": true
    }
}
```



#### text

```json
{
    "ele": "text",
    "obj": {
        "config": true,
        "inlineBlock": false,
        "label": "说点什么",
        "listIndex": 8,
        "loading": false,
        "maxLength": 200,
        "maxRows": 6,
        "modalTitle": "文本域",
        "name": "textarea8",
        "placeholder": "想说点什么",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": true,
        "ruleError": "该字段不能为空",
        "type": "textarea",
        "value": "",
        "visibility": true
    }
}
```



后续增加其他控件，如上传文件、图片。

![](https://ww1.sinaimg.cn/large/007i4MEmgy1g0qud3db39j30i00k0q3f.jpg)

上述所有控件效果图。



### 数据字典

```json
{
    "checkbox": [// CheckBox的数据字段选项
        {
            "id": 0,
            "items": [// 默认自定义的选项
                {
                    "label_name": "选项1",
                    "label_value": "1"
                },
                {
                    "label_name": "选项2",
                    "label_value": "2"
                }
            ],
            "label": "自定义",
            "name": "", // 自定义 name为空。选择时会处理成 控件类型+控件当前在编辑的表单中的index
            "type": "checkbox"
        }
    ],
    "input": [// input 数据字典，之后会加入验证字段
        {
            "id": 0,
            "label": "自定义",
            "name": "",
            "type": "input"
        },
        {
            "id": 1,
            "label": "姓名",
            "name": "realName",
            "type": "input"
        },
        {
            "id": 2,
            "label": "电话",
            "name": "phone",
            "type": "input"
        },
        {
            "id": 3,
            "label": "学号",
            "name": "stuId",
            "type": "input"
        },
        {
            "id": 4,
            "label": "专业",
            "name": "major",
            "type": "input"
        },
        {
            "id": 5,
            "label": "QQ",
            "name": "qq",
            "type": "input"
        },
        {
            "id": 6,
            "label": "微信",
            "name": "weChat",
            "type": "input"
        }
    ],
    "radio": [ // radio 数据字典 
        {
            "id": 0,
            "items": [ // 自定义 单选框 初始选项
                {
                    "label_name": "单选框1",
                    "label_value": "1"
                },
                {
                    "label_name": "单选框2",
                    "label_value": "2"
                }
            ],
            "label": "自定义",
            "name": "",
            "type": "radio"
        },
        {
            "id": 1,
            "items": [
                {
                    "label_name": "男",
                    "label_value": "1"
                },
                {
                    "label_name": "女",
                    "label_value": "2"
                }
            ],
            "label": "性别",
            "name": "gender",
            "type": "radio"
        }
    ],
    "select": [ // select 数据字典
        {
            "id": 0,
            "items": [ // 自定义 下拉框 初始选项
                {
                    "label_name": "选项1",
                    "label_value": "1"
                },
                {
                    "label_name": "选项2",
                    "label_value": "2"
                }
            ],
            "label": "自定义",
            "name": "",
            "type": "select"
        }
    ]
}
```

