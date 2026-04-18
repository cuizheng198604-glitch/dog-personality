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
      text: "#f5e8d0", muted: "#a08060", dim: "#c0a080", primary: "#f59e0b", accent: "#3b82f6"
    }
  },

  rarities: {
    legendary: { name: "传说", prob: 5, color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", stars: 5, emoji: "🌟" },
    epic:      { name: "史诗", prob: 10, color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", stars: 4, emoji: "💜" },
    rare:      { name: "稀有", prob: 25, color: "#3b82f6", gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)", stars: 3, emoji: "💎" },
    common:    { name: "普通", prob: 60, color: "#64748b", gradient: "linear-gradient(135deg, #64748b, #94a3b8)", stars: 2, emoji: "✨" }
  },

  dogs: [
    { id:"tibetan_mastiff", name:"藏獒", emoji:"🦁", image:"/images/tibetan_mastiff.png", rarity:"legendary", traits:["威严","忠诚","守护"], description:"你是天生的守护者，身上散发着不容侵犯的气场。对家人绝对忠诚，面对危险毫不犹豫。你的存在感如同移动的堡垒，让人感到无比安心。", strength:"保护欲极强，勇敢无畏，意志坚定", weakness:"领地意识强，有时过于警惕", bestMatch:["金毛","德国牧羊犬"], worstMatch:["吉娃娃","哈士奇"], keyword:"王者护卫", profile:{ Extraversion:55, Agreeableness:50, Conscientiousness:95, Openness:40, Neuroticism:70 }},
    { id:"border_collie", name:"边境牧羊犬", emoji:"🧠", image:"/images/border_collie.png", rarity:"legendary", traits:["智慧","敏捷","专注"], description:"你是天才的代名词，智商超群，学习能力令人惊叹。专注力极强，一旦投入便全情以赴。你是天生的策略家，总能想到最优解。", strength:"智商极高，学习能力强，专注力惊人", weakness:"容易无聊，需要持续刺激", bestMatch:["金毛","柯基"], worstMatch:["斗牛犬","吉娃娃"], keyword:"天才智者", profile:{ Openness:85, Conscientiousness:95, Extraversion:60, Agreeableness:55, Neuroticism:25 }},
    { id:"german_shepherd", name:"德国牧羊犬", emoji:"🛡️", image:"/images/german_shepherd.png", rarity:"epic", traits:["忠诚","勇敢","正义"], description:"你是正义与秩序的化身，天生具有强烈的责任感。忠诚可靠，是朋友圈中最值得托付的存在。勇敢果断，面对挑战从不退缩。", strength:"责任感强，忠诚可靠，正义感爆棚", weakness:"有时过于严肃，不懂得放松", bestMatch:["藏獒","金毛"], worstMatch:["吉娃娃","沙皮犬"], keyword:"正义卫士", profile:{ Conscientiousness:95, Extraversion:65, Agreeableness:65, Openness:55, Neuroticism:30 }},
    { id:"golden_retriever", name:"金毛寻回犬", emoji:"☀️", image:"/images/golden_retriever.png", rarity:"epic", traits:["温暖","友善","热情"], description:"你是人间小太阳，走到哪都带着温暖的光芒。天性友善热情，对每个人都充满善意。你是朋友圈里的治愈系，总能让人心情变好。", strength:"温暖友善，热情开朗，治愈力强", weakness:"有时过于讨好，缺乏界限", bestMatch:["拉布拉多","萨摩耶"], worstMatch:["柴犬","吉娃娃"], keyword:"温暖阳光", profile:{ Extraversion:90, Agreeableness:95, Conscientiousness:65, Openness:55, Neuroticism:25 }},
    { id:"husky", name:"哈士奇", emoji:"❄️", image:"/images/husky.png", rarity:"epic", traits:["自由","活力","叛逆"], description:"你是自由的灵魂，精力充沛到让人惊叹。性格独立，不喜欢被束缚，总是充满活力。你的存在让生活不再无聊，充满惊喜。", strength:"精力旺盛，独立自主，幽默感强", weakness:"服从性低，专注力差", bestMatch:["阿拉斯加","萨摩耶"], worstMatch:["德国牧羊犬","斗牛犬"], keyword:"自由灵魂", profile:{ Extraversion:85, Openness:80, Conscientiousness:40, Agreeableness:45, Neuroticism:55 }},
    { id:"labrador", name:"拉布拉多", emoji:"🏊", image:"/images/labrador.png", rarity:"rare", traits:["友善","服从","快乐"], description:"你是完美的生活伴侣，性情温和，服从性极高。对人友善，对生活热爱。你的快乐具有强大的感染力，是家庭首选的温暖成员。", strength:"服从性高，性格稳定，适应力强", weakness:"容易发胖，需要持续关注", bestMatch:["金毛","边境牧羊犬"], worstMatch:["柴犬","吉娃娃"], keyword:"完美伴侣", profile:{ Extraversion:88, Agreeableness:90, Conscientiousness:70, Openness:50, Neuroticism:30 }},
    { id:"doberman", name:"杜宾犬", emoji:"⚡", image:"/images/doberman.png", rarity:"rare", traits:["敏捷","警觉","高贵"], description:"你是速度与警觉的完美结合，天生具有出众的第六感。优雅而有力，气质高贵。你的存在本身就是一种无形的保护。", strength:"反应敏捷，警觉性高，气质出众", weakness:"需要大量运动和心理刺激", bestMatch:["德国牧羊犬","藏獒"], worstMatch:["吉娃娃","斗牛犬"], keyword:"优雅护卫", profile:{ Extraversion:60, Conscientiousness:90, Openness:70, Agreeableness:50, Neuroticism:35 }},
    { id:"shiba", name:"柴犬", emoji:"🌾", image:"/images/shiba.png", rarity:"rare", traits:["独立","倔强","机智"], description:"你是倔强的小精灵，独立自主，不喜欢取悦他人。外表高冷实则内心戏很多，有着独特的幽默感。你是最有性格的小家伙。", strength:"独立自主，个性鲜明，不黏人", weakness:"服从性低，固执己见", bestMatch:["萨摩耶","沙皮犬"], worstMatch:["金毛","拉布拉多"], keyword:"傲娇精灵", profile:{ Openness:75, Extraversion:30, Agreeableness:40, Conscientiousness:55, Neuroticism:50 }},
    { id:"corgi", name:"柯基", emoji:"👑", image:"/images/corgi.png", rarity:"rare", traits:["活泼","自信","可爱"], description:"你是小身材大能量，虽然腿短但气场两米八。自信爆棚，性格活泼，走到哪都是焦点。你是朋友圈里的开心果和氛围担当。", strength:"自信爆棚，社交能力强，魅力四射", weakness:"有时过于自信，忽略警告", bestMatch:["边境牧羊犬","金毛"], worstMatch:["吉娃娃","斗牛犬"], keyword:"短腿王者", profile:{ Extraversion:95, Agreeableness:80, Conscientiousness:70, Openness:60, Neuroticism:35 }},
    { id:"malamute", name:"阿拉斯加雪橇犬", emoji:"❄️", image:"/images/malamute.png", rarity:"rare", traits:["友好","顽强","忠诚"], description:"你是极地探险家，顽强而忠诚，对家人充满爱。外表威武内心温柔，友善待人。你的耐力和意志力令人敬佩。", strength:"耐力惊人，性格温和，忠诚度高", weakness:"运动量大，需要大量活动空间", bestMatch:["哈士奇","萨摩耶"], worstMatch:["吉娃娃","斗牛犬"], keyword:"极地勇士", profile:{ Extraversion:80, Agreeableness:75, Conscientiousness:65, Openness:60, Neuroticism:30 }},
    { id:"poodle", name:"贵宾犬", emoji:"🎩", image:"/images/poodle.png", rarity:"common", traits:["聪明","优雅","活泼"], description:"你是狗界的贵族，聪明伶俐，举止优雅。学习能力超强，是最容易被训练的品种之一。你懂得如何优雅地生活。", strength:"智商极高，学习能力强，爱好整洁", weakness:"需要定期美容打理", bestMatch:["金毛","边境牧羊犬"], worstMatch:["斗牛犬","吉娃娃"], keyword:"贵族绅士", profile:{ Openness:85, Conscientiousness:80, Extraversion:65, Agreeableness:70, Neuroticism:30 }},
    { id:"bulldog", name:"斗牛犬", emoji:"🛋️", image:"/images/bulldog.png", rarity:"common", traits:["淡定","倔强","忠诚"], description:"你是淡定的生活家，天塌下来都不急。性格沉稳，不爱运动，但忠诚度满分。你是完美的沙发伴侣。", strength:"情绪稳定，忠诚可靠，不闹腾", weakness:"懒惰，缺乏运动精神", bestMatch:["沙皮犬","吉娃娃"], worstMatch:["哈士奇","边境牧羊犬"], keyword:"沙发大师", profile:{ Neuroticism:20, Extraversion:40, Agreeableness:60, Conscientiousness:45, Openness:30 }},
    { id:"dalmatian", name:"斑点狗", emoji:"🎨", image:"/images/dalmatian.png", rarity:"common", traits:["活力","忠诚","独立"], description:"你是独特的艺术家，外观出众，性格充满活力。耐力好，喜欢奔跑，对主人忠诚。是一道移动的风景线。", strength:"活力充沛，外形独特，耐力好", weakness:"需要大量运动，容易分离焦虑", bestMatch:["哈士奇","阿拉斯加"], worstMatch:["斗牛犬","吉娃娃"], keyword:"艺术跑者", profile:{ Extraversion:80, Openness:70, Conscientiousness:60, Agreeableness:55, Neuroticism:45 }},
    { id:"chihuahua", name:"吉娃娃", emoji:"👀", image:"/images/chihuahua.png", rarity:"common", traits:["警觉","勇敢","黏人"], description:"你是小型犬中的战斗机，勇气可嘉，警觉性超高。黏人属性满点，对主人极度依赖。虽然小但气场不小。", strength:"警觉性高，勇敢护主，黏人可爱", weakness:"容易紧张，叫声频繁", bestMatch:["萨摩耶","沙皮犬"], worstMatch:["哈士奇","德国牧羊犬"], keyword:"小小勇士", profile:{ Extraversion:55, Neuroticism:85, Agreeableness:50, Conscientiousness:40, Openness:45 }},
    { id:"dachshund", name:"腊肠犬", emoji:"🌭", image:"/images/dachshund.png", rarity:"common", traits:["好奇","固执","活泼"], description:"你是好奇心大王，对一切充满探索欲。腿短身长，外形独特，性格固执但可爱。你是充满个性的小家伙。", strength:"好奇心强，性格有趣，适应力好", weakness:"容易过度吠叫，固执难训", bestMatch:["柯基","沙皮犬"], worstMatch:["德国牧羊犬","边境牧羊犬"], keyword:"好奇宝宝", profile:{ Extraversion:70, Openness:65, Conscientiousness:50, Agreeableness:60, Neuroticism:45 }},
    { id:"sharpei", name:"沙皮犬", emoji:"🗿", image:"/images/sharpei.png", rarity:"common", traits:["安静","独立","忠诚"], description:"你是沉稳的思想者，性格安静独立，不爱吠叫。对主人忠诚但表达含蓄，内心细腻。你是最有深度的安静美狗子。", strength:"安静沉稳，独立不黏人，内心细腻", weakness:"皮肤护理需求高，社交需从小培养", bestMatch:["斗牛犬","柴犬"], worstMatch:["哈士奇","柯基"], keyword:"忧郁智者", profile:{ Extraversion:25, Agreeableness:55, Conscientiousness:65, Openness:45, Neuroticism:35 }},
    { id:"samoyed", name:"萨摩耶", emoji:"😊", image:"/images/samoyed.png", rarity:"common", traits:["友善","乐观","爱笑"], description:"你是微笑天使，脸上永远挂着治愈的笑容。性格友善乐观，对人毫无防备。你是行走的阳光制造机。", strength:"笑容治愈，性格温暖，社交能力强", weakness:"需要大量陪伴，不适合工作繁忙的主人", bestMatch:["金毛","阿拉斯加"], worstMatch:["吉娃娃","沙皮犬"], keyword:"微笑天使", profile:{ Extraversion:88, Agreeableness:92, Openness:65, Conscientiousness:50, Neuroticism:30 }}
  ],

  questions: [
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"当你对某个人产生强烈欲望时，你通常会？", opts:[{l:"A",t:"主动接近，想弄清楚这种感受",s:5},{l:"B",t:"心里记着，但不一定会行动",s:4},{l:"C",t:"压下去，告诉自己不要多想",s:2},{l:"D",t:"完全回避，觉得想这些很羞耻",s:1}]},
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"你有过对同性的幻想或欲望吗？", opts:[{l:"A",t:"有，而且很强烈，让我思考过很多",s:5},{l:"B",t:"偶尔有过，我不觉得奇怪",s:4},{l:"C",t:"好像没有，我从没在意过",s:2},{l:"D",t:"绝对没有，我从不往这个方向想",s:1}]},
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"在网上看到让你心跳加速的内容时，你会？", opts:[{l:"A",t:"收藏或反复看，沉浸在那种感觉里",s:5},{l:"B",t:"看两眼就划走，但会记住",s:4},{l:"C",t:"直接划过，没什么感觉",s:2},{l:"D",t:"立刻关掉，觉得自己不该看",s:1}]},
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"你对「欲望是人之常情」这句话怎么看？", opts:[{l:"A",t:"完全认同，人有欲望很正常",s:5},{l:"B",t:"基本认同，但要看场合和方式",s:4},{l:"C",t:"不完全认同，欲望应该克制",s:2},{l:"D",t:"不认同，人应该完全控制欲望",s:1}]},
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"你曾对某个现实中的男性朋友产生过特别的想法吗？", opts:[{l:"A",t:"有过，而且不止一次，我接受这种感觉",s:5},{l:"B",t:"有过一次，觉得有点奇怪但正常",s:4},{l:"C",t:"可能有过，但没细想",s:2},{l:"D",t:"从来没有，我从没这样想过",s:1}]},
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"你对探索自己更多「不为人知的一面」的态度是？", opts:[{l:"A",t:"很有兴趣，想了解真实的自己",s:5},{l:"B",t:"偶尔好奇，但不会刻意探索",s:4},{l:"C",t:"觉得自己已经够了解自己了",s:2},{l:"D",t:"不想知道，害怕发现什么",s:1}]},
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"在梦里，你有过让你醒来后仍然心跳加速的经历吗？", opts:[{l:"A",t:"经常有，梦境很真实很强烈",s:5},{l:"B",t:"偶尔有，醒来会想一下",s:4},{l:"C",t:"很少，不记得梦境内容",s:2},{l:"D",t:"从来没有，我的梦很平淡",s:1}]},
    { section:"欲望探索 · 开放性", type:"bf", dim:"Openness", text:"你对「双性恋」或「同性倾向」这个话题的态度是？", opts:[{l:"A",t:"完全接受，世界本来就是多元的",s:5},{l:"B",t:"尊重，但我自己不确定",s:4},{l:"C",t:"有点困惑，不太理解",s:2},{l:"D",t:"完全排斥，无法接受",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"当欲望强烈涌上来时，你能控制住自己吗？", opts:[{l:"A",t:"完全能，我是最强的自律者",s:5},{l:"B",t:"大部分时候能，偶尔会失控",s:4},{l:"C",t:"很难，经常控制不住",s:2},{l:"D",t:"完全控制不住，经常事后后悔",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"你会主动采取行动来压抑自己的欲望吗？", opts:[{l:"A",t:"不会，有欲望很正常，顺其自然",s:5},{l:"B",t:"偶尔会，用别的事情转移注意力",s:4},{l:"C",t:"经常刻意克制，让自己冷静",s:2},{l:"D",t:"每天都在和欲望斗争，很痛苦",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"你给自己设定了关于欲望的底线吗？", opts:[{l:"A",t:"没有，我觉得欲望不需要设限",s:5},{l:"B",t:"有一些基本原则，但不僵硬",s:4},{l:"C",t:"有严格的红线，绝对不越过",s:2},{l:"D",t:"我不停地给自己设限但总是打破",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"深夜独自一人时，你通常会？", opts:[{l:"A",t:"任由思绪飘荡，想看什么就看什么",s:5},{l:"B",t:"大部分时候克制，偶尔放纵一下",s:4},{l:"C",t:"刻意不看，给自己找事做",s:2},{l:"D",t:"这是最难熬的时候，总是在挣扎",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"对于无法控制的欲望，你的态度是？", opts:[{l:"A",t:"顺其自然，欲望来了就享受",s:5},{l:"B",t:"接纳它，但尽量不影响生活",s:4},{l:"C",t:"感到内疚，试图彻底克服",s:2},{l:"D",t:"极度焦虑，觉得自己有问题",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"你曾因为欲望而影响过正常生活或工作吗？", opts:[{l:"A",t:"从来没有，欲望完全不影响我",s:5},{l:"B",t:"偶尔因为想太多而分心",s:4},{l:"C",t:"有时会耽误事，但能调整",s:2},{l:"D",t:"经常因为欲望无法专心，非常困扰",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"你对「深夜浏览器历史记录」怎么看？", opts:[{l:"A",t:"那是个人隐私，没什么好羞耻的",s:5},{l:"B",t:"理解每个人都有，但不关我的事",s:4},{l:"C",t:"最好没有，那样更自律",s:2},{l:"D",t:"觉得那是失控的表现",s:1}]},
    { section:"自律掌控 · 尽责性", type:"bf", dim:"Conscientiousness", text:"你认为自己对欲望的自控力在什么水平？", opts:[{l:"A",t:"极强，我随时可以喊停",s:5},{l:"B",t:"较强，关键时刻能刹住车",s:4},{l:"C",t:"较弱，经常事后后悔",s:2},{l:"D",t:"几乎没有，总是失控",s:1}]},
    { section:"欲望自信 · 外向性", type:"bf", dim:"Extraversion", text:"你对自己有欲望这件事感到羞耻吗？", opts:[{l:"A",t:"完全不羞耻，这是人的本能",s:5},{l:"B",t:"基本不羞耻，偶尔有点不好意思",s:4},{l:"C",t:"有点羞耻，不敢让别人知道",s:2},{l:"D",t:"极度羞耻，觉得自己很脏",s:1}]},
    { section:"欲望自信 · 外向性", type:"bf", dim:"Extraversion", text:"在健身房更衣室或公共浴室时，你会？", opts:[{l:"A",t:"完全自然，不觉得有什么",s:5},{l:"B",t:"基本自然，但会避免直视",s:4},{l:"C",t:"有点不自在，尽快离开",s:2},{l:"D",t:"非常不自在，完全不敢看",s:1}]},
    { section:"欲望自信 · 外向性", type:"bf", dim:"Extraversion", text:"你愿意和最信任的人谈论自己的欲望吗？", opts:[{l:"A",t:"完全愿意，这很正常",s:5},{l:"B",t:"如果对方也开放，可以聊一点",s:4},{l:"C",t:"有点尴尬，避而不谈",s:2},{l:"D",t:"绝对不可能，这是最深的秘密",s:1}]},
    { section:"欲望自信 · 外向性", type:"bf", dim:"Extraversion", text:"当你在公共场所遇到吸引你的人，你会？", opts:[{l:"A",t:"会多看几眼，甚至想认识",s:5},{l:"B",t:"偷偷看一眼，然后假装没事",s:4},{l:"C",t:"尽量不看，转移注意力",s:2},{l:"D",t:"完全不看，立刻把目光移开",s:1}]},
    { section:"欲望自信 · 外向性", type:"bf", dim:"Extraversion", text:"你认为男性有欲望是一件？", opts:[{l:"A",t:"完全正常的事，没什么特别",s:5},{l:"B",t:"正常，但不该过度",s:4},{l:"C",t:"有点羞耻，但可以理解",s:2},{l:"D",t:"很羞耻，男性应该清心寡欲",s:1}]},
    { section:"欲望自信 · 外向性", type:"bf", dim:"Extraversion", text:"你对自己身体的满意程度是？", opts:[{l:"A",t:"非常满意，对自己的样子很有自信",s:5},{l:"B",t:"比较满意，整体满意",s:4},{l:"C",t:"有点不满意，想改变一些地方",s:2},{l:"D",t:"很不满意，经常因此自卑",s:1}]},
    { section:"欲望自信 · 外向性", type:"bf", dim:"Extraversion", text:"在男性朋友的聚会中谈论欲望话题，你会？", opts:[{l:"A",t:"很自然地参与，分享感受",s:5},{l:"B",t:"可以听，但不会主动说",s:4},{l:"C",t:"有点不自在，找借口离开",s:2},{l:"D",t:"完全不想参与，觉得很无聊",s:1}]},
    { section:"欲望社交 · 宜人性", type:"bf", dim:"Agreeableness", text:"当你发现有人对你有好感但你无感时，你会？", opts:[{l:"A",t:"直接坦诚说明，不耽误对方",s:5},{l:"B",t:"委婉拒绝，但保持距离",s:4},{l:"C",t:"装作不知道，避免尴尬",s:2},{l:"D",t:"利用这种好感，从对方身上获取好处",s:1}]},
    { section:"欲望社交 · 宜人性", type:"bf", dim:"Agreeableness", text:"你会在有伴侣的情况下，对其他人产生欲望吗？", opts:[{l:"A",t:"欲望是自动的，我无法控制，但会克制行为",s:5},{l:"B",t:"偶尔会，但能控制不越界",s:4},{l:"C",t:"经常有，压抑得很痛苦",s:2},{l:"D",t:"有了伴侣就完全不会再看别人",s:1}]},
    { section:"欲望社交 · 宜人性", type:"bf", dim:"Agreeableness", text:"你对「渣男」这个标签怎么看？", opts:[{l:"A",t:"那是别人的评价，与我无关",s:5},{l:"B",t:"不认同这个标签，人有欲望很正常",s:4},{l:"C",t:"觉得是道德问题，应该被谴责",s:2},{l:"D",t:"极度厌恶，那样的人应该消失",s:1}]},
    { section:"欲望社交 · 宜人性", type:"bf", dim:"Agreeableness", text:"如果有朋友向你出柜，你会？", opts:[{l:"A",t:"完全接受，支持他的选择",s:5},{l:"B",t:"接受，但保持原来的关系",s:4},{l:"C",t:"有点惊讶，需要时间消化",s:2},{l:"D",t:"无法接受，渐渐疏远",s:1}]},
    { section:"欲望社交 · 宜人性", type:"bf", dim:"Agreeableness", text:"你对一夜情或约炮的态度是？", opts:[{l:"A",t:"只要双方自愿，完全OK",s:5},{l:"B",t:"可以理解，但不评价",s:4},{l:"C",t:"不认同，觉得不应该",s:2},{l:"D",t:"强烈反对，那是堕落的表现",s:1}]},
    { section:"欲望社交 · 宜人性", type:"bf", dim:"Agreeableness", text:"你会在社交媒体上关注性感内容的账号吗？", opts:[{l:"A",t:"会，我觉得这很正常",s:5},{l:"B",t:"偶尔看，不觉得有什么",s:4},{l:"C",t:"从不主动看，但会刷到",s:2},{l:"D",t:"绝对不看，那是不正经的行为",s:1}]},
    { section:"欲望社交 · 宜人性", type:"bf", dim:"Agreeableness", text:"你曾因为自己的欲望而伤害过别人吗？", opts:[{l:"A",t:"从来没有，我的欲望只关乎自己",s:5},{l:"B",t:"可能无意中有过，但不知道",s:4},{l:"C",t:"有过，事后很后悔",s:2},{l:"D",t:"经常有，我总是在伤害别人",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"事后你会对自己产生过的欲望感到羞耻吗？", opts:[{l:"A",t:"完全不会，那是正常的",s:5},{l:"B",t:"偶尔有点，但很快释怀",s:4},{l:"C",t:"经常感到羞耻和自责",s:2},{l:"D",t:"每次都极度羞耻，无法原谅自己",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"你对「自己可能有双性倾向」这个想法感到？", opts:[{l:"A",t:"完全平静，无所谓",s:5},{l:"B",t:"有点意外，但不害怕",s:4},{l:"C",t:"有点害怕，怕别人知道",s:2},{l:"D",t:"极度恐惧，觉得天都塌了",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"当你对某人有强烈欲望却无法得到时，你会？", opts:[{l:"A",t:"坦然放下，没什么大不了",s:5},{l:"B",t:"有点失落，但能调整",s:4},{l:"C",t:"很痛苦，需要很长时间恢复",s:2},{l:"D",t:"走不出来，影响正常生活",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"你曾因为欲望太强而觉得自己是个「坏人」吗？", opts:[{l:"A",t:"从来没有，欲望不等于道德",s:5},{l:"B",t:"偶尔闪过，但理性上不认同",s:4},{l:"C",t:"经常这样想，很痛苦",s:2},{l:"D",t:"一直这样觉得，我很自卑",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"看完美男之后，你会感到空虚或失落吗？", opts:[{l:"A",t:"完全不会，享受就是享受",s:5},{l:"B",t:"偶尔有一点，但很快过去",s:4},{l:"C",t:"经常有，觉得很空虚",s:2},{l:"D",t:"每次都有强烈的负罪感",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"你对「我喜欢看男生」这件事感到的压力程度是？", opts:[{l:"A",t:"完全没压力，理所当然",s:5},{l:"B",t:"有一点压力，但能接受",s:4},{l:"C",t:"压力很大，怕被别人知道",s:2},{l:"D",t:"极度恐惧，觉得这是最大的秘密",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"你的欲望程度和同龄人相比，你觉得？", opts:[{l:"A",t:"欲望很强，比同龄人更强烈",s:5},{l:"B",t:"适中，和大多数人差不多",s:4},{l:"C",t:"偏弱，比同龄人欲望少一些",s:2},{l:"D",t:"几乎没有，我几乎不被任何事撩拨",s:1}]},
    { section:"欲望焦虑 · 神经质性", type:"bf", dim:"Neuroticism", text:"如果你的欲望被家人或朋友知道了，你会？", opts:[{l:"A",t:"无所谓，了解我的人自然会接受",s:5},{l:"B",t:"有点尴尬，但会坦然面对",s:4},{l:"C",t:"非常害怕，会极力否认",s:2},{l:"D",t:"天都塌了，不知道该怎么面对",s:1}]}
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
    quizUrl: "https://dog-personality.onrender.com/dog_quiz.html",
    card: {
      background:"",
      fallbackGradient:"linear-gradient(135deg, #2d1a0a 0%, #1a1008 100%)",
      title:"我的狗狗人格是【{name}】{emoji}，你也来测！",
      desc:"38道题，揭秘你的狗狗人格",
      showScores:false,
      showRarity:true
    }
  },

  submit: { endpoint:"https://dogmbti.onrender.com/api/dog-results", required:false }
};
