export const experienceLabelsByLocale = {
  eng: {
    project: 'Project',
    projectDescription: 'Project Description',
    responsibilities: 'Responsibilities',
  },
  kor: {
    project: '프로젝트',
    projectDescription: '프로젝트 설명',
    responsibilities: '담당 업무',
  },
  vie: {
    project: 'Dự án',
    projectDescription: 'Mô tả dự án',
    responsibilities: 'Trách nhiệm',
  },
}

export const experienceByLocale = {
  eng: [
    {
      id: 'grg-banking',
      period: '02/2023 — Present',
      role: 'FullStack .Net Developer',
      company: 'GRG Banking',
      projects: [
        {
          id: 'tpbank-livebank',
          title: 'TPBank LiveBank',
          description:
            'An automated 24/7 banking model that allows customers to perform most banking transactions without visiting a traditional bank branch or counter. Project used VTM, H68, CDM, S005 machine for develop financial services.',
          responsibilities:
            'Developed business workflows in maintenance mode, investigated and resolved software issues in the production environment, optimized system functionalities, and provided operational support.',
        },
        {
          id: 'ai-teller-klb',
          title: 'AI Teller KLB (KienLongBank)',
          description:
            'Next-generation STM machines integrated with AI-powered virtual tellers to enable touchless transactions, utilizing Speech-to-Text (STT), ASR, and NLP technologies. Demonstrated digital banking transformation solutions at the Government Office.',
          responsibilities:
            "Set up the software infrastructure for STM machines, tested AI Teller business workflows, and optimized input prompts to improve the machine's response accuracy and interaction quality.",
        },
        {
          id: 'stm-bab',
          title: 'Smart Teller Machine BAB (BacABank)',
          description:
            'Digitized in-branch banking operations using all-in-one STM machines, enabling instant card issuance and convenient cash deposit, withdrawal, and other banking transactions directly at the machine.',
          responsibilities:
            'Lead partner Team (FPT Information System) to develop transaction flows such as: Deposit to Own Account/Other Account, Print Statement, Reissue Card, Reissue PIN and fix bug production.',
        },
        {
          id: 'smartbanking-vietabank',
          title: 'SmartBanking VietABank',
          description:
            'Digitized traditional counter transactions into 24/7 STM self-service transactions with a modern, visually appealing, and user-friendly interface.',
          responsibilities:
            'Develop several business flows such as Deposit, Withdrawal, Transfer by QRCode, Open Saving Account, Register Loan, Register Issue card.',
        },
        {
          id: 'mdigi-msb',
          title: 'M.Digi Bank (MSB)',
          description:
            'A 24/7 automated banking model designed to accelerate digital transformation strategies. The system integrates STM technology with digital banking platforms to deliver convenient and seamless banking services.',
          responsibilities:
            'Prepared technical documentation for new developers, developed system modules, and fixed application defects.',
        },
      ],
    },
    {
      id: 'ntq-solution',
      period: '12/2021 — 10/2022',
      role: 'Junior Developer',
      company: 'NTQ Solution',
      projects: [
        {
          id: 'gmm-renaissance',
          title: 'GMM Renaissance',
          description:
            'A web application that allows users to register for sports clubs such as swimming and gym.',
          responsibilities:
            'Supported system maintenance including checking code logic, daily CPU usage, and reporting.',
        },
        {
          id: 'fds-fund-document',
          title: 'FDS — Fund Document System',
          description:
            'A system that helps customers prepare investment trust documents more efficiently.',
          responsibilities:
            'Prepared technical documentation for new developers, developed system modules, and fixed application defects.',
        },
      ],
    },
  ],

  kor: [
    {
      id: 'grg-banking',
      period: '2023.02 — 현재',
      role: 'FullStack .NET 개발자',
      company: 'GRG Banking',
      projects: [
        {
          id: 'tpbank-livebank',
          title: 'TPBank LiveBank',
          description:
            '고객이 영업점·창구 방문 없이 대부분의 은행 거래를 수행할 수 있는 24/7 자동화 뱅킹 모델입니다. VTM, H68, CDM, S005 기기를 활용해 금융 서비스를 개발했습니다.',
          responsibilities:
            '유지보수 모드에서 비즈니스 워크플로를 개발하고, 운영 환경의 소프트웨어 이슈를 조사·해결하며, 시스템 기능을 최적화하고 운영 지원을 제공했습니다.',
        },
        {
          id: 'ai-teller-klb',
          title: 'AI Teller KLB (KienLongBank)',
          description:
            'AI 가상 텔러가 통합된 차세대 STM으로 비접촉 거래를 지원하며, STT, ASR, NLP 기술을 활용합니다. 정부 기관에서 디지털 뱅킹 전환 솔루션을 시연했습니다.',
          responsibilities:
            'STM 소프트웨어 인프라를 구축하고, AI Teller 업무 흐름을 테스트하며, 입력 프롬프트를 최적화해 응답 정확도와 상호작용 품질을 개선했습니다.',
        },
        {
          id: 'stm-bab',
          title: 'Smart Teller Machine BAB (BacABank)',
          description:
            '올인원 STM으로 지점 뱅킹을 디지털화하고, 즉시 카드 발급 및 입출금 등 거래를 기기에서 직접 처리할 수 있게 했습니다.',
          responsibilities:
            '파트너 팀(FPT Information System)을 이끌며 본인/타인 계좌 입금, 거래내역 출력, 카드·PIN 재발급 등 거래 흐름을 개발하고 운영 버그를 수정했습니다.',
        },
        {
          id: 'smartbanking-vietabank',
          title: 'SmartBanking VietABank',
          description:
            '창구 거래를 24/7 STM 셀프서비스로 전환하고, 현대적이고 사용하기 쉬운 UI를 제공합니다.',
          responsibilities:
            '입금, 출금, QR 이체, 적금 개설, 대출·카드 발급 신청 등 여러 업무 흐름을 개발했습니다.',
        },
        {
          id: 'mdigi-msb',
          title: 'M.Digi Bank (MSB)',
          description:
            '디지털 전환을 가속하는 24/7 자동화 뱅킹 모델로, STM과 디지털 뱅킹 플랫폼을 통합해 편리한 서비스를 제공합니다.',
          responsibilities:
            '신규 개발자용 기술 문서를 작성하고, 시스템 모듈을 개발하며 애플리케이션 결함을 수정했습니다.',
        },
      ],
    },
    {
      id: 'ntq-solution',
      period: '2021.12 — 2022.10',
      role: '주니어 개발자',
      company: 'NTQ Solution',
      projects: [
        {
          id: 'gmm-renaissance',
          title: 'GMM Renaissance',
          description:
            '수영, 헬스 등 스포츠 클럽에 등록할 수 있는 웹 애플리케이션입니다.',
          responsibilities:
            '코드 로직 점검, 일일 CPU 사용량 확인, 보고 등 시스템 유지보수를 지원했습니다.',
        },
        {
          id: 'fds-fund-document',
          title: 'FDS — Fund Document System',
          description:
            '고객이 투자 신탁 문서를 더 효율적으로 준비할 수 있도록 돕는 시스템입니다.',
          responsibilities:
            '신규 개발자용 기술 문서를 작성하고, 시스템 모듈을 개발하며 애플리케이션 결함을 수정했습니다.',
        },
      ],
    },
  ],

  vie: [
    {
      id: 'grg-banking',
      period: '02/2023 — Hiện tại',
      role: 'Lập trình viên FullStack .Net',
      company: 'GRG Banking',
      projects: [
        {
          id: 'tpbank-livebank',
          title: 'TPBank LiveBank',
          description:
            'Mô hình ngân hàng tự động 24/7 giúp khách hàng thực hiện hầu hết giao dịch mà không cần đến quầy giao dịch. Dự án sử dụng máy VTM, H68, CDM, S005 để phát triển dịch vụ tài chính.',
          responsibilities:
            'Phát triển quy trình nghiệp vụ ở chế độ bảo trì, điều tra và xử lý lỗi phần mềm trên môi trường production, tối ưu chức năng hệ thống và hỗ trợ vận hành.',
        },
        {
          id: 'ai-teller-klb',
          title: 'AI Teller KLB (KienLongBank)',
          description:
            'STM thế hệ mới tích hợp giao dịch viên ảo AI, hỗ trợ giao dịch không chạm với STT, ASR và NLP. Trình diễn giải pháp chuyển đổi số ngân hàng tại Văn phòng Chính phủ.',
          responsibilities:
            'Thiết lập hạ tầng phần mềm cho STM, kiểm thử quy trình AI Teller và tối ưu prompt để cải thiện độ chính xác phản hồi và chất lượng tương tác.',
        },
        {
          id: 'stm-bab',
          title: 'Smart Teller Machine BAB (BacABank)',
          description:
            'Số hóa giao dịch tại quầy bằng STM tích hợp, hỗ trợ phát hành thẻ tức thì và nộp/rút tiền cùng các giao dịch ngân hàng trực tiếp trên máy.',
          responsibilities:
            'Dẫn dắt đội đối tác (FPT Information System) phát triển luồng: Nộp vào tài khoản của mình/khác, In sao kê, Cấp lại thẻ, Cấp lại PIN và sửa lỗi production.',
        },
        {
          id: 'smartbanking-vietabank',
          title: 'SmartBanking VietABank',
          description:
            'Chuyển giao dịch quầy truyền thống sang STM tự phục vụ 24/7 với giao diện hiện đại, trực quan và thân thiện.',
          responsibilities:
            'Phát triển các luồng nghiệp vụ: Nộp tiền, Rút tiền, Chuyển khoản QR, Mở sổ tiết kiệm, Đăng ký vay, Đăng ký phát hành thẻ.',
        },
        {
          id: 'mdigi-msb',
          title: 'M.Digi Bank (MSB)',
          description:
            'Mô hình ngân hàng tự động 24/7 thúc đẩy chuyển đổi số, tích hợp STM với nền tảng ngân hàng số để mang lại dịch vụ liền mạch.',
          responsibilities:
            'Soạn tài liệu kỹ thuật cho developer mới, phát triển module hệ thống và sửa lỗi ứng dụng.',
        },
      ],
    },
    {
      id: 'ntq-solution',
      period: '12/2021 — 10/2022',
      role: 'Lập trình viên Junior',
      company: 'NTQ Solution',
      projects: [
        {
          id: 'gmm-renaissance',
          title: 'GMM Renaissance',
          description:
            'Ứng dụng web cho phép người dùng đăng ký các câu lạc thể thể thao như bơi lội, gym.',
          responsibilities:
            'Hỗ trợ bảo trì hệ thống: kiểm tra logic code, theo dõi CPU hàng ngày và báo cáo.',
        },
        {
          id: 'fds-fund-document',
          title: 'FDS — Fund Document System',
          description:
            'Hệ thống giúp khách hàng chuẩn bị tài liệu ủy thác đầu tư hiệu quả hơn.',
          responsibilities:
            'Soạn tài liệu kỹ thuật cho developer mới, phát triển module hệ thống và sửa lỗi ứng dụng.',
        },
      ],
    },
  ],
}
