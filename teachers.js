// 教员数据文件 - 可手动修改此文件来更新教员信息
// 每个教员对象包含以下字段：
// id: 唯一标识符
// name: 姓名
// gender: 性别（男/女）
// school: 学校
// grade: 年级
// subjects: 任教科目数组
// availableTime: 方便的时间
// expectedSalary: 预期薪酬（元/小时）
// pdfUrl: PDF简历链接
// detailInfo: 详细信息（可选，用于详情页的额外描述）

const teachersData = [
  {
    id: "T001",
    name: "郝平安 ",
    gender: "女",
    school: "南方科技大学",
    grade: "大一",
    subjects: ["中学英语",  "雅思", "化学"],
    availableTime: "周末、工作日晚上7-9点",
    expectedSalary: 150,
    pdfUrl: "T001.pdf",
    detailInfo: "本人为南方科技大学大一在读学生，高考英语、雅思、多邻国成绩优异，英语基础扎实且应试经验丰富。擅长高中英语模块化拆分教学，兼顾应试提分与综合能力提升，拥有真实家教提分案例，教学耐心细致、方法系统高效。"
  },
  {
    id: "T002",
    name: "曾淑玲",
    gender: "女",
    school: "南方科技大学",
    grade: "研一",
    subjects: ["英语", "数学", "物理", "化学"],
    availableTime: "周六日、寒暑假",
    expectedSalary: 200,
    pdfUrl: "T002.pdf",
    detailInfo: "专业排名前 5%，多次获得国家级、省级和校级奖学金,大学英语成绩均为满绩，有一段德国公费交换经历,辩论队队员，有一段腾讯运营实习经历，同时也爱好运动，如骑行、游泳、羽毛球等，外向开朗，善于沟通，逻辑清晰，思辨能力强，做人做事认真负责"
  },
  {
    id: "T003",
    name: "苏晓丹",
    gender: "女",
    school: "南方科技大学",
    grade: "研一",
    subjects: ["物理", "化学"],
    availableTime: "工作日晚间、周日",
    expectedSalary: "100-200",
    pdfUrl: "T003.pdf",
    detailInfo: "南科大化学研一，持有高中化学教师资格证，数理化功底扎实；小初高全科辅导经验丰富，多段真实快速提分案例，擅长基础夯实与错题梳理，耐心负责、提分效果显著"
  },
  {
    id: "T004",
    name: "姜跃琳",
    gender: "女",
    school: "南方科技大学",
    grade: "大四",
    subjects: ["小学全科", "小学奥数", "初中数学"],
    availableTime: "周六上午9-12，下午14~18点",
    expectedSalary: "100-200",
    pdfUrl: "T004.pdf",
    detailInfo: "南科大大四数据科学专业，基础扎实、成绩优异，英语六级 500+，逻辑清晰讲解细致。有机构助教与一对一提分经验，擅长小学、初中数学辅导，耐心会引导、擅归纳总结，能帮学生建立思路与自信。"
  },
  {
    id: "T005",
    name: "邱浩洋",
    gender: "男",
    school: "南方科技大学",
    grade: "大一",
    subjects: ["语文", "数学", "物理"],
    availableTime: "周末全天",
    expectedSalary: "100-200",
    pdfUrl: "T005.pdf",
    detailInfo: "海南高考 786 分、省排 168 名，全国高中数学奥赛铜牌得主，文理兼优、表达清晰。可教小初高全科，适配多版本教材，理科功底极强、文科素养突出，辅导覆盖面广。"
  }
];
