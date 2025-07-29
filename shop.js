export function addMarkersToMap(map, mapHeight, markerGroups, icons) {
  const shops = [
    {
      name: "れんがや",
      x: 3009,
      y: 521,
      type: "restaurant",
      hours: "11時～21時（水曜日定休）",
      parking: "あり",
      phone: "0480-65-7468",
      url: "https://www.lengaya.jp/",
      image:
        "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/2l/01/5642264.jpg",
    },
    {
      name: "シャトレーゼ 加須店",
      x: 3097,
      y: 986,
      type: "restaurant",
      hours: "9時30分～20時30分",
      parking: "あり",
      phone: "0480-62-3330",
      url: "https://www.chateraise.co.jp/ec/shop/o616104?utm_source=gmb&utm_medium=616104",
      image:
        "https://image.ekiten.jp/contribution/501919/20230522204806_77072698.JPG",
    },
    {
      name: "鶴市",
      x: 3000,
      y: 1660,
      type: "restaurant",
      hours: "17時00分～22時00分（水曜日定休）",
      parking: "あり",
      phone: "0480-65-5581",
      image:
        "https://pbs.twimg.com/profile_images/813311588539060224/JIsL8Mqw_400x400.jpg",
    },
    {
      name: "洋菓子倶楽部エーデルワイス 花崎店",
      x: 2911,
      y: 1715,
      type: "restaurant",
      hours: "11時00分～19時00分",
      parking: "あり",
      phone: "0480-65-7468",
      url: "https://kuki-edelweiss.com/",
      image:
        "https://jikomanpuku.com/wp-content/uploads/2025/02/IMG_8929-2.jpg",
    },
    {
      name: "インド料理 シャゴル",
      x: 2880,
      y: 622,
      type: "restaurant",
      hours: "11時00分～15時00分<br>17時00分～22時00分",
      parking: "あり",
      phone: "0480-65-9333",
      url: "https://yzw3.ho-zuki.com/curry/",
      image:
        "https://image.ekiten.jp/contribution/6907511/20230625205159_91174887.jpg",
    },
    {
      name: "コナズ珈琲ビバモール加須",
      x: 2445,
      y: 2302,
      type: "restaurant",
      hours: "9時00分～22時00分(土・日・祝)<br>10時00分～22時00分(平日)",
      parking: "あり",
      phone: "0480-65-5581",
      image:
        "https://konas-fan.cafe-tatsujin.com/wp-content/uploads/2019/05/konas-coffee-kazo-2.jpg",
    },
    {
      name: "来集軒久下店",
      x: 2740,
      y: 702,
      type: "restaurant",
      hours: "11時30分～14時15分<br>17時00分～19時00分(日・月曜日定休)",
      parking: "あり",
      phone: "0480-65-2752",
      url: "http://www.utsugi-raisyuuken.com/index.html",
      image:
        "https://ximg.retty.me/crop/s400x400/q80/dal/-/retty/img_repo/2l/01/3758732.jpg",
    },
    {
      name: "フライングガーデン 加須店",
      x: 2709,
      y: 383,
      type: "restaurant",
      hours: "11時00分～22時00分",
      parking: "あり",
      phone: "0480-63-1811",
      url: "http://www.fgarden.co.jp/",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/6/5/1/1060047156/0000028880/1060047156_0000028880_1.jpg",
    },
    {
      name: "PORTA FORTUNA（ポルタ フォルトゥーナ）",
      x: 2660,
      y: 344,
      type: "restaurant",
      hours: "11時00分～20時00分",
      parking: "あり",
      phone: "0480-65-7468",
      url: "https://www.instagram.com/portafortuna_2024/",
      image:
        "https://hanamaru-kazo.com/common/image2.php?1=1&h=490&f=%2Fdb%5Fimg%2Fcl%5Fimg%2F434%2Fmain%5Fimg%5F2025021416272061%2Epng",
    },
    {
      name: "ゆで太郎 もつ次郎 加須北小浜店",
      x: 2582,
      y: 425,
      type: "restaurant",
      hours: "5時00分～23時00分",
      parking: "あり",
      phone: "0480-53-7221",
      url: "http://www.yudetaro.jp/",
      image:
        "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/2l/01/35921441.jpg",
    },
    {
      name: "ステーキのどん 加須店",
      x: 2505,
      y: 428,
      type: "restaurant",
      hours: "11時00分～23時30分",
      parking: "あり",
      phone: "0480-62-2170",
      url: "https://www.steak-don.jp/shop_detail.html?snum=22",
      image: "https://imgfp.hotp.jp/IMGH/00/87/P037870087/P037870087_480.jpg",
    },
    {
      name: "ケンタッキーフライドチキン加須店",
      x: 2504,
      y: 495,
      type: "restaurant",
      hours: "10時00分～21時00分",
      parking: "あり",
      phone: "0480-63-1075",
      url: "https://search.kfc.co.jp/map/1451",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/2/7/3/1060006372/0000004142/1060006372_0000004142_2.jpg",
    },
    {
      name: "家族のイタリアン 集",
      x: 2350,
      y: 460,
      type: "restaurant",
      hours: "11時00分～21時30分",
      parking: "あり",
      phone: "0480-53-9848",
      url: "https://romantic-kaido.jp/shop/?id=shu",
      image:
        "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/2l/01/34720569.jpg",
    },
    {
      name: "韓風堂",
      x: 2300,
      y: 440,
      type: "restaurant",
      hours: "11時00分～21時00分",
      parking: "あり",
      phone: "0480-63-2121",
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "がってん寿司 加須店",
      x: 2200,
      y: 510,
      type: "restaurant",
      hours: "11時00分～21時00分",
      parking: "あり",
      phone: "0480-63-2121",
      url: "https://www.rdcgroup.co.jp/gattenbrand/gatten/",
      image:
        "https://cdn.jalan.jp/jalan/img/9/kuchikomi/4089/KM/83349_0004089448_1.jpg",
    },
    {
      name: "夢庵 加須店",
      x: 2032,
      y: 535,
      type: "restaurant",
      hours: "10時00分～23時30分",
      parking: "あり",
      phone: "0570-014-008",
      url: "https://www.skylark.co.jp/yumean/?utm_source=ym&utm_medium=gmb&utm_campaign=brandtop-Saitama",
      image:
        "https://cdn.jalan.jp/jalan/img/2/kuchikomi/5152/KL/6e0a7_0005152374_1.jpeg",
    },
    {
      name: "ココス 加須店",
      x: 1963,
      y: 547,
      type: "restaurant",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-63-1056",
      url: "https://maps.cocos-jpn.co.jp/jp/detail/2610.html",
      image:
        "https://tb-static.uber.com/prod/image-proc/processed_images/4f82c1b88a0572ce1c7b0dffd741d760/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
    },
    {
      name: "かつや 埼玉加須店",
      x: 1360,
      y: 214,
      type: "restaurant",
      hours: "10時30分～22時30分",
      parking: "あり",
      phone: "0480-63-1811",
      url: "https://shop.arclandservice.co.jp/ae-shop/spot/detail?code=433",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/5/7/3/75000000000000114375/0000021733/75000000000000114375_0000021733_4.jpg",
    },
    {
      name: "焼肉けむり",
      x: 1323,
      y: 158,
      type: "restaurant",
      hours: "11時30分～22時00分(木曜日定休)",
      parking: "あり",
      phone: "0480-31-8849",
      url: "http://www.kemuri.jp/",
      image:
        "https://hanamaru-kazo.com/common/image2.php?1=1&w=1200&c=1&r=16,9&f=%2Fdb%5Fimg%2Ftopics%5Fimg%2F107%2Flist%5Fimage%5F20211102134057285%2Ejpeg",
    },
    {
      name: "まつもと",
      x: 1252,
      y: 380,
      type: "restaurant",
      hours: "5時00分～23時00分",
      parking: "あり",
      phone: "0480-62-6208",
      url: "http://www.washoku-matsumoto.jp/",
      image:
        "https://lh6.googleusercontent.com/proxy/izsqs4wSJcGVU-_w2UoNGaemb7nRvQFFpxUS30eF9y2UMDFTZzdyZIPNe1qYXvHX34X-PnyPxWzXTLRrfm1hUHul",
    },
    {
      name: "ラーメン一代元 加須三俣店",
      x: 1280,
      y: 244,
      type: "restaurant",
      hours: "11時00分～22時00分",
      parking: "あり",
      phone: "0480-62-2336",
      image:
        "https://tblg.k-img.com/restaurant/images/Rvw/85037/640x640_rect_85037400.jpg",
    },
    {
      name: "とりあえず吾平 埼玉加須店",
      x: 1019,
      y: 125,
      type: "restaurant",
      hours: "17時00分～0時00分",
      parking: "あり",
      phone: "0480-63-0311",
      url: "https://r.gnavi.co.jp/1hw6tycx0000/?sc_lid=home_check_shop",
      image:
        "https://rimage.gnst.jp/rest/img/1hw6tycx0000/s_0nlm.jpg?t=1572511291",
    },
    {
      name: "しゃぶ葉 加須店",
      x: 873,
      y: 96,
      type: "restaurant",
      hours: "11時00分～21時30分",
      parking: "あり",
      phone: "0480-63-1048",
      url: "https://www.skylark.co.jp/syabuyo/?utm_source=ss&utm_medium=gmb&utm_campaign=brandtop-Saitama",
      image:
        "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/2l/01/7241170.jpg",
    },
    {
      name: "北海道生まれ和食処とんでん 加須店",
      x: 1030,
      y: 592,
      type: "restaurant",
      hours: "11時00分～21時30分",
      parking: "あり",
      phone: "0480-62-3671",
      url: "https://www.tonden.co.jp/shop/22",
      image: "https://mesi-pero.com/wp-content/uploads/2025/01/IMG_5262.jpeg",
    },
    {
      name: "うどん酒房 たぬき",
      x: 985,
      y: 587,
      type: "restaurant",
      hours: "10時15分～23時00分",
      parking: "あり",
      phone: "0480-63-0068",
      url: "https://www.udon-tanuki.com/",
      image: "https://udon-tanuki-takeout.com/dist/img/banquet4.jpg",
    },
    {
      name: "手打ちうどん・そば 子亀",
      x: 350,
      y: 545,
      type: "restaurant",
      hours: "11時00分～14時30分<br>17時00分～19時30分(水曜日定休)",
      parking: "あり",
      phone: "0480-62-2876",
      url: "http://www.kogame-udon.jp/",
      image:
        "https://www.nishikawa1566.com/contents/nishikawa-chain/special/oichii/assets/img/img-kazo_udon/img-01.jpg",
    },
    {
      name: "デニーズ 加須店",
      x: 295,
      y: 543,
      type: "restaurant",
      hours: "6時00分～0時00分",
      parking: "あり",
      phone: "080-3459-1729",
      url: "https://www.dennys.jp/",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/7/9/2/1060007297/0000000137/1060007297_0000000137_8.jpg",
    },
    {
      name: "とん秀",
      x: 824,
      y: 838,
      type: "restaurant",
      hours: "11時30分～15時00分<br>17時00分～21時00分",
      parking: "あり",
      phone: "0480-62-0473",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/7/3/8/14092710837/0000034479/14092710837_0000034479_2.jpg",
    },
    {
      name: "料亭さかもと",
      x: 874,
      y: 941,
      type: "restaurant",
      hours: "20時00分～1時00分(日曜日定休)",
      parking: "あり",
      phone: "0480-62-6933",
      url: "http://ryoutei-sakamoto.com/",
      image: "https://ryoutei-sakamoto.com/images/3500.jpg",
    },
    {
      name: "ぽえむ",
      x: 730,
      y: 930,
      type: "restaurant",
      hours: "6時00分～0時00分(日曜日定休)",
      parking: "あり",
      phone: "080-3459-1729",
      url: "https://www.snakaranavi.net/shop.php?sno=8873",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiXetdHyvrckZjwDrsfr_tN1yNO8y4UdGUw&s",
    },
    {
      name: "Cafe&DINING BAR Tomoe",
      x: 845,
      y: 1012,
      type: "restaurant",
      hours: "11時30分～14時00分<br>17時30分～23時00分(月曜日定休)",
      parking: "あり",
      phone: "0480-61-0155",
      url: "https://kazo-tomoe.jimdofree.com/",
      image:
        "https://stat.ameba.jp/user_images/20191008/06/wing000555/96/dd/j/o1080072014609601561.jpg",
    },
    {
      name: "純手打うどんそば 吉野屋本舗",
      x: 648,
      y: 1080,
      type: "restaurant",
      hours: "11時00分～14時00分(火曜日定休)",
      parking: "あり",
      phone: "0480-61-0532",
      image:
        "https://kazo-udon.jpn.org/_src/88061182/01-02.jpg?v=1741379181009",
    },
    {
      name: "中華 かし亀",
      x: 625,
      y: 1127,
      type: "restaurant",
      hours: "11時00分～14時00分<br>18時00分～19時30分(日曜日定休)",
      parking: "あり",
      phone: "0480-62-1408",
      url: "https://www.instagram.com/kazo_kashikame_/",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fd/68/3e/photo0jpg.jpg?w=500&h=-1&s=1",
    },
    {
      name: "たけちゃん",
      x: 617,
      y: 1130,
      type: "restaurant",
      hours: "17時00分～23時00分",
      parking: "あり",
      phone: "090-2313-0396",
      image: "https://imgfp.hotp.jp/IMGH/80/02/P040938002/P040938002_480.jpg",
    },
    {
      name: "らぁ麵屋 麓 加須",
      x: 638,
      y: 1263,
      type: "restaurant",
      hours: "11時00分～14時30分<br>17時00分～1時30分",
      parking: "あり",
      phone: "0480-61-8666",
      url: "https://www.instagram.com/ramenya_roku/",
      image: "https://supleks.jp/img/stored/x92D2Q5Iza4Ou6siA8PlmMg6Y3WTtesq",
    },
    {
      name: "焼き鳥みくる",
      x: 783,
      y: 1185,
      type: "restaurant",
      hours: "17時00分～0時00分(日曜日定休)",
      parking: "あり",
      phone: "080-9773-6900",
      image:
        "https://hanamaru-kazo.com/common/image2.php?1=1&h=490&f=%2Fdb%5Fimg%2Fcl%5Fimg%2F439%2Fmain%5Fimg%5F20250528162856976%2Epng",
    },
    {
      name: "うおのぶ",
      x: 865,
      y: 1194,
      type: "restaurant",
      hours: "11時30分～23時00分(月曜日定休)",
      parking: "あり",
      phone: "0480-61-0351",
      url: "https://www.uonobu.net/",
      image:
        "https://image.ekiten.jp/contribution/501675/20240330194743_66576716.jpg",
    },
    {
      name: "炙りや 極味 総本店",
      x: 805,
      y: 1215,
      type: "restaurant",
      hours: "11時00分～14時00分<br>17時00分～0時00分(月曜日定休)",
      parking: "あり",
      phone: "0480-61-7788",
      url: "https://www.hotpepper.jp/strJ003516148/",
      image: "https://imgfp.hotp.jp/IMGH/32/64/P041363264/P041363264_480.jpg",
    },
    {
      name: "居酒屋 匠",
      x: 955,
      y: 1515,
      type: "restaurant",
      hours: "16時00分～1時00分(土・日)<br>16時00分～0時00分(平日)",
      parking: "あり",
      phone: "0480-61-1246",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/8/5/3/00000000000080008358/0000003087/00000000000080008358_0000003087_1.jpg",
    },
    {
      name: "絶好調てらす家",
      x: 955,
      y: 1525,
      type: "restaurant",
      hours: "17時00分～23時00分(金・土曜日以外定休)",
      parking: "あり",
      phone: "0480-48-7619",
      url: "https://www.terasuya.com/",
      image: "https://imgfp.hotp.jp/IMGH/15/49/P038151549/P038151549_480.jpg",
    },
    {
      name: "別邸ｰHANAREｰ",
      x: 955,
      y: 1545,
      type: "restaurant",
      hours: "17時00分～0時00分(月・火曜日定休)",
      parking: "あり",
      phone: "0480-53-5993",
      image:
        "https://stat.ameba.jp/user_images/20240511/21/yutasmama/f5/74/j/o1080108015437475142.jpg",
    },
    {
      name: "殿様キッチンハウス",
      x: 958,
      y: 1592,
      type: "restaurant",
      hours: "17時30分～23時30分(日曜日定休)",
      parking: "あり",
      phone: "0480-61-3253",
      image:
        "https://hanamaru-kazo.com/db_img/site_img/images/img_2021082415312452.jpg",
    },
    {
      name: "炭火焼肉かりん",
      x: 1028,
      y: 1660,
      type: "restaurant",
      hours: "17時00分～23時00分(火曜日定休)",
      parking: "あり",
      phone: "なし",
      url: "https://www.shorinen.com/karin/",
      image:
        "https://www.jalan.net/jalan/img/9/kuchikomi/4309/KXL/80670_0004309454_1.JPG",
    },
    {
      name: "とみい",
      x: 1288,
      y: 956,
      type: "restaurant",
      hours: "17時00分～22時30分",
      parking: "あり",
      phone: "0480-62-7998",
      image: "https://imgfp.hotp.jp/IMGH/92/39/P041839239/P041839239_480.jpg",
    },
    {
      name: "佐渡",
      x: 1545,
      y: 909,
      type: "restaurant",
      hours: "18時00分～1時00分(月曜日定休)",
      parking: "あり",
      phone: "0480-61-0073",
      image:
        "https://image.ekiten.jp/contribution/502313/20240505170115_50545266.jpg",
    },
    {
      name: "彩加",
      x: 1630,
      y: 1070,
      type: "restaurant",
      hours: "11時30分～14時00分<br>17時00分～23時00分",
      parking: "あり",
      phone: "0480-62-3883",
      image:
        "https://tblg.k-img.com/restaurant/images/Rvw/307506/640x640_rect_6978a2bf9caf972ea100e364c5ab9708.jpg",
    },
    {
      name: "とん平",
      x: 1998,
      y: 1110,
      type: "restaurant",
      hours: "17時00分～23時00分",
      parking: "あり",
      phone: "0480-65-5303",
      image:
        "https://tblg.k-img.com/restaurant/images/Rvw/121866/640x640_rect_121866988.jpg",
    },
    {
      name: "よしもと",
      x: 2000,
      y: 1185,
      type: "restaurant",
      hours: "11時00分～14時30分",
      parking: "あり",
      phone: "0480-66-1122",
      image:
        "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/2l/01/10339293.jpg",
    },
    {
      name: "マサララソイ",
      x: 1797,
      y: 1229,
      type: "restaurant",
      hours: "11時00分～14時30分<br>17時00分～21時30分",
      parking: "あり",
      phone: "0480-53-3959",
      image: "https://tblg.k-img.com/restaurant/images/Rvw/62349/62349274.jpg",
    },
    {
      name: "いちふく",
      x: 1690,
      y: 1399,
      type: "restaurant",
      hours: "16時00分～0時00分",
      parking: "あり",
      phone: "0480-66-1291",
      image:
        "https://tblg.k-img.com/restaurant/images/Rvw/218166/640x640_rect_47ee41f4f0cc92f3b42c3fdb30552fba.jpg",
    },
    {
      name: "手打そばうどん 久下屋脩兵衛",
      x: 1723,
      y: 1541,
      type: "restaurant",
      hours: "11時00分～15時30分<br>17時30分～20時15分(火曜日定休)",
      parking: "あり",
      phone: "0480-65-5225",
      url: "http://kugeya-s.com/",
      image: "https://cdn.goope.jp/56848/170627223342kjcx_l.jpg",
    },
    {
      name: "こぶし",
      x: 1857,
      y: 1867,
      type: "restaurant",
      hours: "11時00分～15時00分<br>17時00分～20時00分(月曜日定休)",
      parking: "あり",
      phone: "0480-65-4611",
      url: "https://kobushikazoshi.wixsite.com/mottocom",
      image:
        "https://s1.spkimg.com/image/2016/08/11/19/4cuHV1Obt8twW8JzAC90vRifWdlPhm1N.jpg",
    },
    {
      name: "お気楽酒家どもん",
      x: 950,
      y: 1025,
      type: "restaurant",
      hours: "17時30分～23時00分(日曜日臨時休業あり)",
      parking: "あり",
      phone: "0480-62-5300",
      image: "https://www.apahotel.com/image/a1_9.jpg",
    },
    {
      name: "海鮮酒房せんりょう",
      x: 785,
      y: 1195,
      type: "restaurant",
      hours: "17時30分～23時00分",
      parking: "あり",
      phone: "0480-61-8139",
      image: "https://imgfp.hotp.jp/IMGH/62/57/P043426257/P043426257_480.jpg",
    },
    {
      name: "もつ焼き 康",
      x: 750,
      y: 1330,
      type: "restaurant",
      hours: "16時00分～22時30分(火曜日定休)",
      parking: "あり",
      phone: "0480-61-2939",
      image:
        "https://imagedelivery.net/0Xfr734EZhL-f9btSNh4FQ/uploads/merchant/660f6943e93d0167043794.jpg/public",
    },
    {
      name: "焼肉ダイニング加須園",
      x: 790,
      y: 1165,
      type: "restaurant",
      hours: "17時00分～23時00分(水曜日定休)",
      parking: "あり",
      phone: "0480-61-4197",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuIQZJ2WDkR0phqCUwyxDEaIo8SXoT1KHug&s",
    },
    {
      name: "大衆酒場つなぐ家",
      x: 1020,
      y: 1156,
      type: "restaurant",
      hours: "16時00分～23時00分(月曜日定休)",
      parking: "あり",
      phone: "0480-31-9680",
      url: "https://tsunaguya1101.com/",
      image:
        "https://rimage.gnst.jp/rest/img/28y9zpjz0000/s_0n79.jpg?t=1547572813",
    },
    {
      name: "三勝",
      x: 1086,
      y: 1188,
      type: "restaurant",
      hours: "11時00分～14時00分<br>17時00分～23時00分(月曜日定休)",
      parking: "あり",
      phone: "0480-61-1155",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/0/5/2/14091105250/0000003087/14091105250_0000003087_3.jpg",
    },
    //↑ここまで飲食店	↓ここからコンビニ
    {
      name: "セブン-イレブン 加須南篠崎２丁目店",
      x: 2942,
      y: 594,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-66-2271",
      image:
        "https://play-lh.googleusercontent.com/EEX7U_o2Q9o4kjuo1j1IR4JCm6LO29BifTdi404TFFQxnQsB8sGFXONbTDC6Yko3iik",
    },
    {
      name: "ファミリーマート 加須久下店",
      x: 3115,
      y: 924,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-76-0180",
      image:
        "https://www.fashionsnap.com/article/images/2024/03/familymart-wear-202403041-7aa06c70-7764-4acf-b33f-a2a3c390c1a1.png",
    },
    {
      name: "ローソン 加須花崎四丁目店",
      x: 2945,
      y: 1690,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-53-6639",
      image:
        "https://logomarket.jp/labo/wp-content/uploads/2015/08/ee41502991024c1fcb472b58f4e38aea.png",
    },
    {
      name: "セブン-イレブン 加須北小浜店",
      x: 1780,
      y: 291,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-61-7711",
      image:
        "https://play-lh.googleusercontent.com/EEX7U_o2Q9o4kjuo1j1IR4JCm6LO29BifTdi404TFFQxnQsB8sGFXONbTDC6Yko3iik",
    },
    {
      name: "セブン-イレブン 加須久下店",
      x: 2100,
      y: 823,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-65-5957",
      image:
        "https://play-lh.googleusercontent.com/EEX7U_o2Q9o4kjuo1j1IR4JCm6LO29BifTdi404TFFQxnQsB8sGFXONbTDC6Yko3iik",
    },
    {
      name: "セブン-イレブン 加須久下南店",
      x: 2041,
      y: 1628,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-65-7577",
      image:
        "https://play-lh.googleusercontent.com/EEX7U_o2Q9o4kjuo1j1IR4JCm6LO29BifTdi404TFFQxnQsB8sGFXONbTDC6Yko3iik",
    },
    {
      name: "セブン-イレブン 加須市役所前店",
      x: 812,
      y: 294,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-63-2022",
      image:
        "https://play-lh.googleusercontent.com/EEX7U_o2Q9o4kjuo1j1IR4JCm6LO29BifTdi404TFFQxnQsB8sGFXONbTDC6Yko3iik",
    },
    {
      name: "セイコーマート 加須向川岸店",
      x: 1134,
      y: 640,
      type: "shop",
      hours: "6時00分～23時00分",
      parking: "あり",
      phone: "0480-53-6112",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5l8Et4nuZmGeivOWL-r-EXCboKL2jK02yhw&s",
    },
    {
      name: "セブン-イレブン 加須南町店",
      x: 1035,
      y: 1757,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-62-5734",
      image:
        "https://play-lh.googleusercontent.com/EEX7U_o2Q9o4kjuo1j1IR4JCm6LO29BifTdi404TFFQxnQsB8sGFXONbTDC6Yko3iik",
    },
    {
      name: "セブン-イレブン 加須大門町店",
      x: 632,
      y: 592,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-61-7717",
      image:
        "https://play-lh.googleusercontent.com/EEX7U_o2Q9o4kjuo1j1IR4JCm6LO29BifTdi404TFFQxnQsB8sGFXONbTDC6Yko3iik",
    },
    {
      name: "ローソン 加須諏訪一丁目店",
      x: 248,
      y: 539,
      type: "shop",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-62-7180",
      image:
        "https://logomarket.jp/labo/wp-content/uploads/2015/08/ee41502991024c1fcb472b58f4e38aea.png",
    },
    //↑コンビニここまで	↓ここからスーパー
    {
      name: "ベルク 加須久下店",
      x: 2932,
      y: 1240,
      type: "market",
      hours: "9時00分～0時00分",
      parking: "あり",
      phone: "0480-76-3300",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIcc1vmbXzD2t4jLwA8zrvwjPEszR9BCdMg&s",
    },
    {
      name: "生鮮＆業務スーパー加須ビバモール店",
      x: 2514,
      y: 2255,
      type: "market",
      hours: "9時00分～21時00分",
      parking: "あり",
      phone: "0480-53-7695",
      image:
        "https://jice.homemate-research.com/pubuser1/pubuser_facility_img/8/3/7/75000000000000078738/0000028709/75000000000000078738_0000028709_2.jpg?f=400",
    },
    {
      name: "カスミ フードスクエア ビバモール加須店",
      x: 2104,
      y: 2375,
      type: "market",
      hours: "9時00分～0時00分",
      parking: "あり",
      phone: "0480-67-0333",
      image:
        "https://pbs.twimg.com/profile_images/1203833030441193473/18K6ytn9_400x400.jpg",
    },
    {
      name: "とりせん 加須浜町店",
      x: 1876,
      y: 693,
      type: "market",
      hours: "9時00分～21時45分",
      parking: "あり",
      phone: "0480-61-4669",
      image: "https://pbs.twimg.com/media/E2wsX8kUUAU-FKH.jpg:large",
    },
    {
      name: "ロヂャース 加須店",
      x: 994,
      y: 225,
      type: "market",
      hours: "9時00分～21時30分(日曜日)<br>9時30分～21時30分(日曜日以外)",
      parking: "あり",
      phone: "0480-62-6307",
      image:
        "https://smt.docomo.ne.jp/portal/dpoint/img/999999_540679_540680.png",
    },
    {
      name: "KAZO ケンゾー",
      x: 940,
      y: 630,
      type: "market",
      hours: "9時00分～20時30分",
      parking: "あり",
      phone: "0480-61-0343",
      image:
        "https://lh5.googleusercontent.com/proxy/Gva-R-xEXqo-I8NgbmD0t14GMJwHS_8JQkmZl7XnPBL54FaXXoVZDIrejddKekBUYuNZg9GK5zSbYXnpJHDnenZMBdks9NJjHlyH-Qm_KU-Ivdz3SgavKSgwIANNlcbMZiy1-MTp4sj1iGs",
    },
    {
      name: "ヤオコー 加須店",
      x: 220,
      y: 737,
      type: "market",
      hours: "9時00分～21時45分",
      parking: "あり",
      phone: "0480-53-3114",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNKcCynZt-5IQZVhXofbDUSkcmTIE46Qx6g&s",
    },
    //↑ここまでスーパー	↓ここから薬局
    {
      name: "ドラッグストアコスモス 久下店",
      x: 2625,
      y: 1231,
      type: "pharmacy",
      hours: "10時00分～21時00分",
      parking: "あり",
      phone: "0480-53-9050",
      image:
        "https://s-cuerno.com/wp-content/uploads/2024/10/ca9ccd0420504239b6d7a2a06ccc45a9.png",
    },
    {
      name: "ウエルシア加須久下店",
      x: 2195,
      y: 854,
      type: "pharmacy",
      hours: "9時00分～0時00分",
      parking: "あり",
      phone: "0480-67-7003",
      image:
        "https://wagasyade-saiyo.jp/picture/3b55057e10ac5391c5cf99a163ffb179244e5889.png",
    },
    {
      name: "ドラッグストアコスモス 加須浜町店",
      x: 1768,
      y: 635,
      type: "pharmacy",
      hours: "10時00分～21時00分",
      parking: "あり",
      phone: "0480-53-5855",
      image:
        "https://s-cuerno.com/wp-content/uploads/2024/10/ca9ccd0420504239b6d7a2a06ccc45a9.png",
    },
    {
      name: "ドラッグストアセキ 加須店",
      x: 1315,
      y: 380,
      type: "pharmacy",
      hours: "9時00分～23時00分",
      parking: "あり",
      phone: "0480-62-8068",
      image:
        "https://play-lh.googleusercontent.com/27QHNDwM2z7jYnB4cZ2qF4ATozQ7pr4XPWF4QrMVywHVnZr7CkTfxuzpffVfjdUd_y54",
    },
    {
      name: "ドラッグセイムス 加須東栄店",
      x: 1465,
      y: 866,
      type: "pharmacy",
      hours: "8時00分～21時45分",
      parking: "あり",
      phone: "0480-63-1551",
      image: "https://www.seims.co.jp/assets/img/service/img_brand.png",
    },
    {
      name: "クスリのアオキ 久下店",
      x: 1943,
      y: 1615,
      type: "pharmacy",
      hours: "9時00分～22時00分",
      parking: "あり",
      phone: "0480-48-7446",
      image: "https://public.muragon.com/7hlmbx05/mb7wjigh.jpg",
    },
    {
      name: "カワチ薬局 加須調剤",
      x: 1998,
      y: 2277,
      type: "pharmacy",
      hours: "9時00分～19時00分(日曜日定休)",
      parking: "あり",
      phone: "0480-7-3221",
      image:
        "https://play-lh.googleusercontent.com/9oYNaP7Ol2tVWY4FsAJ097tcvQ6aQtDR7ca6katNf2IpOMiNFMrWRKAI1EIXtCQ5WfK0",
    },
    {
      name: "ウエルシア加須店",
      x: 180,
      y: 760,
      type: "pharmacy",
      hours: "9時00分～23時00分",
      parking: "あり",
      phone: "0480-63-0308",
      image:
        "https://wagasyade-saiyo.jp/picture/3b55057e10ac5391c5cf99a163ffb179244e5889.png",
    },
    //↑ここまで薬局	↓ここからランドリー
    {
      name: "コインランドリー/ピエロ久下店",
      x: 2968,
      y: 702,
      type: "laundry",
      hours: "24時間営業",
      parking: "あり",
      phone: "0120-172-480",
      image:
        "https://laundry.senkaq.com/wp-content/uploads/2020/08/7ebdde47c19753fa2f84207203e1a215.jpg",
    },
    {
      name: "ランドリーカーサ とりせん加須浜町店",
      x: 1836,
      y: 612,
      type: "laundry",
      hours: "24時間営業",
      parking: "あり",
      phone: "03-6630-2632",
      image:
        "https://laundream.com/wp-content/uploads/2017/06/7dbcf4f4e0137a0db2ea5fd7e6256603.jpg",
    },
    {
      name: "コインランドリー TipTop",
      x: 1729,
      y: 844,
      type: "laundry",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-61-0221",
      image: "https://blog.ikehikoshop.jp/wp-content/uploads/2021/09/coin.jpg",
    },
    {
      name: "コインランドリープードル",
      x: 1970,
      y: 1258,
      type: "laundry",
      hours: "24時間営業",
      parking: "あり",
      phone: "050-1460-8834",
      image:
        "https://mikkemap.com/laundry/l-introduction/saitama/nuksxyre/img/img1.jpg",
    },
    {
      name: "コインランドリー 洗いまっせ 乾きまっせ",
      x: 2329,
      y: 2325,
      type: "laundry",
      hours: "24時間営業",
      parking: "あり",
      phone: "なし",
      image: "https://storage.googleapis.com/imaimg/15185116075608_720x405.jpg",
    },
    {
      name: "しゃぼん 加須店",
      x: 818,
      y: 50,
      type: "laundry",
      hours: "24時間営業",
      parking: "あり",
      phone: "なし",
      image: "https://www.reg.co.jp/_uploads/coin_laundry-kind1.png",
    },
    {
      name: "コインランドリー ドルフィン 加須店",
      x: 720,
      y: 600,
      type: "laundry",
      hours: "24時間営業",
      parking: "あり",
      phone: "なし",
      image:
        "https://pbs.twimg.com/media/EW5CVcoUMAAtoL_?format=jpg&name=large",
    },
    //↑ここまでランドリー	↓ここからGS
    {
      name: "ENEOS Dr.Driveセルフ花崎店",
      x: 3021,
      y: 1704,
      type: "gs",
      hours: "24時間営業",
      parking: "あり",
      phone: "0480-65-6333",
      image:
        "https://eneos-recruit.jp/rhp_root/static_contents/images/001/000413_223682.jpg",
    },
    {
      name: "丸紅エネルギー / (株)カトウコーポレーション セルフ加須西SS",
      x: 1965,
      y: 2480,
      type: "gs",
      hours: "7時00分～21時00分",
      parking: "あり",
      phone: "0480-76-2070",
      image:
        "https://d3rr6qn2571boz.cloudfront.net/images/rally/1199000142-1496050325.jpg",
    },
    {
      name: "apollostation セルフ加須市役所前SS",
      x: 870,
      y: 130,
      type: "gs",
      hours: "4時00分～3時00分",
      parking: "あり",
      phone: "0480-61-8881",
      image: "https://image.e-nenpi.com/gs_images/group8/52207/001thumb.jpg",
    },
  ];
  // あなたの全店舗データをここに追加！

  shops.forEach((shop) => {
    const y = mapHeight - shop.y;
    const x = shop.x;

    const type = (shop.type || "restaurant").toLowerCase();
    const icon = icons[type] || icons["restaurant"];

    const popup = `
      <b><h2>${shop.name}</h2></b><br>
      ${
        shop.image
          ? `<img src="${shop.image}" width="180" height="180" loading="lazy"><br>`
          : ""
      }
      <div style="display: flex; align-items: flex-start;">
        <span style="white-space: nowrap;"><strong>🕒 営業時間：</strong></span>
        <span style="padding-left: 0.5em;">${shop.hours}</span>
      </div>
      <div><strong>🅿️ 駐車場：</strong>${shop.parking}</div>
      <div><strong>☎️ 電話：</strong><a href="tel:${shop.phone}">${
      shop.phone
    }</a></div>
      ${
        shop.url
          ? `<div><strong>🌐 </strong><a href="${shop.url}" target="_blank">公式サイトはこちら</a></div>`
          : ""
      }
    `;

    const marker = L.marker([y, x], { icon }).bindPopup(popup);

    marker.on("click", () => {
      marker.bindPopup(popup).openPopup();
      const iconEl = marker.getElement();
      const inner = iconEl?.querySelector(".marker-inner");
      if (inner) {
        inner.style.transition = "transform 0.15s ease";
        inner.style.transform = "scale(1.3)";
        setTimeout(() => {
          inner.style.transform = "scale(0.9)";
        }, 100);
        setTimeout(() => {
          inner.style.transform = "scale(1)";
        }, 200);
      }
    });

    markerGroups[type].addLayer(marker);
  });
}
