import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IAccessibilityProfile extends Document {
  userId: Types.ObjectId;
  disabilityTypes: string[];
  communicationPreferences: string[];
  learningStyle: string;
  preferences: {
    highContrast: boolean;
    fontSize: string;
    reducedMotion: boolean;
    screenReader: boolean;
    keyboardOnly: boolean;
    audioDescription: boolean;
    captions: boolean;
    signLanguage: boolean;
  };
  assistiveTechnologies: string[];
  specificNeeds?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AccessibilityProfileSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    disabilityTypes: {
      type: [String],
      enum: ['visual', 'auditiva', 'motora', 'cognitiva', 'neurodivergente', 'multipla', 'nenhuma'],
      default: [],
    },
    communicationPreferences: {
      type: [String],
      enum: ['texto', 'voz', 'libras', 'leitura_facil', 'audio_descricao'],
      default: ['texto'],
    },
    learningStyle: {
      type: String,
      enum: ['visual', 'auditivo', 'cinestesico', 'leitura_escrita'],
      default: 'visual',
    },
    preferences: {
      highContrast: {
        type: Boolean,
        default: false,
      },
      fontSize: {
        type: String,
        enum: ['small', 'medium', 'large', 'extra-large'],
        default: 'medium',
      },
      reducedMotion: {
        type: Boolean,
        default: false,
      },
      screenReader: {
        type: Boolean,
        default: false,
      },
      keyboardOnly: {
        type: Boolean,
        default: false,
      },
      audioDescription: {
        type: Boolean,
        default: false,
      },
      captions: {
        type: Boolean,
        default: false,
      },
      signLanguage: {
        type: Boolean,
        default: false,
      },
    },
    assistiveTechnologies: {
      type: [String],
      default: [],
    },
    specificNeeds: {
      type: String,
      maxlength: [1000, 'Necessidades específicas devem ter no máximo 1000 caracteres'],
    },
  },
  {
    timestamps: true,
  }
);

// Índices
AccessibilityProfileSchema.index({ userId: 1 });
AccessibilityProfileSchema.index({ disabilityTypes: 1 });
AccessibilityProfileSchema.index({ learningStyle: 1 });

export default mongoose.model<IAccessibilityProfile>('AccessibilityProfile', AccessibilityProfileSchema);

