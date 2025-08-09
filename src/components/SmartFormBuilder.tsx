import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper
} from '@mui/material';
import { SmartFormBuilderProps, FieldConfig, ButtonConfig } from '../types';
import FieldRenderer from './FieldRenderer';
import { isFieldEmpty } from '../utils';

const SmartFormBuilder: React.FC<SmartFormBuilderProps> = ({
  formik,
  fields,
  buttons = [],
  title,
  className,
  sx,
  gridSpacing = 2
}) => {
  const handleFieldChange = (fieldName: string, value: any, field: FieldConfig) => {
    formik.setFieldValue(fieldName, value);
    formik.setFieldTouched(fieldName, true, false);

    if (field.onChange) {
      field.onChange(value, formik);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const touchedFields: Record<string, boolean> = {};
    fields.forEach((field) => {
      if (field.name) {
        touchedFields[field.name] = true;
      }
    });
    await formik.setTouched(touchedFields, true);
    
    const errors = await formik.validateForm();
    
    if (Object.keys(errors).length > 0) {
      formik.setErrors(errors);
      return;
    }
    
    formik.handleSubmit();
  };

  const getFieldError = (fieldName: string) => {
    const isFieldTouched = formik.touched[fieldName];
    const hasFormBeenSubmitted = formik.submitCount > 0;
    const hasFieldError = formik.errors[fieldName];
    
    const shouldShowError = isFieldTouched || hasFormBeenSubmitted;
    return shouldShowError && hasFieldError ? String(formik.errors[fieldName]) : undefined;
  };

  const getFieldHelperText = (field: FieldConfig, fieldError?: string) => {
    return fieldError;
  };

  return (
    <Box className={className} sx={sx}>
      {title && (
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
      )}
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          {fields.map((field, index) => {
            const fieldName = field.name || `field_${index}`;
            const fieldValue = field.name ? formik.values[field.name] : undefined;
            const fieldError = field.name ? getFieldError(field.name) : undefined;
            const helperText = getFieldHelperText(field, fieldError);

            const gridProps: any = {
              item: true,
              xs: field.grid?.xs || 12
            };
            
            if (field.grid?.sm !== undefined) gridProps.sm = field.grid.sm;
            if (field.grid?.md !== undefined) gridProps.md = field.grid.md;
            if (field.grid?.lg !== undefined) gridProps.lg = field.grid.lg;
            if (field.grid?.xl !== undefined) gridProps.xl = field.grid.xl;

            return (
              <Grid 
                key={fieldName}
                {...gridProps}
              >
                <FieldRenderer
                  field={field}
                  formik={formik}
                  value={fieldValue}
                  error={fieldError}
                  helperText={helperText}
                  onChange={(value) => {
                    if (field.name) {
                      handleFieldChange(field.name, value, field);
                    }
                  }}
                />
              </Grid>
            );
          })}
        </Grid>

        {buttons.length > 0 && (
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                type={button.type || 'button'}
                variant={button.variant || 'contained'}
                color={button.color || 'primary'}
                onClick={button.onClick ? () => button.onClick!(formik) : undefined}
                {...button.muiProps}
              >
                {button.label}
              </Button>
            ))}
          </Box>
        )}
      </form>
    </Box>
  );
};

export default SmartFormBuilder;
