/**
 * 狗品种性格测试 - BigFive双维度版
 * 题目 = BigFive五维(38题)
 * 结果 = 狗品种人格（由BigFive计算得出，17种狗）
 */

const DOG_CONFIG = {
  theme: {
    title: "狗品种性格测试",
    subtitle: "测测你最像哪种狗",
    description: "38道题，测出你的狗狗人格",
    colors: {
      bg: "#1a1008", panel: "#2d1a0a", card: "#3d2510", border: "#5a3a1a",
      text: "#f5e8d0", muted: "#a08060", primary: "#f59e0b", accent: "#3b82f6"
    }
  },

  rarities: {
    legendary: { name: "传说", prob: 5, color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", stars: 5, emoji: "🌟" },
    epic:      { name: "史诗", prob: 10, color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", stars: 4, emoji: "💜" },
    rare:      { name: "稀有", prob: 25, color: "#3b82f6", gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)", stars: 3, emoji: "💎" },
    common:    { name: "普通", prob: 60, color: "#64748b", gradient: "linear-gradient(135deg, #64748b, #94a3b8)", stars: 2, emoji: "✨" }
  },

  // 17种狗品种，按BigFive性格维度配置
  dogs: [
    // ── 传说 5% ──
    { id:"tibetan_mastiff", name:"藏獒", emoji:"🦁", image:"/images/tibetan_mastiff.png", rarity:"legendary",
      traits:["威严","忠诚","守护"],
      description:"你是天生的守护者，身上散发着不容侵犯的气场。对家人绝对忠诚，面对危险毫不犹豫。你的存在感如同移动的堡垒，让人感到无比安心。",
      strength:"保护欲极强，勇敢无畏，意志坚定",
      weakness:"领地意识强，有时过于警惕",
      bestMatch:["金毛","德国牧羊犬"], worstMatch:["吉娃娃","哈士奇"], keyword:"王者护卫",
      profile:{ Extraversion:55, Agreeableness:50, Conscientiousness:95, Openness:40, Neuroticism:70 }},

    { id:"border_collie", name:"边境牧羊犬", emoji:"🧠", image:"/images/border_collie.png", rarity:"legendary",
      traits:["智慧","敏捷","专注"],
      description:"你是天才的代名词，智商超群，学习能力令人惊叹。专注力极强，一旦投入便全情以赴。你是天生的策略家，总能想到最优解。",
      strength:"智商极高，学习能力强，专注力惊人",
      weakness:"容易无聊，需要持续刺激",
      bestMatch:["金毛","柯基"], worstMatch:["斗牛犬","吉娃娃"], keyword:"天才智者",
      profile:{ Openness:85, Conscientiousness:95, Extraversion:60, Agreeableness:55, Neuroticism:25 }},

    // ── 史诗 10% ──
    { id:"german_shepherd", name:"德国牧羊犬", emoji:"🛡️", image:"/images/german_shepherd.png", rarity:"epic",
      traits:["忠诚","勇敢","正义"],
      description:"你是正义与秩序的化身，天生具有强烈的责任感。忠诚可靠，是朋友圈中最值得托付的存在。勇敢果断，面对挑战从不退缩。",
      strength:"责任感强，忠诚可靠，正义感爆棚",
      weakness:"有时过于严肃，不懂得放松",
      bestMatch:["藏獒","金毛"], worstMatch:["吉娃娃","沙皮犬"], keyword:"正义卫士",
      profile:{ Conscientiousness:95, Extraversion:65, Agreeableness:65, Openness:55, Neuroticism:30 }},

    { id:"golden_retriever", name:"金毛寻回犬", emoji:"☀️", image:"/images/golden_retriever.png", rarity:"epic",
      traits:["温暖","友善","热情"],
      description:"你是人间小太阳，走到哪都带着温暖的光芒。天性友善热情，对每个人都充满善意。你是朋友圈里的治愈系，总能让人心情变好。",
      strength:"温暖友善，热情开朗，治愈力强",
      weakness:"有时过于讨好，缺乏界限",
      bestMatch:["拉布拉多","萨摩耶"], worstMatch:["柴犬","吉娃娃"], keyword:"温暖阳光",
      profile:{ Extraversion:90, Agreeableness:95, Conscientiousness:65, Openness:55, Neuroticism:25 }},

    { id:"husky", name:"哈士奇", emoji:"❄️", image:"/images/husky.png", rarity:"epic",
      traits:["自由","活力","叛逆"],
      description:"你是自由的灵魂，精力充沛到让人惊叹。性格独立，不喜欢被束缚，总是充满活力。你的存在让生活不再无聊，充满惊喜。",
      strength:"精力旺盛，独立自主，幽默感强",
      weakness:"服从性低，专注力差",
      bestMatch:["阿拉斯加","萨摩耶"], worstMatch:["德国牧羊犬","斗牛犬"], keyword:"自由灵魂",
      profile:{ Extraversion:85, Openness:80, Conscientiousness:40, Agreeableness:45, Neuroticism:55 }},

    // ── 稀有 25% ──
    { id:"labrador", name:"拉布拉多", emoji:"🏊", image:"/images/labrador.png", rarity:"rare",
      traits:["友善","服从","快乐"],
      description:"你是完美的生活伴侣，性情温和，服从性极高。对人友善，对生活热爱。你的快乐具有强大的感染力，是家庭首选的温暖成员。",
      strength:"服从性高，性格稳定，适应力强",
      weakness:"容易发胖，需要持续关注",
      bestMatch:["金毛","边境牧羊犬"], worstMatch:["柴犬","吉娃娃"], keyword:"完美伴侣",
      profile:{ Extraversion:88, Agreeableness:90, Conscientiousness:70, Openness:50, Neuroticism:30 }},

    { id:"doberman", name:"杜宾犬", emoji:"⚡", image:"/images/doberman.png", rarity:"rare",
      traits:["敏捷","警觉","高贵"],
      description:"你是速度与警觉的完美结合，天生具有出众的第六感。优雅而有力，气质高贵。你的存在本身就是一种无形的保护。",
      strength:"反应敏捷，警觉性高，气质出众",
      weakness:"需要大量运动和心理刺激",
      bestMatch:["德国牧羊犬","藏獒"], worstMatch:["吉娃娃","斗牛犬"], keyword:"优雅护卫",
      profile:{ Extraversion:60, Conscientiousness:90, Openness:70, Agreeableness:50, Neuroticism:35 }},

    { id:"shiba", name:"柴犬", emoji:"🌾", image:"/images/shiba.png", rarity:"rare",
      traits:["独立","倔强","机智"],
      description:"你是倔强的小精灵，独立自主，不喜欢取悦他人。外表高冷实则内心戏很多，有着独特的幽默感。你是最有性格的小家伙。",
      strength:"独立自主，个性鲜明，不黏人",
      weakness:"服从性低，固执己见",
      bestMatch:["萨摩耶","沙皮犬"], worstMatch:["金毛","拉布拉多"], keyword:"傲娇精灵",
      profile:{ Openness:75, Extraversion:30, Agreeableness:40, Conscientiousness:55, Neuroticism:50 }},

    { id:"corgi", name:"柯基", emoji:"👑", image:"/images/corgi.png", rarity:"rare",
      traits:["活泼","自信","可爱"],
      description:"你是小身材大能量，虽然腿短但气场两米八。自信爆棚，性格活泼，走到哪都是焦点。你是朋友圈里的开心果和氛围担当。",
      strength:"自信爆棚，社交能力强，魅力四射",
      weakness:"有时过于自信，忽略警告",
      bestMatch:["边境牧羊犬","金毛"], worstMatch:["吉娃娃","斗牛犬"], keyword:"短腿王者",
      profile:{ Extraversion:95, Agreeableness:80, Conscientiousness:70, Openness:60, Neuroticism:35 }},

    { id:"malamute", name:"阿拉斯加雪橇犬", emoji:"❄️", image:"/images/malamute.png", rarity:"rare",
      traits:["友好","顽强","忠诚"],
      description:"你是极地探险家，顽强而忠诚，对家人充满爱。外表威武内心温柔，友善待人。你的耐力和意志力令人敬佩。",
      strength:"耐力惊人，性格温和，忠诚度高",
      weakness:"运动量大，需要大量活动空间",
      bestMatch:["哈士奇","萨摩耶"], worstMatch:["吉娃娃","斗牛犬"], keyword:"极地勇士",
      profile:{ Extraversion:80, Agreeableness:75, Conscientiousness:65, Openness:60, Neuroticism:30 }},

    // ── 普通 60% ──
    { id:"poodle", name:"贵宾犬", emoji:"🎩", image:"/images/poodle.png", rarity:"common",
      traits:["聪明","优雅","活泼"],
      description:"你是狗界的贵族，聪明伶俐，举止优雅。学习能力超强，是最容易被训练的品种之一。你懂得如何优雅地生活。",
      strength:"智商极高，学习能力强，爱好整洁",
      weakness:"需要定期美容打理",
      bestMatch:["金毛","边境牧羊犬"], worstMatch:["斗牛犬","吉娃娃"], keyword:"贵族绅士",
      profile:{ Openness:85, Conscientiousness:80, Extraversion:65, Agreeableness:70, Neuroticism:30 }},

    { id:"bulldog", name:"斗牛犬", emoji:"🛋️", image:"/images/bulldog.png", rarity:"common",
      traits:["淡定","倔强","忠诚"],
      description:"你是淡定的生活家，天塌下来都不急。性格沉稳，不爱运动，但忠诚度满分。你是完美的沙发伴侣。",
      strength:"情绪稳定，忠诚可靠，不闹腾",
      weakness:"懒惰，缺乏运动精神",
      bestMatch:["沙皮犬","吉娃娃"], worstMatch:["哈士奇","边境牧羊犬"], keyword:"沙发大师",
      profile:{ Neuroticism:20, Extraversion:40, Agreeableness:60, Conscientiousness:45, Openness:30 }},

    { id:"dalmatian", name:"斑点狗", emoji:"🎨", image:"/images/dalmatian.png", rarity:"common",
      traits:["活力","忠诚","独立"],
      description:"你是独特的艺术家，外观出众，性格充满活力。耐力好，喜欢奔跑，对主人忠诚。是一道移动的风景线。",
      strength:"活力充沛，外形独特，耐力好",
      weakness:"需要大量运动，容易分离焦虑",
      bestMatch:["哈士奇","阿拉斯加"], worstMatch:["斗牛犬","吉娃娃"], keyword:"艺术跑者",
      profile:{ Extraversion:80, Openness:70, Conscientiousness:60, Agreeableness:55, Neuroticism:45 }},

    { id:"chihuahua", name:"吉娃娃", emoji:"👀", image:"/images/chihuahua.png", rarity:"common",
      traits:["警觉","勇敢","黏人"],
      description:"你是小型犬中的战斗机，勇气可嘉，警觉性超高。黏人属性满点，对主人极度依赖。虽然小但气场不小。",
      strength:"警觉性高，勇敢护主，黏人可爱",
      weakness:"容易紧张，叫声频繁",
      bestMatch:["萨摩耶","沙皮犬"], worstMatch:["哈士奇","德国牧羊犬"], keyword:"小小勇士",
      profile:{ Extraversion:55, Neuroticism:85, Agreeableness:50, Conscientiousness:40, Openness:45 }},

    { id:"dachshund", name:"腊肠犬", emoji:"🌭", image:"/images/dachshund.png", rarity:"common",
      traits:["好奇","固执","活泼"],
      description:"你是好奇心大王，对一切充满探索欲。腿短身长，外形独特，性格固执但可爱。你是充满个性的小家伙。",
      strength:"好奇心强，性格有趣，适应力好",
      weakness:"容易过度吠叫，固执难训",
      bestMatch:["柯基","沙皮犬"], worstMatch:["德国牧羊犬","边境牧羊犬"], keyword:"好奇宝宝",
      profile:{ Extraversion:70, Openness:65, Conscientiousness:50, Agreeableness:60, Neuroticism:45 }},

    { id:"sharpei", name:"沙皮犬", emoji:"🗿", image:"/images/sharpei.png", rarity:"common",
      traits:["安静","独立","忠诚"],
      description:"你是沉稳的思想者，性格安静独立，不爱吠叫。对主人忠诚但表达含蓄，内心细腻。你是最有深度的安静美狗子。",
      strength:"安静沉稳，独立不黏人，内心细腻",
      weakness:"皮肤护理需求高，社交需从小培养",
      bestMatch:["斗牛犬","柴犬"], worstMatch:["哈士奇","柯基"], keyword:"忧郁智者",
      profile:{ Extraversion:25, Agreeableness:55, Conscientiousness:65, Openness:45, Neuroticism:35 }},

    { id:"samoyed", name:"萨摩耶", emoji:"😊", image:"/images/samoyed.png", rarity:"common",
      traits:["友善","乐观","爱笑"],
      description:"你是微笑天使，脸上永远挂着治愈的笑容。性格友善乐观，对人毫无防备。你是行走的阳光制造机。",
      strength:"笑容治愈，性格温暖，社交能力强",
      weakness:"需要大量陪伴，不适合工作繁忙的主人",
      bestMatch:["金毛","阿拉斯加"], worstMatch:["吉娃娃","沙皮犬"], keyword:"微笑天使",
      profile:{ Extraversion:88, Agreeableness:92, Openness:65, Conscientiousness:50, Neuroticism:30 }}
  ],

  // 38题，基于BigFive五维设计
  questions: [
    // ── Openness 开放性 (8题) ──
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"面对从未尝试过的新事物，你通常会？", opts:[{l:"A",t:"充满好奇，立刻想尝试",s:5},{l:"B",t:"有点兴趣，会观望一下",s:4},{l:"C",t:"谨慎考虑后再决定",s:3},{l:"D",t:"熟悉的事物更让我安心",s:1}]},
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"你喜欢阅读或关注哪类内容？", opts:[{l:"A",t:"哲学、艺术、小众文化等深度内容",s:5},{l:"B",t:"有深度的新闻和观点文章",s:4},{l:"C",t:"实用的技能教程和方法论",s:2},{l:"D",t:"轻松娱乐、搞笑内容",s:1}]},
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"你更喜欢什么样的旅行方式？", opts:[{l:"A",t:"探索未知目的地，体验当地独特文化",s:5},{l:"B",t:"去有特色的地方，偶尔尝鲜",s:4},{l:"C",t:"经典目的地，安全可控",s:2},{l:"D",t:"在家待着，旅行太累了",s:1}]},
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"你对抽象思维和理论探讨的态度是？", opts:[{l:"A",t:"非常感兴趣，喜欢深度思考",s:5},{l:"B",t:"偶尔思考，但不会沉迷",s:3},{l:"C",t:"觉得虚无缥缈，更关注实际",s:2},{l:"D",t:"完全没兴趣，想点实际的",s:1}]},
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"你的房间/办公桌通常布置风格是？", opts:[{l:"A",t:"有个性，有独特的装饰和收藏",s:5},{l:"B",t:"有品味，兼顾美观和舒适",s:4},{l:"C",t:"简洁实用，不在意外在装饰",s:2},{l:"D",t:"东西够用就行，不讲究",s:1}]},
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"你容易被艺术作品或音乐打动吗？", opts:[{l:"A",t:"经常被深深触动和启发",s:5},{l:"B",t:"偶尔，有些作品能打动我",s:4},{l:"C",t:"很少，更关注实用性",s:2},{l:"D",t:"几乎不会",s:1}]},
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"你更喜欢什么类型的工作内容？", opts:[{l:"A",t:"需要创意和探索的未知任务",s:5},{l:"B",t:"有创意空间的挑战性工作",s:4},{l:"C",t:"按流程执行的常规任务",s:2},{l:"D",t:"完全不需要创意的重复性工作",s:1}]},
    { section:"BigFive · 开放性", type:"bf", dim:"Openness", text:"面对与自己截然不同的观点，你会？", opts:[{l:"A",t:"好奇倾听，想了解对方怎么想",s:5},{l:"B",t:"理性思考，保留意见",s:3},{l:"C",t:"坚持自己的立场",s:2},{l:"D",t:"觉得对方不可理喻",s:1}]},

    // ── Conscientiousness 尽责性 (8题) ──
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"你通常如何对待承诺和截止日期？", opts:[{l:"A",t:"一定会按时甚至提前完成",s:5},{l:"B",t:"尽量按时，偶尔拖延",s:3},{l:"C",t:"经常在最后一刻赶完",s:2},{l:"D",t:"经常逾期，觉得还有时间",s:1}]},
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"你是一个有计划的人吗？", opts:[{l:"A",t:"非常自律，一切按计划进行",s:5},{l:"B",t:"有大致计划，但会随机应变",s:3},{l:"C",t:"很少做计划，走一步看一步",s:2},{l:"D",t:"计划对我来说没有意义",s:1}]},
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"面对一个困难任务，你会？", opts:[{l:"A",t:"坚持到底，绝不半途而废",s:5},{l:"B",t:"努力完成，但也会适时调整",s:3},{l:"C",t:"遇到困难容易放弃",s:1},{l:"D",t:"先判断可行性，再决定是否开始",s:2}]},
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"你的工作/学习习惯更接近？", opts:[{l:"A",t:"井井有条，提前规划，有条不紊",s:5},{l:"B",t:"大部分时候有序，偶尔乱一下",s:4},{l:"C",t:"比较随意，关键时候能找到就行",s:2},{l:"D",t:"乱一点反而更有效率",s:1}]},
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"别人托付给你的事情，你的态度是？", opts:[{l:"A",t:"视为自己的事，全力以赴",s:5},{l:"B",t:"认真对待，尽力而为",s:4},{l:"C",t:"答应归答应，能做多少看情况",s:2},{l:"D",t:"经常忘记或拖延",s:1}]},
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"你对自己的评价更接近？", opts:[{l:"A",t:"非常自律，对自己要求严格",s:5},{l:"B",t:"有自律，但也会偶尔放松",s:3},{l:"C",t:"比较随性，不想被束缚",s:2},{l:"D",t:"不太自律，容易拖延",s:1}]},
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"出远门旅行，你的习惯是？", opts:[{l:"A",t:"提前做好攻略，酒店交通全订好",s:5},{l:"B",t:"订好大框架，细节随机应变",s:3},{l:"C",t:"订好机票，其他到了再说",s:2},{l:"D",t:"说走就走，完全不规划",s:1}]},
    { section:"BigFive · 尽责性", type:"bf", dim:"Conscientiousness", text:"面对 deadline，你的状态通常是？", opts:[{l:"A",t:"从容应对，总是提前完成",s:5},{l:"B",t:"按部就班，刚好按时完成",s:3},{l:"C",t:"在压力下集中完成",s:2},{l:"D",t:"经常最后一刻疯狂冲刺",s:1}]},

    // ── Extraversion 外向性 (7题) ──
    { section:"BigFive · 外向性", type:"bf", dim:"Extraversion", text:"周末你通常更喜欢？", opts:[{l:"A",t:"和一大群朋友聚会，社交充电",s:5},{l:"B",t:"和几个亲密的朋友小聚",s:4},{l:"C",t:"一个人安静地待着，阅读或发呆",s:2},{l:"D",t:"能不说话就不说话，深度独处",s:1}]},
    { section:"BigFive · 外向性", type:"bf", dim:"Extraversion", text:"在社交场合中，你往往？", opts:[{l:"A",t:"主动发起话题，成为全场焦点",s:5},{l:"B",t:"自然地参与交谈",s:4},{l:"C",t:"安静倾听，适时回应",s:2},{l:"D",t:"倾向于做个旁观者",s:1}]},
    { section:"BigFive · 外向性", type:"bf", dim:"Extraversion", text:"你的社交能量主要来源是？", opts:[{l:"A",t:"和人群在一起时获得能量",s:5},{l:"B",t:"都能给我能量，平衡就好",s:3},{l:"C",t:"独处时更能充电",s:2},{l:"D",t:"社交只会消耗我的能量",s:1}]},
    { section:"BigFive · 外向性", type:"bf", dim:"Extraversion", text:"你喜欢在团队中扮演什么角色？", opts:[{l:"A",t:"领导者或协调者，主动推动事情",s:5},{l:"B",t:"核心参与者，积极贡献想法",s:4},{l:"C",t:"默默完成自己的任务就好",s:2},{l:"D",t:"观察者，在一旁默默分析",s:1}]},
    { section:"BigFive · 外向性", type:"bf", dim:"Extraversion", text:"参加聚会时，你的状态通常是？", opts:[{l:"A",t:"精力充沛，越热闹越兴奋",s:5},{l:"B",t:"能自然融入，享受其中",s:4},{l:"C",t:"待一会就累了，想回家",s:2},{l:"D",t:"全程尴尬，只想早点离开",s:1}]},
    { section:"BigFive · 外向性", type:"bf", dim:"Extraversion", text:"当众发言或演讲时，你会？", opts:[{l:"A",t:"享受舞台，越多人越兴奋",s:5},{l:"B",t:"有点紧张但能正常发挥",s:3},{l:"C",t:"紧张，尽量避免当众发言",s:2},{l:"D",t:"极度恐惧，能躲就躲",s:1}]},
    { section:"BigFive · 外向性", type:"bf", dim:"Extraversion", text:"别人对你的第一印象通常是？", opts:[{l:"A",t:"气场很强，活泼开朗",s:5},{l:"B",t:"温暖亲切，让人想亲近",s:4},{l:"C",t:"高冷神秘，想进一步了解",s:2},{l:"D",t:"安静内向，不太起眼",s:1}]},

    // ── Agreeableness 宜人性 (7题) ──
    { section:"BigFive · 宜人性", type:"bf", dim:"Agreeableness", text:"当团队中出现冲突时，你通常会？", opts:[{l:"A",t:"主动调解，寻求双方和解",s:5},{l:"B",t:"参与讨论，帮助找到折中方案",s:4},{l:"C",t:"保持中立，让当事人自己解决",s:2},{l:"D",t:"回避冲突，不直接介入",s:1}]},
    { section:"BigFive · 宜人性", type:"bf", dim:"Agreeableness", text:"你对「信任陌生人」这件事的态度是？", opts:[{l:"A",t:"倾向于信任，人心本善",s:5},{l:"B",t:"初步信任，出了问题再调整",s:4},{l:"C",t:"保持谨慎，需要时间验证",s:2},{l:"D",t:"基本不信任，保持高度警惕",s:1}]},
    { section:"BigFive · 宜人性", type:"bf", dim:"Agreeableness", text:"当朋友需要帮助时，你通常？", opts:[{l:"A",t:"毫不犹豫，第一时间伸出援手",s:5},{l:"B",t:"愿意帮忙，但会考虑自己的情况",s:3},{l:"C",t:"需要帮，但会设定边界",s:2},{l:"D",t:"不太想帮，找借口拒绝",s:1}]},
    { section:"BigFive · 宜人性", type:"bf", dim:"Agreeableness", text:"当别人与你意见不合时，你会？", opts:[{l:"A",t:"理解对方，尊重不同观点的存在",s:5},{l:"B",t:"讨论一下，但不强求对方接受",s:3},{l:"C",t:"坚持自己，觉得对方可能错了",s:2},{l:"D",t:"必须争个对错，不退让",s:1}]},
    { section:"BigFive · 宜人性", type:"bf", dim:"Agreeableness", text:"你更愿意和什么样的人交朋友？", opts:[{l:"A",t:"志同道合，大家想法接近",s:5},{l:"B",t:"能互补的，不同背景也挺好",s:3},{l:"C",t:"不需要刻意交朋友，随缘",s:2},{l:"D",t:"保持距离，不喜欢太亲密",s:1}]},
    { section:"BigFive · 宜人性", type:"bf", dim:"Agreeableness", text:"你经常主动关心朋友吗？", opts:[{l:"A",t:"经常主动问候，关心朋友",s:5},{l:"B",t:"朋友需要时会关心",s:3},{l:"C",t:"不太主动，觉得尴尬",s:2},{l:"D",t:"不会，感情是私人的事",s:1}]},
    { section:"BigFive · 宜人性", type:"bf", dim:"Agreeableness", text:"你做了一件帮助别人的事，你更在意？", opts:[{l:"A",t:"对方感受到温暖和关爱",s:5},{l:"B",t:"对方能真正解决问题就好",s:3},{l:"C",t:"做了该做的事，没什么",s:2},{l:"D",t:"希望对方记住你的好",s:1}]},

    // ── Neuroticism 神经质性 (8题) ──
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"面对压力时，你通常会？", opts:[{l:"A",t:"感到焦虑和不安，难以平静",s:5},{l:"B",t:"有些担心，但能正常应对",s:3},{l:"C",t:"保持冷静，理性分析问题",s:2},{l:"D",t:"完全不受影响，冷静如水",s:1}]},
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"你的情绪波动程度是？", opts:[{l:"A",t:"起伏较大，经常被情绪左右",s:5},{l:"B",t:"有些波动，但能控制",s:3},{l:"C",t:"相对稳定，很少大起大落",s:2},{l:"D",t:"非常稳定，平静如水",s:1}]},
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"面对批评，你的反应通常是？", opts:[{l:"A",t:"容易受伤，需要很长时间消化",s:5},{l:"B",t:"会难过，但能较快调整",s:3},{l:"C",t:"会反思，但不会太往心里去",s:2},{l:"D",t:"完全不在意，批评是成长的养分",s:1}]},
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"你经常担心还未发生的事情吗？", opts:[{l:"A",t:"经常杞人忧天，焦虑不安",s:5},{l:"B",t:"偶尔会担心大多数事情",s:3},{l:"C",t:"担心一下就想开了",s:2},{l:"D",t:"很少担心，车到山前必有路",s:1}]},
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"当计划突然被打乱时，你会？", opts:[{l:"A",t:"非常崩溃，需要时间平复",s:5},{l:"B",t:"有点烦躁，但能快速调整",s:3},{l:"C",t:"接受变化，随遇而安",s:2},{l:"D",t:"完全无所谓，变化才是常态",s:1}]},
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"你在公众场合发言前会紧张吗？", opts:[{l:"A",t:"极度紧张，手心出汗，大脑空白",s:5},{l:"B",t:"有点紧张，但能正常发挥",s:3},{l:"C",t:"紧张一下就好，很快能调整",s:2},{l:"D",t:"完全不紧张，甚至享受舞台",s:1}]},
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"你对自己缺点的态度是？", opts:[{l:"A",t:"经常自我怀疑，容易感到沮丧",s:5},{l:"B",t:"偶尔不自信，但总体良好",s:3},{l:"C",t:"大多数时候对自己有信心",s:2},{l:"D",t:"非常自信，很少动摇",s:1}]},
    { section:"BigFive · 神经质性", type:"bf", dim:"Neuroticism", text:"面对拒绝或否定，你的感受强度是？", opts:[{l:"A",t:"久久不能释怀，需要很多时间恢复",s:5},{l:"B",t:"难过一阵，但能走出来",s:3},{l:"C",t:"短暂失落，很快调整",s:2},{l:"D",t:"完全不往心里去",s:1}]}
  ],

  bf_dims: ['Openness','Conscientiousness','Extraversion','Agreeableness','Neuroticism'],

  bf_names: {
    Openness:"开放性",
    Conscientiousness:"尽责性",
    Extraversion:"外向性",
    Agreeableness:"宜人性",
    Neuroticism:"神经质性"
  },

  bf_desc: {
    Openness:"对新体验的开放程度，好奇心与想象力",
    Conscientiousness:"自律和条理性，对目标的坚持程度",
    Extraversion:"社交活力和能量，从外部世界获得能量的程度",
    Agreeableness:"合作与信任程度，关心他人福祉的程度",
    Neuroticism:"情绪不稳定性，焦虑、脆弱的程度"
  },

  bf_emoji: {
    Openness:"🎨",
    Conscientiousness:"📋",
    Extraversion:"🎉",
    Agreeableness:"🤝",
    Neuroticism:"😰"
  },

  ads: { enabled: false },

  traffic: {
    enabled: true,
    showMode: "resultOnly",
    entries: [{ name:"公众号", icon:"📮", title:"关注公众号", desc:"回复【狗】获取完整分析", qrCode:"", url:"" }]
  },

  share: {
    enabled: true,
    quizUrl: "https://www.fbti.net/dog_quiz.html",
    card: {
      background:"",
      fallbackGradient:"linear-gradient(135deg, #2d1a0a 0%, #1a1008 100%)",
      title:"我的狗狗人格是【{name}】{emoji}，你也来测！",
      desc:"38道题，揭秘你的狗狗人格",
      showScores:false,
      showRarity:true
    }
  },

  submit: { endpoint:"/api/dog-results", required:false }
};
