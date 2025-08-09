import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
export type FieldType = 'text' | 'textarea' | 'number' | 'password' | 'checkbox' | 'multiCheckbox' | 'radio' | 'select' | 'autocomplete' | 'date' | 'time' | 'dateTime' | 'switch' | 'slider' | 'file' | 'empty';
export type FieldOption = {
    label: string;
    value: any;
};
export type GridBreakpoint = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
export type FieldConfig = {
    name?: string;
    label?: string;
    type: FieldType;
    placeholder?: string;
    options?: FieldOption[] | string[];
    grid?: GridBreakpoint;
    required?: boolean;
    variant?: 'outlined' | 'filled' | 'standard';
    muiProps?: Record<string, any>;
    onChange?: (value: any, formik: any) => void;
    onSearch?: (searchTerm: string) => Promise<FieldOption[]>;
    render?: (props: {
        fieldProps: any;
        formik: any;
    }) => ReactNode;
    min?: number;
    max?: number;
    step?: number;
    marks?: boolean;
    freeSolo?: boolean;
    multiple?: boolean;
    accept?: string;
};
export type ButtonConfig = {
    label: string;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    type?: 'submit' | 'button' | 'reset';
    onClick?: (formik: any) => void;
    muiProps?: Record<string, any>;
};
export type SmartFormBuilderProps = {
    formik: any;
    fields: FieldConfig[];
    buttons?: ButtonConfig[];
    title?: string;
    className?: string;
    sx?: SxProps<Theme>;
    gridSpacing?: number;
};
export type FieldProps = {
    field: FieldConfig;
    formik: any;
    value: any;
    error?: string;
    helperText?: string;
    onChange: (value: any) => void;
};
//# sourceMappingURL=types.d.ts.map