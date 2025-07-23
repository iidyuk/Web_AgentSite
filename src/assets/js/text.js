export default {
  // ↓↓ TopCom ↓↓
  topLogoImg: '/img/logo.png',
  registerType: {
    register: '登録する',
    domestic: '日本で就職をご検討の方',
    abroad: '海外で就職をご検討の方',
  },
  policy: [
    'グローバル視点で就職したい方！',
    '就職先が決まるまで名前をオープンにしません！',
    '素直な自分でチームにジョインできる！',
    '自分自身の価値観を最大限にアピール！',
  ],
  mission: [
    'IT、デザイン、企画、マーケティングなど',
    '統合力でもっと便利に、もっと楽しく、心を豊かに！',
  ],
  // ↑↑ TopCom ↑↑
  // ↓↓ AchieveCom ↓↓
  achieveCarou: [
    {
      category: '- アプリ開発 -',
      title: '株式会社AAA CM',
      img: '/img/pro_wash-ma.png',
      caption: ['20XX ©株式会社AAA', '担当 : AAA'],
    },
    {
      category: '- コーポレートサイト -',
      title: '株式会社BBB ',
      img: '/img/pro_wash-ma.png',
      caption: ['20XX ©株式会社AAA', '担当 : AAA'],
    },
    {
      category: '- プロモーション -',
      title: '株式会社AAA CM',
      img: '/img/pro_wash-ma.png',
      caption: ['20XX ©株式会社AAA', '担当 : AAA'],
    },
  ],
  // ↑↑ AchieveCom ↑↑
  // ↓↓ ServiceFlow ↓↓
  serviceFlow: {
    title: 'Service Flow',
    chart: {
      domestic: [
        {
          id: '01', text: 'エントリー', click: 1, value: 'radio01',
        },
        {
          id: '02', text: 'サポート', click: 2, value: 'radio02',
        },
        {
          id: '03', text: '企業との面談', click: 3, value: 'radio03',
        },
        {
          id: '04', text: '入社決定', click: 4, value: 'radio04',
        },
        {
          id: '05', text: '就業', click: 5, value: 'radio05',
        },
      ],
      abroad: [
        {
          id: '01', text: 'エントリー', click: 1, value: 'radio01',
        },
        {
          id: '02', text: 'サポート', click: 2, value: 'radio02',
        },
        {
          id: '03', text: '企業との面談', click: 3, value: 'radio03',
        },
        {
          id: '04', text: '入社決定', click: 4, value: 'radio04',
        },
        {
          id: '05', text: '出国手続き 就業', click: 5, value: 'radio05',
        },
      ],
    },
    descrip: {
      domestic: [
        {
          title: '1.エントリー', text: '(Text)', tagClass: '', img: './assets/img/serviceflow-01.png',
        },
        {
          title: '2.サポートからの連絡', text: '(Text)', tagClass: '', img: './assets/img/serviceflow-02b.png',
        },
        {
          title: '3.企業との面談', text: '(Text)', tagClass: '', img: './assets/img/serviceflow-03.png',
        },
        {
          title: '4.出国手続き', text: '(Text)', tagClass: '', img: './assets/img/serviceflow-04.png',
        },
        {
          title: '5.出国・就業', text: '(Text)', tagClass: '', img: './assets/img/serviceflow-05a.png',
        },
      ],
      abroad: [
        { title: '1.エントリー', text: '(Text)', tagClass: '' },
        { title: '2.サポートからの連絡', text: '(Text)', tagClass: '' },
        { title: '3.企業との面談', text: '(Text)', tagClass: '' },
        { title: '4.出国手続き', text: '(Text)', tagClass: '' },
        { title: '5.出国・就業', text: '(Text)', tagClass: '' },
      ],
    },
    workPattern: {
      domestic: '国内で就職する',
      abroad: '海外で就職する',
    },
  },
  // ↑↑ ServiceFlow ↑↑
  // ↓↓ FooterCom ↓↓
  footerMenu: [
    // { title: '企業概要', link: '/company' },
    { title: '企業概要', link: '/' },
    // { title: 'プライバシーポリシー', link: '/policy' },
    { title: 'プライバシーポリシー', link: '/' },
    // { title: 'お問合わせ', link: '/contact' },
    { title: 'お問合わせ', link: '/' },
  ],
  copyright: '© 2009-2023!!',
  // ↑↑ FooterCom ↑↑
};
