import React from 'react';
import type { Course } from '@types/index';
import { clsx } from 'clsx';

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, className }) => {
  const accessibilityFeatures = [];
  if (course.accessibility.transcription) accessibilityFeatures.push('Transcrição');
  if (course.accessibility.audioDescription) accessibilityFeatures.push('Audiodescrição');
  if (course.accessibility.signLanguage) accessibilityFeatures.push('Libras');
  if (course.accessibility.simplifiedText) accessibilityFeatures.push('Texto Simplificado');
  if (course.accessibility.captions) accessibilityFeatures.push('Legendas');

  return (
    <article
      className={clsx(
        'bg-white rounded-xl shadow-soft overflow-hidden',
        'transition-all duration-300 hover:shadow-medium',
        'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2',
        className
      )}
      aria-label={`Curso: ${course.title}`}
    >
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={course.thumbnailUrl}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.level === 'beginner' && 'Iniciante'}
          {course.level === 'intermediate' && 'Intermediário'}
          {course.level === 'advanced' && 'Avançado'}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{course.duration}h</span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{course.rating.toFixed(1)}</span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>{course.enrolledCount} alunos</span>
          </div>
        </div>

        {accessibilityFeatures.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-1 mb-2">
              <svg
                className="w-4 h-4 text-primary-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">Recursos de Acessibilidade:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {accessibilityFeatures.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {onEnroll && (
          <button
            onClick={() => onEnroll(course.id)}
            className="w-full bg-primary-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-primary-700 active:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label={`Inscrever-se no curso ${course.title}`}
          >
            Inscrever-se
          </button>
        )}
      </div>
    </article>
  );
};

