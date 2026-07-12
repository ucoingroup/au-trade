// ============================================
// AusTrade Hub | 澳通商汇 v4
// Ultra-Detailed 30 Commodities Data
// Interactive Detail Modal + Search + Key Events
// ============================================

// ---- Global 30 Commodities (细化为每项含15+字段) ----
const COMMODITIES = [
    {
        rank:1, icon:"⛏️", en:"Iron Ore", zh:"铁矿石", category:"minerals",
        tag:"AU→CN",
        hsCode:"2601",
        ausTradeValue:"~USD 98B (FY2025-26 est., AU→CN, -4% on lower prices)",
        cnImportVol:"1,190万吨 (2025全年, volume stable but value down)",
        direction:{en:"Australia (Pilbara) → China (Qingdao, Shanghai, Caofeidian)",zh:"澳大利亚（皮尔巴拉）→ 中国（青岛、上海、曹妃甸）"},
        topExporters:[{en:"BHP (Australia)",zh:"必和必必拓（澳）"},{en:"Rio Tinto (Australia)",zh:"力拓（澳）"},{en:"Fortescue (Australia)",zh:"FMG（澳）"},{en:"Vale (Brazil)",zh:"淡水河谷（巴西）"}],
        topImporters:[{en:"China (72% global seaborne)",zh:"中国（72%海运进口）"},{en:"Japan",zh:"日本"},{en:"South Korea",zh:"韩国"}],
        tariff:{en:"0% (ChAFTA) — no tariff on HS 2601",zh:"0%（中澳自贸）— HS 2601无关税"},
        yoyChange:"-6.3% (SEADEX 61% AU Fines $98.25/dmt CFR Qingdao Jun 30; DCE ¥737≈$100/t; market seen softer into H2 2026)",
        trend:"stable",
        keyEvents:{en:"DCE iron ore futures at ~¥737/t (≈$100/t) as of Jul 2026. Mysteel SEADEX 61% AU Fines assessed $98.25/dmt CFR Qingdao (Jun 30), down $5.85 YTD. China steel demand weak amid property slowdown; Mysteel expects prices to keep falling in H2 2026. Port Hedland exports at record tonnage but revenue declining. China Mineral Resources Group expanding procurement role.",zh:"2026年7月大商所铁矿石期货约¥737/吨（≈$100/吨）。Mysteel SEADEX 61%澳粉6月30日评估价$98.25/干吨CFR青岛，年内累计下跌$5.85。中国钢铁需求因地产放缓疲软；Mysteel预计下半年价格继续下行。黑德兰港出口维持纪录吨位但收入下降。中国矿产资源集团扩大采购角色。"},
        cities:["chongqing","shanghai","guangdong","beijing"],
        cityRelevance:{
            chongqing:{en:"CQ steel mills (Chongqing Iron & Steel) import via Yangtze River",zh:"重庆钢铁经长江进口澳矿"},
            shanghai:{en:"Baosteel HQ. Shanghai = iron ore futures pricing center (DCE)",zh:"宝钢总部。上海=铁矿石期货定价中心（大商所）"},
            guangdong:{en:"Guangdong steel demand for construction/infrastructure",zh:"广东基建/建筑钢材需求"},
            beijing:{en:"Policy: iron ore import diversification strategy, China Mineral Resources Group",zh:"政策：铁矿石进口多元化战略，中国矿产资源集团"}
        }
    },
    {
        rank:2, icon:"🔥", en:"Coal (Thermal & Coking)", zh:"煤炭（动力煤&炼焦煤）", category:"minerals",
        tag:"AU→CN/ASEAN",
        hsCode:"2701 (thermal), 2702 (coking)",
        ausTradeValue:"~AUD 86B / ~USD 56B (2024, AU global exports, -17% YoY)",
        cnImportVol:"8,019万吨 from AU (2024, +46% YoY)",
        direction:{en:"Australia (Hunter Valley, Bowen Basin) → China, Japan, Korea, ASEAN",zh:"澳大利亚（亨特谷、博文盆地）→ 中国、日本、韩国、东盟"},
        topExporters:[{en:"BHP (Australia)",zh:"必和必拓（澳）"},{en:"Glencore (Switzerland/AU)",zh:"嘉能可（瑞士/澳）"},{en:"Whitehaven Coal (AU)",zh:"Whitehaven（澳）"},{en:"Adaro (Indonesia)",zh:"Adaro（印尼）"}],
        topImporters:[{en:"China",zh:"中国"},{en:"Japan",zh:"日本"},{en:"India",zh:"印度"},{en:"ASEAN (Vietnam, Philippines)",zh:"东盟（越南、菲律宾）"}],
        tariff:{en:"0% (ChAFTA); ACFTA 0% for ASEAN",zh:"0%（中澳自贸）；ACFTA 0%对东盟"},
        yoyChange:"+12% CN imports from AU (2025 vs 2024, continued recovery)",
        trend:"up",
        keyEvents:{en:"China-AU coal trade fully normalized. 2025 imports exceeded 90Mt from AU. Newcastle benchmark ~$128/t. India surpassing China as top thermal coal importer. China leading global coal transition — coal power shifting to support/regulation role. Brent crude plunged to ~$72/bbl (Jul 2026, Iran conflict premium faded on ceasefire hopes).",zh:"中澳煤炭贸易全面正常化。2025年自澳进口超9000万吨。纽卡斯尔基准约$128/吨。印度超越中国成为最大动力煤进口国。中国引领全球煤炭转型——煤电转向支撑/调节型电源。Brent原油$104/桶（伊朗冲突溢价）。"},
        cities:["shanghai","guangdong","chongqing"],
        cityRelevance:{
            chongqing:{en:"CQ coking coal for steel; thermal coal for power via Yangtze",zh:"重庆炼焦煤用于钢铁；动力煤经长江运输"},
            shanghai:{en:"Shanghai coal trading hubs; power plant imports",zh:"上海煤炭交易枢纽；电厂进口"},
            guangdong:{en:"Guangdong thermal coal for manufacturing power; Nansha port",zh:"广东动力煤用于制造用电；南沙港"},
            beijing:{en:"Policy: coal import quota management, energy transition",zh:"政策：煤炭进口配额管理，能源转型"}
        }
    },
    {
        rank:3, icon:"💻", en:"Electronics & Semiconductors", zh:"电子产品与半导体", category:"tech",
        tag:"CN→AU/ASEAN",
        hsCode:"8542 (chips), 8517 (phones), 8471 (computers)",
        ausTradeValue:"~USD 200B+ (CN↔ASEAN electronics trade)",
        cnImportVol:"China exports $800B+ electronics globally (2024)",
        direction:{en:"China (Shenzhen, Dongguan, Suzhou) → Australia, ASEAN (Vietnam assembly), Global",zh:"中国（深圳、东莞、苏州）→ 澳大利亚、东盟（越南组装）、全球"},
        topExporters:[{en:"Foxconn (Taiwan/CN)",zh:"富士康（台/中）"},{en:"Huawei (CN)",zh:"华为（中）"},{en:"Xiaomi (CN)",zh:"小米（中）"},{en:"Samsung (Vietnam/Korea)",zh:"三星（越/韩）"},{en:"Intel (Vietnam/US)",zh:"英特尔（越/美）"}],
        topImporters:[{en:"USA",zh:"美国"},{en:"EU",zh:"欧盟"},{en:"ASEAN (Vietnam, Malaysia)",zh:"东盟（越南、马来西亚）"},{en:"Australia",zh:"澳大利亚"}],
        tariff:{en:"0% (ChAFTA for most electronics); RCEP 0% for ASEAN",zh:"0%（中澳自贸大部分电子产品）；RCEP 0%对东盟"},
        yoyChange:"+8.5% (China electronics exports 2024)",
        trend:"up",
        keyEvents:{en:"AI chip demand surging. Vietnam became 2nd largest smartphone exporter. US chip restrictions on China reshaping supply chains. RCEP rules of origin enable CN-ASEAN chip co-production.",zh:"AI芯片需求暴增。越南成为全球第二大手机出口国。美国对华芯片限制重塑供应链。RCEP原产地规则支持中-东盟芯片合作生产。"},
        cities:["guangdong","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ electronics assembly (BOE, OPPO factories)",zh:"重庆电子组装（京东方、OPPO工厂）"},
            shanghai:{en:"SMIC HQ; semiconductor design hub; CNOOC chip imports",zh:"中芯国际总部；芯片设计中心；芯片进口"},
            guangdong:{en:"Shenzhen = world electronics capital. 50%+ of CN electronics exports",zh:"深圳=全球电子之都。中国50%+电子产品出口"},
            beijing:{en:"Policy: chip self-sufficiency, semiconductor fund",zh:"政策：芯片自主化，大基金"}
        }
    },
    {
        rank:4, icon:"🛢️", en:"LNG (Liquefied Natural Gas)", zh:"液化天然气", category:"minerals",
        tag:"AU→CN/ASEAN",
        hsCode:"2711.11",
        ausTradeValue:"~USD 50B (2024, AU global LNG exports)",
        cnImportVol:"AU→CN: ~$18B (2024)",
        direction:{en:"Australia (Gladstone, Darwin, Karratha) → China, Japan, Korea, ASEAN",zh:"澳大利亚（格莱斯顿、达尔文、卡拉萨）→ 中国、日本、韩国、东盟"},
        topExporters:[{en:"Qatar",zh:"卡塔尔"},{en:"Australia (#2 global)",zh:"澳大利亚（全球第二）"},{en:"USA",zh:"美国"},{en:"Russia",zh:"俄罗斯"}],
        topImporters:[{en:"Japan",zh:"日本"},{en:"China",zh:"中国"},{en:"Korea",zh:"韩国"},{en:"ASEAN (Thailand, Philippines)",zh:"东盟（泰国、菲律宾）"}],
        tariff:{en:"0% (ChAFTA); ACFTA 0%",zh:"0%（中澳自贸）；ACFTA 0%"},
        yoyChange:"+17% vs 2025 ($12.8); JKM pulled back to ~$15/MMBtu (Jul 6) from $18.45 in Jun & $25 Apr peak as Iran ceasefire reopens Strait of Hormuz",
        trend:"down",
        keyEvents:{en:"Asian LNG spot pulled back to ~$15/MMBtu (JKM) by Jul 6, down from $18.45 in Jun and the $25 Apr peak. Iran–US ceasefire and earlier-than-expected reopening of the Strait of Hormuz lifted Qatar+UAE exports (Kpler: +3.1Mt vs prior 2026 view). Australia #2 global LNG exporter still benefits from structural supply gap. Woodside denied ExxonMobil takeover interest. Long-term contracts: CNOOC, PetroChina with Woodside, Santos.",zh:"截至7月6日，亚洲LNG现货回落至约$15/MMBtu（JKM），较6月$18.45及4月$25高点明显回落。伊朗—美国停火及霍尔木兹海峡早于预期的重新开放推升卡塔尔+阿联酋出口（Kpler：较此前2026预期多310万吨）。澳大利亚全球第二大LNG出口国仍受益于结构性供应缺口。Woodside否认埃克森美孚收购意向。长约：中海油、中石油与Woodside、Santos。"}
        cities:["shanghai","guangdong","chongqing"],
        cityRelevance:{
            chongqing:{en:"CQ gas demand for industry; Chuanyu pipeline connections",zh:"重庆工业用气；川渝管网连接"},
            shanghai:{en:"Shanghai Petroleum & Gas Exchange = pricing hub; Yangshan LNG terminal",zh:"上海石油天然气交易中心=定价中心；洋山LNG接收站"},
            guangdong:{en:"Guangdong LNG terminals (Dapeng, Shenzhen); AU LNG primary destination",zh:"广东LNG接收站（大鹏、深圳）；澳LNG主要目的地"},
            beijing:{en:"Policy: gas import diversification, winter supply security",zh:"政策：天然气进口多元化，冬季保供"}
        }
    },
    {
        rank:5, icon:"🤖", en:"Machinery & Equipment", zh:"机械设备", category:"manufacturing",
        tag:"CN→AU/ASEAN",
        hsCode:"84 (general), 8429 (excavators), 8433 (harvesters)",
        ausTradeValue:"~USD 150B+ (CN↔ASEAN machinery trade)",
        cnImportVol:"CN machinery exports $450B+ globally (2024)",
        direction:{en:"China → Australia (mining, construction), ASEAN (manufacturing, infrastructure)",zh:"中国 → 澳大利亚（矿业、建筑）、东盟（制造、基建）"},
        topExporters:[{en:"Sany Heavy Industry (CN)",zh:"三一重工（中）"},{en:"Zoomlion (CN)",zh:"中联重科（中）"},{en:"Caterpillar (US)",zh:"卡特彼勒（美）"},{en:"Komatsu (Japan)",zh:"小松（日）"}],
        topImporters:[{en:"ASEAN (Indonesia, Vietnam, Thailand)",zh:"东盟（印尼、越南、泰国）"},{en:"Australia",zh:"澳大利亚"},{en:"Africa",zh:"非洲"},{en:"Middle East",zh:"中东"}],
        tariff:{en:"0-5% (ChAFTA); 0% (RCEP/ACFTA for most items)",zh:"0-5%（中澳自贸）；0%（RCEP/ACFTA大部分品目）"},
        yoyChange:"+6.2% (CN machinery exports to ASEAN 2024)",
        trend:"up",
        keyEvents:{en:"Chinese construction machinery gaining 30%+ market share in ASEAN. Sany, Zoomlion pricing 30-50% below Caterpillar. BRI projects driving demand. Mining equipment demand from AU recovering.",zh:"中国工程机械在东盟市占率超30%。三一、中联价格比卡特低30-50%。一带一路项目驱动需求。澳洲矿业设备需求恢复中。"},
        cities:["guangdong","chongqing","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ machinery base (Dajiang, Qingling Motors). ASEAN export hub.",zh:"重庆机械基地（大江、庆铃）。东盟出口枢纽。"},
            shanghai:{en:"Shanghai Zhenhua Heavy Industries (port cranes global #1)",zh:"上海振华重工（港口起重机全球第一）"},
            guangdong:{en:"Guangdong packaging/textile machinery to ASEAN",zh:"广东包装/纺织机械出口东盟"},
            beijing:{en:"Policy: BRI machinery export support",zh:"政策：一带一路机械出口支持"}
        }
    },
    {
        rank:6, icon:"🥩", en:"Beef & Meat Products", zh:"牛肉与肉类产品", category:"agri",
        tag:"AU→CN/ASEAN",
        hsCode:"0201 (fresh beef), 0202 (frozen beef)",
        ausTradeValue:"~USD 15B (AU beef exports globally)",
        cnImportVol:"AU→CN: ~$5B (2024); CN total beef imports ~$18B",
        direction:{en:"Australia → China, Japan, Korea, ASEAN, US; CN also imports from Brazil, Argentina",zh:"澳大利亚 → 中国、日本、韩国、东盟、美国；中国也从巴西、阿根廷进口"},
        topExporters:[{en:"JBS (Brazil/AU)",zh:"JBS（巴西/澳）"},{en:"Australian Agricultural Co (AU)",zh:"澳农公司（澳）"},{en:"Thomas Foods (AU)",zh:"Thomas Foods（澳）"},{en:"Marfrig (Brazil)",zh:"Marfrig（巴西）"}],
        topImporters:[{en:"China (#1 global beef importer)",zh:"中国（全球第一大牛肉进口国）"},{en:"USA",zh:"美国"},{en:"Japan",zh:"日本"},{en:"Korea",zh:"韩国"}],
        tariff:{en:"ChAFTA: 0-12% (within quota); safeguard tariff triggers above quota. 2026 quota: AU share 20万吨",zh:"中澳自贸：配额内0-12%；超配额触发保障关税。2026配额：澳份额20万吨"},
        yoyChange:"-40% effective (AU→CN beef plunges after 55% tariff kicks in Jun 20; quota filled in just 6 months)",
        trend:"down",
        keyEvents:{en:"⚠️ BREAKING: China's MOFCOM announced Jun 19 that AU beef quota (205Kt) was 100% filled by Jun 18. From Jun 20, +55% additional tariff applies. AU beef exporters shocked — quota exhausted in only 6 months. 3-year safeguard (2026-2028): total 2.688Mt, Brazil 110.6Mt, Argentina 51.1Mt, AU 20.5Mt. This is NOT a political sanction but a legal trade remedy under WTO safeguard rules. AU beef industry faces severe disruption for remainder of 2026.",zh:"⚠️ 突发：商务部6月19日公告，澳牛肉配额（20.5万吨）于6月18日达到100%。6月20日起加征55%额外关税。澳洲牛肉出口商震惊——配额仅6个月用尽。3年保障措施（2026-2028）：总配额268.8万吨，巴西110.6万、阿根廷51.1万、澳20.5万。这不是政治制裁，而是WTO保障措施规则下的合法贸易救济。澳牛肉行业2026下半年面临严重冲击。"}
        cities:["beijing","shanghai","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ hotpot culture = massive beef demand; AU beef premium positioning",zh:"重庆火锅文化=巨大牛肉需求；澳牛肉高端定位"},
            shanghai:{en:"Shanghai fine dining & supermarkets = premium AU beef market",zh:"上海高端餐饮&超市=澳牛肉高端市场"},
            guangdong:{en:"Guangdong beef consumption growing 15%/yr; AU beef via Nansha",zh:"广东牛肉消费年增15%；澳牛肉经南沙进口"},
            beijing:{en:"Beijing consumers = highest AU wagyu demand; safeguard policy impact",zh:"北京消费者=最高澳和牛需求；保障措施政策影响"}
        }
    },
    {
        rank:7, icon:"🚗", en:"Vehicles & Auto Parts (incl. EVs)", zh:"车辆及汽车零部件（含新能源车）", category:"manufacturing",
        tag:"CN→ASEAN/AU",
        hsCode:"8703 (vehicles), 8708 (parts), 8702 (buses)",
        ausTradeValue:"CN vehicle exports ~USD 80B globally; CN→ASEAN: ~$20B; CN→AU: ~$4B",
        cnImportVol:"China: May 93万 units (+68.7%); Jan-May 405.9万 (+63%); 2026 full year est. 10M+; EVs >50% share",
        direction:{en:"China (BYD, MG, Changan, Geely) → ASEAN (Thailand, Indonesia, Malaysia), Australia, Middle East",zh:"中国（比亚迪、MG、长安、吉利）→ 东盟（泰国、印尼、马来西亚）、澳大利亚、中东"},
        topExporters:[{en:"BYD (CN, #1 global NEV)",zh:"比亚迪（中，全球第一新能源车企）"},{en:"SAIC/MG (CN)",zh:"上汽/MG（中）"},{en:"Chery (CN)",zh:"奇瑞（中）"},{en:"Geely/Volvo (CN/Sweden)",zh:"吉利/沃尔沃（中/瑞典）"},{en:"Changan (CN)",zh:"长安（中）"}],
        topImporters:[{en:"ASEAN (Thailand #1 in ASEAN)",zh:"东盟（泰国东盟第一）"},{en:"Australia (MG, BYD top sellers)",zh:"澳大利亚（MG、比亚迪热销）"},{en:"Russia",zh:"俄罗斯"},{en:"Middle East",zh:"中东"}],
        tariff:{en:"AU: 5% on vehicles (ChAFTA); ASEAN: 0-5% (ACFTA/RCEP); TH: 0% for EVs (2024 policy)",zh:"澳：5%车辆关税（中澳自贸）；东盟：0-5%（ACFTA/RCEP）；泰：0%新能源车关税（2024政策）"},
        yoyChange:"+63% (CN vehicle exports Jan-May 2026 vs 2025); 2026 full year est. 10M+ units (+70%)",
        trend:"up",
        keyEvents:{en:"China vehicle exports exploding: May 93万 units (+68.7% YoY), Jan-May cumulative 405.9万 (+63%). 2026 full-year forecast: >10M vehicles — more than total 3-4 years ago. May 2026: top 10 best-selling cars in CN were ALL EVs for first time (zero ICE). BYD world's #1 NEV. Changan Thai factory (Rayong) operational. Australia: BYD Atto3 top EV; MG3 cheapest car.",zh:"中国汽车出口爆发式增长：5月93万辆(+68.7%同比)，前5月累计405.9万辆(+63%)。2026全年预计超1000万辆——相当于3-4年前的全年总量。2026年5月：中国销量前十车型首次全部为新能源车（零燃油车）。比亚迪全球第一新能源车企。长安泰国工厂（罗勇）运营中。澳洲：比亚迪Atto3最畅销EV；MG3最便宜车。"},
        cities:["guangdong","chongqing","shanghai"],
        cityRelevance:{
            chongqing:{en:"Changan, SERES, AITO HQ. CQ = CN NEV manufacturing base #2 after SZ.",zh:"长安、赛力斯、问界总部。重庆=中国新能源车制造基地第二（仅次于深圳）。"},
            shanghai:{en:"SAIC HQ; Tesla Shanghai Gigafactory; auto finance hub",zh:"上汽总部；特斯拉上海超级工厂；汽车金融中心"},
            guangdong:{en:"BYD Shenzhen HQ; XPeng Guangzhou; Guangdong = 40% of CN EV output",zh:"比亚迪深圳总部；小鹏广州；广东=中国40%新能源车产量"},
            beijing:{en:"Policy: NEV subsidies, export credit support",zh:"政策：新能源车补贴、出口信贷支持"}
        }
    },
    {
        rank:8, icon:"🛢️", en:"Crude Petroleum & Refined Oil", zh:"原油及成品油", category:"minerals",
        tag:"ASEAN→CN/AU",
        hsCode:"2709 (crude), 2710 (refined)",
        ausTradeValue:"ASEAN→CN crude: ~USD 45B; AU imports ~$20B refined",
        cnImportVol:"CN crude imports 5.6B barrels (2024); ASEAN share ~10%",
        direction:{en:"Malaysia, Vietnam, Brunei → China; Singapore (refining) → AU, ASEAN",zh:"马来西亚、越南、文莱 → 中国；新加坡（炼油）→ 澳、东盟"},
        topExporters:[{en:"Saudi Arabia",zh:"沙特"},{en:"Russia",zh:"俄罗斯"},{en:"Malaysia (ASEAN #1)",zh:"马来西亚（东盟第一）"},{en:"Brunei",zh:"文莱"}],
        topImporters:[{en:"China (#1 global crude importer)",zh:"中国（全球第一大原油进口国）"},{en:"Australia",zh:"澳大利亚"},{en:"ASEAN refineries",zh:"东盟炼厂"}],
        tariff:{en:"CN crude: 0% tariff; Refined: 1-6% (varies)",zh:"中国原油：0%关税；成品油：1-6%（不等）"},
        yoyChange:"-31% (Brent ~$72/bbl early Jul 2026; EIA Jul 8 cut 2026 forecast to $82 from $95, WTI $76.26; 2027 to $65)",
        trend:"down",
        keyEvents:{en:"Brent crude traded ~$70-74/bbl in early Jul 2026 (WTI ~$67-70), down from the $104 Jun peak as Iran ceasefire eased Strait of Hormuz fears. EIA (Jul 8) slashed its 2026 Brent forecast to $82/bbl (from $95) and 2027 to $65; WTI 2026 avg $76.26. CN July 3 fuel price cut: gasoline -¥950/t, diesel -¥915/t (biggest 2026 cut). AU 92# gasoline ~CN¥7.92/L. OPEC+ under pressure from surging non-OPEC supply.",zh:"2026年7月初Brent约$70-74/桶（WTI约$67-70），较6月$104高点回落，因伊朗停火缓解霍尔木兹海峡担忧。EIA（7月8日）将2026年Brent预测大幅下调至$82/桶（原$95），2027年降至$65；WTI 2026均价$76.26。中国7月3日成品油调降：汽油-¥950/吨、柴油-¥915/吨（2026年最大降幅）。92#汽油约¥7.92/升。OPEC+因非OPEC供应激增承压。"},
        cities:["shanghai","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ refineries (CNOOC, PetroChina) process imported crude",zh:"重庆炼厂（中海油、中石油）加工进口原油"},
            shanghai:{en:"Shanghai INE crude futures = pricing hub; Gaoqiao refinery",zh:"上海INE原油期货=定价中心；高桥炼厂"},
            guangdong:{en:"Guangdong: Zhanjiang, Huizhou refineries; ASEAN crude via Nansha",zh:"广东：湛江、惠州炼厂；东盟原油经南沙"},
            beijing:{en:"Policy: strategic petroleum reserve, import diversification",zh:"政策：战略石油储备，进口多元化"}
        }
    },
    {
        rank:9, icon:"🌿", en:"Palm Oil", zh:"棕榈油", category:"agri",
        tag:"ASEAN→CN/AU",
        hsCode:"1511 (crude palm oil)",
        ausTradeValue:"~USD 30B (global palm oil trade)",
        cnImportVol:"CN imports ~6.5Mt palm oil/year (2024); 97% from Indonesia & Malaysia",
        direction:{en:"Indonesia (#1 global), Malaysia (#2) → China, India, EU, Australia",zh:"印尼（全球第一）、马来西亚（全球第二）→ 中国、印度、欧盟、澳大利亚"},
        topExporters:[{en:"Indonesia (55% global)",zh:"印尼（全球55%）"},{en:"Malaysia (30% global)",zh:"马来西亚（全球30%）"},{en:"Thailand (small)",zh:"泰国（少量）"}],
        topImporters:[{en:"India (#1)",zh:"印度（第一）"},{en:"China (#2)",zh:"中国（第二）"},{en:"EU (#3)",zh:"欧盟（第三）"},{en:"Pakistan",zh:"巴基斯坦"}],
        tariff:{en:"CN: 9% (MFN); 0% (ACFTA for ASEAN orig    in); AU: 0%",zh:"中国：9%（最惠国）；0%（ACFTA东盟原产地）；澳：0%"},
        yoyChange:"-5% (2024 price decline from record 2022 levels)",
        trend:"stable",
        keyEvents:{en:"EU deforestation regulation (EUDR) disrupting palm oil trade. Indonesia B40 biodiesel mandate reducing export supply. China instant noodle industry = top consumer.",zh:"欧盟反毁林法规（EUDR）干扰棕榈油贸易。印尼B40生物柴油强制令减少出口供应。中国方便面行业=最大消费方。"},
        cities:["chongqing","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ food industry (hotpot base, instant noodles) = major palm oil consumer; import via Qinzhou",zh:"重庆食品工业（火锅底料、方便面）=棕榈油大用户；经钦州进口"},
            shanghai:{en:"Shanghai DCE palm oil futures; food processing hub",zh:"大商所棕榈油期货；食品加工中心"},
            guangdong:{en:"Guangdong cooking oil blending; ASEAN import gateway via Huangpu/Nansha",zh:"广东食用油调配；东盟经黄埔/南沙进口"},
            beijing:{en:"Policy: grain security, palm oil as strategic reserve",zh:"政策：粮食安全，棕榈油作为战略储备"}
        }
    },
    {
        rank:10, icon:"🌊", en:"Seafood & Aquaculture", zh:"海产品与水产养殖", category:"agri",
        tag:"AU/ASEAN↔CN",
        hsCode:"0306 (crustaceans), 0307 (molluscs), 0302 (fresh fish)",
        ausTradeValue:"AU→CN seafood ~$2B; ASEAN→CN ~$8B; Total corridor ~$20B",
        cnImportVol:"CN seafood imports ~$15B total (2024); AU lobster alone ~$500M recovering",
        direction:{en:"AU (rock lobster, abalone, tuna) → CN; ASEAN (shrimp, crab, fish) → CN, AU",zh:"澳（岩龙虾、鲍鱼、金枪鱼）→ 中；东盟（虾、蟹、鱼）→ 中、澳"},
        topExporters:[{en:"Australia (lobster, abalone)",zh:"澳大利亚（龙虾、鲍鱼）"},{en:"Vietnam (shrimp, pangasius)",zh:"越南（虾、巴沙鱼）"},{en:"Thailand (shrimp)",zh:"泰国（虾）"},{en:"Indonesia (tuna, shrimp)",zh:"印尼（金枪鱼、虾）"}],
        topImporters:[{en:"China (#1 luxury seafood)",zh:"中国（第一奢侈品海鲜）"},{en:"USA",zh:"美国"},{en:"EU",zh:"欧盟"},{en:"Japan",zh:"日本"}],
        tariff:{en:"ChAFTA: 0% (lobster, abalone); ACFTA: 0-5% ASEAN seafood",zh:"中澳自贸：0%（龙虾、鲍鱼）；ACFTA：0-5%东盟海产品"},
        yoyChange:"+15% (AU→CN lobster, post-ban recovery 2024-25)",
        trend:"up",
        keyEvents:{en:"AU lobster ban fully lifted (Dec 2024). AU abalone recovering. Vietnam shrimp exports to CN surging. Cold-chain logistics improving via Western Land-Sea Corridor.",zh:"澳龙虾禁令完全解除（2024年12月）。澳鲍鱼恢复中。越南对华虾出口激增。冷链物流经西部陆海新通道改善。"},
        cities:["guangdong","shanghai","beijing"],
        cityRelevance:{
            chongqing:{en:"CQ hotpot = massive seafood demand; cold-chain via Qinzhou port",zh:"重庆火锅=巨大海鲜需求；钦州港冷链"},
            shanghai:{en:"Shanghai = China's top seafood consumption market; premium AU lobster",zh:"上海=中国第一海鲜消费市场；高端澳龙"},
            guangdong:{en:"Guangdong = China's #1 seafood processing base; ASEAN shrimp imports",zh:"广东=中国第一海产品加工基地；东盟虾进口"},
            beijing:{en:"Beijing premium seafood restaurants; AU lobster direct flights",zh:"北京高端海鲜餐厅；澳龙直飞"}
        }
    },
    {
        rank:11, icon:"🏗️", en:"Steel & Iron Products", zh:"钢铁制品", category:"manufacturing",
        tag:"CN→ASEAN/AU",
        hsCode:"72 (iron/steel), 7308 (steel structures)",
        ausTradeValue:"CN steel exports ~USD 90B globally; →ASEAN ~$30B; →AU ~$3B",
        cnImportVol:"CN steel exports 110Mt+ (2024), record high",
        direction:{en:"China → ASEAN (infrastructure), Australia (construction), Middle East, Africa",zh:"中国 → 东盟（基建）、澳大利亚（建筑）、中东、非洲"},
        topExporters:[{en:"Baosteel (CN)",zh:"宝钢（中）"},{en:"HBIS (CN)",zh:"河钢（中）"},{en:"Ansteel (CN)",zh:"鞍钢（中）"},{en:"Nippon Steel (Japan)",zh:"新日铁（日）"}],
        topImporters:[{en:"ASEAN (Vietnam, Philippines, Indonesia)",zh:"东盟（越南、菲律宾、印尼）"},{en:"Australia",zh:"澳大利亚"},{en:"Middle East",zh:"中东"}],
        tariff:{en:"AU: 0-5% (ChAFTA); ASEAN: 0-10% (ACFTA); some anti-dumping duties",zh:"澳：0-5%（中澳自贸）；东盟：0-10%（ACFTA）；部分有反倾销税"},
        yoyChange:"+12% (CN steel exports 2024, driven by domestic overcapacity)",
        trend:"stable",
        keyEvents:{en:"CN steel overcapacity driving export surge. ASEAN anti-dumping investigations on CN steel rising. AU steel demand from housing construction. Green steel transition beginning.",zh:"中国钢铁产能过剩驱动出口激增。东盟对中国钢铁反倾销调查增多。澳建房需求拉动钢材。绿色钢铁转型起步。"},
        cities:["chongqing","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ steel mills export to ASEAN; Chongqing Iron & Steel restructuring",zh:"重庆钢厂出口东盟；重庆钢铁重组"},
            shanghai:{en:"Baosteel HQ; Shanghai steel futures (SHFE); global pricing center",zh:"宝钢总部；上期所钢材期货；全球定价中心"},
            guangdong:{en:"Guangdong construction steel demand; steel pipe exports",zh:"广东建筑钢材需求；钢管出口"},
            beijing:{en:"Policy: steel capacity reduction, green steel mandates",zh:"政策：钢铁去产能，绿色钢铁要求"}
        }
    },
    {
        rank:12, icon:"🍷", en:"Wine & Beverages", zh:"葡萄酒与饮品", category:"agri",
        tag:"AU→CN/ASEAN",
        hsCode:"2204 (wine), 2203 (beer)",
        ausTradeValue:"AU wine exports ~AUD 2.5B globally; →CN recovering to ~AUD 500M",
        cnImportVol:"CN wine imports ~$1.5B total (2024); AU share recovering from 2020 lows",
        direction:{en:"Australia (Barossa, Margaret River, Yarra Valley) → China, ASEAN, UK, US",zh:"澳大利亚（巴罗萨、玛格丽特河、雅拉谷）→ 中国、东盟、英国、美国"},
        topExporters:[{en:"Treasury Wine Estates (AU)",zh:"TWE富邑（澳）"},{en:"Penfolds (AU/TWE)",zh:"奔富（澳/TWE）"},{en:"Casella (AU, Yellow Tail)",zh:"Casella（澳，黄尾）"},{en:"Pernod Ricard (France/AU)",zh:"保乐力加（法/澳）"}],
        topImporters:[{en:"China (recovering)",zh:"中国（恢复中）"},{en:"UK",zh:"英国"},{en:"USA",zh:"美国"},{en:"ASEAN (Singapore, Thailand)",zh:"东盟（新加坡、泰国）"}],
        tariff:{en:"ChAFTA: 0% (anti-dumping duties removed Mar 2024!); was 116-218% during 2021-2024",zh:"中澳自贸：0%（反倾销税2024年3月取消！）；2021-2024期间曾为116-218%"},
        yoyChange:"+200%+ (AU wine to CN, from near-zero base after tariff removal)",
        trend:"up",
        keyEvents:{en:"China removed anti-dumping duties on AU wine (March 2024). Penfolds sales surging in CN. AU wine still needs to rebuild CN distribution networks lost during 3-year ban. UK remains AU's #1 wine market.",zh:"中国取消澳葡萄酒反倾销税（2024年3月）。奔富在华销售激增。澳酒仍需重建3年禁令期间失去的中国分销网络。英国仍为澳酒第一市场。"},
        cities:["shanghai","beijing","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ emerging wine market; AU wine bars growing",zh:"重庆新兴葡萄酒市场；澳红酒酒吧增长"},
            shanghai:{en:"Shanghai = AU wine #1 market in CN; premium Barossa focus",zh:"上海=澳酒中国第一市场；高端巴罗萨为主"},
            guangdong:{en:"Guangdong = AU wine #2 market; Shenzhen/YM import hubs",zh:"广东=澳酒第二市场；深圳/营口进口枢纽"},
            beijing:{en:"Beijing = highest per-capita AU wine spending; Penfolds strategy focus",zh:"北京=人均澳酒消费最高；奔富战略重点"}
        }
    },
    {
        rank:13, icon:"🧪", en:"Chemicals & Plastics", zh:"化工与塑料", category:"manufacturing",
        tag:"CN↔ASEAN/AU",
        hsCode:"39 (plastics), 29 (organic chemicals), 38 (industrial chemicals)",
        ausTradeValue:"~USD 80B corridor (CN↔ASEAN/AU chemicals trade)",
        cnImportVol:"CN chemical exports $300B+ globally; ASEAN petrochem → CN $25B+",
        direction:{en:"China → ASEAN, AU (industrial chemicals, plastics); ASEAN petrochemicals → CN; AU → CN (mineral chemicals)",zh:"中国 → 东盟、澳（工业化工、塑料）；东盟石化 → 中；澳 → 中（矿产化工）"},
        topExporters:[{en:"Sinopec (CN)",zh:"中石化（中）"},{en:"Sinochem (CN)",zh:"中化（中）"},{en:"PTT (Thailand)",zh:"PTT（泰）"},{en:"Petronas (Malaysia)",zh:"Petronas（马来）"}],
        topImporters:[{en:"ASEAN",zh:"东盟"},{en:"Australia",zh:"澳大利亚"},{en:"China (petrochem imports)",zh:"中国（石化进口）"},{en:"India",zh:"印度"}],
        tariff:{en:"0-6.5% (ChAFTA); 0-5% (ACFTA/RCEP)",zh:"0-6.5%（中澳自贸）；0-5%（ACFTA/RCEP）"},
        yoyChange:"+4% (corridor, 2024)",
        trend:"stable",
        keyEvents:{en:"ASEAN petrochemical capacity expanding (Vietnam, Malaysia). Green chemistry transition. PFAS regulations impacting chemical trade. RCEP enabling chemical supply chain integration.",zh:"东盟石化产能扩张（越南、马来西亚）。绿色化学转型。PFAS法规影响化工贸易。RCEP促进化工供应链整合。"},
        cities:["guangdong","chongqing"],
        cityRelevance:{
            chongqing:{en:"CQ chemical industry base (Changshou Chemical Zone); ASEAN raw materials",zh:"重庆化工基地（长寿化工园）；东盟原料"},
            shanghai:{en:"Shanghai Chemical Industry Park; CNOOC/Sinopec trading",zh:"上海化工区；中海油/中石化贸易"},
            guangdong:{en:"Daya Bay petrochemical base; plastic products exports to ASEAN/AU",zh:"大亚湾石化基地；塑料制品出口东盟/澳"},
            beijing:{en:"Policy: chemical safety regulation, green chemistry standards",zh:"政策：化工安全法规，绿色化学标准"}
        }
    },
    {
        rank:14, icon:"🌾", en:"Wheat & Grain", zh:"小麦与谷物", category:"agri",
        tag:"AU→ASEAN/CN",
        hsCode:"1001 (wheat), 1006 (rice)",
        ausTradeValue:"AU wheat exports ~AUD 10B globally; →ASEAN ~AUD 3B; →CN ~AUD 1.5B",
        cnImportVol:"CN wheat imports ~12Mt (2024); AU share ~30%",
        direction:{en:"Australia (WA, SA, NSW) → ASEAN (Indonesia, Vietnam, Philippines), China, Middle East",zh:"澳大利亚（西澳、南澳、新州）→ 东盟（印尼、越南、菲律宾）、中国、中东"},
        topExporters:[{en:"CBH Group (AU, WA)",zh:"CBH集团（澳，西澳）"},{en:"GrainCorp (AU, east coast)",zh:"GrainCorp（澳，东海岸）"},{en:"Russia (#1 global wheat)",zh:"俄罗斯（全球第一小麦）"},{en:"Ukraine",zh:"乌克兰"}],
        topImporters:[{en:"Indonesia (#1 AU wheat buyer)",zh:"印尼（澳麦第一买家）"},{en:"Vietnam",zh:"越南"},{en:"China",zh:"中国"},{en:"Philippines",zh:"菲律宾"}],
        tariff:{en:"ChAFTA: 0% within quota; ACFTA: 0% ASEAN; CN wheat TRQ: 9.636Mt",zh:"中澳自贸：配额内0%；ACFTA：0%东盟；中国小麦关税配额：963.6万吨"},
        yoyChange:"+8% (AU→CN wheat 2024, good harvest)",
        trend:"stable",
        keyEvents:{en:"AU record wheat harvest 2023-24. Indonesia instant noodle industry = world's largest. China wheat TRQ increasingly filled. Black Sea disruption benefiting AU grain.",zh:"澳洲2023-24年小麦创纪录丰收。印尼方便面产业=全球最大。中国小麦关税配额填满率提升。黑海供应干扰利好澳粮。"},
        cities:["chongqing","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ grain processing & food industry; ASEAN rice import via corridor",zh:"重庆粮食加工&食品工业；经陆海新通道进口东盟大米"},
            shanghai:{en:"Shanghai grain futures (ZCE); AU wheat import port",zh:"郑商所粮食期货；澳麦进口港"},
            guangdong:{en:"Guangdong flour milling; ASEAN rice imports",zh:"广东面粉加工；东盟大米进口"},
            beijing:{en:"Policy: grain security, wheat import quota management",zh:"政策：粮食安全，小麦进口配额管理"}
        }
    },
    {
        rank:15, icon:"👗", en:"Textiles & Apparel", zh:"纺织品与服装", category:"manufacturing",
        tag:"CN/ASEAN→AU",
        hsCode:"61-63 (apparel, textiles)",
        ausTradeValue:"AU textile imports ~AUD 15B; from CN ~AUD 8B; from ASEAN ~AUD 3B",
        cnImportVol:"CN textile exports $300B+ globally; ASEAN (Vietnam, Cambodia) growing fast",
        direction:{en:"China, Vietnam, Bangladesh, Cambodia → Australia, EU, US",zh:"中国、越南、孟加拉、柬埔寨 → 澳大利亚、欧盟、美国"},
        topExporters:[{en:"China (#1 global)",zh:"中国（全球第一）"},{en:"Vietnam (#2 to AU)",zh:"越南（对澳第二）"},{en:"Bangladesh",zh:"孟加拉"},{en:"Cambodia",zh:"柬埔寨"}],
        topImporters:[{en:"USA",zh:"美国"},{en:"EU",zh:"欧盟"},{en:"Australia",zh:"澳大利亚"},{en:"Japan",zh:"日本"}],
        tariff:{en:"AU: 0-5% (ChAFTA); ASEAN: 0-5% (AANZFTA); US tariffs shifting supply chains",zh:"澳：0-5%（中澳自贸）；东盟：0-5%（AANZFTA）；美国关税正在改变供应链"},
        yoyChange:"+3% (CN→AU textiles 2024); +15% (Vietnam→AU)",
        trend:"stable",
        keyEvents:{en:"SHEIN (Guangzhou) revolutionizing fast fashion. US tariffs on CN shifting textile production to Vietnam/Cambodia. RCEP enabling CN fabric → ASEAN garment → AU/EU value chains.",zh:"SHEIN（广州）革命性改变快时尚。美国对华关税将纺织生产转移至越南/柬埔寨。RCEP支持中国布料→东盟成衣→澳/欧盟价值链。"},
        cities:["guangdong","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ textile industry (Chongqing Garment); limited export scale",zh:"重庆纺织业（重庆服装）；出口规模有限"},
            shanghai:{en:"Shanghai fashion industry; e-commerce textile trading platforms",zh:"上海时尚产业；电商纺织品交易平台"},
            guangdong:{en:"Guangzhou = SHEIN HQ; Dongguan = textile manufacturing; Foshan = fabrics",zh:"广州=SHEIN总部；东莞=纺织制造；佛山=面料"},
            beijing:{en:"Policy: textile industry upgrading, supply chain shift guidance",zh:"政策：纺织产业升级，供应链转移指引"}
        }
    },
    {
        rank:16, icon:"🥛", en:"Dairy Products", zh:"乳制品", category:"agri",
        tag:"AU/NZ→CN/ASEAN",
        hsCode:"0402 (milk powder), 0401 (liquid milk), 0405 (butter)",
        ausTradeValue:"AU dairy exports ~AUD 6B; →CN ~AUD 2.5B; NZ→CN ~AUD 8B",
        cnImportVol:"CN dairy imports ~$12B total (2024); AU+NZ = 50%+ share",
        direction:{en:"Australia, New Zealand → China (infant formula!), ASEAN (milk powder), Middle East",zh:"澳大利亚、新西兰 → 中国（奶粉！）、东盟（奶粉）、中东"},
        topExporters:[{en:"Fonterra (NZ, #1 global dairy exporter)",zh:"恒天然（新，全球第一乳品出口商）"},{en:"Saputo (AU/Canada)",zh:"Saputo（澳/加）"},{en:"Bega (AU)",zh:"Bega（澳）"},{en:"Murray Goulburn (AU)",zh:"迈高（澳）"}],
        topImporters:[{en:"China (#1 global dairy importer)",zh:"中国（全球第一乳品进口国）"},{en:"ASEAN (Philippines, Malaysia)",zh:"东盟（菲律宾、马来西亚）"},{en:"Japan",zh:"日本"}],
        tariff:{en:"ChAFTA: 0-8% within TRQ (AU milk powder quota growing); NZ FTA: 0%",zh:"中澳自贸：配额内0-8%（澳奶粉配额逐年增长）；中新自贸：0%"},
        yoyChange:"+5% (AU→CN dairy 2024); infant formula +12%",
        trend:"up",
        keyEvents:{en:"CN birth rate decline reducing infant formula demand long-term, but premiumization trend growing. A2 milk booming in CN. Cold-chain improvements enabling fresh milk exports. AU dairy safeguard mechanism.",zh:"中国出生率下降长期减少奶粉需求，但高端化趋势增长。A2牛奶在华爆发。冷链改善支持鲜奶出口。澳乳制品保障机制。"},
        cities:["shanghai","beijing","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ dairy market growing 10%/yr; AU/NZ milk powder import",zh:"重庆乳品市场年增10%；澳/新奶粉进口"},
            shanghai:{en:"Shanghai = premium dairy market; King Island, A2 direct import",zh:"上海=高端乳品市场；国王岛、A2直采"},
            guangdong:{en:"Guangdong = infant formula hub; AU/NZ formula via HK/Guangzhou",zh:"广东=奶粉枢纽；澳/新配方经港/穗进口"},
            beijing:{en:"Beijing: highest premium dairy spending; formula registration policy",zh:"北京：高端乳品消费最高；配方注册政策"}
        }
    },
    {
        rank:17, icon:"🔌", en:"Electrical Equipment", zh:"电气设备", category:"tech",
        tag:"CN→AU/ASEAN",
        hsCode:"85 (electrical machinery), 8544 (cables), 8507 (batteries)",
        ausTradeValue:"CN electrical equipment exports ~USD 100B+ globally; →ASEAN ~$25B; →AU ~$8B",
        cnImportVol:"CN exports $100B+ electrical equipment; global #1 producer",
        direction:{en:"China → ASEAN (manufacturing equipment), Australia (construction, solar, EV)",zh:"中国 → 东盟（制造设备）、澳大利亚（建筑、光伏、新能源车）"},
        topExporters:[{en:"Huawei (CN, telecom power)",zh:"华为（中，通信电源）"},{en:"Sungrow (CN, inverters)",zh:"阳光电源（中，逆变器）"},{en:"CATL (CN, batteries)",zh:"宁德时代（中，电池）"},{en:"ABB (Switzerland)",zh:"ABB（瑞士）"}],
        topImporters:[{en:"ASEAN (Vietnam, Thailand factories)",zh:"东盟（越南、泰国产线）"},{en:"Australia (solar + EV infrastructure)",zh:"澳大利亚（光伏+新能源车基础设施）"},{en:"EU",zh:"欧盟"}],
        tariff:{en:"0-5% (ChAFTA); 0% (RCEP/ACFTA)",zh:"0-5%（中澳自贸）；0%（RCEP/ACFTA）"},
        yoyChange:"+9% (CN electrical exports 2024); battery exports +30%",
        trend:"up",
        keyEvents:{en:"CATL became world's #1 battery maker. Solar inverter exports surging. AU home battery storage market growing 50%/yr. EV charging equipment demand global.",zh:"宁德时代成为全球第一电池制造商。光伏逆变器出口激增。澳家用储能市场年增50%。全球充电设备需求。"},
        cities:["guangdong","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ cable/electrical manufacturing; transformer exports to ASEAN",zh:"重庆电缆/电气制造；变压器出口东盟"},
            shanghai:{en:"Shanghai electrical equipment trading; Schneider/ABB joint ventures",zh:"上海电气设备贸易；施耐德/ABB合资"},
            guangdong:{en:"Shenzhen = electrical equipment capital; Sungrow, Huawei inverters; battery exports",zh:"深圳=电气设备之都；阳光电源、华为逆变器；电池出口"},
            beijing:{en:"Policy: electrical safety standards, EV charging mandates",zh:"政策：电气安全标准，充电设施强制要求"}
        }
    },
    {
        rank:18, icon:"🌳", en:"Rubber & Rubber Products", zh:"橡胶及橡胶制品", category:"agri",
        tag:"ASEAN→CN/AU",
        hsCode:"4001 (natural rubber), 4011 (tires)",
        ausTradeValue:"Global natural rubber trade ~USD 25B; ASEAN→CN ~$8B; CN tire exports ~$20B",
        cnImportVol:"CN natural rubber imports ~6Mt/year; 95% from ASEAN",
        direction:{en:"Thailand (#1), Indonesia, Malaysia → China (tire manufacturing), AU; CN tires → Global",zh:"泰国（第一）、印尼、马来西亚 → 中国（轮胎制造）、澳；中国轮胎 → 全球"},
        topExporters:[{en:"Thailand (#1 global NR)",zh:"泰国（全球第一天胶）"},{en:"Indonesia (#2)",zh:"印尼（第二）"},{en:"Vietnam (#3, fast growing)",zh:"越南（第三，快速增长）"},{en:"Malaysia",zh:"马来西亚"}],
        topImporters:[{en:"China (#1 global NR importer)",zh:"中国（全球第一天胶进口国）"},{en:"USA",zh:"美国"},{en:"India",zh:"印度"},{en:"Japan",zh:"日本"}],
        tariff:{en:"CN: 0% (ACFTA for ASEAN NR); AU: 0-5% (AANZFTA)",zh:"中国：0%（ACFTA东盟天胶）；澳：0-5%（AANZFTA）"},
        yoyChange:"+2% (2024 NR prices recovering from 2023 lows)",
        trend:"stable",
        keyEvents:{en:"NR prices volatile $1.40-1.80/kg. Thailand/Indonesia supply concerns from climate change. CN tire exports under US/EU anti-dumping. EV tires demand growing (heavier vehicles).",zh:"天胶价格波动$1.40-1.80/公斤。泰/印尼气候变化供应担忧。中国轮胎遭美/欧反倾销。EV轮胎需求增长（更重车辆）。"},
        cities:["chongqing","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ tire manufacturing base; NR import via Qinzhou from Thailand/Myanmar",zh:"重庆轮胎制造基地；经钦州从泰/缅进口天胶"},
            shanghai:{en:"Shanghai rubber futures (SHFE); tire trading companies",zh:"上期所橡胶期货；轮胎贸易公司"},
            guangdong:{en:"Guangdong tire manufacturers; rubber product exports to AU",zh:"广东轮胎制造商；橡胶制品出口至澳"},
            beijing:{en:"Policy: NR strategic reserve, tire industry guidelines",zh:"政策：天胶战略储备，轮胎产业指引"}
        }
    },
    {
        rank:19, icon:"📱", en:"Telecom & IT Equipment", zh:"通信与IT设备", category:"tech",
        tag:"CN→AU/ASEAN",
        hsCode:"8517 (telecom), 8471 (computers), 8542 (chips)",
        ausTradeValue:"CN telecom/IT exports ~USD 60B to AU+ASEAN corridor",
        cnImportVol:"CN telecom equipment exports $200B+ globally (2024)",
        direction:{en:"China (Huawei, ZTE, Xiaomi, H3C) → ASEAN (5G, broadband), Australia (consumer)",zh:"中国（华为、中兴、小米、华三）→ 东盟（5G、宽带）、澳大利亚（消费端）"},
        topExporters:[{en:"Huawei (CN)",zh:"华为（中）"},{en:"ZTE (CN)",zh:"中兴（中）"},{en:"Xiaomi (CN)",zh:"小米（中）"},{en:"H3C (CN)",zh:"新华三（中）"}],
        topImporters:[{en:"ASEAN (5G infrastructure)",zh:"东盟（5G基础设施）"},{en:"Australia (consumer devices)",zh:"澳大利亚（消费设备）"},{en:"Middle East",zh:"中东"},{en:"Africa",zh:"非洲"}],
        tariff:{en:"0% (ChAFTA for most IT); ACFTA 0%; RCEP 0% (ITA products)",zh:"0%（中澳自贸大部分IT产品）；ACFTA 0%；RCEP 0%（ITA产品）"},
        yoyChange:"+7% (CN telecom exports 2024)",
        trend:"up",
        keyEvents:{en:"Huawei restricted in AU/5G but strong in ASEAN. Xiaomi #2 smartphone in AU. ASEAN 5G buildout $30B+ market. RCEP digital trade chapter enabling data flows.",zh:"华为在澳5G受限但在东盟强势。小米在澳手机第二。东盟5G建设300亿美元+市场。RCEP数字贸易章节促进数据流动。"},
        cities:["guangdong","beijing"],
        cityRelevance:{
            chongqing:{en:"CQ cloud data centers; telecom infrastructure demand",zh:"重庆云数据中心；通信基础设施需求"},
            shanghai:{en:"Shanghai = telecom trading hub; 5G pilot city",zh:"上海=通信贸易枢纽；5G试点城市"},
            guangdong:{en:"Shenzhen = Huawei, ZTE HQ; Dongguan = Xiaomi manufacturing",zh:"深圳=华为、中兴总部；东莞=小米制造"},
            beijing:{en:"Beijing = Huawei/ZTE policy HQ; digital trade regulation",zh:"北京=华为/中兴政策总部；数字贸易监管"}
        }
    },
    {
        rank:20, icon:"🎒", en:"Furniture & Home Goods", zh:"家具与家居用品", category:"manufacturing",
        tag:"CN/ASEAN→AU",
        hsCode:"94 (furniture), 69 (ceramics), 63 (home textiles)",
        ausTradeValue:"AU furniture imports ~AUD 12B; from CN ~AUD 5B; from ASEAN ~AUD 3B",
        cnImportVol:"CN furniture exports $100B+ globally; →AU ~$3B; →ASEAN ~$5B",
        direction:{en:"China (Foshan, Dongguan), Vietnam, Malaysia → Australia, EU, US",zh:"中国（佛山、东莞）、越南、马来西亚 → 澳大利亚、欧盟、美国"},
        topExporters:[{en:"China (Foshan furniture hub)",zh:"中国（佛山家具之都）"},{en:"Vietnam (#2 furniture exporter)",zh:"越南（第二大家具出口国）"},{en:"Malaysia (wood furniture)",zh:"马来西亚（木质家具）"},{en:"Indonesia (rattan/wood)",zh:"印尼（藤/木家具）"}],
        topImporters:[{en:"USA",zh:"美国"},{en:"EU",zh:"欧盟"},{en:"Australia",zh:"澳大利亚"},{en:"Japan",zh:"日本"}],
        tariff:{en:"AU: 0-5% (ChAFTA); 0-5% (AANZFTA for ASEAN)",zh:"澳：0-5%（中澳自贸）；0-5%（AANZFTA东盟）"},
        yoyChange:"+4% (CN→AU furniture 2024); +18% (Vietnam→AU)",
        trend:"up",
        keyEvents:{en:"AU housing boom driving furniture demand. Vietnam furniture exports surging (US tariffs redirecting CN production). IKEA sourcing shifting from CN to Vietnam. Foshan furniture fairs still dominant.",zh:"澳建房热潮驱动家具需求。越国家具出口激增（美关税重定向中国生产）。宜家采购从中国转向越南。佛山家具展仍占主导。"},
        cities:["guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ furniture manufacturing (limited export); domestic market focus",zh:"重庆家具制造（出口有限）；内销为主"},
            shanghai:{en:"Shanghai design furniture trading; AU import distribution",zh:"上海设计家具贸易；澳进口分销"},
            guangdong:{en:"Foshan = China's furniture capital! Lecong furniture market = world's largest. Direct export to AU.",zh:"佛山=中国家具之都！乐从家具市场=全球最大。直出口至澳。"},
            beijing:{en:"Beijing: furniture design/concept; policy: furniture safety standards",zh:"北京：家具设计/概念；政策：家具安全标准"}
        }
    },
    {
        rank:21, icon:"🎓", en:"Education Services", zh:"教育服务", category:"services",
        tag:"AU→CN/ASEAN",
        hsCode:"Services (GATS Mode 2/4)",
        ausTradeValue:"AU education exports ~AUD 40B globally; from CN ~AUD 15B; from ASEAN ~AUD 8B",
        cnImportVol:"150K+ CN students in AU; 100K+ ASEAN students",
        direction:{en:"Australia (Group of Eight universities, VET) → China, ASEAN, India; CN EdTech → ASEAN",zh:"澳大利亚（八大名校、职业教育）→ 中国、东盟、印度；中国教育科技 → 东盟"},
        topExporters:[{en:"University of Melbourne (AU)",zh:"墨尔本大学（澳）"},{en:"University of Sydney (AU)",zh:"悉尼大学（澳）"},{en:"Monash University (AU)",zh:"蒙纳士大学（澳）"},{en:"ANU (AU)",zh:"澳国立（澳）"}],
        topImporters:[{en:"China (#1 source of AU international students)",zh:"中国（澳留学生第一来源国）"},{en:"Vietnam (#3, growing fast)",zh:"越南（第三，快速增长）"},{en:"India (#2)",zh:"印度（第二）"},{en:"Indonesia",zh:"印尼"}],
        tariff:{en:"N/A (services); ChAFTA: improved market access for AU education providers in CN",zh:"不适用（服务）；中澳自贸：改善澳教育在华市场准入"},
        yoyChange:"+5% (AU education exports 2024, recovering post-COVID)",
        trend:"up",
        keyEvents:{en:"AU international student cap debate (2024-25). CN student numbers recovering. VET sector growing. EdTech exports: CN online platforms expanding to ASEAN. AU degree programs in Singapore/Malaysia.",zh:"澳洲国际学生上限争议（2024-25）。中国学生数恢复中。职业教育增长。教育科技出口：中国在线平台扩展至东盟。澳学位项目在新加坡/马来西亚。"},
        cities:["beijing","shanghai","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ students in AU growing; AU university recruitment events",zh:"重庆在澳留学生增长；澳大学招生活动"},
            shanghai:{en:"Shanghai = #1 source city for AU international students",zh:"上海=澳洲留学生第一来源城市"},
            guangdong:{en:"Guangdong = #2 source; VET programs popular; AU TAFE partnerships",zh:"广东=第二来源；职业教育热门；澳TAFE合作"},
            beijing:{en:"Beijing = education policy HQ; AU-CHN education agreements; EdTech exports",zh:"北京=教育政策总部；中澳教育协议；教育科技出口"}
        }
    },
    {
        rank:22, icon:"✈️", en:"Tourism Services", zh:"旅游服务", category:"services",
        tag:"CN/ASEAN→AU",
        hsCode:"Services (GATS Mode 2)",
        ausTradeValue:"AU tourism exports ~AUD 45B; from CN ~AUD 12B; from ASEAN ~AUD 8B",
        cnImportVol:"1.4M+ CN tourists to AU pre-COVID; recovering to ~800K (2024)",
        direction:{en:"China, ASEAN tourists → Australia (Sydney, Gold Coast, Great Barrier Reef); AU tourists → ASEAN (Bali, Thailand, Vietnam)",zh:"中国、东盟游客 → 澳大利亚（悉尼、黄金海岸、大堡礁）；澳游客 → 东盟（巴厘岛、泰国、越南）"},
        topExporters:[{en:"Australia (inbound tourism)",zh:"澳大利亚（入境旅游）"},{en:"Thailand (inbound)",zh:"泰国（入境）"},{en:"Indonesia/Bali (inbound)",zh:"印尼/巴厘岛（入境）"},{en:"Vietnam (inbound, fastest growing)",zh:"越南（入境，增长最快）"}],
        topImporters:[{en:"Chinese tourists (#1 AU spend per trip)",zh:"中国游客（在澳人均消费第一）"},{en:"Singapore",zh:"新加坡"},{en:"Malaysia",zh:"马来西亚"},{en:"Indonesia",zh:"印尼"}],
        tariff:{en:"N/A (services); Visa: CN tourists 10-year multiple entry (ChAFTA)",zh:"不适用（服务）；签证：中国游客10年多次入境（中澳自贸）"},
        yoyChange:"+120% (CN→AU tourist arrivals 2024 vs 2023, from low base)",
        trend:"up",
        keyEvents:{en:"CN→AU tourism recovering but still below 2019 peak. AU launched targeted China marketing campaign. ASEAN→AU growing faster. Bali remains AU #1 outbound destination.",zh:"中国→澳旅游恢复中但仍低于2019峰值。澳启动对华定向营销。东盟→澳增长更快。巴厘岛仍为澳人第一出境目的地。"},
        cities:["beijing","shanghai","guangdong","chongqing"],
        cityRelevance:{
            chongqing:{en:"CQ → AU tourism growing 20%/yr; AU visa center in CQ",zh:"重庆→澳旅游年增20%；澳签证中心在渝"},
            shanghai:{en:"Shanghai = top departure city for AU tourism; direct flights (8hr)",zh:"上海=赴澳旅游第一出发城市；直飞（8小时）"},
            guangdong:{en:"Guangzhou/Shenzhen = 2nd departure hub; Canton Pacific routes",zh:"广/深=第二出发枢纽；南太平洋航线"},
            beijing:{en:"Beijing = AU tourism policy negotiations; visa facilitation",zh:"北京=澳旅游政策谈判；签证便利化"}
        }
    },
    {
        rank:23, icon:"☀️", en:"Solar & Renewable Equipment", zh:"太阳能与可再生能源设备", category:"tech",
        tag:"CN→AU/ASEAN",
        hsCode:"8541.40 (solar cells), 8503 (wind turbines), 8507.60 (lithium batteries)",
        ausTradeValue:"CN solar exports ~USD 50B globally; →AU ~$3B; →ASEAN ~$5B",
        cnImportVol:"CN produces 80%+ of global solar panels; 60%+ of wind turbines",
        direction:{en:"China (Jiangsu, Zhejiang, Guangdong) → Australia (rooftop solar #1), ASEAN (Vietnam, Thailand solar farms)",zh:"中国（江苏、浙江、广东）→ 澳大利亚（屋顶光伏第一）、东盟（越南、泰国民用光伏电站）"},
        topExporters:[{en:"LONGi Green Energy (CN, #1 solar)",zh:"隆基绿能（中，第一光伏）"},{en:"Tongwei (CN)",zh:"通威（中）"},{en:"Sungrow (CN, #1 inverter)",zh:"阳光电源（中，第一逆变器）"},{en:"BYD (CN, batteries)",zh:"比亚迪（中，电池）"},{en:"Goldwind (CN, wind)",zh:"金风科技（中，风电）"}],
        topImporters:[{en:"Australia (#1 rooftop solar penetration globally, 35%+ homes)",zh:"澳大利亚（全球第一屋顶光伏渗透率，35%+家庭）"},{en:"EU",zh:"欧盟"},{en:"ASEAN (Vietnam solar farms)",zh:"东盟（越南光伏电站）"},{en:"India",zh:"印度"}],
        tariff:{en:"0% (ChAFTA); 0% (RCEP); EU considering anti-subsidy duties on CN solar",zh:"0%（中澳自贸）；0%（RCEP）；欧盟考虑对华光伏反补贴税"},
        yoyChange:"+15% (CN→AU solar exports 2024); solar panel prices -50% in 3 years",
        trend:"up",
        keyEvents:{en:"AU installed 3.5GW rooftop solar in 2024. Solar panel prices crashed to $0.10/W. CN solar overcapacity driving global prices down. EU anti-subsidy investigation on CN solar. AU home battery storage booming.",zh:"澳洲2024年安装3.5GW屋顶光伏。光伏面板价格暴跌至$0.10/W。中国光伏产能过剩推动全球降价。欧盟对华光伏反补贴调查。澳家用储能爆发。"},
        cities:["guangdong","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ renewable energy manufacturing growing; wind turbine parts",zh:"重庆可再生能源制造增长；风电零件"},
            shanghai:{en:"Shanghai solar trading companies; Sungrow regional office",zh:"上海光伏贸易公司；阳光电源区域办"},
            guangdong:{en:"Guangdong = solar inverter & battery manufacturing hub; BYD battery exports",zh:"广东=光伏逆变器&电池制造中心；比亚迪电池出口"},
            beijing:{en:"Policy: dual carbon goals, renewable mandates, solar subsidy",zh:"政策：双碳目标，可再生能源强制要求，光伏补贴"}
        }
    },
    {
        rank:24, icon:"💊", en:"Pharmaceuticals & Health Products", zh:"医药与健康产品", category:"manufacturing",
        tag:"CN/AU↔ASEAN",
        hsCode:"30 (pharma), 2106.90 (supplements), 3004 (medicaments)",
        ausTradeValue:"~USD 20B corridor; AU health supplements → CN ~$2B; CN pharma → ASEAN ~$5B",
        cnImportVol:"CN pharma exports $60B+ globally; AU supplement exports $3B+ globally",
        direction:{en:"China → ASEAN (generics, APIs, TCM); AU → CN (vitamins, supplements, Blackmores, Swisse)",zh:"中国 → 东盟（仿制药、API、中药）；澳 → 中（维生素、保健品、Blackmores、Swisse）"},
        topExporters:[{en:"Blackmores/Swisse (AU, supplements in CN)",zh:"Blackmores/Swisse（澳，在华保健品）"},{en:"Pfizer (US, global)",zh:"辉瑞（美，全球）"},{en:"Sinopharm (CN)",zh:"国药（中）"},{en:"Huahai Pharma (CN, APIs)",zh:"华海药业（中，API）"}],
        topImporters:[{en:"China (AU supplements, CN self-care boom)",zh:"中国（澳保健品，中式养生潮）"},{en:"ASEAN (CN generics, TCM)",zh:"东盟（中仿制药、中药）"},{en:"Australia (CN APIs, TCM under TGA)",zh:"澳大利亚（中API，中药经TGA）"}],
        tariff:{en:"0-5% (ChAFTA for supplements); TGA registration required for AU import",zh:"0-5%（中澳自贸保健品）；澳进口需TGA注册"},
        yoyChange:"+8% (AU→CN supplements); +10% (CN→ASEAN pharma)",
        trend:"up",
        keyEvents:{en:"CN 'health wellness' trend driving AU supplement imports. TCM gaining acceptance in AU (TGA registered). ASEAN pharma market growing 8%/yr. CN API exports dominant globally.",zh:"中国'养生潮'驱动澳保健品进口。中药在澳获认可（TGA注册）。东盟医药市场年增8%。中国API出口全球主导。"},
        cities:["beijing","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ TCM manufacturing; AU supplement import growing",zh:"重庆中药制造；澳保健品进口增长"},
            shanghai:{en:"Shanghai = pharma R&D hub; Roche, Novartis China HQ; supplement trading",zh:"上海=医药R&D中心；罗氏、诺华中国总部；保健品贸易"},
            guangdong:{en:"Guangdong TCM export base; Shenzhen biotech corridor",zh:"广东中药出口基地；深圳生物科技走廊"},
            beijing:{en:"Beijing = pharma policy HQ; TCM modernization; TGA mutual recognition",zh:"北京=医药政策总部；中药现代化；TGA互认"}
        }
    },
    {
        rank:25, icon:"🪙", en:"Gold & Precious Metals", zh:"黄金与贵金属", category:"minerals",
        tag:"AU→CN/ASEAN",
        hsCode:"7108 (gold), 7110 (platinum), 7106 (silver)",
        ausTradeValue:"AU gold exports ~AUD 60B (FY2025-26 est.); →CN ~AUD 20B; #2 AU export after iron ore",
        cnImportVol:"CN gold imports ~1,400t/year (2024); AU = #2 source after Switzerland; PBOC reserves growing",
        direction:{en:"Australia (Kalgoorlie, Perth Mint) → China (Shanghai Gold Exchange), Singapore, India, Switzerland",zh:"澳大利亚（卡尔古利、珀斯铸币厂）→ 中国（上海金交所）、新加坡、印度、瑞士"},
        topExporters:[{en:"Newmont (AU/US, #1 global gold)",zh:"纽蒙特（澳/美，全球第一黄金）"},{en:"Perth Mint (AU, refined gold)",zh:"珀斯铸币厂（澳，精炼金）"},{en:"Northern Star (AU)",zh:"北星资源（澳）"},{en:"Evolution Mining (AU)",zh:"Evolution矿业（澳）"}],
        topImporters:[{en:"China (Shanghai Gold Exchange = Asia benchmark)",zh:"中国（上海金交所=亚洲基准）"},{en:"India",zh:"印度"},{en:"Singapore",zh:"新加坡"},{en:"Switzerland",zh:"瑞士"}],
        tariff:{en:"0% (ChAFTA for gold); CN: 0% import VAT on raw gold",zh:"0%（中澳自贸黄金）；中国：原料金0%进口增值税"},
        yoyChange:"+52% YTD (gold ~$4,100/oz Jul 11, 2026, up from ~$2,700 end-2025; pulled back from $4,713 Jun peak on profit-taking)",
        trend:"up",
        keyEvents:{en:"Gold at ~$4,100/oz on Jul 11, 2026 (+52% YTD vs ~$2,700 end-2025), pulling back from the $4,713/oz Jun peak on profit-taking after a strong H1. China's SGE AU9999 at ~¥900/g (Jul 11). Central banks keep buying record volumes; PBOC reserves rising. AU gold output steady ~320t/yr; Perth Mint LBMA-certified. Soft US data and rate-cut bets cap downside.",zh:"2026年7月11日金价约$4,100/盎司（YTD +52%，较2025年底约$2,700；较6月$4,713高点因H1强劲后获利了结回落）。上海金交所AU9999约¥900/克（7月11日）。各国央行继续创纪录购金，央行储备上升。澳黄金产量稳定约320吨/年，珀斯铸币厂为LBMA认证。美国数据疲弱与降息预期限制下方空间。"},
        cities:["shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ gold jewelry demand; limited direct import",zh:"重庆黄金首饰需求；直接进口有限"},
            shanghai:{en:"Shanghai Gold Exchange = Asia pricing center; AU gold primary CN entry point",zh:"上海金交所=亚洲定价中心；澳金入华首要通道"},
            guangdong:{en:"Shenzhen Shuibei = gold jewelry manufacturing hub; AU gold processing",zh:"深圳水贝=黄金首饰制造中心；澳金加工"},
            beijing:{en:"PBOC gold reserve policy; gold import licensing",zh:"央行黄金储备政策；黄金进口许可"}
        }
    },
    {
        rank:26, icon:"🥜", en:"Nuts & Dried Fruits", zh:"坚果与干果", category:"agri",
        tag:"AU→CN/ASEAN",
        hsCode:"0802 (tree nuts), 0803-0813 (dried fruit)",
        ausTradeValue:"AU nut exports ~AUD 3B; →CN ~AUD 1.5B (almonds, macadamia, walnuts)",
        cnImportVol:"CN tree nut imports ~$5B total; AU = #2 source after USA",
        direction:{en:"Australia (Riverina almonds, QLD macadamia, WA walnuts) → China, ASEAN, Middle East",zh:"澳大利亚（Riverina杏仁、昆州夏威夷果、西澳核桃）→ 中国、东盟、中东"},
        topExporters:[{en:"AlmondCo (AU)",zh:"AlmondCo（澳）"},{en:"Marquis Macadamias (AU)",zh:"Marquis（澳）"},{en:"Stahmann Farms (AU)",zh:"Stahmann（澳）"},{en:"Select Harvests (AU)",zh:"Select Harvests（澳）"}],
        topImporters:[{en:"China (#1 AU nut buyer)",zh:"中国（澳坚果第一买家）"},{en:"India",zh:"印度"},{en:"EU",zh:"欧盟"},{en:"ASEAN (Thailand, Vietnam)",zh:"东盟（泰国、越南）"}],
        tariff:{en:"0-10% (ChAFTA, phased reduction); ACFTA: 0-5%",zh:"0-10%（中澳自贸，分阶段减让）；ACFTA：0-5%"},
        yoyChange:"+10% (AU→CN nuts 2024, health food trend)",
        trend:"up",
        keyEvents:{en:"CN 'health snacking' trend driving nut imports. AU macadamia gaining premium positioning. Almond prices stable. Dried fruit (mango, cranberry) from AU growing in CN market.",zh:"中国'健康零食'趋势驱动坚果进口。澳夏威夷果获得高端定位。杏仁价格稳定。澳干果（芒果、蔓越莓）在华市场增长。"},
        cities:["shanghai","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ snack food market growing; AU nut demand rising",zh:"重庆零食市场增长；澳坚果需求上升"},
            shanghai:{en:"Shanghai = premium nut market; AU macadamia retail",zh:"上海=高端坚果市场；澳夏威夷果零售"},
            guangdong:{en:"Guangzhou nut trading; AU almonds for food manufacturing",zh:"广州坚果贸易；澳杏仁用于食品制造"},
            beijing:{en:"Beijing premium health food stores; AU nut direct import",zh:"北京高端健康食品店；澳坚果直采"}
        }
    },
    {
        rank:27, icon:"🚢", en:"Shipping & Logistics Services", zh:"航运与物流服务", category:"services",
        tag:"Cross-bloc",
        hsCode:"Services (GATS Mode 1/3)",
        ausTradeValue:"~USD 100B+ regional logistics market; Singapore = hub",
        cnImportVol:"Shanghai + Shenzhen = 2 of world's top 5 container ports",
        direction:{en:"Singapore (hub) ↔ Shanghai, Shenzhen, Sydney, Melbourne; Chongqing rail-sea corridor",zh:"新加坡（枢纽）↔ 上海、深圳、悉尼、墨尔本；重庆铁海联运"},
        topExporters:[{en:"PSA International (Singapore)",zh:"PSA国际（新加坡）"},{en:"COSCO (CN)",zh:"中远（中）"},{en:"Maersk (Denmark)",zh:"马士基（丹麦）"},{en:"DP World (UAE)",zh:"DP World（阿联酋）"}],
        topImporters:[{en:"All trading nations",zh:"所有贸易国"},{en:"Particularly: CN, AU, ASEAN",zh:"特别是：中、澳、东盟"}],
        tariff:{en:"N/A (services); port fees, freight rates variable",zh:"不适用（服务）；港口费、运费可变"},
        yoyChange:"+8% (container volumes CN↔ASEAN 2024); +5% (CN↔AU)",
        trend:"stable",
        keyEvents:{en:"Red Sea disruptions inflating freight rates 3x (2024-25). Singapore port congestion. Shanghai→Singapore→Sydney route dominant. Chongqing Western Land-Sea Corridor reducing ASEAN transit by 10 days.",zh:"红海干扰推高运费3倍（2024-25）。新加坡港拥堵。上海→新加坡→悉尼航线主导。重庆西部陆海新通道缩短东盟运输10天。"},
        cities:["shanghai","guangdong","chongqing"],
        cityRelevance:{
            chongqing:{en:"CQ = Western Land-Sea New Corridor origin; rail to Qinzhou → ASEAN by sea",zh:"重庆=西部陆海新通道起点；铁路至钦州→海运转东盟"},
            shanghai:{en:"Shanghai = world's #1 container port (47M+ TEU); Yangshan deep-water",zh:"上海=全球第一集装箱港（4700万+TEU）；洋山深水港"},
            guangdong:{en:"Shenzhen (Nansha/Yantian) = #3 globally; Guangzhou = #5; fastest ASEAN routes",zh:"深圳（南沙/盐田）=全球第三；广州=第五；最快东盟航线"},
            beijing:{en:"Policy: BRI logistics, port investment, shipping regulation",zh:"政策：一带一路物流，港口投资，航运监管"}
        }
    },
    {
        rank:28, icon:"🔋", en:"Lithium & Battery Materials", zh:"锂与电池材料", category:"minerals",
        tag:"AU→CN",
        hsCode:"2530.90 (lithium ore), 2836.91 (lithium carbonate)",
        ausTradeValue:"AU lithium exports ~AUD 15B; →CN ~AUD 12B (95%+ of AU lithium → CN)",
        cnImportVol:"CN imports ~3Mt lithium ore concentrate (2024); 95% from AU; refines to 60%+ global lithium chemicals",
        direction:{en:"Australia (Greenbushes, Mt Cattlin, Pilgangoora) → China (Ganfeng, Tianqi refining → CATL batteries)",zh:"澳大利亚（Greenbushes、Mt Cattlin、Pilgangoora）→ 中国（赣锋、天齐提炼→宁德时代电池）"},
        topExporters:[{en:"Talison Lithium (AU, Greenbushes = world's largest)",zh:"Talison（澳，Greenbushes=全球最大锂矿）"},{en:"Pilbara Minerals (AU)",zh:"Pilbara矿业（澳）"},{en:"IGO (AU)",zh:"IGO（澳）"},{en:"Allkem (AU)",zh:"Allkem（澳）"}],
        topImporters:[{en:"China (#1 global lithium refiner, 60%+)",zh:"中国（全球第一锂提炼国，60%+）"},{en:"Korea",zh:"韩国"},{en:"Japan",zh:"日本"},{en:"EU (emerging)",zh:"欧盟（新兴）"}],
        tariff:{en:"0% (ChAFTA for lithium ore); CN domestic: 0% import duty on lithium concentrate",zh:"0%（中澳自贸锂矿）；中国国内：锂精矿0%进口税"},
        yoyChange:"-15% (lithium carbonate stabilizing ~$10K/t in 2026; down from $80K peak 2022)",
        trend:"stable",
        keyEvents:{en:"Lithium price stabilizing after 80% crash from 2022 peak. Carbonate ~$10K/t (CN ex-work). AU mines (Pilbara, IGO) cut output but no new closures. CATL/Tianqi/Ganfeng still dominating mid-stream. EU Critical Raw Materials Act pushing diversification. Battery tech shift: sodium-ion batteries emerging as alternative.",zh:"锂价从2022高点暴跌80%后趋于稳定。碳酸锂约$10K/吨（中国出厂价）。澳矿（Pilbara、IGO）减产但无新增关停。宁德时代/天齐/赣锋仍主导中游。欧盟关键原材料法推动多元化。电池技术转变：钠离子电池作为替代方案兴起。"},
        cities:["guangdong","shanghai"],
        cityRelevance:{
            chongqing:{en:"CQ battery manufacturing (CALB, SVOLT); lithium material demand",zh:"重庆电池制造（中航锂电、蜂巢）；锂材料需求"},
            shanghai:{en:"Shanghai = battery trading hub; CATL R&D; lithium futures",zh:"上海=电池贸易枢纽；宁德时代R&D；锂期货"},
            guangdong:{en:"Guangdong = battery manufacturing center; BYD battery, EVE Energy; AU lithium primary feed",zh:"广东=电池制造中心；比亚迪电池、亿纬锂能；澳锂为主原料"},
            beijing:{en:"Policy: critical minerals strategy, lithium stockpile, supply security",zh:"政策：关键矿产战略，锂储备，供应安全"}
        }
    },
    {
        rank:29, icon:"🏠", en:"Construction Materials", zh:"建筑材料", category:"manufacturing",
        tag:"CN→ASEAN/AU",
        hsCode:"68-70 (ceramics, glass, cement), 6907 (tiles), 7005 (glass)",
        ausTradeValue:"CN construction material exports →ASEAN ~$10B; →AU ~$3B",
        cnImportVol:"CN ceramics exports $30B+ globally; →ASEAN ~$5B; →AU ~$1.5B",
        direction:{en:"China (Foshan ceramics, Fujian stone, Hebei glass) → ASEAN (BRI projects), Australia (housing)",zh:"中国（佛山陶瓷、福建石材、河北玻璃）→ 东盟（一带一路项目）、澳大利亚（建房）"},
        topExporters:[{en:"China (Foshan = ceramics capital)",zh:"中国（佛山=陶瓷之都）"},{en:"India (ceramics growing)",zh:"印度（陶瓷增长）"},{en:"Vietnam (ceramics emerging)",zh:"越南（陶瓷新兴）"},{en:"Thailand (ceramics)",zh:"泰国（陶瓷）"}],
        topImporters:[{en:"ASEAN (Indonesia, Philippines, Vietnam infrastructure)",zh:"东盟（印尼、菲律宾、越北基建）"},{en:"Australia (housing construction boom)",zh:"澳大利亚（建房热潮）"},{en:"Middle East",zh:"中东"},{en:"Africa",zh:"非洲"}],
        tariff:{en:"0-10% (ChAFTA phased); ACFTA: 0-5%; ASEAN anti-dumping on CN ceramics rising",zh:"0-10%（中澳自贸分阶段）；ACFTA：0-5%；东盟对华陶瓷反倾销增多"},
        yoyChange:"+5% (CN→ASEAN); +8% (CN→AU construction materials)",
        trend:"up",
        keyEvents:{en:"AU housing construction at record levels. ASEAN BRI infrastructure projects driving demand. CN ceramics facing ASEAN anti-dumping duties. Green building materials emerging trend.",zh:"澳建房创纪录水平。东盟一带一路基建项目驱动需求。中国陶瓷遭东盟反倾销税。绿色建材成为新兴趋势。"},
        cities:["chongqing","guangdong"],
        cityRelevance:{
            chongqing:{en:"CQ construction material base; BRI export to ASEAN (cement, steel, glass)",zh:"重庆建材基地；一带一路出口东盟（水泥、钢材、玻璃）"},
            shanghai:{en:"Shanghai construction material trading; AU import distribution",zh:"上海建材贸易；澳进口分销"},
            guangdong:{en:"Foshan = China's ceramics capital! Tiles, sanitary ware exports to AU/ASEAN",zh:"佛山=中国陶瓷之都！瓷砖、卫浴出口澳/东盟"},
            beijing:{en:"Policy: green building standards, BRI material export support",zh:"政策：绿色建筑标准，一带一路建材出口支持"}
        }
    },
    {
        rank:30, icon:"💰", en:"Financial & Fintech Services", zh:"金融与金融科技服务", category:"services",
        tag:"Cross-bloc",
        hsCode:"Services (GATS Mode 1/2/3)",
        ausTradeValue:"~USD 50B+ regional financial services trade",
        cnImportVol:"Cross-border RMB settlement $50T+ (2024); AU-ASEAN-CN corridor growing 15%/yr",
        direction:{en:"Singapore (ASEAN financial hub), Hong Kong, Sydney → China, ASEAN corridors; CN fintech → ASEAN",zh:"新加坡（东盟金融中心）、香港、悉尼 → 中国、东盟通道；中国金融科技 → 东盟"},
        topExporters:[{en:"DBS (Singapore)",zh:"星展银行（新加坡）"},{en:"ANZ (Australia)",zh:"澳新银行（澳）"},{en:"Ant Group/Alipay (CN)",zh:"蚂蚁/支付宝（中）"},{en:"WeChat Pay (CN)",zh:"微信支付（中）"}],
        topImporters:[{en:"ASEAN (fintech adoption surging)",zh:"东盟（金融科技采用激增）"},{en:"Australia (cross-border payments)",zh:"澳大利亚（跨境支付）"},{en:"China (wealth management, insurance)",zh:"中国（财富管理、保险）"}],
        tariff:{en:"N/A (services); RCEP financial services chapter; market access commitments",zh:"不适用（服务）；RCEP金融服务章节；市场准入承诺"},
        yoyChange:"+15% (RMB settlement in ASEAN); +20% (fintech adoption ASEAN)",
        trend:"up",
        keyEvents:{en:"RMB internationalization accelerating in ASEAN (10%+ of trade settlement). Alipay/WeChat Pay in AU/ASEAN. Singapore = Asia wealth management hub. AU-CHN financial services dialogue advancing. RCEP financial appendix enabling data flows.",zh:"人民币在东盟国际化加速（10%+贸易结算）。支付宝/微信支付在澳/东盟。新加坡=亚洲财富管理中心。中澳金融服务对话推进。RCEP金融附录促进数据流动。"},
        cities:["shanghai","beijing"],
        cityRelevance:{
            chongqing:{en:"CQ financial pilot zone; ASEAN RMB settlement center",zh:"重庆金融试点区；东盟人民币结算中心"},
            shanghai:{en:"Shanghai = China's Wall Street; PBOC Shanghai HQ; global RMB clearing",zh:"上海=中国华尔街；央行上海总部；全球人民币清算"},
            guangdong:{en:"Shenzhen = fintech capital; cross-border RMB; WeChat Pay HQ",zh:"深圳=金融科技之都；跨境人民币；微信支付总部"},
            beijing:{en:"Beijing = PBOC/CBIRC HQ; financial policy center; AU-CN financial dialogue",zh:"北京=央行/银保监总部；金融政策中心；中澳金融对话"}
        }
    },
];

// ---- City-Specific Picks ----
const CITY_PICKS = {
    chongqing: {
        icon: "🏙️", en: "Chongqing", zh: "重庆",
        subtitle: { en: "Inland ASEAN Gateway — Western Land-Sea Corridor", zh: "内陆东盟门户 — 西部陆海新通道" },
        desc: {
            en: "Chongqing is the strategic pivot of China's Western Land-Sea New Corridor (西部陆海新通道), connecting southwest China directly to ASEAN via rail-sea intermodal through Qinzhou Port. China-Europe Railway Express (中欧班列) adds European reach. Perfect for: manufacturers, auto/motorcycle exporters, and agricultural importers.",
            zh: "重庆是西部陆海新通道的战略枢纽，通过钦州港铁海联运直连东盟。中欧班列更延伸至欧洲。最适合：制造企业、汽车/摩托车出口商、农产品进口商。"
        },
        picks: [
            { rank:1, icon:"🏍️", en:"Motorcycles & Auto Parts", zh:"摩托车与汽车零部件", why:{en:"Chongqing is China's #1 motorcycle base (Loncin, Jialing, Lifan). ASEAN demand: Vietnam, Philippines, Thailand. HS 8711-8714. ChAFTA/ACFTA 0-5%.",zh:"重庆是中国第一大摩托车基地（隆鑫、嘉陵、力帆）。东盟需求：越南、菲律宾、泰国。HS 8711-8714。中澳/ACFTA 0-5%。"}, action:{en:"Export via Qinzhou rail-sea to Vietnam (3 days). ACFTA 0% tariff. Key buyers: Vietnamese dealers, Thai distributors.",zh:"经钦州铁海联运出口越南（3天）。ACFTA 0%关税。主要买家：越南经销商、泰商。"}},
            { rank:2, icon:"🚗", en:"EVs & New Energy Vehicles", zh:"新能源汽车", why:{en:"Chongqing (Changan, AITO, SERES) is CN's #2 NEV hub. BYD+Changan = 40% CN output. ASEAN+AU demand surging. HS 8703.",zh:"重庆（长安、问界、赛力斯）是中国第二新能源车枢纽。比亚迪+长安=中国40%产量。东盟+澳需求激增。HS 8703。"}, action:{en:"Changan Thai factory (Rayong) operational. CQ→ASEAN via land-sea corridor. RCEP 0% tariff. BYD Atto3 in AU top 5 EV.",zh:"长安泰国工厂（罗勇）已运营。重庆→东盟经陆海新通道。RCEP 0%关税。比亚迪Atto3在澳EV前5。"}},
            { rank:3, icon:"🌿", en:"Palm Oil & Rubber (Import)", zh:"棕榈油与橡胶（进口）", why:{en:"Major input for CQ food (hotpot base) & tire industries. Land-sea corridor cuts logistics 30%. HS 1511, 4001.",zh:"重庆食品（火锅底料）和轮胎产业重要原料。陆海新通道降低物流成本30%。HS 1511, 4001。"}, action:{en:"Import from Malaysia, Indonesia via Qinzhou. Liangjiang Bonded Zone for processing. 97% CN palm oil from ASEAN.",zh:"从马来西亚、印尼经钦州进口。两江新区保税区加工。中国97%棕榈油来自东盟。"}},
            { rank:4, icon:"🏗️", en:"Construction Materials", zh:"建筑材料", why:{en:"ASEAN BRI infrastructure boom. Chongqing steel, cement, glass competitive. HS 68-70.",zh:"东盟一带一路基建热潮。重庆钢材、水泥、玻璃有竞争力。HS 68-70。"}, action:{en:"Export to Indonesia, Philippines via Qinzhou. ACFTA 0% tariff. BRI project procurement.",zh:"经钦州出口印尼、菲律宾。ACFTA 0%关税。一带一路项目采购。"}},
            { rank:5, icon:"🍚", en:"Rice & Tropical Fruits (Import)", zh:"大米与热带水果（进口）", why:{en:"CQ consumes 10M+ tons grain/year. ASEAN fruits hugely popular. HS 1006, 0803-0810.",zh:"重庆年消费粮食1000万吨+。东盟水果极受欢迎。HS 1006, 0803-0810。"}, action:{en:"Import Thai jasmine rice, Vietnamese dragon fruit, Philippine banana. Cold-chain via land-sea corridor. ACFTA 0%.",zh:"进口泰国茉莉香米、越南火龙果、菲律宾香蕉。陆海新通道冷链运输。ACFTA 0%。"}},
            { rank:6, icon:"🤖", en:"General Machinery", zh:"通用机械设备", why:{en:"CQ machinery plants serve ASEAN factories. OEM capacity strong. HS 84. ACFTA 0-5%.",zh:"重庆机械厂服务东盟工厂。代工能力强大。HS 84。ACFTA 0-5%。"}, action:{en:"Export CNC, pumps, generators to ASEAN. RCEP rules of origin for CN-ASEAN co-production.",zh:"出口数控机床、泵、发电机至东盟。RCEP原产地规则支持中-东盟合作生产。"}},
        ]
    },
    shanghai: {
        icon: "🌆", en: "Shanghai", zh: "上海",
        subtitle: { en: "Financial & Shipping Super-Gateway", zh: "金融航运超级门户" },
        desc: {
            en: "Shanghai port is the world's busiest container port (47M+ TEU), handling 20%+ of China's foreign trade. Yangshan deep-water port receives mega iron ore & LNG carriers. Shanghai Gold Exchange is Asia's pricing hub. DCE iron ore futures = global benchmark. Perfect for: commodity traders, financial services, high-value imports.",
            zh: "上海港是全球最繁忙集装箱港（4700万+TEU），处理中国20%+外贸。洋山深水港接收超大型铁矿石和LNG船。上海金交所是亚洲定价中心。大商所铁矿石期货=全球基准。最适合：大宗商品贸易商、金融服务、高价值进出口。"
        },
        picks: [
            { rank:1, icon:"⛏️", en:"Iron Ore Trading", zh:"铁矿石贸易", why:{en:"Shanghai = China's iron ore pricing center (DCE futures). AU ore arrives at Yangshan. HS 2601. ChAFTA 0%.",zh:"上海=中国铁矿石定价中心（大商所期货）。澳矿抵洋山港。HS 2601。中澳自贸0%。"}, action:{en:"Trade DCE iron ore futures. Physical import via Yangshan. BHP/Rio Tinto long-term contracts. Price: ~$98/t (62% Fe).",zh:"交易大商所铁矿石期货。洋山港现货进口。必和必拓/力拓长约。价格：~$98/吨（62%品位）。"}},
            { rank:2, icon:"🛢️", en:"LNG & Energy Trading", zh:"LNG与能源贸易", why:{en:"Shanghai Petroleum & Gas Exchange = pricing hub. AU LNG contracts growing. HS 2711.11. ChAFTA 0%.",zh:"上海石油天然气交易中心=定价中心。澳LNG合约增长。HS 2711.11。中澳自贸0%。"}, action:{en:"Long-term contracts with Woodside, Santos. Shanghai INE crude futures hedging. Price: ~$15/MMBtu (JKM, Jul 6, down from $18.45 Jun).",zh:"与Woodside、Santos签长约。上海INE原油期货对冲。价格：~$15/MMBtu（JKM，7月6日，较6月$18.45回落）。"}},
            { rank:3, icon:"🪙", en:"Gold & Precious Metals", zh:"黄金与贵金属", why:{en:"Shanghai Gold Exchange = Asia benchmark (SHAU). AU gold #2 source for CN. HS 7108. ChAFTA 0%.",zh:"上海金交所=亚洲基准（SHAU）。澳金=中国第二来源。HS 7108。中澳自贸0%。"}, action:{en:"Trade SGE spot/futures. Import AU gold (Perth Mint). Price: ~$4,100/oz (Jul 11). PBOC reserve buying.",zh:"交易上金所现货/期货。进口澳金（珀斯铸币厂）。价格：~$4,100/盎司（7月11日）。央行储备购入。"}},
            { rank:4, icon:"🥩", en:"Premium Food & Beverage", zh:"高端食品饮料", why:{en:"Shanghai consumers pay premium for AU beef, wine, dairy, seafood. HS 0201-0202, 2204, 0402. ChAFTA 0%.",zh:"上海消费者愿为澳牛排、红酒、乳品、海鲜付溢价。HS 0201-0202, 2204, 0402。中澳自贸0%。"}, action:{en:"Import AU wagyu, Barossa wine, King Island dairy, rock lobster. FTZ warehousing. Penfolds, Blackmores distribution.",zh:"进口澳和牛、巴罗萨红酒、国王岛乳品、岩龙虾。自贸区仓储。奔富、Blackmores分销。"}},
            { rank:5, icon:"💰", en:"Financial & Fintech Services", zh:"金融与金融科技", why:{en:"Shanghai = China's Wall St. RMB clearing hub. AU-ASEAN-CN trade finance. RCEP financial services chapter.",zh:"上海=中国华尔街。人民币清算枢纽。澳-东盟-中贸易融资。RCEP金融服务章节。"}, action:{en:"Provide trade finance, FX hedging, cross-border RMB settlement. ANZ, HSBC Shanghai operations. RMB 50T+ settlement.",zh:"提供贸易融资、汇率对冲、跨境人民币结算。澳新、汇丰上海运营。人民币50万亿+结算。"}},
            { rank:6, icon:"🔌", en:"Electronics Components", zh:"电子元器件", why:{en:"Shanghai = semiconductor assembly hub (SMIC, Huali). ASEAN demand for chips. HS 8542. RCEP 0%.",zh:"上海=半导体封装中心（中芯国际、华力）。东盟芯片需求。HS 8542。RCEP 0%。"}, action:{en:"Export semiconductors to Vietnam/Malaysia assembly. RCEP rules of origin (cumulative value content). CN chip exports $200B+.",zh:"出口半导体至越南/马来西亚组装。RCEP原产地规则（累积价值成分）。中国芯片出口2000亿美元+。"}},
        ]
    },
    guangdong: {
        icon: "🏭", en: "Guangdong", zh: "广东",
        subtitle: { en: "The World's Factory — Export Engine to AU & ASEAN", zh: "世界工厂 — 对澳对东盟出口引擎" },
        desc: {
            en: "Guangdong exports USD 1T+ annually — more than most countries. Shenzhen (electronics), Dongguan (manufacturing), Foshan (ceramics/furniture), Guangzhou (trade fairs). Nansha Port ASEAN routes are fastest growing. Cross-border e-commerce (SHEIN, Temu) revolutionizes small-parcel trade. Perfect for: manufacturers, e-commerce exporters, consumer goods traders.",
            zh: "广东年出口超1万亿美元——超过多数国家。深圳（电子）、东莞（制造）、佛山（陶瓷/家具）、广州（展会）。南沙港东盟航线增长最快。跨境电商（SHEIN、Temu）革命性改变小包裹贸易。最适合：制造企业、电商出口商、消费品贸易商。"
        },
        picks: [
            { rank:1, icon:"💻", en:"Consumer Electronics", zh:"消费电子产品", why:{en:"Shenzhen = global electronics capital. 50%+ of CN electronics exports. HS 8517, 8471. RCEP 0%.",zh:"深圳=全球电子之都。中国50%+电子产品出口。HS 8517, 8471。RCEP 0%。"}, action:{en:"Export phones, laptops, smart devices to AU (JB Hi-Fi, Harvey Norman) & ASEAN. $800B+ CN electronics exports.",zh:"出口手机、笔记本、智能设备至澳（JB Hi-Fi、Harvey Norman）和东盟。中国8000亿美元+电子产品出口。"}},
            { rank:2, icon:"🚗", en:"EVs & Battery Systems", zh:"新能源车与电池系统", why:{en:"BYD (Shenzhen) = world's #1 NEV maker. CATL batteries. HS 8703, 8507. ChAFTA 5%; RCEP 0%.",zh:"比亚迪（深圳）=全球第一新能源车企。宁德时代电池。HS 8703, 8507。中澳5%；RCEP 0%。"}, action:{en:"BYD Atto3 = AU top 5 EV. BYD Thai factory (Rayong). BYD Seagull $12K price point. +120% AU sales growth.",zh:"比亚迪Atto3=澳EV前5。比亚迪泰工厂（罗勇）。海鸥$12K价位。澳销售+120%增长。"}},
            { rank:3, icon:"☀️", en:"Solar Panels & Equipment", zh:"光伏面板与设备", why:{en:"Guangdong = CN's #1 solar equipment exporter. AU rooftop solar #1 globally (35%+ homes). HS 8541.40. ChAFTA 0%.",zh:"广东=中国第一大光伏设备出口省。澳屋顶光伏全球第一（35%+家庭）。HS 8541.40。中澳0%。"}, action:{en:"Export panels, inverters (Sungrow), batteries to AU. 4M+ AU homes with solar. AU installed 3.5GW 2024.",zh:"出口面板、逆变器（阳光电源）、电池至澳。400万+澳家庭有光伏。澳2024年安装3.5GW。"}},
            { rank:4, icon:"👗", en:"Fashion & Textiles (E-commerce)", zh:"时尚与纺织品（电商）", why:{en:"SHEIN (Guangzhou) = fast fashion disruptor. Temu = CN cross-border e-commerce giant. HS 61-63. ChAFTA 0-5%.",zh:"SHEIN（广州）=快时尚颠覆者。Temu=中国跨境电商巨头。HS 61-63。中澳0-5%。"}, action:{en:"Cross-border e-commerce to AU/ASEAN. Small parcel under RCEP. SHEIN $30B+ revenue. AU fashion e-commerce +25%.",zh:"跨境电商出口至澳/东盟。RCEP小包裹通关。SHEIN 300亿美元+营收。澳时尚电商+25%。"}},
            { rank:5, icon:"🎒", en:"Furniture & Home Goods", zh:"家具与家居用品", why:{en:"Foshan = furniture capital of China. AU housing boom. HS 94. ChAFTA 0-5%.",zh:"佛山=中国家具之都。澳建房热潮。HS 94。中澳0-5%。"}, action:{en:"Export to AU furniture chains (Harvey Norman, Freedom). Lecong furniture market = world's largest. Direct Nansha shipping.",zh:"出口至澳家具连锁（Harvey Norman、Freedom）。乐从家具市场=全球最大。南沙港直航。"}},
            { rank:6, icon:"🔋", en:"Lithium Battery Products", zh:"锂电池产品", why:{en:"Guangdong = battery manufacturing hub. AU solar storage demand +50%/yr. HS 8507. ChAFTA 0%.",zh:"广东=电池制造中心。澳太阳能储能需求+50%/年。HS 8507。中澳0%。"}, action:{en:"Export home batteries, power banks to AU. BYD, EVE Energy, Sunwoda. AU home storage market AUD 5B+.",zh:"出口家用储能、移动电源至澳。比亚迪、亿纬锂能、沃特玛。澳家用储能市场50亿澳元+。"}},
        ]
    },
    beijing: {
        icon: "🏛️", en: "Beijing", zh: "北京",
        subtitle: { en: "Policy Brain & Services Trade Hub", zh: "政策大脑与服务贸易中心" },
        desc: {
            en: "Beijing sets the rules: ChAFTA upgrades, RCEP implementation, ASEAN digital trade agreements all originate here. Services trade with Australia (education, tourism, finance) is Beijing's strength. Policy intelligence gives Beijing traders first-mover advantage on tariff changes and new FTA chapters. Perfect for: services exporters, policy-driven traders, EdTech, FinTech.",
            zh: "北京定规则：中澳自贸升级、RCEP实施、东盟数字贸易协定均源于此。对澳服务贸易（教育、旅游、金融）是北京优势。政策情报让北京贸易商在关税变化和新自贸章节上占据先机。最适合：服务出口商、政策驱动型贸易商、教育科技、金融科技。"
        },
        picks: [
            { rank:1, icon:"🎓", en:"Education Services & EdTech", zh:"教育服务与教育科技", why:{en:"150K+ CN students in AU (AUD 15B). EdTech exports to ASEAN +30%/yr. ChAFTA education market access.",zh:"15万+中国留学生在澳（150亿澳元）。教育科技出口东盟+30%/年。中澳自贸教育市场准入。"}, action:{en:"Online education platforms to ASEAN (VIPKID, Yuanfudao). Student placement services to AU (Group of Eight).",zh:"在线教育平台出海东盟（VIPKID、猿辅导）。留学安置服务出口至澳（八大名校）。"}},
            { rank:2, icon:"✈️", en:"Tourism & Travel Services", zh:"旅游与旅行服务", why:{en:"AU-CHN tourism recovering. Beijing = top departure city for AU. 10-year multiple entry visa. AUD 12B from CN tourists.",zh:"中澳旅游恢复中。北京=赴澳旅游最大出发城市。10年多次入境签证。中国游客120亿澳元。"}, action:{en:"Package AU tourism (Great Barrier Reef, Uluru, Sydney Opera House). Ctrip/Fliggy booking platforms. Direct flights (11hr).",zh:"打包澳洲旅游（大堡礁、乌鲁鲁、悉尼歌剧院）。携程/飞猪预订平台。直飞（11小时）。"}},
            { rank:3, icon:"💊", en:"Health Supplements & TCM", zh:"保健品与中医药", why:{en:"AU market opening to TCM (TGA registration). CN health supplements demand in ASEAN. HS 3004, 2106.90.",zh:"澳市场向中医药开放（TGA注册）。东盟对中式保健品需求。HS 3004, 2106.90。"}, action:{en:"Export TCM to AU (TGA-registered: acupuncture, herbal). AU supplements (Blackmores, Swisse) → CN. +8% growth.",zh:"出口中药至澳（TGA注册：针灸、草药）。澳保健品（Blackmores、Swisse）→中。+8%增长。"}},
            { rank:4, icon:"🍷", en:"Wine & Premium Imports", zh:"葡萄酒与高端进口", why:{en:"Beijing consumers = highest per-capita AU wine spending. Anti-dumping duties removed Mar 2024! HS 2204. ChAFTA 0%.",zh:"北京消费者=人均澳酒消费最高。反倾销税2024年3月取消！HS 2204。中澳0%。"}, action:{en:"Import Penfolds, Jacob's Creek, Yellow Tail. Post-ban recovery: +200% AU wine to CN. Beijing = premium wine market.",zh:"进口奔富、杰卡斯、黄尾。禁令后恢复：+200%澳酒来华。北京=高端红酒市场。"}},
            { rank:5, icon:"📱", en:"Telecom & Digital Services", zh:"通信与数字服务", why:{en:"Beijing tech firms (Huawei, Baidu, ByteDance) expanding to ASEAN/AU. RCEP digital trade chapter. HS 8517.",zh:"北京科技企业（华为、百度、字节）扩张至东盟/澳。RCEP数字贸易章节。HS 8517。"}, action:{en:"5G infrastructure to ASEAN (Huawei #1 in TH, MY). Cloud services (Alibaba Cloud, Baidu AI). ByteDance (TikTok) in AU/ASEAN.",zh:"5G基础设施出口东盟（华为在泰、马第一）。云服务（阿里云、百度AI）。字节（TikTok）在澳/东盟。"}},
            { rank:6, icon:"💰", en:"Financial Services & Consulting", zh:"金融服务与咨询", why:{en:"Beijing = banking & policy HQ. AU-ASEAN-CN deal advisory. RMB internationalization. PBOC HQ.",zh:"北京=银行与政策总部。澳-东盟-中交易顾问。人民币国际化。央行总部。"}, action:{en:"M&A advisory, trade finance, RMB settlement. ICBC, BOC global operations. AU-China financial services dialogue.",zh:"并购顾问、贸易融资、人民币结算。工行、中行全球运营。中澳金融服务对话。"}},
        ]
    }
};

// ---- Key Events Feed ----
const KEY_EVENTS = [
    { date:"Jul 11, 2026", icon:"🪙", en:"Gold eases to ~$4,100/oz (+52% YTD vs ~$2,700 end-2025), pulling back from the $4,713 Jun peak on profit-taking. China SGE AU9999 ~¥900/g. Central banks still buying record volumes.", zh:"金价回落至~$4,100/盎司（YTD +52%，较2025年底约$2,700），自6月$4,713高点因获利了结回调。中国上金所AU9999约¥900/克。央行仍创纪录购金。", trend:"down" },
    { date:"Jul 8, 2026", icon:"🛢️", en:"EIA slashes 2026 Brent forecast to $82/bbl (from $95); WTI $76.26, 2027 Brent to $65. Spot Brent ~$70-74 early Jul after Iran ceasefire; China July fuel cut -¥950/t gasoline.", zh:"EIA将2026年Brent预测大幅下调至$82/桶（原$95）；WTI $76.26，2027年Brent降至$65。伊朗停火后现货Brent 7月初约$70-74；中国7月成品油调降汽油-¥950/吨。", trend:"down" },
    { date:"Jul 6, 2026", icon:"🛢️", en:"LNG JKM pulls back to ~$15/MMBtu — down from $18.45 in Jun and the $25 Apr peak as Iran ceasefire reopens Strait of Hormuz; Qatar+UAE exports recovering (Kpler +3.1Mt).", zh:"LNG JKM回落至约$15/MMBtu——较6月$18.45及4月$25高点回落，因伊朗停火重开霍尔木兹海峡；卡塔尔+阿联酋出口恢复（Kpler +310万吨）。", trend:"down" },
    { date:"Jun 18, 2026", icon:"🥩", en:"⚠️ AU beef quota (20.5Kt) exhausted — 100% filled by Jun 18, only 6 months into the year. +55% tariff effective Jun 20.", zh:"⚠️ 澳牛肉配额（20.5Kt）用尽——6月18日达到100%，仅半年用完。6月20日起加征55%关税。", trend:"down" },
    { date:"Jan-May 2026", icon:"🌏", en:"China-ASEAN trade +16.6% YoY (RMB 3.52T) — ASEAN remains CN's largest trading partner. Vietnam, Malaysia, Indonesia top 3.", zh:"中国-东盟贸易+16.6% YoY（3.52万亿元）——东盟保持中国最大贸易伙伴。越南、马来西亚、印尼前三。", trend:"up" },
    { date:"Q1 2026", icon:"🇦🇺", en:"AU posts first current account deficit since 2017 — A$27.1B deficit. First trade deficit in 8+ years (A$1.84B in Mar 2026).", zh:"澳出现2017年以来首次经常账户赤字——271亿澳元。8年来首次贸易逆差（2026年3月18.4亿澳元）。", trend:"down" },
    { date:"2026", icon:"🚗", en:"China vehicle exports: Jan-May 405.9万 units (+63% YoY); May NEV share hit record 54% of total exports. Full-year 2026 forecast: 10M+ vehicles (+70%).", zh:"中国汽车出口：前5月405.9万辆（+63% YoY）；5月新能源车占比创纪录达54%。2026全年预计：1000万辆+（+70%）。", trend:"up" },
    { date:"2026", icon:"☀️", en:"Solar panel prices crashed to $0.10-0.12/W — CN overcapacity driving global prices down 50%+ in 3 years.", zh:"光伏面板价格跌至$0.10-0.12/瓦——中国产能过剩推动全球价格3年内下降50%+。", trend:"down" },
    { date:"Jul 2026", icon:"⛏️", en:"DCE iron ore dips to ~¥737/t ($100/t) — steel demand remains weak. Property sector slowdown plus hot weather curbing construction activity.", zh:"大商所铁矿石降至~¥737/吨（$100/吨）——钢铁需求仍疲软。地产行业放缓叠加高温天气抑制施工活动。", trend:"stable" },
];

// ---- Price Data ----
const PRICES = [
    { icon:"⛏️", en:"Iron Ore (62% Fe)", zh:"铁矿石（62%品位）", price:"$98", change:"-6.3%", unit:"USD/ton (SEADEX $98.25 CFR Qingdao, Jun 30)", up:false },
    { icon:"🔥", en:"Thermal Coal (Newcastle)", zh:"动力煤（纽卡斯尔）", price:"$128", change:"-1.1%", unit:"USD/ton FOB (Jun 2026)", up:false },
    { icon:"🛢️", en:"LNG (JKM)", zh:"液化天然气（JKM）", price:"$15.00", change:"-19%", unit:"USD/MMBtu (Jul 6, Iran ceasefire; was $25 Apr peak)", up:false },
    { icon:"🥩", en:"Beef (FOB Aus)", zh:"牛肉（澳FOB）", price:"$7.20", change:"-40%", unit:"USD/kg (+55% tariff from Jun 20)", up:false },
    { icon:"🌿", en:"Crude Palm Oil", zh:"毛棕榈油", price:"$985", change:"-0.5%", unit:"USD/ton (Rotterdam, Jun 2026)", up:false },
    { icon:"🌳", en:"Rubber (TSR20)", zh:"橡胶（TSR20）", price:"$1.62", change:"+0.8%", unit:"USD/kg (SICOM, Jun 2026)", up:true },
    { icon:"🪙", en:"Gold (XAU)", zh:"黄金", price:"$4,101", change:"+52%", unit:"USD/oz (Jul 11, 2026; YTD)", up:true },
    { icon:"🔋", en:"Lithium Carbonate", zh:"碳酸锂", price:"$10,200", change:"-3.2%", unit:"USD/ton (CN ex-work, Jun 2026)", up:false },
    { icon:"🍷", en:"Wine (Avg FOB)", zh:"葡萄酒（均FOB）", price:"$4.85", change:"+0.6%", unit:"USD/L (AU export avg, 2026)", up:true },
    { icon:"☀️", en:"Solar Panel (Mono PERC)", zh:"光伏面板（单晶PERC）", price:"$0.12", change:"-5.1%", unit:"USD/W (FOB CN, Jun 2026)", up:false },
];

// ---- Policy Data ----
const POLICIES = [
    {
        name: "ChAFTA", full: "China-Australia Free Trade Agreement", fullZh: "中澳自由贸易协定",
        details: [
            {en:"Effective: Dec 2015. General review underway (2025-26)",zh:"生效：2015年12月。一般审查进行中（2025-26）"},
            {en:"Tariff: 0% on 95%+ of AU exports to CN (fully phased)",zh:"关税：95%+澳对华出口零关税（完全实施）"},
            {en:"Wine: Anti-dumping duties removed Mar 2024 (was 116-218%!) → 0% now",zh:"红酒：反倾销税2024年3月取消（曾为116-218%！）→ 现在0%"},
            {en:"⚠️ 55% additional tariff from Jun 20, 2026 (AU quota of 205Kt exhausted by Jun 18 — in just 6 months!); within-quota was 0-12%. 3-year safeguard 2026-2028",zh:"⚠️ 2026年6月20日起加征55%额外关税（澳20.5万吨配额6月18日用尽——仅半年！）；配额内为0-12%。3年保障措施2026-2028"},
            {en:"Lobster: Import ban lifted Dec 2024 → full trade resumed",zh:"龙虾：进口禁令2024年12月解除→全面恢复贸易"},
            {en:"Services: Education, tourism, financial market access improved",zh:"服务：教育、旅游、金融市场准入改善"},
            {en:"Investment: FIRB threshold $1.2B for CN private investors",zh:"投资：中国私企FIRB门槛12亿澳元"},
        ]
    },
    {
        name: "ACFTA 3.0", full: "ASEAN-China Free Trade Area (Version 3.0 signed Oct 2025)", fullZh: "中国-东盟自由贸易区（3.0版，2025年10月签署）",
        details: [
            {en:"Upgraded protocol signed at 47th ASEAN Summit (Malaysia, Oct 2025)",zh:"升级议定书在第47届东盟峰会签署（马来西亚，2025年10月）"},
            {en:"0% tariff on 90%+ goods between CN and ASEAN-6",zh:"中国与东盟6国90%+商品零关税"},
            {en:"NEW: Digital trade, e-commerce, supply chain connectivity chapters",zh:"新增：数字贸易、电商、供应链互联互通章节"},
            {en:"NEW: Green economy cooperation, MSME support",zh:"新增：绿色经济合作、中小企业支持"},
            {en:"Rules of Origin: 40% RVC; cumulation across ASEAN+CN",zh:"原产地规则：40%区域价值成分；东盟+中国累积"},
            {en:"CLMV (Cambodia, Laos, Myanmar, Vietnam): gradual phase-in",zh:"CLMV（柬老缅越）：逐步纳入"},
        ]
    },
    {
        name: "RCEP", full: "Regional Comprehensive Economic Partnership", fullZh: "区域全面经济伙伴关系协定",
        details: [
            {en:"Effective: Jan 2022. 15 nations: CN+JP+KR+AU+NZ+ASEAN10",zh:"生效：2022年1月。15国：中+日+韩+澳+新+东盟10国"},
            {en:"Covers 30% global GDP, 2.2B people",zh:"覆盖全球GDP 30%，22亿人口"},
            {en:"KEY: Cumulative Rules of Origin — parts from ANY RCEP nation count toward threshold",zh:"关键：原产地累积规则 — 任何RCEP成员国零部件均可计入门槛"},
            {en:"90% of goods → 0% tariff within 20 years",zh:"90%商品20年内降至零关税"},
            {en:"First-ever CN-JP-KR mutual tariff reduction agreement",zh:"首个中日韩相互减税协定"},
            {en:"Chapters: e-commerce, IP, competition, SMEs, government procurement",zh:"章节：电商、知识产权、竞争、中小企业、政府采购"},
        ]
    },
    {
        name: "AANZFTA-2", full: "ASEAN-Australia-New Zealand FTA (Upgraded)", fullZh: "东盟-澳大利亚-新西兰自贸协定（升级版）",
        details: [
            {en:"12 nations. AANZFTA-2 signed 2023, entering force 2024-25",zh:"12国。AANZFTA-2于2023年签署，2024-25年生效"},
            {en:"99% of AU goods → 0% tariff to ASEAN",zh:"99%澳商品→东盟零关税"},
            {en:"NEW chapters: digital trade, SMEs, customs & trade facilitation",zh:"新增章节：数字贸易、中小企业、海关与贸易便利化"},
            {en:"Services: improved market access for AU education, finance, legal",zh:"服务：澳教育、金融、法律服务市场准入改善"},
            {en:"Investment: MFN treatment, ISDS mechanisms",zh:"投资：最惠国待遇、投资争端解决机制"},
        ]
    },
    {
        name: "CPTPP", full: "Comprehensive & Progressive Trans-Pacific Partnership", fullZh: "全面与进步跨太平洋伙伴关系协定",
        details: [
            {en:"Members: AU+VN+MY+SG+BN+JP+CA+MX+PE+CL+NZ+UK (12 nations)",zh:"成员：澳+越+马+新+文+日+加+墨+秘+智+新+英（12国）"},
            {en:"CN applied to join (Sep 2021) — under consideration, political hurdles",zh:"中国已申请加入（2021年9月）— 审议中，存在政治障碍"},
            {en:"High-standard rules: IP, labor, environment, SOE disciplines",zh:"高标准规则：知识产权、劳工、环境、国企纪律"},
            {en:"AU dairy/agriculture benefited significantly from JP market access",zh:"澳乳品/农业从日本市场准入中显著受益"},
            {en:"If CN joins: would be transformative for AU-ASEAN-CN trade rules",zh:"若中国加入：将变革性影响澳-东盟-中贸易规则"},
        ]
    },
];

// ---- State ----
let currentLang = 'en';
let currentFilter = 'all';
let currentCity = 'chongqing';

// ---- Render Functions ----

function renderCommodities() {
    const grid = document.getElementById('commodityGrid');
    let filtered = currentFilter === 'all'
        ? COMMODITIES
        : COMMODITIES.filter(c => c.category === currentFilter);
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(c =>
            c.en.toLowerCase().includes(q) ||
            c.zh.includes(searchQuery) ||
            c.hsCode.includes(q) ||
            c.tag.toLowerCase().includes(q)
        );
    }
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">${currentLang==='en'?'No commodities match your search':'没有匹配的商品'}</div>`;
        return;
    }

    grid.innerHTML = filtered.map(c => `
        <div class="commodity-card" data-category="${c.category}" data-rank="${c.rank}" onclick="openDetail(${c.rank})">
            <div class="card-rank">${c.rank}</div>
            <div class="card-header">
                <span class="card-icon">${c.icon}</span>
                <div class="card-title">
                    ${currentLang === 'en' ? c.en : c.zh}
                    <span class="zh">${currentLang === 'en' ? c.zh : c.en}</span>
                </div>
            </div>
            <div class="card-meta">
                <span class="card-tag">${c.tag}</span>
                <span class="card-tag">HS ${c.hsCode}</span>
                ${c.trend === 'up' ? '<span class="card-tag" style="background:rgba(39,174,96,0.15);border-color:rgba(39,174,96,0.2);color:#27ae60">📈 ' + (currentLang==='en'?'Growing':'增长中') + '</span>' : c.trend==='stable' ? '<span class="card-tag" style="background:rgba(243,156,18,0.15);border-color:rgba(243,156,18,0.2);color:#f39c12">➡️ ' + (currentLang==='en'?'Stable':'平稳') + '</span>' : '<span class="card-tag" style="background:rgba(231,76,60,0.15);border-color:rgba(231,76,60,0.2);color:#e74c3c">📉 ' + (currentLang==='en'?'Declining':'下降') + '</span>'}
            </div>
            <div class="card-direction">${currentLang === 'en' ? c.direction.en : c.direction.zh}</div>
            <div class="card-value">💰 ${c.ausTradeValue}</div>
            <div class="card-extra" style="margin-top:0.5rem;font-size:0.75rem;color:var(--text-muted);line-height:1.5">
                <div>📊 ${currentLang==='en'?'YoY':'同比'}: ${c.yoyChange}</div>
                <div>🏷️ ${currentLang==='en'?'Tariff':'关税'}: ${currentLang==='en'?c.tariff.en:c.tariff.zh}</div>
            </div>
            <div class="card-click-hint">${currentLang==='en'?'Click for details →':'点击查看详情 →'}</div>
        </div>
    `).join('');
}

// ---- Detail Modal ----
function openDetail(rank) {
    const c = COMMODITIES.find(x => x.rank === rank);
    if (!c) return;
    const modal = document.getElementById('detailModal');
    const content = document.getElementById('detailContent');
    const L = currentLang;
    content.innerHTML = `
        <div class="modal-header-bar">
            <div class="modal-title-row">
                <span class="modal-icon">${c.icon}</span>
                <div>
                    <h2>${L==='en'?c.en:c.zh} <span class="modal-zh">${L==='en'?c.zh:c.en}</span></h2>
                    <div class="modal-tags">
                        <span class="card-tag">${c.tag}</span>
                        <span class="card-tag">HS ${c.hsCode}</span>
                        ${c.trend==='up'?'<span class="card-tag up-tag">📈 '+(L==='en'?'Growing':'增长中')+'</span>':c.trend==='stable'?'<span class="card-tag stable-tag">➡️ '+(L==='en'?'Stable':'平稳')+'</span>':'<span class="card-tag down-tag">📉 '+(L==='en'?'Declining':'下降')+'</span>'}
                    </div>
                </div>
            </div>
            <button class="modal-close" onclick="closeDetail()">✕</button>
        </div>
        <div class="modal-body-grid">
            <div class="modal-section">
                <h3>💰 ${L==='en'?'Trade Value':'贸易额'}</h3>
                <p>${c.ausTradeValue}</p>
            </div>
            <div class="modal-section">
                <h3>📊 ${L==='en'?'Import Volume / Detail':'进口量/详情'}</h3>
                <p>${c.cnImportVol}</p>
            </div>
            <div class="modal-section">
                <h3>🧭 ${L==='en'?'Trade Direction':'贸易流向'}</h3>
                <p>${L==='en'?c.direction.en:c.direction.zh}</p>
            </div>
            <div class="modal-section">
                <h3>🏷️ ${L==='en'?'Tariff':'关税'}</h3>
                <p>${L==='en'?c.tariff.en:c.tariff.zh}</p>
            </div>
            <div class="modal-section">
                <h3>📈 ${L==='en'?'Year-on-Year':'同比变化'}</h3>
                <p>${c.yoyChange}</p>
            </div>
            <div class="modal-section full-width">
                <h3>🏭 ${L==='en'?'Top Exporters':'主要出口商'}</h3>
                <div class="modal-companies">${c.topExporters.map(e=>'<span class="company-chip">'+(L==='en'?e.en:e.zh)+'</span>').join('')}</div>
            </div>
            <div class="modal-section full-width">
                <h3>🛒 ${L==='en'?'Top Importers':'主要进口商'}</h3>
                <div class="modal-companies">${c.topImporters.map(e=>'<span class="company-chip importer">'+(L==='en'?e.en:e.zh)+'</span>').join('')}</div>
            </div>
            <div class="modal-section full-width">
                <h3>📰 ${L==='en'?'Key Events':'关键事件'}</h3>
                <p class="modal-events">${L==='en'?c.keyEvents.en:c.keyEvents.zh}</p>
            </div>
            ${c.cities?`
            <div class="modal-section full-width">
                <h3>🏙️ ${L==='en'?'City Relevance':'城市关联'}</h3>
                <div class="modal-cities">
                    ${c.cities.map(city=>{
                        const cr = c.cityRelevance[city];
                        const cityNames = {chongqing:'🏙️ 重庆/Chongqing',shanghai:'🌆 上海/Shanghai',guangdong:'🏭 广东/Guangdong',beijing:'🏛️ 北京/Beijing'};
                        return cr ? '<div class="city-relevance-chip"><strong>'+cityNames[city]+'</strong><br>'+(L==='en'?cr.en:cr.zh)+'</div>' : '';
                    }).join('')}
                </div>
            </div>`:''}
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    document.getElementById('detailModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ---- Key Events Feed ----
function renderKeyEvents() {
    const grid = document.getElementById('keyEventsGrid');
    if (!grid) return;
    grid.innerHTML = KEY_EVENTS.map(e => `
        <div class="key-event-card ${e.trend}">
            <div class="ke-date">${e.date}</div>
            <div class="ke-icon">${e.icon}</div>
            <div class="ke-text">${currentLang==='en'?e.en:e.zh}</div>
            <div class="ke-trend">${e.trend==='up'?'📈':'📉'}</div>
        </div>
    `).join('');
}

function renderCityPicks() {
    const city = CITY_PICKS[currentCity];
    const content = document.getElementById('cityContent');
    content.innerHTML = `
        <div class="city-hero">
            <div class="city-hero-top">
                <div class="city-hero-icon">${city.icon}</div>
                <div class="city-hero-info">
                    <h3>${currentLang === 'en' ? city.en : city.zh}</h3>
                    <div class="city-subtitle">${currentLang === 'en' ? city.subtitle.en : city.subtitle.zh}</div>
                </div>
            </div>
            <div class="city-hero-desc">${currentLang === 'en' ? city.desc.en : city.desc.zh}</div>
        </div>
        <div class="city-picks-grid">
            ${city.picks.map(p => `
                <div class="city-pick-card">
                    <div class="cpc-header">
                        <span class="cpc-rank">${p.rank}</span>
                        <div class="cpc-title">
                            ${p.icon} ${currentLang === 'en' ? p.en : p.zh}
                            <span class="zh">${currentLang === 'en' ? p.zh : p.en}</span>
                        </div>
                    </div>
                    <div class="cpc-why">
                        <div class="cpc-why-label">💡 ${currentLang === 'en' ? 'Why this city?' : '为什么选这个城市？'}</div>
                        ${currentLang === 'en' ? p.why.en : p.why.zh}
                    </div>
                    <div class="cpc-action">
                        <strong>🚀 ${currentLang === 'en' ? 'Action:' : '行动建议：'}</strong><br>
                        ${currentLang === 'en' ? p.action.en : p.action.zh}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderPrices() {
    const grid = document.getElementById('priceGrid');
    grid.innerHTML = PRICES.map(p => `
        <div class="price-card">
            <div class="price-commodity">${p.icon}</div>
            <div class="price-name">${currentLang === 'en' ? p.en : p.zh}</div>
            <div class="price-value">${p.price}</div>
            <div class="price-change ${p.up ? 'up' : 'down'}">${p.up ? '▲' : '▼'} ${p.change}</div>
            <div class="price-unit">${p.unit}</div>
        </div>
    `).join('');
}

function renderPolicies() {
    const grid = document.getElementById('policyGrid');
    grid.innerHTML = POLICIES.map(p => `
        <div class="policy-card">
            <h4>${p.name} — ${p.fullZh}</h4>
            <div class="policy-full">${p.full}</div>
            <ul class="policy-detail">
                ${p.details.map(d => `<li>${currentLang === 'en' ? d.en : d.zh}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderTicker() {
    const items = PRICES.map(p =>
        `<span class="ticker-item">${p.icon} ${p.en} ${p.price} <span class="${p.up?'up':'down'}">${p.up?'▲':'▼'}${p.change}</span></span><span class="ticker-sep">|</span>`
    ).join('');
    document.getElementById('tickerContent').innerHTML = items + items;
}

// ---- Language Toggle ----
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
        el.textContent = currentLang === 'en' ? el.dataset.en : el.dataset.zh;
    });
    document.querySelector('.lang-label').textContent = currentLang === 'en' ? '中/EN' : 'EN/中';
    const si = document.getElementById('searchInput');
    if (si) si.placeholder = currentLang === 'en' ? 'Search commodity / HS code...' : '搜索商品/HS编码...';
    renderCommodities();
    renderCityPicks();
    renderPrices();
    renderPolicies();
    renderKeyEvents();
}

// ---- City Tabs ----
function setupCityTabs() {
    document.querySelectorAll('.city-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCity = tab.dataset.city;
            renderCityPicks();
        });
    });
}

// ---- Filters ----
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderCommodities();
        });
    });
}

// ---- Countdown ----
function updateCountdown() {
    const now = new Date();
    const bjNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const day = bjNow.getDay();
    let daysUntilSun = day === 0 ? (bjNow.getHours() < 10 || (bjNow.getHours() === 10 && bjNow.getMinutes() < 30) ? 0 : 7) : 7 - day;
    const next = new Date(bjNow);
    next.setDate(next.getDate() + daysUntilSun);
    next.setHours(10, 30, 0, 0);
    let diffMs = next - bjNow;
    if (diffMs < 0) { next.setDate(next.getDate() + 7); diffMs = next - bjNow; }
    const days = Math.floor(diffMs / 86400000);
    const hours = Math.floor((diffMs % 86400000) / 3600000);
    const mins = Math.floor((diffMs % 3600000) / 60000);
    const el = document.getElementById('nextUpdate');
    if (el) {
        el.innerHTML = `
            <p style="color:var(--text-muted);font-size:0.9rem">${currentLang==='en'?'Next update in:':'距离下次更新：'}</p>
            <div class="countdown">
                <div class="countdown-unit"><div class="num">${days}</div><div class="label">${currentLang==='en'?'days':'天'}</div></div>
                <div class="countdown-unit"><div class="num">${hours}</div><div class="label">${currentLang==='en'?'hrs':'时'}</div></div>
                <div class="countdown-unit"><div class="num">${mins}</div><div class="label">${currentLang==='en'?'min':'分'}</div></div>
            </div>
        `;
    }
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
    renderCommodities();
    renderCityPicks();
    renderPrices();
    renderPolicies();
    renderKeyEvents();
    renderTicker();
    setupFilters();
    setupCityTabs();
    updateCountdown();
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderCommodities();
        });
    }
    // Close modal on ESC or backdrop
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDetail();
    });
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeDetail();
        });
    }
    document.getElementById('lastUpdated').textContent = new Date().toISOString().split('T')[0];
    setInterval(updateCountdown, 60000);
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
