const TRANSLATIONS = {
  ja: {
    /* ナビ */
    'nav-concept':   'こだわり',
    'nav-menu':      'メニュー',
    'nav-side':      'サイドメニュー',
    'nav-access':    'アクセス',
    'nav-blog':      '店長ブログ',
    'nav-recruit':   '採用情報',
    'nav-top':       '← TOP',

    /* グランドオープンバー */
    'open-bar': '🎉 GRAND OPEN — 2026年7月1日（火）オープン！',

    /* ヒーロー */
    'hero-badge':   'GRAND OPEN 2026.07.01',
    'hero-title1':  'ラーメン',
    'hero-title2':  '鳳凰',
    'hero-sub':     'RAMEN HOUOU — 鳳凰が舞う、至高の一杯',
    'hero-cta':     'メニューを見る',
    'hero-ql-blog':    '店長ブログ',
    'hero-ql-recruit': '採用情報',
    'hero-ql-access':  'アクセス',

    /* コンセプト */
    'concept-label': 'Our Concept',
    'concept-title': '炎で生まれる、<br>魂の一杯',
    'concept-desc':  '厳選した豚骨・鶏ガラを18時間かけて炊き上げた漆黒のスープ。焦がしニンニクと秘伝の醤油ダレが生み出す、深くて力強い味わい。麺は国産小麦100%の自家製麺を使用し、スープとの絡みにとことんこだわりました。<br><br>「鳳凰」の名の通り、炎のような情熱で毎日仕込む、妥協なき一杯をご提供します。',

    /* こだわり */
    'commit-label': 'Our Commitment',
    'commit-title': '鳳凰のこだわり',
    'commit-1-title': '18時間炊きのスープ',
    'commit-1-desc':  '豚骨・鶏ガラ・野菜を18時間以上かけてじっくり炊き上げ。コラーゲンたっぷりの白濁スープが秘伝ダレと合わさることで、唯一無二の漆黒スープが完成します。',
    'commit-2-title': '国産小麦の自家製麺',
    'commit-2-desc':  '北海道産小麦「春よ恋」を使用した自家製ストレート麺。毎朝打ちたての麺は、濃厚スープとの相性を追求した特注の太麺仕様。モチモチとした食感をお楽しみください。',
    'commit-3-title': '秘伝の焦がしニンニク油',
    'commit-3-desc':  '仕上げに垂らす、独自製法の焦がしニンニク油。香ばしい香りとコクが、スープに立体的な深みを与えます。この油なくして「鳳凰」の味は語れません。',

    /* メニュー */
    'menu-label':   'Menu',
    'menu-title':   'ラーメンメニュー',
    'menu-desc':    'すべてのラーメンには替え玉1回無料サービス付き。',
    'menu-sig-label': 'Signature Ramen — 看板メニュー',

    'menu1-name': '鳳凰醤油らーめん',
    'menu1-en':   'HOUOU SOY SAUCE RAMEN',
    'menu1-desc': '18時間炊きのスープに秘伝醤油ダレ。焦がしニンニク油を仕上げに加えた看板の一杯。チャーシュー3枚・味玉・メンマ・ねぎ入り。',
    'menu1-tag':  '人気No.1',

    'menu2-name': '赤鬼辛らーめん',
    'menu2-en':   'RED ONI SPICY RAMEN',
    'menu2-desc': '自家製辛味噌をたっぷり溶かし込んだ、痺れる辛さの一杯。辛さは3段階から選べます（辛口・激辛・鬼辛）。',
    'menu2-tag':  '辛さ選択可',

    'menu3-name': '塩白湯らーめん',
    'menu3-en':   'SHIO PAITAN RAMEN',
    'menu3-desc': '鶏白湯ベースに瀬戸内産塩ダレを合わせた、クリーミーで上品な一杯。鶏チャーシューと柚子の香りが絶妙。',
    'menu3-tag':  'あっさり系',

    'topping-label': 'Toppings — トッピング',
    'top-tamago':  '味玉',
    'top-chashu':  'チャーシュー（2枚）',
    'top-menma':   'メンマ',
    'top-nori':    'のり（3枚）',
    'top-corn':    'コーン',
    'top-butter':  'バター',
    'top-kaedama': '替え玉',
    'top-karami':  '辛味噌',

    /* サイドメニュー */
    'side-label': 'Side Menu',
    'side-title': 'サイドメニュー',
    'side1': '焼き餃子（6個）',
    'side2': '唐揚げ（3個）',
    'side3': '鳳凰チャーハン',
    'side4': 'TKGご飯',
    'side5': '生ビール',

    /* アクセス */
    'access-label':  'Access',
    'access-title':  'アクセス・営業情報',
    'info-name':     'ラーメン鳳凰（RAMEN HOUOU）',
    'info-addr':     '〒150-0001<br>東京都渋谷区神宮前1丁目1-1<br>鳳凰ビル1F',
    'info-station':  'JR原宿駅 徒歩5分<br>東京メトロ明治神宮前駅 徒歩3分',
    'info-hours':    '<span class="highlight">平日</span> 11:00〜15:00 / 18:00〜23:00<br><span class="highlight">土日祝</span> 11:00〜23:00（通し営業）',
    'info-closed':   '月曜日（祝日の場合は翌火曜日）',
    'info-seats':    'カウンター8席 / テーブル12席',
    'info-tel':      '03-XXXX-XXXX',
    'th-name':       '店名',
    'th-addr':       '住所',
    'th-station':    'アクセス',
    'th-hours':      '営業時間',
    'th-closed':     '定休日',
    'th-seats':      '席数',
    'th-tel':        'TEL',
    'map-label':     '地図はこちら',
    'map-btn':       'Google マップで開く',
    'tax-in':        '（税込）',

    /* フッター */
    'footer-tagline': 'RAMEN HOUOU — 鳳凰が舞う、至高の一杯',
    'footer-copy':    '© 2026 ラーメン鳳凰 All Rights Reserved.',

    /* ブログページ */
    'blog-page-label': "MASTER'S BLOG",
    'blog-page-title': '店長ブログ',
    'blog-page-sub':   '仕込みの裏側、素材へのこだわり、日々の出来事をお届けします。',
    'blog-cat-all':    'すべて',
    'blog-admin-link': '管理画面',
    'blog-read-more':  '続きを読む',
    'blog-popular':    '人気の記事',
    'blog-profile':    '店長プロフィール',
    'blog-category':   'カテゴリ',
    'blog-archive':    'アーカイブ',
    'blog-follow':     'フォローする',
    'profile-name':    '鈴木 誠一',
    'profile-role':    'MASTER / CHEF',
    'profile-bio':     '18歳から修行を始め、東京・大阪・博多の名店で計18年間腕を磨く。「一杯のラーメンで人を幸せにしたい」という想いを胸に、2026年7月に独立。得意は豚骨醤油と辛味噌。趣味は全国のラーメン食べ歩き。',
    'stat-years':      '修行年数',
    'stat-shops':      '在籍店舗数',
    'stat-trials':     '試作回数',

    /* 採用ページ */
    'rec-nav-back':   '← トップページへ戻る',
    'rec-page-label': 'RECRUIT',
    'rec-page-title': '採用情報',
    'rec-page-sub':   'ラーメン鳳凰で、一緒に最高の一杯を作りませんか。',
    'rec-why-label':  'Why Join Us',
    'rec-why-title':  '鳳凰で働く理由',
    'rec-r1-title':   '本物の技術が身につく',
    'rec-r1-desc':    'スープの仕込みから麺打ちまで、ラーメン職人としての技術をゼロから学べます。',
    'rec-r2-title':   'しっかりした待遇',
    'rec-r2-desc':    '経験・スキルに応じた給与設定。昇給・賞与あり。社会保険完備です。',
    'rec-r3-title':   'アットホームな職場',
    'rec-r3-desc':    '小規模店舗ならではのチームワーク。スタッフ全員が家族のように支え合います。',
    'rec-pos-label':  'Positions',
    'rec-pos-title':  '募集職種',
    'rec-apply-title': '応募フォーム',
    'rec-apply-desc': '以下のフォームにご記入の上、送信してください。担当者より3営業日以内にご連絡いたします。',
  },

  en: {
    /* Nav */
    'nav-concept':   'Concept',
    'nav-menu':      'Menu',
    'nav-side':      'Sides',
    'nav-access':    'Access',
    'nav-blog':      "Master's Blog",
    'nav-recruit':   'Careers',
    'nav-top':       '← TOP',

    /* Grand open bar */
    'open-bar': '🎉 GRAND OPEN — July 1st, 2026 (Tue) Now Open!',

    /* Hero */
    'hero-badge':   'GRAND OPEN 2026.07.01',
    'hero-title1':  'Ramen',
    'hero-title2':  'Houou',
    'hero-sub':     'RAMEN HOUOU — A Supreme Bowl, Where the Phoenix Soars',
    'hero-cta':     'View Menu',
    'hero-ql-blog':    "Master's Blog",
    'hero-ql-recruit': 'Careers',
    'hero-ql-access':  'Access',

    /* Concept */
    'concept-label': 'Our Concept',
    'concept-title': 'Born from Flame,<br>A Bowl with Soul',
    'concept-desc':  'A jet-black broth crafted from carefully selected pork bones and chicken carcasses, simmered for 18 hours. The depth and boldness born from charred garlic and our secret soy tare is unlike anything else. Paired with 100% domestic wheat hand-made noodles, every element is refined to perfection.<br><br>Like the phoenix itself, we pour fiery passion into every bowl, every single day.',

    /* Commitment */
    'commit-label': 'Our Commitment',
    'commit-title': 'The Houou Difference',
    'commit-1-title': '18-Hour Broth',
    'commit-1-desc':  'Pork bones, chicken carcasses, and vegetables are slowly simmered for over 18 hours. The rich, collagen-packed broth combines with our secret tare to create a one-of-a-kind dark broth.',
    'commit-2-title': 'House-Made Noodles',
    'commit-2-desc':  'Using 100% Hokkaido wheat "Haruyokoi," our fresh noodles are made every morning. The thick, chewy noodles are crafted specifically to pair with our rich broth.',
    'commit-3-title': 'Charred Garlic Oil',
    'commit-3-desc':  'Our signature finishing touch: a drizzle of house-made charred garlic oil. Its smoky aroma and richness add a whole new dimension of depth to the broth.',

    /* Menu */
    'menu-label':   'Menu',
    'menu-title':   'Ramen Menu',
    'menu-desc':    'All ramen comes with one free extra noodle (kaedama).',
    'menu-sig-label': 'Signature Ramen',

    'menu1-name': 'Houou Soy Sauce Ramen',
    'menu1-en':   'HOUOU SOY SAUCE RAMEN',
    'menu1-desc': 'Our signature bowl — 18-hour broth with secret soy tare and a finish of charred garlic oil. Topped with 3 slices of chashu, seasoned egg, bamboo shoots, and green onions.',
    'menu1-tag':  'Most Popular',

    'menu2-name': 'Red Oni Spicy Ramen',
    'menu2-en':   'RED ONI SPICY RAMEN',
    'menu2-desc': 'A bold, tingling bowl loaded with our house spicy miso. Choose your heat level: Spicy, Extra Spicy, or Demon Spicy.',
    'menu2-tag':  'Heat Level Choice',

    'menu3-name': 'Shio Paitan Ramen',
    'menu3-en':   'SHIO PAITAN RAMEN',
    'menu3-desc': 'A creamy chicken paitan broth paired with Seto Inland Sea salt tare. Topped with chicken chashu and a hint of yuzu — elegant and refined.',
    'menu3-tag':  'Light Style',

    'topping-label': 'Toppings',
    'top-tamago':  'Seasoned Egg',
    'top-chashu':  'Chashu (2 slices)',
    'top-menma':   'Bamboo Shoots',
    'top-nori':    'Nori (3 sheets)',
    'top-corn':    'Corn',
    'top-butter':  'Butter',
    'top-kaedama': 'Extra Noodles',
    'top-karami':  'Spicy Miso',

    /* Side Menu */
    'side-label': 'Side Menu',
    'side-title': 'Sides',
    'side1': 'Pan-fried Gyoza (6 pcs)',
    'side2': 'Karaage Chicken (3 pcs)',
    'side3': 'Houou Fried Rice',
    'side4': 'Egg on Rice (TKG)',
    'side5': 'Draft Beer',

    /* Access */
    'access-label':  'Access',
    'access-title':  'Hours & Access',
    'info-name':     'Ramen Houou',
    'info-addr':     '1-1-1 Jingumae, Shibuya-ku,<br>Tokyo 150-0001<br>Houou Bldg. 1F',
    'info-station':  '5 min walk from JR Harajuku Station<br>3 min walk from Tokyo Metro Meiji-Jingumae Station',
    'info-hours':    '<span class="highlight">Weekdays</span> 11:00–15:00 / 18:00–23:00<br><span class="highlight">Weekends & Holidays</span> 11:00–23:00',
    'info-closed':   'Mondays (or Tuesday if Monday is a holiday)',
    'info-seats':    '8 counter seats / 12 table seats',
    'info-tel':      '03-XXXX-XXXX',
    'th-name':       'Name',
    'th-addr':       'Address',
    'th-station':    'Access',
    'th-hours':      'Hours',
    'th-closed':     'Closed',
    'th-seats':      'Seats',
    'th-tel':        'TEL',
    'map-label':     'Map',
    'map-btn':       'Open in Google Maps',
    'tax-in':        '(incl. tax)',

    /* Footer */
    'footer-tagline': 'RAMEN HOUOU — A Supreme Bowl, Where the Phoenix Soars',
    'footer-copy':    '© 2026 Ramen Houou. All Rights Reserved.',

    /* Blog page */
    'blog-page-label': "MASTER'S BLOG",
    'blog-page-title': "Master's Blog",
    'blog-page-sub':   'Behind the broth, the noodles, and the passion — stories from our kitchen.',
    'blog-cat-all':    'All',
    'blog-admin-link': 'Admin',
    'blog-read-more':  'Read more',
    'blog-popular':    'Popular Posts',
    'blog-profile':    'About the Master',
    'blog-category':   'Categories',
    'blog-archive':    'Archive',
    'blog-follow':     'Follow Us',
    'profile-name':    'Seiichi Suzuki',
    'profile-role':    'MASTER / CHEF',
    'profile-bio':     'Starting his training at 18, Seiichi honed his craft for 18 years at renowned shops in Tokyo, Osaka, and Fukuoka. He opened Ramen Houou in July 2026 with one mission: to make people happy, one bowl at a time. His specialties are pork bone shoyu and spicy miso ramen, and off the clock, he travels the country hunting for great bowls of ramen.',
    'stat-years':      'Years of Training',
    'stat-shops':      'Shops Trained At',
    'stat-trials':     'Recipe Trials',

    /* Recruit page */
    'rec-nav-back':   '← Back to Top',
    'rec-page-label': 'RECRUIT',
    'rec-page-title': 'Careers',
    'rec-page-sub':   'Join us at Ramen Houou and help craft the perfect bowl.',
    'rec-why-label':  'Why Join Us',
    'rec-why-title':  'Why Work at Houou',
    'rec-r1-title':   'Learn Real Craft',
    'rec-r1-desc':    'From broth preparation to noodle making, you will develop true ramen artisan skills from scratch.',
    'rec-r2-title':   'Solid Compensation',
    'rec-r2-desc':    'Pay based on experience and skill. Annual raises, bonuses, and full social insurance.',
    'rec-r3-title':   'Warm Atmosphere',
    'rec-r3-desc':    'A small, tight-knit team where everyone looks out for each other like family.',
    'rec-pos-label':  'Positions',
    'rec-pos-title':  'Open Positions',
    'rec-apply-title': 'Apply Now',
    'rec-apply-desc': 'Fill in the form below and submit. We will get back to you within 3 business days.',
  }
};
