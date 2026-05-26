export const skillsEducationLabelsByLocale = {
  eng: { skills: 'Skills', education: 'Education' },
  kor: { skills: '기술', education: '학력' },
  vie: { skills: 'Kỹ năng', education: 'Học vấn' },
}

/** Education — một mục, cùng page với Skills */
export const educationByLocale = {
  eng: {
    degree: 'Bachelor of Software Engineering',
    school: 'Ha Noi University Of Industry',
    period: '8/2019 - 11/2022',
    highlights: [
      'Graduated <span class="hl">1 year Earlier</span>',
      'GPA: 3.27/4.0',
    ],
  },
  kor: {
    degree: '소프트웨어 공학 학사',
    school: '하노이 산업대학교',
    period: '8/2019 - 11/2022',
    highlights: ['<span class="hl">1년 조기</span> 졸업', 'GPA: 3.27/4.0'],
  },
  vie: {
    degree: 'Cử nhân Kỹ thuật Phần mềm',
    school: 'Đại học Công nghiệp Hà Nội',
    period: '8/2019 - 11/2022',
    highlights: ['Tốt nghiệp sớm <span class="hl">1 năm</span>', 'GPA: 3.27/4.0'],
  },
}

/** Skills — nội dung theo locale */
export const skillsByLocale = {
  eng: [
    {
      id: 'programming-languages',
      category: 'Programming Languages',
      value:
        'C# .NET, Javascript, TypeScript, HTML, CSS, Tailwind',
    },
    {
      id: 'frameworks',
      category: 'Frameworks',
      value:
        'ASP.NET Core, ASP.NET MVC, Entity Framework, RESTful APIs, LINQ, VueJS, Vite',
    },
    {
      id: 'database',
      category: 'Database Management System',
      value: 'SQL, Oracle, PostgreSQL',
    },
    {
      id: 'version-control',
      category: 'Version Control',
      value: 'Git, SVN',
    },
    {
      id: 'foreign-languages',
      category: 'Foreign Languages',
      value:
        'TOPIK3, HSK4. Can read documents and communicate completely in English (3 YOE working for a global company).',
    },
    {
      id: 'soft-skills',
      category: 'Soft Skills',
      value:
        'Business communication, Customer consulting, Time management, Teamwork',
    },
    {
      id: 'others',
      category: 'Others',
      value:
        'Good understanding of OOP, SOLID, Microservices. Experienced with Postman, Docker',
    },
  ],

  kor: [
    {
      id: 'programming-languages',
      category: '프로그래밍 언어',
      value: 'C# .NET, Javascript, TypeScript, HTML, CSS, Tailwind',
    },
    {
      id: 'frameworks',
      category: '프레임워크',
      value:
        'ASP.NET Core, ASP.NET MVC, Entity Framework, RESTful APIs, LINQ, VueJS, Vite',
    },
    {
      id: 'database',
      category: '데이터베이스',
      value: 'SQL, Oracle, PostgreSQL',
    },
    {
      id: 'version-control',
      category: '버전 관리',
      value: 'Git, SVN',
    },
    {
      id: 'foreign-languages',
      category: '외국어',
      value:
        'TOPIK3, HSK4. 영문 문서 열람 및 영어로 완전한 의사소통 가능 (글로벌 기업 3년 경력).',
    },
    {
      id: 'soft-skills',
      category: '소프트 스킬',
      value: '비즈니스 커뮤니케이션, 고객 상담, 시간 관리, 팀워크',
    },
    {
      id: 'others',
      category: '기타',
      value:
        'OOP, SOLID, 마이크로서비스에 대한 이해. Postman, Docker 사용 경험',
    },
  ],

  vie: [
    {
      id: 'programming-languages',
      category: 'Ngôn ngữ lập trình',
      value: 'C# .NET, Javascript, TypeScript, HTML, CSS, Tailwind',
    },
    {
      id: 'frameworks',
      category: 'Framework',
      value:
        'ASP.NET Core, ASP.NET MVC, Entity Framework, RESTful APIs, LINQ, VueJS, Vite',
    },
    {
      id: 'database',
      category: 'Hệ quản trị cơ sở dữ liệu',
      value: 'SQL, Oracle, PostgreSQL',
    },
    {
      id: 'version-control',
      category: 'Quản lý phiên bản',
      value: 'Git, SVN',
    },
    {
      id: 'foreign-languages',
      category: 'Ngoại ngữ',
      value:
        'TOPIK3, HSK4. Đọc tài liệu và giao tiếp hoàn toàn bằng tiếng Anh (3 năm làm việc tại công ty toàn cầu).',
    },
    {
      id: 'soft-skills',
      category: 'Kỹ năng mềm',
      value:
        'Giao tiếp kinh doanh, Tư vấn khách hàng, Quản lý thời gian, Làm việc nhóm',
    },
    {
      id: 'others',
      category: 'Khác',
      value:
        'Hiểu tốt OOP, SOLID, Microservices. Có kinh nghiệm Postman, Docker',
    },
  ],
}
