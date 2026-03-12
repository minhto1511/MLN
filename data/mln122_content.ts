// ==============================================================
// MLN 122 — KINH TẾ CHÍNH TRỊ MÁC-LÊNIN
// Giáo trình dành cho bậc đại học hệ không chuyên
// NXB Chính trị Quốc gia Sự thật
// ==============================================================

// ────────────────────────────────────────────────────────────────
// CHƯƠNG 1: ĐỐI TƯỢNG, PHƯƠNG PHÁP NGHIÊN CỨU VÀ CHỨC NĂNG
//           CỦA KINH TẾ CHÍNH TRỊ MÁC - LÊNIN
// ────────────────────────────────────────────────────────────────
export const CHAPTER_1_INTRO = {
  title: "Đối tượng, phương pháp nghiên cứu và chức năng của KTCT Mác-Lênin",

  /** Lịch sử hình thành qua các trường phái */
  history: [
    { period: "Thế kỷ XV–XVII", school: "Chủ nghĩa Trọng thương", idea: "Nguồn gốc của cải trong thương mại, trao đổi; lợi nhuận từ mua rẻ bán đắt." },
    { period: "Thế kỷ XVIII", school: "Chủ nghĩa Trọng nông", idea: "Nông nghiệp là nguồn gốc duy nhất của của cải; khái niệm 'sản phẩm ròng'." },
    { period: "Cuối TK XVII – giữa TK XIX", school: "Kinh tế chính trị cổ điển Anh", idea: "A. Smith & D. Ricardo: Lao động là nguồn gốc giá trị; quy luật 'bàn tay vô hình'." },
    { period: "Giữa TK XIX", school: "Kinh tế chính trị Mác-Lênin", idea: "Mác kế thừa & phát triển: phát hiện quy luật giá trị thặng dư, sứ mệnh lịch sử GCCN." },
  ],

  /** Đối tượng nghiên cứu */
  subject: "Quan hệ xã hội của sản xuất và trao đổi, xem xét trong mối liên hệ biện chứng với trình độ phát triển của lực lượng sản xuất và kiến trúc thượng tầng tương ứng của phương thức sản xuất nhất định.",

  /** Phương pháp nghiên cứu */
  methods: [
    "Phép biện chứng duy vật",
    "Trừu tượng hóa khoa học",
    "Lô-gíc kết hợp lịch sử",
    "Phân tích và tổng hợp",
    "Quy nạp và diễn dịch",
    "Thống kê & mô hình hóa",
  ],

  /** 4 chức năng */
  functions: [
    { name: "Chức năng nhận thức", desc: "Cung cấp tri thức khoa học về các quy luật kinh tế và sự vận động của các hiện tượng kinh tế trong xã hội." },
    { name: "Chức năng tư tưởng", desc: "Góp phần hình thành thế giới quan khoa học, tư duy biện chứng và lập trường giai cấp công nhân." },
    { name: "Chức năng thực tiễn", desc: "Định hướng và cung cấp cơ sở lý luận cho việc giải quyết các vấn đề kinh tế - xã hội, góp phần cải tạo thực tiễn." },
    { name: "Chức năng phương pháp luận", desc: "Cung cấp phương pháp luận nền tảng cho các khoa học kinh tế chuyên ngành khác." },
  ],
};

// ────────────────────────────────────────────────────────────────
// CHƯƠNG 2: HÀNG HÓA, THỊ TRƯỜNG VÀ VAI TRÒ CỦA CÁC CHỦ THỂ
//           THAM GIA THỊ TRƯỜNG
// ────────────────────────────────────────────────────────────────
export const CHAPTER_2_COMMODITY = {
  title: "Hàng hóa, thị trường và vai trò của các chủ thể tham gia thị trường",

  /** Điều kiện ra đời sản xuất hàng hóa */
  productionConditions: [
    "Phân công lao động xã hội — chuyên môn hóa sản xuất",
    "Sự tách biệt tương đối về kinh tế giữa các chủ thể sản xuất (sở hữu tư nhân về tư liệu sản xuất)",
  ],

  /** 2 thuộc tính hàng hóa */
  commodityAttributes: [
    { name: "Giá trị sử dụng (GTSD)", desc: "Công dụng của vật phẩm, khả năng thỏa mãn một nhu cầu nào đó (vật chất hoặc tinh thần) của con người. Chỉ được thực hiện trong tiêu dùng." },
    { name: "Giá trị (GT)", desc: "Lao động xã hội cần thiết kết tinh trong hàng hóa. Biểu hiện bên ngoài là giá trị trao đổi — tỷ lệ về lượng mà các GTSD khác loại trao đổi với nhau." },
  ],

  /** Lượng giá trị hàng hóa */
  valueQuantity: "Được đo bằng thời gian lao động xã hội cần thiết — thời gian cần để sản xuất ra hàng hóa trong điều kiện SX trung bình của xã hội (công cụ TB, trình độ TB, cường độ lao động TB).",

  /** Tiền tệ */
  money: {
    definition: "Hàng hóa đặc biệt được tách ra từ thế giới hàng hóa, đóng vai trò vật ngang giá chung thống nhất.",
    functions: [
      "Thước đo giá trị",
      "Phương tiện lưu thông",
      "Phương tiện cất trữ",
      "Phương tiện thanh toán",
      "Tiền tệ thế giới",
    ],
  },

  /** Các chủ thể tham gia thị trường */
  marketParticipants: [
    { role: "Người sản xuất", desc: "Cung cấp hàng hóa & dịch vụ, quyết định cung." },
    { role: "Người tiêu dùng", desc: "Tạo cầu, định hướng sản xuất thông qua tiêu dùng." },
    { role: "Chủ thể trung gian", desc: "Cầu nối giữa SX và tiêu dùng, thúc đẩy lưu thông." },
    { role: "Nhà nước", desc: "Quản lý, điều tiết thị trường; khắc phục khuyết tật thị trường." },
  ],

  /** Quy luật kinh tế cơ bản */
  economicLaws: [
    "Quy luật giá trị — hàng hóa trao đổi theo lượng lao động XH cần thiết",
    "Quy luật cung – cầu — giá cả xoay quanh giá trị theo cung cầu",
    "Quy luật cạnh tranh — thúc đẩy tiến bộ, đào thải lạc hậu",
    "Quy luật lưu thông tiền tệ — lượng tiền cần thiết cho lưu thông",
  ],
};

// ────────────────────────────────────────────────────────────────
// CHƯƠNG 3: GIÁ TRỊ THẶNG DƯ TRONG NỀN KINH TẾ THỊ TRƯỜNG
// ────────────────────────────────────────────────────────────────
export const CHAPTER_3_SURPLUS = {
  title: "Giá trị thặng dư trong nền kinh tế thị trường",

  /** Công thức chung của tư bản */
  capitalFormula: {
    simple: "H – T – H  (Hàng → Tiền → Hàng — mục đích: giá trị sử dụng)",
    capital: "T – H – T' (Tiền → Hàng → Tiền' — mục đích: giá trị, T' > T)",
    explanation: "T' = T + ΔT, trong đó ΔT là giá trị thặng dư (m). Nguồn gốc giá trị thặng dư nằm trong quá trình sản xuất, do sức lao động tạo ra.",
  },

  /** Hai bộ phận tư bản */
  capitalParts: [
    { name: "Tư bản bất biến (c)", desc: "Bộ phận tư bản tồn tại dưới hình thức tư liệu sản xuất; giá trị được bảo tồn và chuyển vào sản phẩm mới, không tạo ra giá trị thặng dư." },
    { name: "Tư bản khả biến (v)", desc: "Bộ phận tư bản dùng để mua sức lao động; qua quá trình SX, công nhân tạo ra giá trị mới lớn hơn giá trị sức lao động → tạo ra giá trị thặng dư." },
  ],

  /** Phương pháp sản xuất GTTD */
  surplusMethods: [
    { name: "GTTD tuyệt đối", desc: "Kéo dài ngày lao động hoặc tăng cường độ lao động trong khi thời gian lao động cần thiết không đổi." },
    { name: "GTTD tương đối", desc: "Rút ngắn thời gian lao động cần thiết (bằng cách tăng năng suất lao động xã hội) → tăng thời gian lao động thặng dư." },
  ],

  /** Tích lũy tư bản */
  accumulation: {
    definition: "Biến một phần giá trị thặng dư thành tư bản phụ thêm để mở rộng quy mô sản xuất — tái sản xuất mở rộng.",
    factors: [
      "Tỷ suất giá trị thặng dư",
      "Năng suất lao động xã hội",
      "Chênh lệch giữa tư bản sử dụng và tư bản tiêu dùng",
      "Quy mô tư bản ứng trước",
    ],
    consequences: [
      "Tăng cấu tạo hữu cơ tư bản (c/v tăng)",
      "Tích tụ & tập trung tư bản",
      "Bần cùng hóa tương đối giai cấp công nhân",
    ],
  },

  /** Các hình thức biểu hiện GTTD */
  surplusForms: [
    { name: "Lợi nhuận (p)", desc: "Hình thức biểu hiện của GTTD, là chênh lệch giữa giá bán và chi phí sản xuất (c + v). Che giấu bản chất bóc lột." },
    { name: "Lợi tức (z)", desc: "Một phần lợi nhuận bình quân mà người đi vay phải trả cho người cho vay vì đã sử dụng khoản tư bản nhàn rỗi." },
    { name: "Địa tô (R)", desc: "Phần giá trị thặng dư còn lại sau khi trừ lợi nhuận bình quân, do nhà tư bản kinh doanh nông nghiệp nộp cho địa chủ." },
  ],
};

// ────────────────────────────────────────────────────────────────
// CHƯƠNG 4: CẠNH TRANH VÀ ĐỘC QUYỀN TRONG NỀN KTTT
// ────────────────────────────────────────────────────────────────
export const CHAPTER_4_MONOPOLY = {
  title: "Cạnh tranh và độc quyền trong nền kinh tế thị trường",

  /** Quá trình hình thành độc quyền */
  formation: "Cạnh tranh tự do → tích tụ & tập trung tư bản → hình thành các tổ chức độc quyền. Cuối TK XIX – đầu TK XX, CNTB tự do cạnh tranh chuyển sang CNTB độc quyền.",

  /** Các hình thức tổ chức độc quyền */
  monopolyForms: [
    { name: "Các-ten (Cartel)", desc: "Liên minh thỏa thuận về giá cả, thị trường tiêu thụ; các thành viên vẫn độc lập về SX và thương mại." },
    { name: "Xanh-đi-ca (Syndicate)", desc: "Thống nhất việc mua nguyên liệu và tiêu thụ sản phẩm; SX vẫn độc lập." },
    { name: "Tơ-rớt (Trust)", desc: "Thống nhất cả SX lẫn tiêu thụ; các thành viên trở thành cổ đông." },
    { name: "Công-xoóc-xi-om / Con-gơ-lô-mê-rát", desc: "Liên kết đa ngành, đa lĩnh vực; hình thức cao nhất của độc quyền." },
  ],

  /** 5 đặc điểm kinh tế của CNĐQ (theo Lênin) */
  leninFeatures: [
    "Tập trung SX & TB → các tổ chức độc quyền chi phối kinh tế",
    "Tư bản ngân hàng + tư bản công nghiệp → tư bản tài chính & đầu sỏ tài chính",
    "Xuất khẩu tư bản trở nên đặc biệt quan trọng bên cạnh xuất khẩu hàng hóa",
    "Các liên minh độc quyền quốc tế phân chia thị trường thế giới",
    "Các cường quốc TB hoàn thành phân chia lãnh thổ thế giới",
  ],

  /** Độc quyền nhà nước */
  stateMonopoly: {
    definition: "Sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của nhà nước tư sản thành một cơ chế thống nhất nhằm bảo vệ lợi ích của giai cấp tư sản độc quyền.",
    causes: [
      "Tích tụ, tập trung SX đòi hỏi điều tiết vĩ mô",
      "Phân công lao động XH phát triển → cần đầu tư lớn",
      "Mâu thuẫn XH gay gắt → nhà nước phải can thiệp",
      "Quốc tế hóa đời sống kinh tế",
    ],
  },

  /** Vai trò lịch sử & giới hạn CNTB */
  historicalRole: {
    positive: [
      "Thúc đẩy phát triển LLSX vượt bậc",
      "Xã hội hóa SX ở trình độ cao",
      "Tạo ra năng suất lao động cao chưa từng có",
      "Phát triển KH-CN và chuyển giao công nghệ",
    ],
    limitations: [
      "Mâu thuẫn giữa tính XH của SX và chiếm hữu tư nhân TBCN",
      "Phân hóa giàu nghèo ngày càng sâu sắc",
      "Khủng hoảng kinh tế có tính chu kỳ",
      "Phá hủy môi trường vì lợi nhuận",
    ],
  },
};

// ────────────────────────────────────────────────────────────────
// CHƯƠNG 5: KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN VÀ QUAN HỆ
//           LỢI ÍCH KINH TẾ Ở VIỆT NAM
// ────────────────────────────────────────────────────────────────
export const CHAPTER_5_SOCIALIST_MARKET = {
  title: "Kinh tế thị trường định hướng XHCN và quan hệ lợi ích kinh tế ở Việt Nam",

  /** Tính tất yếu phát triển KTTT ĐHXHCN ở VN */
  necessity: "Phát triển kinh tế thị trường là tất yếu khách quan trong thời kỳ quá độ lên CNXH ở Việt Nam, vì KTTT có khả năng thúc đẩy phát triển LLSX, huy động mọi nguồn lực, và là phương thức điều tiết kinh tế hiệu quả.",

  /** 5 đặc trưng */
  features: [
    "Nền kinh tế hiện đại, hội nhập quốc tế, vận hành theo các quy luật KTTT",
    "Có nhiều hình thức sở hữu, nhiều thành phần kinh tế; kinh tế nhà nước giữ vai trò chủ đạo",
    "Phân phối chủ yếu theo kết quả lao động, hiệu quả kinh tế, đóng góp vốn và các nguồn lực khác",
    "Nhà nước quản lý, điều tiết bằng pháp luật, chiến lược, kế hoạch, chính sách",
    "Đảng Cộng sản Việt Nam lãnh đạo, nhằm mục tiêu 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh'",
  ],

  /** Hoàn thiện thể chế */
  institutionImprovement: [
    "Hoàn thiện thể chế về sở hữu & phát triển các thành phần kinh tế",
    "Phát triển đồng bộ các yếu tố thị trường & các loại thị trường",
    "Đổi mới & nâng cao hiệu quả quản lý kinh tế của Nhà nước",
    "Đẩy mạnh hội nhập kinh tế quốc tế sâu rộng",
  ],

  /** Quan hệ lợi ích kinh tế */
  economicInterests: {
    definition: "Lợi ích kinh tế phản ánh mục đích, động cơ của các quan hệ kinh tế giữa các chủ thể tham gia hoạt động kinh tế.",
    types: [
      "Lợi ích cá nhân (người lao động, người sử dụng lao động)",
      "Lợi ích nhóm (doanh nghiệp, ngành, hiệp hội)",
      "Lợi ích xã hội (quốc gia, cộng đồng)",
    ],
    stateRole: "Nhà nước bảo đảm hài hòa các lợi ích kinh tế: bảo vệ lợi ích hợp pháp, phân phối lại thu nhập, an sinh xã hội, thu hẹp khoảng cách giàu nghèo.",
  },
};

// ────────────────────────────────────────────────────────────────
// CHƯƠNG 6: CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA VÀ HỘI NHẬP
//           KINH TẾ QUỐC TẾ CỦA VIỆT NAM
// ────────────────────────────────────────────────────────────────
export const CHAPTER_6_INDUSTRIALIZATION = {
  title: "Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam",

  /** Các cuộc CMCN */
  industrialRevolutions: [
    { era: "CMCN lần 1 (cuối TK XVIII)", desc: "Máy hơi nước, cơ khí hóa → từ thủ công sang công xưởng." },
    { era: "CMCN lần 2 (cuối TK XIX)", desc: "Điện khí hóa, dây chuyền SX → sản xuất hàng loạt." },
    { era: "CMCN lần 3 (giữa TK XX)", desc: "Tự động hóa, điện tử, máy tính, Internet." },
    { era: "CMCN lần 4 (đầu TK XXI)", desc: "AI, IoT, Big Data, Blockchain, in 3D → kết nối vạn vật, kinh tế số." },
  ],

  /** CNH-HĐH ở Việt Nam */
  vietnamIndustrialization: {
    definition: "Quá trình chuyển đổi căn bản, toàn diện các hoạt động SX kinh doanh, dịch vụ và quản lý KT-XH từ sử dụng lao động thủ công là chính sang sử dụng phổ biến sức lao động với CN, PTKT và PP tiên tiến, hiện đại.",
    necessity: [
      "Xây dựng cơ sở vật chất – kỹ thuật cho CNXH",
      "Phát triển lực lượng sản xuất, tăng năng suất lao động",
      "Tăng cường tiềm lực quốc phòng – an ninh",
      "Nâng cao đời sống vật chất, tinh thần của nhân dân",
    ],
    content: [
      "Tạo lập những điều kiện để chuyển đổi từ nền SX-XH lạc hậu sang nền SX-XH tiến bộ",
      "Thực hiện các nhiệm vụ CNH-HĐH gắn với phát triển kinh tế tri thức",
      "CNH-HĐH nông nghiệp, nông thôn",
      "Phát triển nguồn nhân lực, đặc biệt nguồn nhân lực chất lượng cao",
    ],
  },

  /** Hội nhập KTQT */
  internationalIntegration: {
    definition: "Quá trình gắn kết nền kinh tế quốc gia với nền kinh tế khu vực và thế giới thông qua chia sẻ nguồn lực, tuân thủ các luật chơi chung trong các tổ chức quốc tế (WTO, ASEAN, CPTPP, RCEP...).",
    impacts: {
      positive: [
        "Mở rộng thị trường xuất khẩu, thu hút FDI & chuyển giao CN",
        "Nâng cao năng lực cạnh tranh quốc gia",
        "Tạo động lực cải cách thể chế kinh tế",
        "Tạo cơ hội việc làm, nâng cao thu nhập",
      ],
      negative: [
        "Gia tăng cạnh tranh → doanh nghiệp yếu bị đào thải",
        "Nguy cơ phụ thuộc kinh tế vào bên ngoài",
        "Ảnh hưởng đến chủ quyền kinh tế nếu không chủ động",
        "Phân hóa giàu nghèo và bất bình đẳng xã hội",
      ],
    },
    directions: [
      "Nhận thức đầy đủ về hội nhập, xây dựng chiến lược phù hợp",
      "Hoàn thiện thể chế kinh tế & pháp luật phù hợp cam kết quốc tế",
      "Nâng cao năng lực cạnh tranh của nền kinh tế, DN và sản phẩm",
      "Xây dựng nền kinh tế độc lập, tự chủ",
    ],
  },
};
