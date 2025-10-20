// Tipos de Acessibilidade
export type DisabilityType = 
  | 'visual' 
  | 'auditiva' 
  | 'motora' 
  | 'cognitiva' 
  | 'neurodivergente' 
  | 'multipla' 
  | 'nenhuma';

export type CommunicationPreference = 
  | 'texto' 
  | 'voz' 
  | 'libras' 
  | 'leitura_facil' 
  | 'audio_descricao';

export type LearningStyle = 
  | 'visual' 
  | 'auditivo' 
  | 'cinestesico' 
  | 'leitura_escrita';

export interface AccessibilityProfile {
  id: string;
  userId: string;
  disabilityTypes: DisabilityType[];
  communicationPreferences: CommunicationPreference[];
  learningStyle: LearningStyle;
  preferences: {
    highContrast: boolean;
    fontSize: 'small' | 'medium' | 'large' | 'extra-large';
    reducedMotion: boolean;
    screenReader: boolean;
    keyboardOnly: boolean;
    audioDescription: boolean;
    captions: boolean;
    signLanguage: boolean;
  };
  assistiveTechnologies: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de Usuário
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  cpf?: string;
  birthDate?: Date;
  role: 'candidate' | 'company' | 'mentor' | 'admin';
  profileImage?: string;
  accessibilityProfile?: AccessibilityProfile;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de Perfil Profissional
export interface ProfessionalProfile {
  id: string;
  userId: string;
  summary: string;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  interests: string[];
  availability: 'immediate' | 'two_weeks' | 'one_month' | 'negotiable';
  workPreferences: {
    remote: boolean;
    hybrid: boolean;
    onsite: boolean;
    partTime: boolean;
    fullTime: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  level: 'basic' | 'intermediate' | 'advanced' | 'expert';
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'basic' | 'intermediate' | 'advanced' | 'fluent' | 'native';
}

// Tipos de Curso
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // em horas
  format: 'video' | 'text' | 'interactive' | 'mixed';
  accessibility: {
    transcription: boolean;
    audioDescription: boolean;
    signLanguage: boolean;
    simplifiedText: boolean;
    captions: boolean;
  };
  instructor: string;
  rating: number;
  enrolledCount: number;
  thumbnailUrl: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CourseEnrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: number; // 0-100
  completedLessons: string[];
  startedAt: Date;
  completedAt?: Date;
  certificate?: string;
}

// Tipos de Vaga
export interface Job {
  id: string;
  companyId: string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
    remote: boolean;
    hybrid: boolean;
  };
  workload: 'part-time' | 'full-time' | 'contract' | 'internship';
  accessibility: {
    physicalAdaptations: string[];
    assistiveTechnologies: string[];
    flexibleSchedule: boolean;
    quietEnvironment: boolean;
    accessibleWorkspace: boolean;
  };
  status: 'open' | 'closed' | 'paused';
  applicantsCount: number;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
}

export interface JobApplication {
  id: string;
  userId: string;
  jobId: string;
  status: 'pending' | 'reviewing' | 'interview' | 'offer' | 'rejected' | 'accepted';
  coverLetter?: string;
  resume?: string;
  answers?: Record<string, string>;
  appliedAt: Date;
  updatedAt: Date;
}

// Tipos de Empresa
export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  website?: string;
  logo?: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  inclusionScore: number; // 0-100
  diversityMetrics: {
    pcdPercentage: number;
    neurodivergentPercentage: number;
    accessibilityRating: number;
  };
  certifications: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de Recomendação
export interface Recommendation {
  id: string;
  userId: string;
  type: 'course' | 'job' | 'mentor';
  itemId: string;
  score: number; // 0-1
  reasons: string[];
  explanation: string;
  createdAt: Date;
}

// Tipos de Mensagem/Chat
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  format: 'text' | 'audio' | 'video' | 'libras';
  translated?: {
    text?: string;
    audio?: string;
    libras?: string;
  };
  read: boolean;
  sentAt: Date;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Tipos de Formulário
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'candidate' | 'company';
  acceptTerms: boolean;
}

export interface AccessibilityAssessmentForm {
  disabilityTypes: DisabilityType[];
  communicationPreferences: CommunicationPreference[];
  learningStyle: LearningStyle;
  assistiveTechnologies: string[];
  preferences: {
    highContrast: boolean;
    fontSize: string;
    reducedMotion: boolean;
    screenReader: boolean;
    keyboardOnly: boolean;
  };
}

