import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  cpf?: string;
  birthDate?: Date;
  role: 'candidate' | 'company' | 'mentor' | 'admin';
  profileImage?: string;
  emailVerified: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      trim: true,
      minlength: [2, 'Nome deve ter no mínimo 2 caracteres'],
      maxlength: [100, 'Nome deve ter no máximo 100 caracteres'],
    },
    email: {
      type: String,
      required: [true, 'Email é obrigatório'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Email inválido'],
    },
    password: {
      type: String,
      required: [true, 'Senha é obrigatória'],
      minlength: [8, 'Senha deve ter no mínimo 8 caracteres'],
      select: false, // Não retornar senha por padrão
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?[\d\s\-()]+$/, 'Telefone inválido'],
    },
    cpf: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      match: [/^\d{11}$/, 'CPF deve conter 11 dígitos'],
    },
    birthDate: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['candidate', 'company', 'mentor', 'admin'],
      default: 'candidate',
    },
    profileImage: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para performance
UserSchema.index({ email: 1 });
UserSchema.index({ cpf: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ active: 1 });

export default mongoose.model<IUser>('User', UserSchema);

