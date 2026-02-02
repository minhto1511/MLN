
export const MATTER_DEFINITION = {
  quote: "Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm giác.",
  author: "V.I. Lenin",
  tooltips: {
    "thực tại khách quan": "Tất cả những gì tồn tại bên ngoài, độc lập và không phụ thuộc vào ý thức của con người. Dù con người có nhận thức được hay chưa, nó vẫn tồn tại.",
    "phạm trù triết học": "Khái niệm khái quát nhất, phản ánh những thuộc tính cơ bản chung nhất của thế giới, khác với khái niệm trong các khoa học cụ thể.",
    "cảm giác": "Hình thức đầu tiên của nhận thức, là nguồn gốc của mọi hiểu biết. Vật chất tác động vào giác quan gây ra cảm giác.",
    "chép lại, chụp lại, phản ánh": "Nhấn mạnh khả năng nhận thức của con người. Ý thức chỉ là hình ảnh chủ quan của thế giới khách quan."
  }
};

export const FUNDAMENTAL_QUESTION = {
  question: "Vấn đề cơ bản của triết học là gì?",
  definition: "Mối quan hệ giữa tư duy và tồn tại (hay giữa ý thức và vật chất).",
  aspects: [
    {
      id: "ontology",
      name: "Mặt thứ nhất (Bản thể luận)",
      question: "Giữa ý thức và vật chất, cái nào có trước, cái nào quyết định cái nào?",
      schools: [
        { name: "Chủ nghĩa Duy vật", view: "Vật chất có trước, ý thức có sau. Vật chất quyết định ý thức.", representative: "Democritus, Feuerbach, Mác, Lênin" },
        { name: "Chủ nghĩa Duy tâm", view: "Ý thức/Tinh thần có trước, sản sinh ra thế giới vật chất.", representative: "Platon, Berkeley, Hegel" }
      ]
    },
    {
      id: "epistemology",
      name: "Mặt thứ hai (Nhận thức luận)",
      question: "Con người có khả năng nhận thức được thế giới hay không?",
      schools: [
        { name: "Thuyết Khả tri", view: "Con người CÓ THỂ nhận thức được thế giới." },
        { name: "Thuyết Bất khả tri", view: "Con người KHÔNG THỂ nhận thức được bản chất thực sự của thế giới (chỉ biết hiện tượng).", representative: "Hume, Kant" }
      ]
    }
  ]
};

export const METHODOLOGIES = {
  comparison: [
    { criteria: "Cách nhìn nhận", dialectics: "Liên hệ phổ biến, ràng buộc lẫn nhau", metaphysics: "Cô lập, tách rời" },
    { criteria: "Trạng thái vận động", dialectics: "Luôn vận động, biến đổi, có bước nhảy về chất", metaphysics: "Tĩnh tại, chỉ thay đổi lượng, không đổi chất" },
    { criteria: "Nguồn gốc phát triển", dialectics: "Bên trong (đấu tranh các mặt đối lập)", metaphysics: "Bên ngoài (cú hích của Thượng đế)" },
    { criteria: "Kết quả nhận thức", dialectics: "Thấy cả cây và rừng trong sự sinh thành", metaphysics: "Thấy cây mà không thấy rừng" }
  ]
};

export const DIALECTIC_RELATIONSHIP = {
  materialismCorrectsConsciousness: [
    { title: "Nguồn gốc", desc: "Ý thức có nguồn gốc từ vật chất (bộ óc người + thế giới khách quan)." },
    { title: "Nội dung", desc: "Ý thức phản ánh hiện thực khách quan." },
    { title: "Bản chất", desc: "Ý thức là hình ảnh chủ quan của thế giới khách quan." },
    { title: "Quyết định", desc: "Vật chất quyết định sự ra đời, tồn tại và phát triển của ý thức." }
  ],
  consciousnessImpactsMaterialism: [
    { type: "positive", title: "Tích cực", desc: "Thúc đẩy vật chất phát triển khi phản ánh đúng quy luật khách quan (khoa học, cách mạng)." },
    { type: "negative", title: "Tiêu cực", desc: "Kìm hãm sự phát triển khi phản ánh sai lệch, xuyên tạc thực tế (mê tín, duy ý chí)." }
  ]
};

export const UNIVERSAL_CONNECTIONS = {
  nodes: [
    { id: "root", label: "Mối liên hệ phổ biến", type: "core" },
    { id: "nature", label: "Tự nhiên", type: "domain" },
    { id: "society", label: "Xã hội", type: "domain" },
    { id: "thinking", label: "Tư duy", type: "domain" },
    { id: "objective", label: "Tính khách quan", type: "property" },
    { id: "universal", label: "Tính phổ biến", type: "property" },
    { id: "diverse", label: "Tính đa dạng", type: "property" }
  ],
  links: [
    { source: "root", target: "nature" },
    { source: "root", target: "society" },
    { source: "root", target: "thinking" },
    { source: "root", target: "objective" },
    { source: "root", target: "universal" },
    { source: "root", target: "diverse" }
  ],
  details: {
    objective: "Mối liên hệ là vốn có của sự vật, hiện tượng, không phụ thuộc vào ý muốn chủ quan của con người.",
    universal: "Mối liên hệ tồn tại trong mọi lĩnh vực (Tự nhiên, Xã hội, Tư duy). Không có sự vật nào tồn tại cô lập tuyệt đối.",
    diverse: "Mối liên hệ biểu hiện thiên hình vạn trạng tùy thuộc vào điều kiện cụ thể (không gian, thời gian, mối quan hệ cụ thể)."
  }
};

export const CATEGORIES_HEXAGON = [
  {
    id: "rieng-chung",
    pair: "Cái riêng - Cái chung",
    definition: "Cái riêng là phạm trù chỉ một sự vật, một hiện tượng nhất định. Cái chung là phạm trù chỉ những mặt, những thuộc tính lặp lại trong nhiều sự vật, hiện tượng.",
    relationship: "Cái chung chỉ tồn tại trong Cái riêng. Cái riêng chỉ tồn tại trong mối liên hệ với Cái chung.",
    methodology: "Muốn tìm cái chung phải xuất phát từ cái riêng. Áp dụng cái chung phải tính đến đặc điểm của cái riêng."
  },
  {
    id: "nguyen-ket",
    pair: "Nguyên nhân - Kết quả",
    definition: "Nguyên nhân là sự tác động lẫn nhau gây ra biến đổi. Kết quả là những biến đổi xuất hiện do nguyên nhân tạo ra.",
    relationship: "Nguyên nhân sinh ra kết quả. Một nguyên nhân có thể sinh ra nhiều kết quả và ngược lại.",
    methodology: "Phải tìm nguyên nhân trong thế giới khách quan để giải thích hiện tượng. Cần phân loại nguyên nhân để có biện pháp tác động phù hợp."
  },
  {
    id: "tat-ngau",
    pair: "Tất nhiên - Ngẫu nhiên",
    definition: "Tất nhiên là cái do nguyên nhân cơ bản bên trong sự vật quy định, nhất định phải xảy ra như thế. Ngẫu nhiên là cái do nguyên nhân bên ngoài, có thể xảy ra hoặc không.",
    relationship: "Tất nhiên vạch đường đi cho mình thông qua vô số ngẫu nhiên. Ngẫu nhiên là hình thức biểu hiện của tất nhiên.",
    methodology: "Trong hoạt động thực tiễn phải dựa vào cái tất nhiên, nhưng không được bỏ qua cái ngẫu nhiên."
  },
  {
    id: "noi-hinh",
    pair: "Nội dung - Hình thức",
    definition: "Nội dung là tổng hợp tất cả những mặt, những yếu tố tạo nên sự vật. Hình thức là phương thức tồn tại và phát triển của sự vật, là hệ thống các mối liên hệ giữa các yếu tố của sự vật.",
    relationship: "Nội dung quyết định hình thức. Hình thức có tính độc lập tương đối và tác động trở lại nội dung.",
    methodology: "Phải căn cứ vào nội dung để thay đổi hình thức. Cần linh hoạt sử dụng nhiều hình thức cho cùng một nội dung."
  },
  {
    id: "ban-hien",
    pair: "Bản chất - Hiện tượng",
    definition: "Bản chất là tổng hợp những mặt, những mối liên hệ tất nhiên tương đối ổn định bên trong sự vật. Hiện tượng là sự biểu hiện ra bên ngoài của bản chất.",
    relationship: "Bản chất bộc lộ qua hiện tượng. Hiện tượng phản ánh bản chất (nhưng có thể xuyên tạc).",
    methodology: "Muốn hiểu sự vật phải đi sâu vào bản chất, không dừng lại ở hiện tượng. Phải thông qua nhiều hiện tượng để tìm bản chất."
  },
  {
    id: "kha-hien",
    pair: "Khả năng - Hiện thực",
    definition: "Hiện thực là những gì đang có, đang tồn tại. Khả năng là những gì chưa có, nhưng sẽ tới, sẽ thành hiện thực khi có điều kiện thích hợp.",
    relationship: "Khả năng và hiện thực chuyển hóa lẫn nhau trong quá trình phát triển.",
    methodology: "Phải dựa vào hiện thực. Cần tạo điều kiện để khả năng tốt biến thành hiện thực, ngăn chặn khả năng xấu."
  }
];

export const DIALECTIC_LAWS = [
  {
    id: "luong-chat",
    name: "Quy luật Lượng - Chất",
    fullName: "Quy luật chuyển hóa từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại",
    concepts: [
      { term: "Chất", desc: "Tính quy định khách quan vốn có, làm cho sự vật là nó chứ không phải cái khác." },
      { term: "Lượng", desc: "Tính quy định khách quan về mặt số lượng, quy mô, trình độ." },
      { term: "Độ", desc: "Khoảng giới hạn mà lượng đổi nhưng chất chưa đổi." },
      { term: "Điểm nút", desc: "Thời điểm mà lượng tích lũy đủ để phá vỡ độ cũ." },
      { term: "Bước nhảy", desc: "Quá trình biến đổi về chất của sự vật." }
    ],
    mechanism: "Lượng đổi từ từ đến điểm nút -> Thực hiện bước nhảy -> Chất mới ra đời -> Chất mới quy định lượng mới.",
  },
  {
    id: "mau-thuan",
    name: "Quy luật Mâu thuẫn",
    fullName: "Quy luật thống nhất và đấu tranh của các mặt đối lập",
    concepts: [
      { term: "Mặt đối lập", desc: "Những mặt có khuynh hướng biến đổi trái ngược nhau." },
      { term: "Thống nhất", desc: "Các mặt đối lập nương tựa vào nhau, làm tiền đề cho nhau tồn tại." },
      { term: "Đấu tranh", desc: "Sự tác động qua lại theo hướng bài trừ, phủ định lẫn nhau." }
    ],
    mechanism: "Mâu thuẫn là nguồn gốc, động lực của sự phát triển. Thống nhất là tương đối, đấu tranh là tuyệt đối.",
  },
  {
    id: "phu-dinh",
    name: "Quy luật Phủ định của phủ định",
    fullName: "Quy luật phủ định của phủ định",
    concepts: [
      { term: "Phủ định biện chứng", desc: "Sự thay thế cái cũ bằng cái mới, tự thân và kế thừa." },
      { term: "Kế thừa", desc: "Giữ lại hạt nhân hợp lý của cái cũ." }
    ],
    visualConfig: "Spiral", 
    mechanism: "Sự phát triển diễn ra theo đường xoắn ốc: Cái khẳng định -> Cái phủ định -> Cái phủ định của phủ định (quay về cái đầu nhưng cao hơn).",
  }
];

export const COGNITION_PROCESS = [
  {
    stage: "Trực quan sinh động",
    subtitle: "Nhận thức cảm tính",
    steps: [
      { name: "Cảm giác", desc: "Phản ánh thuộc tính riêng lẻ bên ngoài." },
      { name: "Tri giác", desc: "Hình ảnh trọn vẹn về sự vật." },
      { name: "Biểu tượng", desc: "Hình ảnh lưu giữ và tái hiện trong óc." }
    ]
  },
  {
    stage: "Tư duy trừu tượng",
    subtitle: "Nhận thức lý tính",
    steps: [
      { name: "Khái niệm", desc: "Phản ánh bản chất, thuộc tính chung." },
      { name: "Phán đoán", desc: "Liên kết khái niệm để khẳng định/phủ định." },
      { name: "Suy luận", desc: "Rút ra tri thức mới từ phán đoán đã biết." }
    ]
  },
  {
    stage: "Thực tiễn",
    subtitle: "Mục đích & Tiêu chuẩn của chân lý",
    desc: "Nhận thức quay về phục vụ thực tiễn và được thực tiễn kiểm nghiệm."
  }
];

export const HISTORICAL_MATERIALISM = {
  stack: {
    superstructure: {
      name: "Kiến trúc thượng tầng",
      items: ["Nhà nước", "Pháp luật", "Đảng phái", "Triết học", "Tôn giáo", "Nghệ thuật"],
      desc: "Toàn bộ hệ thống quan điểm tư tưởng xã hội và các thiết chế tương ứng."
    },
    base: {
      name: "Cơ sở hạ tầng",
      items: ["Quan hệ sở hữu", "Quan hệ tổ chức quản lý", "Quan hệ phân phối"],
      desc: "Toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội."
    }
  },
  timeline: [
    { name: "Cộng sản nguyên thủy", color: "bg-stone-500", desc: "Sở hữu chung. Chưa có giai cấp." },
    { name: "Chiếm hữu nô lệ", color: "bg-yellow-700", desc: "Chủ nô - Nô lệ. Sở hữu tư nhân tuyệt đối." },
    { name: "Phong kiến", color: "bg-emerald-800", desc: "Địa chủ - Nông dân. Địa tô." },
    { name: "Tư bản chủ nghĩa", color: "bg-blue-900", desc: "Tư sản - Vô sản. Giá trị thặng dư." },
    { name: "Cộng sản chủ nghĩa", color: "bg-red-700", desc: "Công hữu. Không còn giai cấp." }
  ],
  social_political_concepts: [
    {
      id: "class",
      title: "Giai cấp & Đấu tranh giai cấp",
      content: "Giai cấp là những tập đoàn người khác nhau về địa vị trong hệ thống sản xuất (chủ yếu là sở hữu TLSX). Đấu tranh giai cấp là động lực trực tiếp của lịch sử trong xã hội có đối kháng."
    },
    {
      id: "nation",
      title: "Dân tộc",
      content: "Hình thức cộng đồng người ổn định (chung lãnh thổ, kinh tế, ngôn ngữ, tâm lý). Ở VN: 'Giải phóng dân tộc là tiền đề giải phóng giai cấp'."
    },
    {
      id: "state",
      title: "Nhà nước",
      content: "Bộ máy bạo lực của giai cấp thống trị. Chức năng: Thống trị chính trị & Quản lý xã hội. Xu hướng: Tự tiêu vong khi đến CNCS."
    },
    {
      id: "social_consciousness",
      title: "Tồn tại XH & Ý thức XH",
      content: "Tồn tại XH quyết định Ý thức XH. Ý thức XH thường lạc hậu hơn nhưng có thể vượt trước và tác động ngược lại (tích cực/tiêu cực)."
    }
  ]
};

export const HUMAN_VIETNAM = {
  human: {
    definition: "Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội.",
    role: "Quần chúng nhân dân là người sáng tạo chân chính ra lịch sử, không phải cá nhân anh hùng."
  },
  vietnam_application: [
    { area: "Kinh tế", content: "Phát triển kinh tế thị trường định hướng XHCN. Chấp nhận nhiều thành phần kinh tế phù hợp quy luật QHSX phù hợp LLSX." },
    { area: "Chính trị", content: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của dân, do dân, vì dân gắn với đổi mới hệ thống chính trị." },
    { area: "Văn hóa", content: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc. Con người vừa là mục tiêu, vừa là động lực." },
    { area: "Phương pháp", content: "Dĩ bất biến ứng vạn biến. Kết hợp nguyên tắc cứng rắn với sách lược mềm dẻo." }
  ]
};
