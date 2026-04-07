const familyData = [
    { latin: "Amaranthaceae", chinese: "莧科" },
    { latin: "Apocynaceae", chinese: "夾竹桃科" },
    { latin: "Araliaceae", chinese: "五加科" },
    { latin: "Balsaminaceae", chinese: "鳳仙花科" },
    { latin: "Berberidaceae", chinese: "小蘗科" },
    { latin: "Cannabinaceae", chinese: "大麻科" },
    { latin: "Compositae", chinese: "菊科" },
    { latin: "Cruciferae", chinese: "十字花科" },
    { latin: "Ephedraceae", chinese: "麻黃科" },
    { latin: "Euphorbiaceae", chinese: "大戟科" },
    { latin: "Gramineae", chinese: "禾本科" },
    { latin: "Guttiferae", chinese: "金絲桃科" },
    { latin: "Hamamelidaceae", chinese: "金縷梅科" },
    { latin: "Labiatae", chinese: "唇形花科" },
    { latin: "Linaceae", chinese: "亞麻科" },
    { latin: "Leguminosae", chinese: "豆科" },
    { latin: "Malvaceae", chinese: "錦葵科" },
    { latin: "Melastomataceae", chinese: "野牡丹科" },
    { latin: "Menispermaceae", chinese: "防己科" },
    { latin: "Moraceae", chinese: "桑科" },
    { latin: "Nymphaeaceae", chinese: "睡蓮科" },
    { latin: "Oxalidaceae", chinese: "酢醬草科" },
    { latin: "Papaveraceae", chinese: "罌粟科" },
    { latin: "Plantaginaceae", chinese: "車前草科" },
    { latin: "Polygonaceae", chinese: "蓼科" },
    { latin: "Portulacaceae", chinese: "馬齒莧科" },
    { latin: "Rosaceae", chinese: "薔薇科" },
    { latin: "Rubiaceae", chinese: "茜草科" },
    { latin: "Solanaceae", chinese: "茄科" },
    { latin: "Taxaceae", chinese: "紅豆杉科" },
    { latin: "Theaceae", chinese: "山茶科" },
    { latin: "Tropaeolaceae", chinese: "金蓮花科" },
    { latin: "Umbelliferae", chinese: "繖形科" },
    { latin: "Urticaceae", chinese: "蕁麻科" },
    { latin: "Zingiberaceae", chinese: "薑科" }
];

const plantDictionary = [
    {
        id: 1,
        answer: "球蕨,腎蕨",
        hint: "腎蕨科Nephrolepidaceae"
    },
    {
        id: 2,
        answer: "栗蕨",
        hint: "碗蕨科Dennstaedtiaceae"
    },
    {
        id: 3,
        answer: "稀子蕨",
        hint: "碗蕨科Dennstaedtiaceae"
    },
    {
        id: 4,
        answer: "海金沙",
        hint: "海金沙科Lygodiaceae\n為多年生攀援性細藤本蕨類，葉軸可無限生長、纏繞他物攀附而著名。\n特徵包括地上生根莖、葉軸細長（可達數公尺）、羽片二型即營養與孢子葉、孢子囊呈穗狀位於小羽片邊緣。\n常見於低海拔向陽林緣。\n孢子(中藥)利水通淋。"
    },
    {
        id: 5,
        answer: "野雉尾金粉蕨",
        hint: "鳳尾蕨科Pteridaceae\n主要為地生、岩生或附生，特徵為孢子囊呈群線形，沿葉緣排列，並具膜質假孢膜（由葉緣反捲而來）保護。假孢膜係來自葉緣反捲 。\n葉片多為一回羽狀至多回羽裂，羽片邊緣通常為鋸齒狀，葉柄多為稻稈色。\n多具短且斜生或橫走的根莖，密被鱗片。\n葉苦清熱解毒利濕根莖涼血止血。"
    },
    {
        id: 6,
        answer: "伏石蕨,抱樹蓮",
        hint: "水龍骨科Polypodiaceae\n常見的多年生中小型蕨類。\n主要特徵為根莖長橫走、密被鱗片，常附生於樹幹或岩石上。\n葉片多為單葉或一回羽狀分裂，常具革質。\n孢子囊群呈圓形、橢圓形或線形，分佈於葉背且「無孢膜」（無蓋），網眼內常具游離小脈。"
    },
    {
        id: 7,
        answer: "鳥巢蕨,山蘇",
        hint: "鐵角蕨科Aspleniaceae\n主要特徵為根莖短而直立或匍匐，密被黑褐色披針形鱗片。\n葉片多為一至多回羽狀分裂。葉片常為革質，葉柄具光澤。\n孢子囊群呈特殊的條線形，並通常生於羽片側脈的其中一側。\n多為岩生或樹上著生。"
    },
    {
        id: 8,
        answer: "骨碎補",
        hint: "骨碎補科Davalliaceae\n多年生附生蕨類\n顯著特徵包括「兔腳」般的密被鱗片長匍匐莖、杯狀孢膜。\n三至四回細裂的羽狀複葉，以及葉柄基部具關節。\n常附生於樹幹或岩石上，具強烈耐旱性，園藝常稱「兔腳蕨」。"
    },
    {
        id: 9,
        answer: "生根卷柏",
        hint: "卷柏科Selaginellaceae\n主要特徵為多年生，莖多為匍匐狀或基部分枝，具小葉且多為兩型（側葉與中葉），具獨特的「根支體」結構。\n以孢子繁殖，孢子囊穗通常四棱形生於枝端，其中如卷柏具顯著乾燥捲縮休眠特性，遇水即恢復生長。"
    },
    {
        id: 10,
        answer: "銳頭瓶爾小草,一葉草",
        hint: "瓶爾小草科Ophioglossaceae\n係古老的多年生草本蕨類植物，具備獨特的肉質特性。\n核心特徵為：根肉質粗大，莖短而直立；幼葉不捲旋（此不同於多數蕨類）\n營養葉全緣與孢子囊枝由同一柄分出。孢子囊枝形似穗狀的肉質構造。\n俗稱「一葉草」或「矛盾草」。"
    },
    {
        id: 11,
        answer: "黃鵪菜",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 12,
        answer: "兔兒菜",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 13,
        answer: "昭和草",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 14,
        answer: "紫背草,一點紅",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 15,
        answer: "扁桃斑鳩菊,南非葉,苦葉",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 16,
        answer: "白鳳菜",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 17,
        answer: "長柄菊",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 18,
        answer: "金鈕扣,六神花",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 19,
        answer: "馥芳艾納香",
        hint: "菊科Compositae/Asteraceae\n雙子葉植物中最大的一科。\n最主要特徵是其獨特的「頭狀花序」，即管狀花或舌狀花緊密簇生在一個總花萼（總苞）上，外觀像一朵花。\n果實為不開裂的瘦果，通常頂端帶有冠毛（如蒲公英），雄蕊花藥合生成筒狀。"
    },
    {
        id: 20,
        answer: "大葉千斤拔,一條根",
        hint: "豆科Leguminosae/ Fabaceae\n豆科植物（Fabaceae）是被子植物第三大科。\n最核心特徵是果實為「莢果」 ，單心皮。花通常具「蝶形花冠」（具旗瓣、翼瓣、龍骨瓣）。\n葉多為羽狀複葉，莖直立或攀緣。根部常有共生的固氮根瘤。"
    },
    {
        id: 21,
        answer: "望江南",
        hint: "豆科Leguminosae/ Fabaceae\n豆科植物（Fabaceae）是被子植物第三大科。\n最核心特徵是果實為「莢果」 ，單心皮。花通常具「蝶形花冠」（具旗瓣、翼瓣、龍骨瓣）。\n葉多為羽狀複葉，莖直立或攀緣。根部常有共生的固氮根瘤。"
    },
    {
        id: 22,
        answer: "粉撲花",
        hint: "豆科Leguminosae/ Fabaceae\n豆科植物（Fabaceae）是被子植物第三大科。\n最核心特徵是果實為「莢果」 ，單心皮。花通常具「蝶形花冠」（具旗瓣、翼瓣、龍骨瓣）。\n葉多為羽狀複葉，莖直立或攀緣。根部常有共生的固氮根瘤。"
    },
    {
        id: 23,
        answer: "小槐花",
        hint: "豆科Leguminosae/ Fabaceae\n豆科植物（Fabaceae）是被子植物第三大科。\n最核心特徵是果實為「莢果」 ，單心皮。花通常具「蝶形花冠」（具旗瓣、翼瓣、龍骨瓣）。\n葉多為羽狀複葉，莖直立或攀緣。根部常有共生的固氮根瘤。"
    },
    {
        id: 24,
        answer: "多花紫藤",
        hint: "豆科Leguminosae/ Fabaceae\n豆科植物（Fabaceae）是被子植物第三大科。\n最核心特徵是果實為「莢果」 ，單心皮。花通常具「蝶形花冠」（具旗瓣、翼瓣、龍骨瓣）。\n葉多為羽狀複葉，莖直立或攀緣。根部常有共生的固氮根瘤。"
    },
    {
        id: 25,
        answer: "塔花,光風輪",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 26,
        answer: "綠薄荷",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 27,
        answer: "紫蘇",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 28,
        answer: "仙草",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。\n清熱利濕 涼血解暑"
    },
    {
        id: 29,
        answer: "九層,塔羅勒",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 30,
        answer: "著手香",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 31,
        answer: "貓鬚草,化石草",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 32,
        answer: "益母草",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 33,
        answer: "夏枯草",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 34,
        answer: "彩葉草",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 35,
        answer: "頭花香苦草,白冇骨消",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 36,
        answer: "石薺薴",
        hint: "唇形科Labiatae/ Lamiaceae\n核心特徵為「方莖、對生葉、二唇花、四小堅果」，且多具芳香油腺。\n莖常為四方形，葉對生，花冠呈二唇形（上2裂、下3裂），雄蕊通常為4枚（二強雄蕊），果實由4個小堅果組成。\n常見植物如薄荷、薰衣草、迷迭香等。"
    },
    {
        id: 37,
        answer: "薑黃",
        hint: "薑科Zingiberaceae\n多年生熱帶草本植物，具芳香的塊狀根莖，常為重要調味與藥用植物。\n典型特徵為具匍匐或塊狀根莖，單葉互生且葉基有鞘。\n穗狀或圓錐花序，花兩性且兩側對稱，花瓣下部合生成管，且通常具有顯著的瓣化雄蕊。果實多為蒴果。"
    },
    {
        id: 38,
        answer: "莪朮",
        hint: "薑科Zingiberaceae\n多年生熱帶草本植物，具芳香的塊狀根莖，常為重要調味與藥用植物。\n典型特徵為具匍匐或塊狀根莖，單葉互生且葉基有鞘。\n穗狀或圓錐花序，花兩性且兩側對稱，花瓣下部合生成管，且通常具有顯著的瓣化雄蕊。果實多為蒴果。"
    },
    {
        id: 39,
        answer: "益智",
        hint: "薑科Zingiberaceae\n多年生熱帶草本植物，具芳香的塊狀根莖，常為重要調味與藥用植物。\n典型特徵為具匍匐或塊狀根莖，單葉互生且葉基有鞘。\n穗狀或圓錐花序，花兩性且兩側對稱，花瓣下部合生成管，且通常具有顯著的瓣化雄蕊。果實多為蒴果。\n溫脾止瀉、暖腎固精縮尿\n益智仁具健胃、強心、抑制前列腺素及抗子宮收縮作用，多用於治療腹瀉、遺尿、頻尿。"
    },
    {
        id: 40,
        answer: "球薑",
        hint: "薑科Zingiberaceae\n多年生熱帶草本植物，具芳香的塊狀根莖，常為重要調味與藥用植物。\n典型特徵為具匍匐或塊狀根莖，單葉互生且葉基有鞘。\n穗狀或圓錐花序，花兩性且兩側對稱，花瓣下部合生成管，且通常具有顯著的瓣化雄蕊。果實多為蒴果。"
    },
    {
        id: 41,
        answer: "孔雀薑",
        hint: "薑科Zingiberaceae\n多年生熱帶草本植物，具芳香的塊狀根莖，常為重要調味與藥用植物。\n典型特徵為具匍匐或塊狀根莖，單葉互生且葉基有鞘。\n穗狀或圓錐花序，花兩性且兩側對稱，花瓣下部合生成管，且通常具有顯著的瓣化雄蕊。果實多為蒴果。"
    },
    {
        id: 42,
        answer: "火炬薑,瓷玫瑰",
        hint: "薑科Zingiberaceae\n多年生熱帶草本植物，具芳香的塊狀根莖，常為重要調味與藥用植物。\n典型特徵為具匍匐或塊狀根莖，單葉互生且葉基有鞘。\n穗狀或圓錐花序，花兩性且兩側對稱，花瓣下部合生成管，且通常具有顯著的瓣化雄蕊。果實多為蒴果。"
    },
    {
        id: 43,
        answer: "三葉五加,白簕",
        hint: "五加科 Araliaceae\n多為常具刺之灌木或喬木，葉互生且柄基部抱莖，具備明顯的掌狀或羽狀複葉。\n最顯著特徵為細小的花，兩性或單性，排列成傘形花序，再組成頂生的大型圓錐花序。\n果實多為球形漿果或核果，成熟時通常為黑色。"
    },
    {
        id: 44,
        answer: "通脫,木通草",
        hint: "五加科 Araliaceae\n多為常具刺之灌木或喬木，葉互生且柄基部抱莖，具備明顯的掌狀或羽狀複葉。\n最顯著特徵為細小的花，兩性或單性，排列成傘形花序，再組成頂生的大型圓錐花序。\n果實多為球形漿果或核果，成熟時通常為黑色。\n清熱利尿, 通氣下乳"
    },
    {
        id: 45,
        answer: "八角金盤",
        hint: "五加科 Araliaceae\n多為常具刺之灌木或喬木，葉互生且柄基部抱莖，具備明顯的掌狀或羽狀複葉。\n最顯著特徵為細小的花，兩性或單性，排列成傘形花序，再組成頂生的大型圓錐花序。\n果實多為球形漿果或核果，成熟時通常為黑色。"
    },
    {
        id: 46,
        answer: "輻葉鵝掌柴",
        hint: "五加科 Araliaceae\n多為常具刺之灌木或喬木，葉互生且柄基部抱莖，具備明顯的掌狀或羽狀複葉。\n最顯著特徵為細小的花，兩性或單性，排列成傘形花序，再組成頂生的大型圓錐花序。\n果實多為球形漿果或核果，成熟時通常為黑色。"
    },
    {
        id: 47,
        answer: "白楤木",
        hint: "五加科 Araliaceae\n多為常具刺之灌木或喬木，葉互生且柄基部抱莖，具備明顯的掌狀或羽狀複葉。\n最顯著特徵為細小的花，兩性或單性，排列成傘形花序，再組成頂生的大型圓錐花序。\n果實多為球形漿果或核果，成熟時通常為黑色。"
    },
    {
        id: 48,
        answer: "日日春,長春花",
        hint: "㚒竹桃科 Apocynaceae\n主要特徵為「全株具白色乳汁且多具劇毒」，多為常綠灌木或喬木（亦有藤本）。\n葉片通常對生、輪生或簇生，全緣。\n花朵常呈漏斗狀或高杯狀，具五裂片（常見迴旋排列），組成頂生或腋生的聚繖花序。\n果實多為蓇葖果，成熟時裂開並釋放出帶有毛的種子。"
    },
    {
        id: 49,
        answer: "印度蛇木",
        hint: "㚒竹桃科 Apocynaceae\n主要特徵為「全株具白色乳汁且多具劇毒」，多為常綠灌木或喬木（亦有藤本）。\n葉片通常對生、輪生或簇生，全緣。\n花朵常呈漏斗狀或高杯狀，具五裂片（常見迴旋排列），組成頂生或腋生的聚繖花序。\n果實多為蓇葖果，成熟時裂開並釋放出帶有毛的種子。"
    },
    {
        id: 50,
        answer: "歐蔓",
        hint: "㚒竹桃科 Apocynaceae\n主要特徵為「全株具白色乳汁且多具劇毒」，多為常綠灌木或喬木（亦有藤本）。\n葉片通常對生、輪生或簇生，全緣。\n花朵常呈漏斗狀或高杯狀，具五裂片（常見迴旋排列），組成頂生或腋生的聚繖花序。\n果實多為蓇葖果，成熟時裂開並釋放出帶有毛的種子。"
    },
    {
        id: 51,
        answer: "布朗藤",
        hint: "㚒竹桃科 Apocynaceae\n主要特徵為「全株具白色乳汁且多具劇毒」，多為常綠灌木或喬木（亦有藤本）。\n葉片通常對生、輪生或簇生，全緣。\n花朵常呈漏斗狀或高杯狀，具五裂片（常見迴旋排列），組成頂生或腋生的聚繖花序。\n果實多為蓇葖果，成熟時裂開並釋放出帶有毛的種子。"
    },
    {
        id: 52,
        answer: "毬蘭,玉蝶梅",
        hint: "㚒竹桃科 Apocynaceae\n主要特徵為「全株具白色乳汁且多具劇毒」，多為常綠灌木或喬木（亦有藤本）。\n葉片通常對生、輪生或簇生，全緣。\n花朵常呈漏斗狀或高杯狀，具五裂片（常見迴旋排列），組成頂生或腋生的聚繖花序。\n果實多為蓇葖果，成熟時裂開並釋放出帶有毛的種子。"
    },
    {
        id: 53,
        answer: "龍葵,烏仔",
        hint: "茄科 Solanaceae\n茄科植物多為草本或灌木。\n特色為葉片互生、單葉（或具刺），花朵多為兩性、輻射對稱，具 5 裂花冠。\n關鍵特徵包括花萼在果實成熟時通常仍宿存（宿萼）、果實多為漿果或蒴果、含有生物鹼。"
    },
    {
        id: 54,
        answer: "辣椒",
        hint: "茄科 Solanaceae\n茄科植物多為草本或灌木。\n特色為葉片互生、單葉（或具刺），花朵多為兩性、輻射對稱，具 5 裂花冠。\n關鍵特徵包括花萼在果實成熟時通常仍宿存（宿萼）、果實多為漿果或蒴果、含有生物鹼。"
    },
    {
        id: 55,
        answer: "馬鈴薯",
        hint: "茄科 Solanaceae\n茄科植物多為草本或灌木。\n特色為葉片互生、單葉（或具刺），花朵多為兩性、輻射對稱，具 5 裂花冠。\n關鍵特徵包括花萼在果實成熟時通常仍宿存（宿萼）、果實多為漿果或蒴果、含有生物鹼。"
    },
    {
        id: 56,
        answer: "玉(紅)珊瑚,野辣椒",
        hint: "茄科 Solanaceae\n茄科植物多為草本或灌木。\n特色為葉片互生、單葉（或具刺），花朵多為兩性、輻射對稱，具 5 裂花冠。\n關鍵特徵包括花萼在果實成熟時通常仍宿存（宿萼）、果實多為漿果或蒴果、含有生物鹼。"
    },
    {
        id: 57,
        answer: "印度茄",
        hint: "茄科 Solanaceae\n茄科植物多為草本或灌木。\n特色為葉片互生、單葉（或具刺），花朵多為兩性、輻射對稱，具 5 裂花冠。\n關鍵特徵包括花萼在果實成熟時通常仍宿存（宿萼）、果實多為漿果或蒴果、含有生物鹼。"
    },
    {
        id: 58,
        answer: "枇杷",
        hint: "薔薇科 Rosaceae\n莖部常具刺，葉互生且多具托葉。\n核心特徵為兩性花，具5片花瓣與5片花萼，雄蕊多具被絲托。\n果實形態多樣（核果、梨果、瘦果等），包含觀賞花卉（如玫瑰）及水果（如蘋果）。"
    },
    {
        id: 59,
        answer: "龍牙草,仙鶴草",
        hint: "薔薇科 Rosaceae\n莖部常具刺，葉互生且多具托葉。\n核心特徵為兩性花，具5片花瓣與5片花萼，雄蕊多具被絲托。\n果實形態多樣（核果、梨果、瘦果等），包含觀賞花卉（如玫瑰）及水果（如蘋果）。"
    },
    {
        id: 60,
        answer: "石斑木",
        hint: "薔薇科 Rosaceae\n莖部常具刺，葉互生且多具托葉。\n核心特徵為兩性花，具5片花瓣與5片花萼，雄蕊多具被絲托。\n果實形態多樣（核果、梨果、瘦果等），包含觀賞花卉（如玫瑰）及水果（如蘋果）。"
    },
    {
        id: 61,
        answer: "玉山假沙梨",
        hint: "薔薇科 Rosaceae\n莖部常具刺，葉互生且多具托葉。\n核心特徵為兩性花，具5片花瓣與5片花萼，雄蕊多具被絲托。\n果實形態多樣（核果、梨果、瘦果等），包含觀賞花卉（如玫瑰）及水果（如蘋果）。"
    },
    {
        id: 62,
        answer: "扁核木",
        hint: "薔薇科 Rosaceae\n莖部常具刺，葉互生且多具托葉。\n核心特徵為兩性花，具5片花瓣與5片花萼，雄蕊多具被絲托。\n果實形態多樣（核果、梨果、瘦果等），包含觀賞花卉（如玫瑰）及水果（如蘋果）。\n"
    },
];

// 元素選取
const screens = document.querySelectorAll('.screen');
const homeScreen = document.getElementById('home-screen');
const dictationScreen = document.getElementById('dictation-screen');
const identificationScreen = document.getElementById('identification-screen');
const resultsScreen = document.getElementById('results-screen');

// 首頁按鈕
const btnDictation = document.getElementById('btn-dictation');
const btnIdentification = document.getElementById('btn-identification');
const backBtns = document.querySelectorAll('.back-btn');

// 切換畫面工具函數
function showScreen(screenEl) {
    screens.forEach(s => s.classList.remove('active'));
    screenEl.classList.add('active');
}

backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 如果在計時器中，需清除計時器
        if(timerInterval) clearInterval(timerInterval);
        showScreen(homeScreen);
    });
});

/* =========================================
   模式 1: 科別拉丁名默寫
========================================= */
const dictationList = document.getElementById('dictation-list');
const submitDictationBtn = document.getElementById('submit-dictation');
let currentDictationQuestions = [];

btnDictation.addEventListener('click', () => {
    startDictation();
});

function startDictation() {
    // 隨機抽取 15 題
    const shuffled = [...familyData].sort(() => 0.5 - Math.random());
    currentDictationQuestions = shuffled.slice(0, 15);
    
    // 渲染題目
    dictationList.innerHTML = '';
    currentDictationQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        item.innerHTML = `
            <div class="question-num">${index + 1}</div>
            <div class="question-prompt">${q.chinese}</div>
            <input type="text" class="question-input" data-index="${index}" placeholder="請輸入拉丁名..." autocomplete="off">
        `;
        dictationList.appendChild(item);
    });
    
    showScreen(dictationScreen);
}

submitDictationBtn.addEventListener('click', () => {
    let correctCount = 0;
    const results = [];
    const inputs = document.querySelectorAll('.question-input');
    
    inputs.forEach(input => {
        const idx = input.getAttribute('data-index');
        const answer = input.value.trim();
        const correctAnswer = currentDictationQuestions[idx].latin;
        
        let isCorrect = (answer.toLowerCase() === correctAnswer.toLowerCase());
        if (isCorrect) correctCount++;
        
        results.push({
            prompt: currentDictationQuestions[idx].chinese,
            userAnswer: answer || '(未填寫)',
            correctAnswer: correctAnswer,
            isCorrect: isCorrect
        });
    });
    
    showResults(correctCount, 15, results, 'dictation');
});

/* =========================================
   模式 2: 植物辨認幻燈片 (PPT)
========================================= */
const currentQuestionNum = document.getElementById('current-question-num');
const timerBar = document.getElementById('timer-bar');
const timerText = document.getElementById('timer-text');
const plantImage = document.getElementById('plant-image');
const imagePlaceholder = document.getElementById('image-placeholder');
const optionsContainer = document.getElementById('options-container');

let plantCurrentIndex = 0;
let plantAnswers = [];
let selectedPlantCount = 40;
let currentIdentificationQuestions = [];
const TIME_LIMIT = 30; // 30秒
let timeLeft = TIME_LIMIT;
let timerInterval = null;

btnIdentification.addEventListener('click', () => {
    startIdentification();
});

function startIdentification() {
    plantCurrentIndex = 0;
    plantAnswers = [];
    
    // 獲取選擇的測驗題數
    const selectEl = document.getElementById('plant-num-select');
    selectedPlantCount = parseInt(selectEl.value, 10);
    
    // 隨機抽取指定數量的植物
    const shuffled = [...plantDictionary].sort(() => 0.5 - Math.random());
    currentIdentificationQuestions = shuffled.slice(0, selectedPlantCount);
    
    showScreen(identificationScreen);
    loadPlantQuestion();
}

function loadPlantQuestion() {
    if (plantCurrentIndex >= currentIdentificationQuestions.length) {
        finishIdentification();
        return;
    }
    
    // 初始化畫面與倒數
    timeLeft = TIME_LIMIT;
    currentQuestionNum.textContent = `第 ${plantCurrentIndex + 1} / ${currentIdentificationQuestions.length} 題`;
    updateTimerUI();
    
    const activePlant = currentIdentificationQuestions[plantCurrentIndex];
    
    plantImage.style.display = 'none';
    imagePlaceholder.style.display = 'flex';
    
    // 改為根據中文答案去抓取同名的 png 圖片 (例如：當歸.png)
    const imgUrl = `images/${activePlant.answer}.png`;
    plantImage.src = imgUrl;
    plantImage.onload = () => {
        plantImage.style.display = 'block';
        imagePlaceholder.style.display = 'none';
    };
    plantImage.onerror = () => {
        // 如果載入失敗就顯示 placeholder
        plantImage.style.display = 'none';
        imagePlaceholder.style.display = 'flex';
    };
    
    // 生成這題的選項 (1個正確, 9個錯誤)
    let options = [activePlant.answer];
    let others = plantDictionary.map(p => p.answer).filter(a => a !== activePlant.answer);
    others.sort(() => 0.5 - Math.random());
    options = options.concat(others.slice(0, 9));
    options.sort(() => 0.5 - Math.random()); // 再次打亂
    
    optionsContainer.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleOptionClick(btn, opt, activePlant);
        optionsContainer.appendChild(btn);
    });
    
    // 開始計時
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) {
            handleTimeout(activePlant);
        }
    }, 1000);
}

function updateTimerUI() {
    timerText.textContent = `${timeLeft}s`;
    let pct = (timeLeft / TIME_LIMIT) * 100;
    timerBar.style.width = `${pct}%`;
    
    timerBar.className = 'timer-bar'; // reset class
    if (timeLeft <= 10) {
        timerBar.classList.add(timeLeft <= 5 ? 'danger' : 'warning');
    }
}

function handleOptionClick(clickedBtn, selectedAnswer, activePlant) {
    if (timerInterval) clearInterval(timerInterval); // 停止計時
    
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    // 僅給予視覺上的選取回饋，不提示對錯
    clickedBtn.classList.add('selected');

    const isCorrect = (selectedAnswer === activePlant.answer);
    plantAnswers.push({
        id: activePlant.id,
        hint: activePlant.hint,
        prompt: `圖片 ${activePlant.id}`,
        userAnswer: selectedAnswer,
        correctAnswer: activePlant.answer,
        isCorrect: isCorrect
    });
    
    // 稍微延遲讓學生知道自己按了什麼，接著迅速下一題
    setTimeout(() => {
        plantCurrentIndex++;
        loadPlantQuestion();
    }, 400); // 縮短為 0.4 秒，更像真實考試
}

function handleTimeout(activePlant) {
    if (timerInterval) clearInterval(timerInterval);
    
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    // 不給予提示對錯，直接計為未作答
    plantAnswers.push({
        id: activePlant.id,
        hint: activePlant.hint,
        prompt: `圖片 ${activePlant.id}`, 
        userAnswer: '(未作答)',
        correctAnswer: activePlant.answer,
        isCorrect: false
    });
    
    // 時間到直接跳轉，不需要延遲太久
    setTimeout(() => {
        plantCurrentIndex++;
        loadPlantQuestion();
    }, 400);
}

function finishIdentification() {
    if (timerInterval) clearInterval(timerInterval);
    let correctCount = plantAnswers.filter(a => a.isCorrect).length;
    showResults(correctCount, currentIdentificationQuestions.length, plantAnswers, 'identification');
}

/* =========================================
   結果結算畫面
========================================= */
const finalScore = document.getElementById('final-score');
const resultsList = document.getElementById('results-list');

function showResults(score, total, resultsData, type) {
    const accuracy = Math.round((score / total) * 100) || 0;
    finalScore.innerHTML = `${score} / ${total} <div style="font-size: 1.5rem; color:#94a3b8; margin-top: 0.5rem">正確率: ${accuracy}%</div>`;
    
    resultsList.innerHTML = '';
    resultsData.forEach(item => {
        const div = document.createElement('div');
        div.className = `result-item ${item.isCorrect === true ? 'correct' : (item.isCorrect === false ? 'incorrect' : '')}`;
        
        let answerHtml = '';
        if (item.isCorrect === false) {
             answerHtml = `<span class="result-answer wrong">${item.userAnswer}</span> <span class="result-correct-answer">${item.correctAnswer}</span>`;
        } else if (item.isCorrect === true) {
             answerHtml = `<span class="result-answer" style="color: var(--success-color);">${item.userAnswer}</span>`;
        } else {
             // 待批改模式
             answerHtml = `<span class="result-answer">${item.userAnswer}</span>`;
        }
        
        let iconHtml = '';
        if (item.isCorrect === true) iconHtml = '<span class="status-icon">✅</span>';
        else if (item.isCorrect === false) iconHtml = '<span class="status-icon">❌</span>';
        else iconHtml = '<span class="status-icon">📝</span>';

        let promptHtml = `<div class="result-prompt">${item.prompt}</div>`;
        if (type === 'identification') {
            promptHtml = `
                <div class="result-thumbnail">
                    <img src="images/${item.correctAnswer}.png" alt="縮圖" onerror="this.parentElement.style.display='none'">
                </div>
            `;
        }

        div.innerHTML = `
            ${promptHtml}
            <div style="flex:1">${answerHtml}</div>
            ${iconHtml}
        `;
        
        if (type === 'identification') {
            div.classList.add('clickable');
            div.title = "點擊查看詳解";
            div.addEventListener('click', () => {
                showReviewModal(item);
            });
        }
        
        resultsList.appendChild(div);
    });
    
    showScreen(resultsScreen);
}

/* =========================================
   檢討彈窗 (Review Modal)
========================================= */
const reviewModal = document.getElementById('review-modal');
const closeModal = document.getElementById('close-modal');
const reviewTitle = document.getElementById('review-title');
const reviewImage = document.getElementById('review-image');
const reviewYourAnswer = document.getElementById('review-your-answer');
const reviewCorrectAnswer = document.getElementById('review-correct-answer');
const reviewHintText = document.getElementById('review-hint-text');
const reviewHintBox = document.getElementById('review-hint-box');

function showReviewModal(item) {
    reviewTitle.textContent = `檢討：${item.prompt}`;
    // 檢討時一併抓取中文名的對應圖片
    reviewImage.src = `images/${item.correctAnswer}.png`;
    reviewImage.onerror = () => { reviewImage.src = ''; }; // 處理找不到圖片的情境
    
    reviewYourAnswer.innerHTML = `<strong>您的答案：</strong> <span class="${item.isCorrect ? '' : 'wrong'}">${item.userAnswer}</span>`;
    reviewCorrectAnswer.innerHTML = `<strong>正確答案：</strong> <span class="result-correct-answer">${item.correctAnswer}</span>`;
    
    if (item.hint && item.hint.trim() !== '') {
        reviewHintText.innerHTML = item.hint.replace(/\n/g, '<br>');
        reviewHintBox.style.display = 'block';
    } else {
        reviewHintBox.style.display = 'none';
    }
    
    reviewModal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    reviewModal.classList.remove('active');
});

reviewModal.addEventListener('click', (e) => {
    if (e.target === reviewModal) {
        reviewModal.classList.remove('active');
    }
});
