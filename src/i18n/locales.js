import {
  experienceByLocale,
  experienceLabelsByLocale,
} from './experienceContent.js'
import {
  skillsByLocale,
  educationByLocale,
  skillsEducationLabelsByLocale,
} from './skillsContent.js'

/** Locale: eng (mặc định) · kor · vie */
export const defaultLocale = 'eng'

export const localeOptions = [
  { code: 'eng', label: 'ENG', flag: '🇺🇸', htmlLang: 'en' },
  { code: 'kor', label: 'KOR', flag: '🇰🇷', htmlLang: 'ko' },
  { code: 'vie', label: 'VIE', flag: '🇻🇳', htmlLang: 'vi' },
]

const sharedSocialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/VincentRokka',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/loctran412/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_agnis.412/',
    icon: 'instagram',
  },
]

export const messages = {
  eng: {
    ui: {
      language: 'Language',
      navAriaLabel: 'Main navigation',
      technologiesAriaLabel: 'Technologies',
      themeToggleToDay: 'Switch to day mode',
      themeToggleToNight: 'Switch to night mode',
    },
    profile: {
      name: 'Rokka',
      title: 'Fullstack .Net Developer',
      tagline:
        'Building and maintaining business-oriented software with C# .NET.',
      avatar: '/images/profile.png',
      avatarAlt: 'Rokka — profile photo',
    },
    navItems: [
      { id: 'summary', label: 'Summary' },
      { id: 'skills', label: 'Skills, Education' },
      { id: 'experience', label: 'Experience' },
    ],
    socialLinks: sharedSocialLinks,
    sections: {
      summary: 'Summary',
      summaryHeading: 'SUMMARY',
      experience: 'Experience',
      skills: 'Skills',
    },
    empty: {
      experience: 'Experience content will be added soon.',
      skills: 'Skills content will be added soon.',
    },
    summaryParagraphs: [
      `I'm Fullstack .NET Developer with 4 years of experience in building and maintaining software applications using C# .NET technologies. Good understanding of <span class="hl">business-oriented software design</span>. Experienced in project deployment and team coordination with 2 years of hands-on project management experience.`,
      `Currently highly fascinated by <span class="hl">Applied AI</span>, passionate about learning <span class="hl">new languages and technologies</span>. I'm recognized as a collaborative and approachable team member who actively supports colleagues and partners in both small and large-scale projects.`,
    ],
    experienceItems: experienceByLocale.eng,
    experienceLabels: experienceLabelsByLocale.eng,
    skillsItems: skillsByLocale.eng,
    skillsEducationLabels: skillsEducationLabelsByLocale.eng,
    education: educationByLocale.eng,
  },

  kor: {
    ui: {
      language: '언어',
      navAriaLabel: '주요 탐색',
      technologiesAriaLabel: '기술 스택',
      themeToggleToDay: '주간 모드로 전환',
      themeToggleToNight: '야간 모드로 전환',
    },
    profile: {
      name: 'Rokka',
      title: '풀스택 .NET 개발자',
      tagline: 'C# 및 .NET으로 비즈니스 중심 소프트웨어를 구축하고 유지합니다.',
      avatar: '/images/profile.png',
      avatarAlt: 'Rokka — 프로필 사진',
    },
    navItems: [
      { id: 'summary', label: '요약' },
      { id: 'skills', label: '기술, 학력' },
      { id: 'experience', label: '경력' },
    ],
    socialLinks: sharedSocialLinks,
    sections: {
      summary: '요약',
      summaryHeading: '텍스트 요약',
      experience: '경력',
      skills: '기술',
    },
    empty: {
      experience: '경력 내용이 곧 추가됩니다.',
      skills: '기술 내용이 곧 추가됩니다.',
    },
    summaryParagraphs: [
      `C# 및 .NET 기술을 사용해 소프트웨어 애플리케이션을 구축·유지해 온 4년 경력의 풀스택 .NET 개발자입니다. <span class="hl">비즈니스 중심 소프트웨어 설계</span>에 대한 이해가 있습니다. 2년간의 실무 프로젝트 관리 경험을 바탕으로 배포와 팀 조율에도 익숙합니다.`,
      `현재 <span class="hl">응용 AI</span>에 깊은 관심을 가지고 있으며, <span class="hl">새로운 언어와 기술</span>을 배우는 데 열정적입니다. 소규모부터 대규모 프로젝트까지 동료와 파트너를 적극 지원하는 협업적이고 다가가기 쉬운 팀원으로 인정받고 있습니다.`,
    ],
    experienceItems: experienceByLocale.kor,
    experienceLabels: experienceLabelsByLocale.kor,
    skillsItems: skillsByLocale.kor,
    skillsEducationLabels: skillsEducationLabelsByLocale.kor,
    education: educationByLocale.kor,
  },

  vie: {
    ui: {
      language: 'Ngôn ngữ',
      navAriaLabel: 'Điều hướng chính',
      technologiesAriaLabel: 'Công nghệ',
      themeToggleToDay: 'Chuyển chế độ ban ngày',
      themeToggleToNight: 'Chuyển chế độ ban đêm',
    },
    profile: {
      name: 'Rokka',
      title: 'Lập trình viên Fullstack .Net',
      tagline:
        'Xây dựng và duy trì phần mềm hướng nghiệp vụ với C# và .NET.',
      avatar: '/images/profile.png',
      avatarAlt: 'Rokka — ảnh đại diện',
    },
    navItems: [
      { id: 'summary', label: 'Tóm tắt' },
      { id: 'skills', label: 'Kỹ năng, Học vấn' },
      { id: 'experience', label: 'Kinh nghiệm' },
    ],
    socialLinks: sharedSocialLinks,
    sections: {
      summary: 'Tóm tắt',
      summaryHeading: 'Tóm tắt',
      experience: 'Kinh nghiệm',
      skills: 'Kỹ năng',
    },
    empty: {
      experience: 'Nội dung Kinh nghiệm sẽ được thêm sau.',
      skills: 'Nội dung Kỹ năng sẽ được thêm sau.',
    },
    summaryParagraphs: [
      `Tôi là Lập trình viên Fullstack .NET với 4 năm kinh nghiệm xây dựng và duy trì ứng dụng phần mềm bằng C# và .NET. Hiểu rõ <span class="hl">thiết kế phần mềm hướng nghiệp vụ</span>. Có kinh nghiệm triển khai dự án và điều phối nhóm với 2 năm quản lý dự án thực tế.`,
      `Hiện rất quan tâm đến <span class="hl">AI ứng dụng</span>, đam mê học <span class="hl">ngôn ngữ và công nghệ mới</span>. Được đồng nghiệp đánh giá là thành viên hợp tác, dễ gần, hỗ trợ tích cực trong các dự án nhỏ và lớn.`,
    ],
    experienceItems: experienceByLocale.vie,
    experienceLabels: experienceLabelsByLocale.vie,
    skillsItems: skillsByLocale.vie,
    skillsEducationLabels: skillsEducationLabelsByLocale.vie,
    education: educationByLocale.vie,
  },
}

// Giữ export tương thích nếu cần import trực tiếp
export const profile = messages.eng.profile
export const navItems = messages.eng.navItems
export const socialLinks = messages.eng.socialLinks
export const summaryParagraphs = messages.eng.summaryParagraphs
export const experienceItems = messages.eng.experienceItems
export const skillsItems = messages.eng.skillsItems
