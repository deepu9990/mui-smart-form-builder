import { FieldOption } from './types';

/**
 * Normalizes options to ensure consistent FieldOption format
 */
export const normalizeOptions = (options: FieldOption[] | string[] | undefined): FieldOption[] => {
  if (!options) return [];
  
  return options.map(option => {
    if (typeof option === 'string') {
      return { label: option, value: option };
    }
    return option;
  });
};

/**
 * Gets the display value for form fields
 */
export const getDisplayValue = (value: any, type: string): any => {
  if (value === null || value === undefined) {
    return type === 'multiCheckbox' ? [] : '';
  }
  
  switch (type) {
    case 'multiCheckbox':
      return Array.isArray(value) ? value : [];
    case 'checkbox':
      return Boolean(value);
    case 'switch':
      return Boolean(value);
    case 'slider':
      return Number(value) || 0;
    case 'number':
      return value === '' ? '' : Number(value);
    default:
      return value;
  }
};

/**
 * Validates if a field value is empty for required field validation
 */
export const isFieldEmpty = (value: any, type: string): boolean => {
  if (value === null || value === undefined) return true;
  
  switch (type) {
    case 'multiCheckbox':
      return !Array.isArray(value) || value.length === 0;
    case 'checkbox':
    case 'switch':
      return false; // These always have a boolean value
    case 'file':
      return !value || (value instanceof FileList && value.length === 0);
    default:
      return String(value).trim() === '';
  }
};

/**
 * Debounce function for search inputs
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
