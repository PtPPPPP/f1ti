import { Question } from '../types'

export const questions: Question[] = [
  {
    id: 1,
    text: '朋友临时鸽了你，你第一反应是？',
    options: [
      { text: '太好了，终于可以一个人瘫着了', scores: { social: 1, chaos: 1 } },
      { text: '立刻发朋友圈阴阳怪气', scores: { glamour: 3, social: 4 } },
      { text: '虽然不爽但算了，下次再约', scores: { pressure: 4, chaos: 1 } },
      { text: '已经在思考怎么让他请客补偿', scores: { strategy: 4, risk: 3 } },
    ],
  },
  {
    id: 2,
    text: '如果你的人生是一场比赛，最常出现什么旗？',
    options: [
      { text: '黄旗 —— 经常遇到状况，但总能安全度过', scores: { chaos: 3, pressure: 4 } },
      { text: '红旗 —— 动不动就暂停重来', scores: { chaos: 5, speed: 2 } },
      { text: '绿旗 —— 一路畅通，稳得一批', scores: { chaos: 1, precision: 4 } },
      { text: '黑白格旗 —— 每次都能提前搞定', scores: { speed: 5, strategy: 3 } },
    ],
  },
  {
    id: 3,
    text: '你最像哪种进站策略？',
    options: [
      { text: '早进站 undercut —— 先下手为强，抢占先机', scores: { strategy: 5, risk: 3 } },
      { text: '晚进站 overcut —— 先跑着，等别人全进去了我再动手', scores: { strategy: 4, precision: 4 } },
      { text: '一停到底 —— 能省则省，不想折腾', scores: { chaos: 1, speed: 1 } },
      { text: '随机进站 —— 什么时候想进就进，看心情', scores: { chaos: 5, risk: 5 } },
    ],
  },
  {
    id: 4,
    text: '开会被 cue 发言时，你的真实状态是？',
    options: [
      { text: '早就准备好了，条理清晰像排位赛单圈', scores: { precision: 5, pressure: 4 } },
      { text: '临场发挥，但总能妙语连珠', scores: { glamour: 4, risk: 3 } },
      { text: '大脑直接锁死，像在摩纳哥倒车入库', scores: { pressure: 1, chaos: 3 } },
      { text: '表面淡定点头，内心在跑逃生路线', scores: { strategy: 3, pressure: 2 } },
    ],
  },
  {
    id: 5,
    text: '同事/同学说你有问题，你通常会？',
    options: [
      { text: '立刻展开调查，收集证据，准备反驳 PPT', scores: { precision: 5, strategy: 4 } },
      { text: '嘴上说"好我改"，实际完全没听进去', scores: { social: 3, glamour: 3 } },
      { text: '直接问"你具体说说"—— 但你其实准备好了所有防御', scores: { pressure: 4, risk: 3 } },
      { text: 'emo 三小时然后在深夜跑步 10 公里', scores: { chaos: 3, speed: 3 } },
    ],
  },
  {
    id: 6,
    text: '你的人生事故通常发生在什么时候？',
    options: [
      { text: '一切看起来都很好的时候 —— 突然就上墙了', scores: { chaos: 5, risk: 4 } },
      { text: '从来不出事故，我的赛道宽度就是路肩', scores: { precision: 5, chaos: 1 } },
      { text: '每次快要到终点的时候 —— 然后就爆胎了', scores: { pressure: 2, chaos: 4 } },
      { text: '事故？我看别人事故比较多，我是吃瓜区', scores: { social: 4, chaos: 2 } },
    ],
  },
  {
    id: 7,
    text: '选一个最能形容你社交状态的比喻：',
    options: [
      { text: 'DRS 开启 —— 有人带节奏我就跟上，没人带就自己跑', scores: { social: 3, strategy: 3 } },
      { text: '安全车带领 —— 大家都在一起，慢慢走，不急', scores: { social: 4, chaos: 1 } },
      { text: '排位赛 flying lap —— 社交？等我先跑完这圈再聊', scores: { speed: 4, social: 1 } },
      { text: '第一圈一号弯大逃杀 —— 场面极度混乱但非常精彩', scores: { chaos: 5, glamour: 5 } },
    ],
  },
  {
    id: 8,
    text: '你觉得自己最让朋友受不了的地方是？',
    options: [
      { text: '太过完美主义，连吃饭都要先计划路线', scores: { precision: 5, speed: 1 } },
      { text: '情绪起伏像斯帕的天气，十分钟变三次', scores: { chaos: 4, pressure: 2 } },
      { text: '太爱在群聊里发长篇分析，像赛后的技术报告', scores: { strategy: 5, glamour: 2 } },
      { text: '什么事都要赌一把，包括"能不能赶上这趟地铁"', scores: { risk: 5, chaos: 3 } },
    ],
  },
  {
    id: 9,
    text: '朋友吵架后的处理方式：',
    options: [
      { text: '先冷三圈，等轮胎温度正常了再聊', scores: { strategy: 4, pressure: 4 } },
      { text: '当场全油门对线，吵完就翻篇', scores: { speed: 5, risk: 4 } },
      { text: '发一大段小作文，论证自己为什么对', scores: { precision: 5, glamour: 3 } },
      { text: '拉群找第三方当赛事干事裁决', scores: { social: 5, chaos: 3 } },
    ],
  },
  {
    id: 10,
    text: '周末晚上，你最有可能在做什么？',
    options: [
      { text: '在派对/聚会上当气氛组冠军', scores: { social: 5, glamour: 4 } },
      { text: '独自研究某个奇怪的知识点到凌晨三点', scores: { precision: 4, strategy: 4 } },
      { text: '随机出行 —— 去哪、几点、见谁全看心情', scores: { chaos: 4, risk: 4 } },
      { text: '把下周的行程全部计划好，精确到分钟', scores: { precision: 5, pressure: 3 } },
    ],
  },
  {
    id: 11,
    text: '如果人生可以选一个 F1 技能，你选哪个？',
    options: [
      { text: '晚刹车 —— 极限边缘试探的快感', scores: { risk: 5, speed: 4 } },
      { text: '完美的赛车线 —— 每件事都找到最优解', scores: { precision: 5, strategy: 4 } },
      { text: '轮胎管理 —— 比别人更能熬，坚持就是胜利', scores: { strategy: 5, pressure: 4 } },
      { text: '起步反应 —— 第一时间抓住机会的能力', scores: { speed: 5, risk: 3 } },
    ],
  },
  {
    id: 12,
    text: '你被拉进一个不熟的新群聊，你会？',
    options: [
      { text: '先观察十分钟，摸清局势后再决定怎么出场', scores: { strategy: 4, precision: 3 } },
      { text: '直接一个表情包轰炸，三秒内成为焦点', scores: { glamour: 5, social: 4 } },
      { text: '默默设成免打扰，假装没看到', scores: { social: 1, chaos: 1 } },
      { text: '先看一下都有谁，然后精准找到熟人搭话', scores: { precision: 3, strategy: 3 } },
    ],
  },
  {
    id: 13,
    text: '你觉得"准时"是什么意思？',
    options: [
      { text: '提前 15 分钟到，预留所有可能的意外', scores: { precision: 5, pressure: 3 } },
      { text: '"准时"就是踩着点到，卡着秒入场', scores: { risk: 3, speed: 3 } },
      { text: '迟到 5 分钟内都算准时，别那么紧绷', scores: { chaos: 3, social: 3 } },
      { text: '看情况，重要的人就准时，不重要的就随缘', scores: { strategy: 4, glamour: 2 } },
    ],
  },
  {
    id: 14,
    text: '你的人生如果写在维基百科上，最可能被标注什么？',
    options: [
      { text: '"本条目需由专家清理" —— 人生太复杂，没人能理清', scores: { chaos: 5, speed: 3 } },
      { text: '"本条目需要补充更多来源" —— 你的精彩故事没证据', scores: { glamour: 4, social: 3 } },
      { text: '"本条目格式需改进" —— 做得很多但包装不够', scores: { precision: 3, glamour: 1 } },
      { text: '"本条目被评为特色条目" —— 稳定优秀，堪称典范', scores: { precision: 5, pressure: 4 } },
    ],
  },
  {
    id: 15,
    text: '你觉得自己的情绪像什么？',
    options: [
      { text: '像蒙扎的直线 —— 来得快去得快，全油门输出', scores: { speed: 5, glamour: 3 } },
      { text: '像斯帕的天气 —— 你永远不知道下一分钟是晴是雨', scores: { chaos: 5, risk: 3 } },
      { text: '像银石的高速弯 —— 看起来很流畅，其实身体承受巨大 G 力', scores: { pressure: 4, precision: 3 } },
      { text: '像新加坡夜赛 —— 表面冷静发光，实际高温内耗', scores: { glamour: 4, pressure: 2 } },
    ],
  },
  {
    id: 16,
    text: '面对一个突发大难题，你的第一反应是？',
    options: [
      { text: '肾上腺素飙升！终于到了展现实力的时候', scores: { pressure: 5, risk: 4 } },
      { text: '先列清单，拆解问题，制定方案，逐步执行', scores: { precision: 5, strategy: 4 } },
      { text: '先问问身边的人怎么办，集思广益', scores: { social: 4, strategy: 3 } },
      { text: '慌了但装作很镇定，然后在内心尖叫', scores: { pressure: 1, glamour: 3 } },
    ],
  },
  {
    id: 17,
    text: '你旅行的时候是什么风格？',
    options: [
      { text: '攻略做 50 页，每天精确到小时，像打卡排位赛', scores: { precision: 5, strategy: 4 } },
      { text: '只订机票酒店，剩下的到了再说', scores: { risk: 4, chaos: 3 } },
      { text: '全程在拍照打卡发社交媒体，旅行的意义是分享', scores: { glamour: 5, social: 4 } },
      { text: '宅在酒店，偶尔出门，主打一个来过', scores: { speed: 1, social: 1 } },
    ],
  },
  {
    id: 18,
    text: '如果有人当面贬低你喜欢的车手/车队，你会？',
    options: [
      { text: '掏出一份数据详实的分析报告，逐条反驳', scores: { precision: 5, strategy: 4 } },
      { text: '当场对线，火力全开，今日不是你死就是我亡', scores: { risk: 5, speed: 4 } },
      { text: '意味深长地笑一笑，让他们继续错下去', scores: { pressure: 4, glamour: 3 } },
      { text: '在群里发动后援团一起上', scores: { social: 5, chaos: 3 } },
    ],
  },
  {
    id: 19,
    text: '你的人生如果被直播，弹幕最可能刷什么？',
    options: [
      { text: '"这操作我看不懂"', scores: { chaos: 4, strategy: 4 } },
      { text: '"太稳了吧哥哥/姐姐"', scores: { precision: 4, pressure: 3 } },
      { text: '"节目效果拉满"', scores: { glamour: 5, chaos: 3 } },
      { text: '"他怎么又在卷"', scores: { speed: 4, risk: 3 } },
    ],
  },
  {
    id: 20,
    text: '熬夜到凌晨三点的原因通常是？',
    options: [
      { text: '在看一个完全没用的东西，但就是停不下来', scores: { chaos: 4, precision: 2 } },
      { text: '在和朋友聊人生聊理想聊到天亮', scores: { social: 5, glamour: 3 } },
      { text: '在复盘今天的事并规划明天的事', scores: { strategy: 4, precision: 4 } },
      { text: '我也不知道为什么，一天就过去了', scores: { chaos: 5, speed: 2 } },
    ],
  },
  {
    id: 21,
    text: '你对待钱的态度是？',
    options: [
      { text: '有详细预算表，每一笔都记账', scores: { precision: 5, strategy: 3 } },
      { text: '赚了就花，快乐最重要，明天的事明天再说', scores: { risk: 4, glamour: 3 } },
      { text: '大部分存起来，偶尔奖励自己一下', scores: { pressure: 3, strategy: 4 } },
      { text: '花的比赚的多，但从不焦虑，因为相信自己的未来', scores: { risk: 5, chaos: 3 } },
    ],
  },
  {
    id: 22,
    text: '一个人去餐厅吃饭，你最可能做什么？',
    options: [
      { text: '觉得尴尬，快速吃完走人', scores: { social: 1, pressure: 2 } },
      { text: '享受独处，安安静静观察周围的人和事', scores: { precision: 3, chaos: 1 } },
      { text: '拿出手机假装很忙，实际上在刷毫无意义的内容', scores: { chaos: 3, glamour: 2 } },
      { text: '和服务员聊天，三十分钟后加了三个好友', scores: { social: 5, glamour: 4 } },
    ],
  },
  {
    id: 23,
    text: '你觉得自己十年后会是什么样子？',
    options: [
      { text: '已经把所有能规划的全都规划好了，按部就班', scores: { strategy: 5, precision: 4 } },
      { text: '完全不知道，但觉得一定会非常精彩', scores: { chaos: 3, risk: 4 } },
      { text: '不管怎样，一定会在某个领域成为传奇', scores: { speed: 4, glamour: 5 } },
      { text: '只要比现在开心就行，其他无所谓', scores: { pressure: 3, social: 3 } },
    ],
  },
  {
    id: 24,
    text: '最后一个问题：你觉得做这套测试题的过程像什么？',
    options: [
      { text: '像跑排位赛 —— 每一题都认真思考，力求最优', scores: { precision: 5, strategy: 3 } },
      { text: '像开正赛 —— 有快有慢，有顺有逆，但坚持跑完了', scores: { pressure: 4, chaos: 2 } },
      { text: '像刷最快圈 —— 一路全油门到底，爽就完了', scores: { speed: 5, risk: 3 } },
      { text: '像安全车带领的热身圈 —— 慢悠悠逛了一圈，感觉不错', scores: { chaos: 1, social: 3 } },
    ],
  },
]
