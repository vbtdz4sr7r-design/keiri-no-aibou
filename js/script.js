'use strict';

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
const searchInput = document.querySelector('#main-search');
const searchButton = document.querySelector('#search-button');
const searchMessage = document.querySelector('#search-message');
const suggestions = document.querySelector('#suggestions');

function closeMenu() {
  menuButton?.classList.remove('is-open');
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'メニューを開く');
  document.body.style.overflow = '';
}

menuButton?.addEventListener('click', () => {
  const willOpen = !navigation.classList.contains('is-open');

  menuButton.classList.toggle('is-open', willOpen);
  navigation.classList.toggle('is-open', willOpen);

  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.setAttribute(
    'aria-label',
    willOpen ? 'メニューを閉じる' : 'メニューを開く'
  );

  document.body.style.overflow = willOpen ? 'hidden' : '';
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});


  const accountData = [
  {
    keywords: [
      'パソコン',
      'pc',
      'ノートパソコン',
      'ノートpc',
      'デスクトップ',
      'mac',
      'macbook',
      'windowsパソコン',
      'パソコン本体',
      'モニター',
      'ディスプレイ',
      'apple製pc',
'imac',
'mac mini',
'windows',
'windows pc',
'surface',
'タブレット',
'ipad',
'スマートフォン',
'スマホ本体',
'携帯電話本体',
'業務用スマホ'
    ],
    account: '消耗品費 または 工具器具備品',
description:
'購入金額や会社の資産計上基準によって異なります。一般的には10万円未満は消耗品費、10万円以上は固定資産（工具器具備品）として処理する会社が多いです。※会社によって基準金額は異なります。'  },

  {
    keywords: [
      'キーボード',
      'マウス',
      'usb',
      'usbメモリ',
      'ケーブル',
      '充電器',
      'イヤホン',
      'ヘッドホン',
      'パソコンケース',
      'スマホケース',
      'モニター台',
      'sdカード',
'microsdカード',
'ssd',
'外付けssd',
'hdd',
'外付けhdd',
'ハードディスク',
'メモリーカード',
'カードリーダー',
'usbハブ',
'変換アダプター',
'acアダプター',
'延長ケーブル',
'lanケーブル',
'hdmiケーブル',
'webカメラ',
'ウェブカメラ',
'マイク',
'パソコンスタンド',
'ノートパソコンスタンド',
'マウスパッド',
'テンキー',
'タッチペン',
'スタイラスペン',
'スマホスタンド'
    ],
    account: '消耗品費',
    description:
      '業務で使用する少額のパソコン周辺機器は、一般的に消耗品費が候補です。'
  },

  {
    keywords: [
      'モニター',
      'ディスプレイ',
      'プリンター',
      '複合機',
      'コピー機',
      'シュレッダー',
      'プロジェクター',
      'スキャナー',
'ラベルプリンター',
'業務用プリンター',
'液晶モニター',
'pcモニター',
'パソコンモニター',
'大型ディスプレイ',
'テレビ会議用モニター',
'電子黒板',
'会議用プロジェクター'
    ],
    account: '消耗品費 または 工具器具備品',
description:
'購入金額や使用期間、会社の資産計上基準によって勘定科目が変わります。一般的には10万円未満は消耗品費、10万円以上は固定資産（工具器具備品）として処理する会社が多いです。※会社によって基準金額は異なります。'  },

  {
    keywords: [
      'ボールペン',
      'ペン',
      '鉛筆',
      '消しゴム',
      'ノート',
      '付箋',
      'ふせん',
      'ファイル',
      '封筒',
      'はさみ',
      'ホチキス',
      'クリップ',
      '文房具',
      '事務用品',
      'シャーペン',
'シャープペンシル',
'蛍光ペン',
'油性ペン',
'マーカー',
'修正テープ',
'修正液',
'定規',
'カッター',
'カッターマット',
'のり',
'テープ',
'セロハンテープ',
'両面テープ',
'輪ゴム',
'電卓',
'クリアファイル',
'バインダー',
'リングファイル',
'名札',
'ラベルシール',
'宛名シール',
'印鑑',
'朱肉',
'スタンプ',
'スタンプ台',
'デスクマット',
'ホワイトボード',
'ホワイトボードマーカー'
    ],
    account: '消耗品費',
    description:
      '業務で使用する文房具や少額の事務用品は、一般的に消耗品費として処理します。'
  },

  {
    keywords: [
      'コピー用紙',
      '印刷用紙',
      'プリンター用紙',
      'インク',
      'トナー',
      'プリンターインク',
      'a4用紙',
      '紙',

'a3用紙',
'普通紙',
'写真用紙',
'ラベル用紙',
'名刺用紙',
'プリンターカートリッジ',
'インクカートリッジ',
'純正インク',
'互換インク',
'トナーカートリッジ',
'ドラムカートリッジ'
    ],
    account: '消耗品費',
    description:
      '印刷に使用する用紙やインク、トナーは、一般的に消耗品費が候補です。'
  },

  {
    keywords: [
      '電車',
      '電車代',
      '地下鉄',
      '新幹線',
      'バス',
      'バス代',
      'タクシー',
      'タクシー代',
      '飛行機',
      '航空券',
      '交通費',
      '切符',
      '乗車券',
      'モノレール',
      '交通費',

'路面電車',
'特急',
'特急券',
'指定席',
'指定席料金',
'グリーン車',
'グリーン券',
'定期券',
'業務用定期券',
'icカード',
'suica',
'pasmo',
'icoca',
'manaca',
'空港バス',
'リムジンバス',
'フェリー',
'船代',
'出張交通費',
'出張の電車代',
'出張の飛行機代'
    ],
    account: '旅費交通費',
    description:
      '業務上の移動にかかった交通費は、一般的に旅費交通費として処理します。'
  },

  {
    keywords: [
      'ホテル',
      'ホテル代',
      '宿泊費',
      '宿泊代',
      '旅館',
      '出張宿泊',
      'ビジネスホテル',
'民宿',
'ゲストハウス',
'出張ホテル',
'出張のホテル代',
'宿泊料金',
'宿泊税',
'ホテル予約',
'出張宿泊費'
    ],
    account: '旅費交通費',
    description:
      '出張に伴う宿泊費は、一般的に旅費交通費として処理します。'
  },

  {
    keywords: [
      'ガソリン',
      'ガソリン代',
      '給油',
      '高速代',
      '高速道路',
      'etc',
      '駐車場',
      '駐車料金',
      'コインパーキング',
      'レンタカー',
'レンタカー代',
'カーシェア',
'カーシェア代',
'タイムズカー',
'有料道路',
'通行料金',
'パーキング',
'月極駐車場',
'洗車',
'洗車代',
'オイル交換',
'タイヤ交換',
'車検',
'車検代',
'自動車修理',
'車両修理',
'バッテリー交換'
    ],
    account: '旅費交通費 または 車両費',
    description:
      '会社の経理方針により、旅費交通費または車両費などで処理します。'
  },

  {
    keywords: [
      '電話代',
      '携帯代',
      'スマホ代',
      'インターネット',
      'ネット代',
      'wifi',
      'wi-fi',
      '回線料金',
      'プロバイダー',
      '通信料金',
      '携帯電話料金',
'スマートフォン料金',
'携帯料金',
'スマホ料金',
'固定電話',
'固定電話代',
'電話料金',
'通話料',
'データ通信料',
'モバイル通信',
'モバイルwifi',
'ポケットwifi',
'光回線',
'光回線料金',
'インターネット回線',
'ネット回線',
'ルーター利用料',
'プロバイダー料金',
'通信回線'
    ],
    account: '通信費',
    description:
      '業務で使用する電話やインターネットの料金は、一般的に通信費として処理します。'
  },

  {
    keywords: [
      '切手',
      '郵便',
      '郵送料',
      'レターパック',
      'はがき',
      '宅配便',
      '送料',
      '配送費',
      'ゆうパック',
      'クリックポスト',
      '郵便切手',
'郵便料金',
'普通郵便',
'簡易書留',
'書留',
'速達',
'スマートレター',
'ゆうメール',
'宅急便',
'宅配料金',
'配送料',
'発送費',
'発送代',
'クロネコヤマト',
'ヤマト運輸',
'佐川急便',
'日本郵便',
'着払い送料',
'商品発送',
'梱包送料'
    ],
    account: '通信費 または 荷造運賃',
    description:
      '書類の郵送は通信費、商品の発送は荷造運賃として処理することが一般的です。'
  },

  {
    keywords: [
      '書籍',
      '本',
      '専門書',
      '参考書',
      '雑誌',
      '新聞',
      '電子書籍',
      'kindle',
      'ビジネス書',
'実務書',
'技術書',
'業界誌',
'専門雑誌',
'定期購読',
'新聞購読',
'新聞代',
'雑誌代',
'書籍代',
'電子書籍代',
'kindle本',
'有料記事',
'業務マニュアル',
'法令集'
    ],
    account: '新聞図書費',
    description:
'業務に必要な書籍や新聞、専門誌などは、一般的に新聞図書費として処理します。会社によっては消耗品費で処理する場合もあります。'
  },

  {
    keywords: [
      'セミナー',
      '講習',
      '研修',
      '勉強会',
      'オンライン講座',
      '受講料',
      '研修費',
      'スクール',
      'ウェビナー',
'オンラインセミナー',
'社内研修',
'外部研修',
'社員研修',
'新人研修',
'ビジネス講座',
'eラーニング',
'通信講座',
'研修受講料',
'講座受講料',
'セミナー参加費',
'勉強会参加費',
'研修教材'
    ],
    account: '研修費',
    description:
      '業務に必要な知識や技術を学ぶための費用は、一般的に研修費として処理します。'
  },

  {
    keywords: [
      '資格試験',
      '検定料',
      '受験料',
      '試験代',
      '資格取得',
      '資格受験料',
'検定試験',
'検定受験料',
'試験受験料',
'簿記試験',
'簿記検定',
'秘書検定',
'fp試験',
'itパスポート',
'mos試験',
'資格更新料',
'免許更新料',
'資格登録料',
'資格取得費用'
    ],
    account: '研修費 または 福利厚生費',
    description:
      '業務上必要な資格の場合、研修費などで処理します。会社の規定によって異なります。'
  },

  {
    keywords: [
      '取引先との食事',
      '取引先と食事',
      '接待',
      '会食',
      '取引先と飲み会',
      '取引先への手土産',
      '贈答品',
      'お中元',
      'お歳暮',
      '取引先とのランチ',
'取引先との会食',
'取引先との飲み会',
'取引先と居酒屋',
'取引先とのゴルフ',
'接待ゴルフ',
'接待飲食費',
'取引先へのプレゼント',
'取引先への贈り物',
'取引先へのお祝い',
'開店祝い',
'移転祝い',
'慶弔費',
'香典',
'祝儀',
'お祝い金',
'取引先への差し入れ',
'取引先へのお土産',
'手土産',
'菓子折り'
    ],
    account: '接待交際費',
    description:
      '取引先との関係を円滑にする目的の飲食や贈答は、一般的に接待交際費が候補です。'
  },

  {
    keywords: [
      '会議の弁当',
      '会議弁当',
      '会議の飲み物',
      '会議のお茶',
      '打ち合わせの食事',
      '会議中の食事',
      '会議のコーヒー',
'会議のジュース',
'会議のお菓子',
'打ち合わせのお茶',
'打ち合わせのコーヒー',
'打ち合わせの飲み物',
'打ち合わせの弁当',
'会議室の飲食',
'社外打ち合わせ',
'カフェで打ち合わせ',
'喫茶店で打ち合わせ',
'オンライン会議用弁当'
    ],
    account: '会議費',
    description:
      '会議や打ち合わせに伴う通常の飲食費は、一般的に会議費として処理します。'
  },

  {
    keywords: [
      '社員のお菓子',
      '社内のお菓子',
      '社員の飲み物',
      '社内の飲み物',
      'ウォーターサーバー',
      '社員旅行',
      '健康診断',
      '忘年会',
      '新年会',
      '社員用コーヒー',
'社員用のお茶',
'社員用ジュース',
'社内コーヒー',
'社内のお茶',
'社内用ミネラルウォーター',
'社員用ミネラルウォーター',
'飲料水',
'社内イベント',
'社員懇親会',
'社内懇親会',
'歓送迎会',
'社員運動会',
'社内レクリエーション',
'健康診断費用',
'人間ドック',
'予防接種',
'インフルエンザ予防接種',
'常備薬',
'社員用救急箱'
    ],
    account: '福利厚生費',
    description:
      '一定の基準で従業員全体を対象として支出する費用は、福利厚生費が候補です。'
  },

  {
    keywords: [
      '家賃',
      '事務所家賃',
      'オフィス家賃',
      '店舗家賃',
      '倉庫家賃',
      '賃料',
      'オフィス賃料',
'店舗賃料',
'倉庫賃料',
'事務所賃料',
'土地賃料',
'月極家賃',
'テナント料',
'テナント家賃',
'レンタルオフィス',
'シェアオフィス',
'コワーキングスペース',
'貸会議室'
    ],
    account: '地代家賃',
    description:
      '事務所や店舗、倉庫などの賃料は、一般的に地代家賃として処理します。'
  },

  {
    keywords: [
      '電気代',
      '水道代',
      'ガス代',
      '水道光熱費',
      '光熱費',
      '電気料金',
'水道料金',
'ガス料金',
'上下水道代',
'上下水道料金',
'都市ガス',
'プロパンガス',
'事務所の電気代',
'店舗の電気代',
'事務所の水道代',
'店舗のガス代'
    ],
    account: '水道光熱費',
    description:
      '事業所で使用した電気、ガス、水道の料金は、一般的に水道光熱費として処理します。'
  },

  {
    keywords: [
      '修理',
      '修理代',
      '修繕',
      '修繕費',
      'パソコン修理',
      'エアコン修理',
      '設備修理',
      'プリンター修理',
'コピー機修理',
'スマホ修理',
'社用車修理',
'車両修理',
'机の修理',
'椅子の修理',
'店舗修理',
'事務所修理',
'水漏れ修理',
'配管修理',
'電気設備修理',
'壁紙補修',
'窓ガラス修理',
'鍵交換',
'部品交換',
'メンテナンス',
'保守修理'
    ],
    account: '修繕費',
    description:
      '既存の資産を元の状態に戻すための修理費用は、一般的に修繕費が候補です。'
  },

  {
    keywords: [
      '清掃',
      '清掃代',
      '掃除',
      'クリーニング',
      '害虫駆除',
      'ゴミ処理',
      '清掃業者',
'清掃委託',
'オフィス清掃',
'店舗清掃',
'エアコンクリーニング',
'カーペット清掃',
'窓清掃',
'ごみ回収',
'廃棄物処理',
'産業廃棄物処理',
'消毒',
'除菌',
'害虫駆除費',
'ネズミ駆除',
'ゴキブリ駆除'
    ],
    account: '衛生費 または 支払手数料',
    description:
      '清掃や衛生管理に関する支出は、衛生費などで処理する場合があります。'
  },

  {
    keywords: [
      '振込手数料',
      '銀行手数料',
      '決済手数料',
      'クレジットカード手数料',
      '代引手数料',
      '送金手数料',
      'atm手数料',
'口座振替手数料',
'振替手数料',
'カード決済手数料',
'キャッシュレス決済手数料',
'電子決済手数料',
'paypal手数料',
'stripe手数料',
'代引き手数料',
'コンビニ決済手数料',
'両替手数料',
'海外送金手数料',
'為替手数料',
'証明書発行手数料'
    ],
    account: '支払手数料',
    description:
      '銀行振込や決済サービスなどで発生した手数料は、一般的に支払手数料として処理します。'
  },

  {
    keywords: [
      '税理士',
      '税理士報酬',
      '弁護士',
      '弁護士報酬',
      '司法書士',
      '社会保険労務士',
      '社労士',
      '行政書士',
      '専門家報酬',
      '公認会計士',
'会計士報酬',
'弁理士',
'弁理士報酬',
'コンサルタント',
'コンサルティング料',
'経営コンサルタント',
'顧問料',
'税務顧問料',
'法律相談料',
'社労士報酬',
'行政書士報酬',
'司法書士報酬'
    ],
    account: '支払報酬料（会社によっては支払手数料）',
    description:
      '税理士や弁護士などの専門家へ支払う報酬は、一般的に支払報酬料として処理します。'
  },

  {
    keywords: [
      '広告',
      '広告費',
      'ネット広告',
      'sns広告',
      'インスタ広告',
      'google広告',
      'チラシ',
      'パンフレット',
      'ポスター',
      '看板',
      'instagram広告',
'facebook広告',
'x広告',
'tiktok広告',
'youtube広告',
'リスティング広告',
'検索広告',
'バナー広告',
'ディスプレイ広告',
'求人以外の広告',
'広告掲載料',
'雑誌広告',
'新聞広告',
'駅広告',
'電車広告',
'看板広告',
'ポスティング',
'チラシ配布',
'ノベルティ',
'販促品',
'試供品'
    ],
    account: '広告宣伝費',
    description:
      '商品やサービスを広く宣伝するための支出は、一般的に広告宣伝費として処理します。'
  },

  {
    keywords: [
      '名刺',
      '名刺印刷',
      '会社案内',
      'パンフレット印刷',
      'チラシ印刷',
      'ショップカード',
'ポイントカード',
'スタンプカード',
'会社パンフレット',
'商品パンフレット',
'カタログ',
'商品カタログ',
'メニュー表',
'ポストカード',
'ダイレクトメール',
'dm印刷',
'封筒印刷',
'社名入り封筒',
'ロゴ入り封筒'
    ],
    account: '広告宣伝費 または 消耗品費',
    description:
      '使用目的や会社の処理方針により、広告宣伝費または消耗品費などで処理します。'
  },

  {
    keywords: [
      'ホームページ',
      'ウェブサイト',
      'webサイト',
      'サイト制作',
      'ホームページ制作',
      'ドメイン',
      'サーバー',
      'レンタルサーバー',
      'web制作',
'ウェブ制作',
'サイトリニューアル',
'ホームページ更新',
'ホームページ保守',
'サイト保守',
'サイト運用',
'ドメイン代',
'ドメイン更新料',
'サーバー代',
'サーバー利用料',
'レンタルサーバー代',
'クラウドサーバー',
'wordpress',
'ワードプレス',
'ssl証明書',
'ホームページ管理費'
    ],
    account: '広告宣伝費、通信費またはソフトウェア',
    description:
      '制作内容や金額、使用期間によって処理が異なります。ドメインやサーバー代は通信費などが候補です。'
  },

  {
    keywords: [
      '会計ソフト',
      'ソフトウェア',
      'アプリ',
      'サブスク',
      '月額サービス',
      'クラウドサービス',
      'zoom',
      'slack',
      'chatwork',
      'adobe',
      'canva',
      'chatgpt',
'chatgpt plus',
'microsoft365',
'office365',
'google workspace',
'dropbox',
'notion',
'teams',
'microsoft teams',
'freee',
'マネーフォワード',
'money forward',
'弥生会計',
'tkc',
'会計システム',
'勤怠システム',
'給与ソフト',
'顧客管理システム',
'crm',
'オンラインストレージ',
'クラウドストレージ',
'セキュリティソフト',
'ウイルス対策ソフト',
'adobe creative cloud',
'photoshop',
'illustrator',
'premiere pro',
'capcut',
'figma',
'github'
    ],
    account: '通信費、支払手数料または消耗品費',
    description:
      'クラウドサービスや月額ソフトは、会社の経理方針により勘定科目が異なります。'
  },

  {
    keywords: [
      '机',
      'デスク',
      '椅子',
      'チェア',
      '棚',
      'ロッカー',
      'キャビネット',
      '家具',
      'オフィスデスク',
'事務机',
'会議机',
'会議用テーブル',
'テーブル',
'オフィスチェア',
'事務椅子',
'会議用椅子',
'本棚',
'書棚',
'収納棚',
'パーテーション',
'間仕切り',
'ソファ',
'応接セット',
'受付カウンター',
'傘立て'
    ],
    account: '消耗品費 または 工具器具備品',
description:
'購入金額や耐用年数、会社の資産計上基準によって処理が異なります。一般的には10万円未満は消耗品費、10万円以上は固定資産（工具器具備品）として処理する会社が多いです。※会社によって基準金額は異なります。'  },

  {
    keywords: [
      '制服',
      '作業着',
      'ユニフォーム',
      '安全靴',
      'ヘルメット',
      '作業服',
'事務服',
'会社制服',
'スタッフ制服',
'エプロン',
'白衣',
'防寒着',
'作業用手袋',
'軍手',
'保護メガネ',
'安全帯',
'名札',
'社員証ケース'
    ],
    account: '消耗品費 または 福利厚生費',
    description:
      '業務でのみ使用する制服や作業用品は、消耗品費などで処理します。'
  },

  {
    keywords: [
      '採用広告',
      '求人広告',
      '求人掲載',
      '人材紹介',
      '採用費',
      '求人サイト',
      'indeed',
'インディード',
'求人ボックス',
'タウンワーク',
'マイナビ',
'リクナビ',
'doda',
'エン転職',
'求人媒体',
'採用サイト',
'採用ホームページ',
'人材紹介手数料',
'採用手数料',
'面接会場費',
'会社説明会',
'採用説明会'
    ],
    account: '採用教育費 または 広告宣伝費',
    description:
      '従業員の募集や採用にかかった費用は、採用教育費などで処理します。'
  },

  {
    keywords: [
      '給料',
      '給与',
      '社員給与',
      'アルバイト代',
      'パート代',
      '社員の給料',
'従業員給与',
'従業員の給料',
'役員以外の給与',
'基本給',
'残業代',
'時間外手当',
'休日手当',
'深夜手当',
'住宅手当',
'家族手当',
'通勤手当',
'アルバイト給与',
'パート給与'
    ],
    account: '給与手当',
    description:
      '従業員へ支払う給与は、一般的に給与手当として処理します。'
  },

  {
    keywords: [
      '外注',
      '外注費',
      '業務委託',
      '業務委託費',
      'フリーランス',
      '制作依頼',
      '動画編集依頼',
      'デザイン依頼',
      'ホームページ制作依頼',
'web制作依頼',
'コーディング依頼',
'プログラミング依頼',
'ライティング依頼',
'記事作成依頼',
'撮影依頼',
'写真撮影依頼',
'イラスト制作依頼',
'ロゴ制作依頼',
'sns運用代行',
'経理代行',
'記帳代行',
'清掃業務委託',
'配送業務委託',
'翻訳依頼'
    ],
    account: '外注費',
    description:
      '社外の事業者へ業務を委託した費用は、一般的に外注費として処理します。'
  },

  {
    keywords: [
      '保険',
      '火災保険',
      '自動車保険',
      '損害保険',
      '賠償責任保険',
      '店舗保険',
'事務所保険',
'地震保険',
'動産保険',
'施設賠償責任保険',
'業務災害保険',
'任意保険',
'自賠責保険',
'自動車任意保険',
'サイバー保険',
'保険料支払い'
    ],
    account: '保険料',
    description:
      '事業に関係する保険の料金は、一般的に保険料として処理します。'
  },

  {
    keywords: [
      '収入印紙',
      '印紙',
      '固定資産税',
      '自動車税',
      '事業税',
      '印紙代',
'登録免許税',
'不動産取得税',
'都市計画税',
'軽自動車税',
'法人事業税',
'事業所税',
'自動車重量税',
'証紙',
'収入証紙',
'行政手数料'
    ],
    account: '租税公課',
    description:
      '収入印紙や事業に関する一部の税金は、一般的に租税公課として処理します。'
  },

  {
    keywords: [
      '寄付',
      '寄附',
      '募金',
      '寄付金',
      '義援金',
'支援金',
'災害義援金',
'災害支援金',
'団体への寄付',
'学校への寄付',
'神社への寄付',
'寺院への寄付',
'協賛金'
    ],
    account: '寄付金',
    description:
      '団体などへの寄付は、一般的に寄付金として処理します。'
  },

  {
    keywords: [
      '借入金利息',
      '利息',
      '銀行利息',
      'ローン利息',
      '借入利息',
'借入金の利息',
'融資利息',
'銀行借入利息',
'ローンの利息',
'分割払い利息',
'リボ払い利息',
'遅延利息'
    ],
    account: '支払利息',
    description:
      '借入金などに対して支払う利息は、一般的に支払利息として処理します。'
  },

  {
    keywords: [
      'amazon',
      '楽天',
      '楽天市場',
      'ヨドバシ',
      'ビックカメラ',
      'コンビニ',
      'ホームセンター',
      'スーパー',
      'yahooショッピング',
'yahoo!ショッピング',
'アスクル',
'モノタロウ',
'たのめーる',
'無印良品',
'ニトリ',
'ikea',
'イケア',
'カインズ',
'コーナン',
'ドンキ',
'ドンキホーテ',
'ダイソー',
'セリア',
'キャンドゥ',
'100円ショップ',
'百均',
'セブンイレブン',
'ファミリーマート',
'ローソン',
'ドラッグストア',
'家電量販店'
    ],
    account: '購入した内容によって異なります',
    description:
      '購入先の名前だけでは勘定科目を判断できません。購入した商品や利用目的を入力してください。'
  },
  {
  keywords: [
    '賞与',
    'ボーナス',
    '社員賞与',
    '従業員賞与',
    '夏季賞与',
    '冬季賞与',
    '決算賞与'
  ],
  account: '賞与',
  description:
    '従業員へ支給するボーナスは、一般的に賞与として処理します。'
},
{
  keywords: [
    'ゴミ袋',
    '洗剤',
    '掃除用洗剤',
    'スポンジ',
    '雑巾',
    'モップ',
    'ほうき',
    'ちりとり',
    'トイレットペーパー',
    'ティッシュ',
    'ペーパータオル',
    'ハンドソープ',
    '消毒液',
    'アルコール消毒液'
  ],
  account: '消耗品費 または 衛生費',
  description:
    '事業所で使用する清掃用品や衛生用品は、消耗品費または衛生費などで処理します。'
},
{
  keywords: [
    '冷蔵庫',
    '業務用冷蔵庫',
    '電子レンジ',
    '電気ポット',
    'ケトル',
    'コーヒーメーカー',
    '空気清浄機',
    '加湿器',
    '扇風機',
    'エアコン',
    'テレビ'
  ],
  account: '消耗品費 または 工具器具備品',
description:
'購入金額や使用期間、会社の資産計上基準によって処理が異なります。一般的には10万円未満は消耗品費、10万円以上は固定資産（工具器具備品）として処理する会社が多いです。※会社によって基準金額は異なります。'},
{
  keywords: [
    '仕入',
    '仕入れ',
    '商品仕入',
    '商品の仕入',
    '商品購入',
    '販売用商品',
    '販売商品',
    '在庫',
    '在庫商品',
    '材料仕入',
    '原材料',
    '材料購入',
    '部品仕入',
    '商品の仕入れ',
    '商品',
'販売商品',
'売る商品',
'仕入商品',
'商品入荷',
'在庫補充'
  ],
  account: '仕入',
  description:
    '販売する商品や製品、原材料などを購入した場合は、一般的に仕入として処理します。事務用品など自社で使用するものは仕入ではなく、消耗品費などになることが一般的です。'
},
{
  keywords: [
    '社会保険',
    '健康保険',
    '厚生年金',
    '介護保険',
    '子ども子育て拠出金',
    '雇用保険',
    '労災保険',
    '労働保険',
    '社会保険料',
    '会社負担の社会保険',
    '会社負担保険料',
    '会社負担の健康保険',
    '会社負担の厚生年金',
    '会社負担の雇用保険',
    '会社負担の労災保険'
  ],
  account: '法定福利費',
  description:
    '会社が負担する健康保険・厚生年金・雇用保険・労災保険などの法定福利費は、一般的に法定福利費として処理します。従業員の給与から控除する社会保険料とは区別されます。'
},
{
  keywords: [
    '雑費',
    '少額の支出',
    '少額購入',
    '少額費用',
    '細かい費用',
    'その他の費用',
    'その他経費',
    'その他支出',
    '予備費',
    '少額雑貨',
    '端数',
    '端数調整'
  ],
  account: '雑費',
  description:
    '他の勘定科目に当てはまらない少額の支出は、雑費として処理することがあります。ただし、継続的に発生する費用は、できるだけ内容に合った勘定科目で処理することが一般的です。'
},
];

const keywordList = [
  ...new Set(
    accountData.flatMap((item) => item.keywords)
  )
];

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[　\s]/g, '')
    .replace(/[・／/]/g, '')
    .replace(/[！!？?。、,.]/g, '');
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => {
    const escapeCharacters = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return escapeCharacters[character];
  });
}

function runSearch(keyword = searchInput?.value ?? '') {
  hideSuggestions();
  const originalValue = keyword.trim();
  const value = normalizeText(originalValue);

  if (!value) {
    searchMessage.innerHTML = `
      <p class="search-error">
        購入したものや取引内容を入力してください。
      </p>
    `;

    searchMessage.classList.add('is-visible');
    searchInput?.focus();
    return;
  }

  /*
   * 「Amazon パソコン」のようにスペースで区切られた入力を
   * 複数の検索語に分けます。
   */
  const searchWords = originalValue
    .split(/[　\s]+/)
    .map((word) => normalizeText(word))
    .filter(Boolean);

  /*
   * accountDataのすべての項目を調べ、
   * 一致度をscoreとして計算します。
   */
  const scoredData = accountData.map((item) => {
    let score = 0;
    const matchedKeywords = [];

    item.keywords.forEach((keywordItem) => {
      const normalizedKeyword = normalizeText(keywordItem);

      if (!normalizedKeyword) {
        return;
      }

      /*
       * 完全一致
       * 例：「コーヒー」で「コーヒー」に一致
       */
      if (value === normalizedKeyword) {
        score += 100;
        matchedKeywords.push(keywordItem);
        return;
      }

      /*
       * 入力した文章の中に登録キーワードが含まれる
       * 例：「Amazonでパソコンを購入」に「パソコン」が含まれる
       */
      if (value.includes(normalizedKeyword)) {
        score += 70 + Math.min(normalizedKeyword.length, 20);
        matchedKeywords.push(keywordItem);
        return;
      }

      /*
       * 登録キーワードの中に入力内容が含まれる
       * 例：「インスタ」で「インスタ広告」に一致
       */
      if (
        normalizedKeyword.includes(value) &&
        value.length >= 2
      ) {
        score += 45 + Math.min(value.length, 20);
        matchedKeywords.push(keywordItem);
      }
    });

    /*
     * スペースで区切った検索語も個別に調べます。
     * 例：「Amazon パソコン」
     */
    searchWords.forEach((searchWord) => {
      let wordMatched = false;

      item.keywords.forEach((keywordItem) => {
        const normalizedKeyword = normalizeText(keywordItem);

        if (searchWord === normalizedKeyword) {
          score += 35;
          wordMatched = true;
        } else if (
          normalizedKeyword.includes(searchWord) ||
          searchWord.includes(normalizedKeyword)
        ) {
          score += 20;
          wordMatched = true;
        }

        if (
          wordMatched &&
          !matchedKeywords.includes(keywordItem)
        ) {
          matchedKeywords.push(keywordItem);
        }
      });
    });

    /*
     * Amazonや楽天など、購入先だけの項目が
     *ほかの具体的な商品より上位になりにくくします。
     */
    if (item.account === '購入した内容によって異なります') {
      score -= 15;
    }

    return {
      ...item,
      score,
      matchedKeywords
    };
  });

  /*
   * 一致した項目だけを残し、
   * 点数が高い順に並べます。
   */
  const matchedData = scoredData
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  /*
   * 同じ勘定科目・同じ説明文の候補が重複した場合は、
   * 1件にまとめます。
   */
  const uniqueResults = matchedData.filter(
    (item, index, array) => {
      return (
        index ===
        array.findIndex(
          (otherItem) =>
            otherItem.account === item.account &&
            otherItem.description === item.description
        )
      );
    }
  );

  /*
   * 表示件数は最大5件にします。
   */
  const displayedResults = uniqueResults.slice(0, 5);

  if (displayedResults.length === 0) {
    searchMessage.innerHTML = `
      <div class="search-result">
        <p class="result-title">
          「${escapeHtml(originalValue)}」に一致する候補が見つかりませんでした
        </p>

        <p>
          購入先ではなく、購入したものや取引内容を短い言葉で入力してください。
        </p>

        <p class="result-note">
          例：コピー用紙、取引先との食事、電車代、会計ソフト
        </p>
      </div>
    `;

    searchMessage.classList.add('is-visible');
    return;
  }

  const resultCards = displayedResults
  .map((item, index) => {
    const uniqueMatchedKeywords = [
      ...new Set(item.matchedKeywords)
    ].slice(0, 4);

    const matchedKeywordTags =
      uniqueMatchedKeywords.length > 0
        ? `
          <div class="result-section result-section--match">
            <p class="result-section__label">
              <span class="result-icon" aria-hidden="true"></span>
              一致した言葉
            </p>

            <div class="result-tags">
              ${uniqueMatchedKeywords
                .map(
                  (keyword) => `
                    <span class="result-tag">
                      ${escapeHtml(keyword)}
                    </span>
                  `
                )
                .join('')}
            </div>
          </div>
        `
        : '';

    return `
      <article class="search-result">
        <p class="result-label">
          候補 ${index + 1}
        </p>

        <div class="result-section result-section--account">
          <p class="result-section__label">
            <span class="result-icon" aria-hidden="true"></span>
            勘定科目
          </p>

          <h3>${escapeHtml(item.account)}</h3>
        </div>

        <div class="result-section result-section--description">
          <p class="result-section__label">
            <span class="result-icon" aria-hidden="true"></span>
            ポイント
          </p>

          <p class="result-description">
            ${escapeHtml(item.description)}
          </p>
        </div>

        ${matchedKeywordTags}
      </article>
    `;
  })
  .join('');

searchMessage.innerHTML = `
  <div class="search-result-summary">
    <p class="result-title">
      「${escapeHtml(originalValue)}」の検索結果
    </p>

    <p>
      ${displayedResults.length}件の候補を、一致度が高い順に表示しています。
    </p>
  </div>

  <div class="search-result-list">
    ${resultCards}
  </div>

  <div class="search-result-caution">
    <span aria-hidden="true">⚠️</span>

    <p>
      実際の処理は、金額・使用目的・契約内容・会社のルールによって異なる場合があります。
    </p>
  </div>
`;

searchMessage.classList.add('is-visible');}
function hideSuggestions() {
  if (!suggestions) {
    return;
  }

  suggestions.innerHTML = '';
  suggestions.style.display = 'none';
}

function showSuggestions() {
  if (!searchInput || !suggestions) {
    return;
  }

  const inputValue = normalizeText(searchInput.value);

  if (!inputValue) {
    hideSuggestions();
    return;
  }

  const matchedKeywords = keywordList
    .filter((keyword) => {
      const normalizedKeyword = normalizeText(keyword);

      return normalizedKeyword.includes(inputValue);
    })
    .sort((a, b) => {
      const normalizedA = normalizeText(a);
      const normalizedB = normalizeText(b);

      const aStartsWith = normalizedA.startsWith(inputValue);
      const bStartsWith = normalizedB.startsWith(inputValue);

      if (aStartsWith && !bStartsWith) {
        return -1;
      }

      if (!aStartsWith && bStartsWith) {
        return 1;
      }

      return a.length - b.length;
    })
    .slice(0, 10);

  if (matchedKeywords.length === 0) {
    hideSuggestions();
    return;
  }

  suggestions.innerHTML = matchedKeywords
    .map((keyword) => {
      return `
        <button
          type="button"
          class="suggestion-item"
          data-suggestion="${escapeHtml(keyword)}"
        >
          ${escapeHtml(keyword)}
        </button>
      `;
    })
    .join('');

  suggestions.style.display = 'block';
}

searchInput?.addEventListener('input', () => {
  showSuggestions();
});

suggestions?.addEventListener('click', (event) => {
  const selectedItem = event.target.closest('[data-suggestion]');

  if (!selectedItem || !searchInput) {
    return;
  }

  const selectedKeyword = selectedItem.dataset.suggestion;

  searchInput.value = selectedKeyword;
  hideSuggestions();
  runSearch(selectedKeyword);
});

document.addEventListener('click', (event) => {
const clickedInsideSearchBox = event.target.closest('.search-panel');
  if (!clickedInsideSearchBox) {
    hideSuggestions();
  }
});searchButton?.addEventListener('click', () => {
  hideSuggestions();
  runSearch();
});

searchInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    hideSuggestions();
    runSearch();
  }

  if (event.key === 'Escape') {
    hideSuggestions();
  }
});

document.querySelectorAll('[data-keyword], [data-demo]').forEach((button) => {
  button.addEventListener('click', () => {
    const keyword =
      button.dataset.keyword ||
      button.dataset.demo ||
      '';

    if (searchInput) {
      searchInput.value = keyword;
    }

    runSearch(keyword);

    document.querySelector('.search-panel')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
});