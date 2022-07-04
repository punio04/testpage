export const dataApps = [
  {
    label: "WAKUWAKU_MAIL",
    name: "ワクワクメール",
    url: "https://ad.presco.asia/cl/?b_id=YcJlp6WB&t_id=1&afad_param_1=【top】",
    imgPath: "images/app_icon5.png",
    trSource: "<td><a href='https://ad.presco.asia/cl/?b_id=YcJlp6WB&t_id=1&afad_param_1=【top】'><img src=./images/app_icon5.png><span class=app>ワクワクメール</span></a><td><span class=number>1600万人</span><td><span class='tag bg3'>出会い</span><span class='tag bg4'>友達作り</span><td><span class=age>10代</span><span class=age>20代</span><td><a href=https://matchinglike.jp/ >マッチングアプリ</a></td>"

  },
  {
    label: "PCMAX",
    name: "PCMAX",
    url: "https://ad.presco.asia/cl/?b_id=k6uQ5OLD&t_id=1&afad_param_1=【top】",
    imgPath: "images/app_icon6.png",
    trSource: "<td><a href='https://ad.presco.asia/cl/?b_id=k6uQ5OLD&t_id=1&afad_param_1=【top】'><img src=./images/app_icon6.png><span class=app>PCMAX</span></a><td><span class=number>1600万人</span><td><span class='tag bg3'>出会い</span><span class='tag bg4'>友達作り</span><td><span class=age>20代</span><span class=age>30代</span><span class=age>40代</span><td><a href=https://matchinglike.jp/ >出会い系</a></td>"

  },
  {
    label: "J_MAIL",
    name: "Jメール",
    url: "https://fam-ad.com/ad/p/r?_site=71682&_article=18415",
    imgPath: "images/app_icon_Jmail.png",
    trSource: "<td><a href=https://fam-ad.com/ad/p/r?_site=71682&_article=18415 ><img src=./images/app_icon_Jmail.png><span class=app>Jメール</span></a><td><span class=number>600万人</span><td><span class='tag bg3'>出会い</span><span class='tag bg4'>友達作り</span><td><span class=age>20代</span><span class=age>30代</span><td><a href=https://matchinglike.jp/ >出会い系</a></td>"
  }
]  

export const dataQuestions = [
  {
    no:1,
    question:"あなたの性別は？",
    answers:[
      {
        answer:"男性",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"女性",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  },
  {
    no:2,
    question:"あなたの年齢層は？",
    answers:[
      {
        answer:"24歳以下",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"20代後半",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"30代前半",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"30代後半",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"40代以上",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  },
  {
    no:3,
    question:"マッチングアプリを使う目的は？",
    answers:[
      {
        answer:"恋活",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"婚活",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"デート",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  },
  {
    no:4,
    question:"いつまでに会いたい？",
    answers:[
      {
        answer:"今すぐ",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"~3ヶ月以内",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"~半年以内",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        answer:"特にない",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  }
]

export const dataSearch = [
  {
    no:1,
    label:"purpose",
    select:[
      {
        value:"利用目的",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"恋活",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"婚活",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"出会い",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"友達作り",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  },
  {
    no:2,
    label:"age",
    select:[
      {
        value:"年齢層",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"10代",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"20代",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"30代",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"40代",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  },
  {
    no:3,
    label:"price",
    select:[
      {
        value:"料金",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"定額制",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"ポイント制",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  },
  {
    no:4,
    label:"membership",
    select:[
      {
        value:"会員数",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"100万人以上",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"300万人以上",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"500万人以上",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"1000万人以上",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  },
  {
    no:5,
    label:"release",
    select:[
      {
        value:"リリース日",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"2015年以前",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      },
      {
        value:"2015年以降",
        results:["WAKUWAKU_MAIL", "J_MAIL", "PCMAX"]
      }
    ]
  }
]
