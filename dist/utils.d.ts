import { FieldOption } from './types';
/**
 * Normalizes options to ensure consistent FieldOption format
 */
export declare const normalizeOptions: (options: FieldOption[] | string[] | undefined) => FieldOption[];
/**
 * Gets the display value for form fields
 */
export declare const getDisplayValue: (value: any, type: string) => any;
/**
 * Validates if a field value is empty for required field validation
 */
export declare const isFieldEmpty: (value: any, type: string) => boolean;
/**
 * Debounce function for search inputs
 */
export declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => ((...args: Parameters<T>) => void);
//# sourceMappingURL=utils.d.ts.map