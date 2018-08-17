module.exports = {
  URL: 'mongodb://mongo:27017/',
  DATABASE: 'ISInformationPlatform',
  forum: [
    {
      section_id: 1,
      post_collection: 'post_work',
      comment_collection: 'comment_work',
      title: '工作',
      type: [
        [
          { tag: '/static/面试.png', title: '面试', id: 1 },
          { tag: '/static/笔试.png', title: '笔试', id: 2 },
          { tag: '/static/实习经历.png', title: '实习', id: 3 },
          { tag: '/static/工作经历.png', title: '工作', id: 4 }
        ]
      ]
    },
    {
      section_id: 2,
      post_collection: 'post_abroad',
      comment_collection: 'comment_abroad',
      title: '出国',
      type: [
        [
          { tag: '/static/usa.png', title: '全部', id: 1 },
          { tag: '/static/usa.png', title: '美国', id: 2 },
          { tag: '/static/usa.png', title: '英国', id: 3 },
          { tag: '/static/usa.png', title: '加拿大', id: 4 },
          { tag: '/static/usa.png', title: '澳大利亚', id: 5 },
          { tag: '/static/usa.png', title: '其他', id: 6 }
        ],
        [
          { tag: '/static/usa.png', title: '签证', id: 7 },
          { tag: '/static/usa.png', title: '语言考试', id: 8 }
        ]
      ]
    },
    {
      section_id: 3,
      post_collection: 'post_graduate',
      comment_collection: 'comment_graduate',
      title: '读研',
      type: [
        [
          { tag: '/static/usa.png', title: '本校', id: 1 },
          { tag: '/static/usa.png', title: '外校', id: 2 }
        ],
        [
          { tag: '/static/usa.png', title: '保研', id: 3 },
          { tag: '/static/usa.png', title: '考验', id: 4 }
        ]
      ]
    }
  ],
  notice: [
    {
      section_id: 1,
      collection: 'notice_normal',
      title: '公告'
    },
    {
      section_id: 2,
      collection: 'notice_work',
      title: '实习信息'
    }
  ]
};
