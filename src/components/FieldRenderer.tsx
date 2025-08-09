import React from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Autocomplete,
  Switch,
  Slider,
  Typography,
  Box,
  FormHelperText,
  InputLabel,
  Chip
} from '@mui/material';
import { FieldProps } from '../types';
import { normalizeOptions, getDisplayValue, debounce } from '../utils';

import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const FieldRenderer: React.FC<FieldProps> = ({
  field,
  formik,
  value,
  error,
  helperText,
  onChange
}) => {
  const {
    name = '',
    label,
    type,
    placeholder,
    options = [],
    required = false,
    variant = 'outlined',
    muiProps = {},
    onSearch,
    min,
    max,
    step,
    marks = false,
    freeSolo = false,
    multiple = false,
    accept,
    render
  } = field;

  const displayValue = getDisplayValue(value, type);
  const normalizedOptions = normalizeOptions(options);

  if (render) {
    return render({
      fieldProps: {
        name,
        label,
        value: displayValue,
        error: Boolean(error),
        helperText: error || helperText,
        onChange: (newValue: any) => onChange(newValue),
        ...muiProps
      },
      formik
    }) as React.ReactElement;
  }

  const baseProps = {
    label,
    error: Boolean(error),
    helperText: error || helperText,
    variant,
    ...muiProps
  };

  switch (type) {
    case 'text':
    case 'password':
      return (
        <TextField
          {...baseProps}
          type={type}
          value={displayValue}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          fullWidth
        />
      );

    case 'textarea':
      return (
        <TextField
          {...baseProps}
          multiline
          rows={4}
          value={displayValue}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          fullWidth
        />
      );

    case 'number':
      return (
        <TextField
          {...baseProps}
          type="text"
          value={displayValue}
          placeholder={placeholder}
          onChange={(e) => {
            const value = e.target.value;
            if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
              onChange(value === '' ? '' : Number(value));
            }
          }}
          fullWidth
        />
      );

    case 'checkbox':
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={displayValue}
              onChange={(e) => onChange(e.target.checked)}
              {...muiProps}
            />
          }
          label={label}
        />
      );

    case 'multiCheckbox':
      return (
        <FormControl component="fieldset" error={Boolean(error)}>
          <FormLabel component="legend">{label}</FormLabel>
          <FormGroup>
            {normalizedOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={displayValue.includes(option.value)}
                    onChange={(e) => {
                      const newValue = e.target.checked
                        ? [...displayValue, option.value]
                        : displayValue.filter((v: any) => v !== option.value);
                      onChange(newValue);
                    }}
                    {...muiProps}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
          {(error || helperText) && <FormHelperText>{error || helperText}</FormHelperText>}
        </FormControl>
      );

    case 'radio':
      return (
        <FormControl component="fieldset" error={Boolean(error)}>
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup
            value={displayValue}
            onChange={(e) => onChange(e.target.value)}
          >
            {normalizedOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio {...muiProps} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {(error || helperText) && <FormHelperText>{error || helperText}</FormHelperText>}
        </FormControl>
      );

    case 'select':
      return (
        <FormControl fullWidth variant={variant} error={Boolean(error)}>
          <InputLabel>{label}</InputLabel>
          <Select
            value={displayValue}
            label={label}
            onChange={(e) => onChange(e.target.value)}
            multiple={multiple}
            {...muiProps}
          >
            {normalizedOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {(error || helperText) && <FormHelperText>{error || helperText}</FormHelperText>}
        </FormControl>
      );

    case 'autocomplete':
      return (
        <AutocompleteField
          field={field}
          value={displayValue}
          onChange={onChange}
          error={Boolean(error)}
          helperText={error || helperText}
          options={normalizedOptions}
          onSearch={onSearch}
          freeSolo={freeSolo}
          multiple={multiple}
          muiProps={muiProps}
        />
      );

    case 'date':
    case 'time':
    case 'dateTime':
      const parseValue = (val: any) => {
        if (!val) return null;
        if (dayjs.isDayjs(val)) return val;
        return dayjs(val);
      };

      const handleDateChange = (newValue: any) => {
        if (!newValue) {
          onChange('');
          return;
        }
        
        if (type === 'time') {
          onChange(newValue.format('HH:mm'));
        } else if (type === 'date') {
          onChange(newValue.format('YYYY-MM-DD'));
        } else {
          onChange(newValue.format('YYYY-MM-DDTHH:mm'));
        }
      };

      const renderDateTimePicker = () => {
        const commonProps = {
          value: parseValue(displayValue),
          onChange: handleDateChange,
          slotProps: {
            textField: {
              ...baseProps,
              fullWidth: true,
              error: Boolean(error),
              helperText: error || helperText,
            }
          }
        };

        switch (type) {
          case 'date':
            return <DatePicker {...commonProps} />;
          case 'time':
            return <TimePicker {...commonProps} />;
          case 'dateTime':
            return <DateTimePicker {...commonProps} />;
          default:
            return <DatePicker {...commonProps} />;
        }
      };

      return renderDateTimePicker();

    case 'switch':
      return (
        <FormControlLabel
          control={
            <Switch
              checked={displayValue}
              onChange={(e) => onChange(e.target.checked)}
              {...muiProps}
            />
          }
          label={label}
        />
      );

    case 'slider':
      return (
        <Box sx={{ px: 2 }}>
          <Typography gutterBottom>{label}</Typography>
          <Slider
            value={displayValue}
            onChange={(_, newValue) => onChange(newValue)}
            min={min}
            max={max}
            step={step}
            marks={marks}
            valueLabelDisplay="auto"
            {...muiProps}
          />
          {(error || helperText) && (
            <FormHelperText error={Boolean(error)}>
              {error || helperText}
            </FormHelperText>
          )}
        </Box>
      );

    case 'file':
      return (
        <TextField
          {...baseProps}
          type="file"
          onChange={(e) => {
            const files = (e.target as HTMLInputElement).files;
            onChange(multiple ? files : files?.[0] || null);
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{ accept, multiple }}
          fullWidth
        />
      );

    case 'empty':
      return <Box />;

    default:
      return (
        <TextField
          {...baseProps}
          value={displayValue}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          fullWidth
        />
      );
  }
};

const AutocompleteField: React.FC<{
  field: any;
  value: any;
  onChange: (value: any) => void;
  error: boolean;
  helperText?: string;
  options: any[];
  onSearch?: (searchTerm: string) => Promise<any[]>;
  freeSolo: boolean;
  multiple: boolean;
  muiProps: any;
}> = ({ field, value, onChange, error, helperText, options, onSearch, freeSolo, multiple, muiProps }) => {
  const [searchOptions, setSearchOptions] = React.useState(options);
  const [loading, setLoading] = React.useState(false);

  const debouncedSearch = React.useMemo(
    () => debounce(async (searchTerm: string) => {
      if (onSearch && searchTerm.length > 0) {
        setLoading(true);
        try {
          const results = await onSearch(searchTerm);
          setSearchOptions(results);
        } catch (error) {
          console.error('Search error:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setSearchOptions(options);
      }
    }, 300),
    [onSearch, options]
  );

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      onInputChange={(_, inputValue) => {
        if (onSearch) {
          debouncedSearch(inputValue);
        }
      }}
      options={searchOptions}
      getOptionLabel={(option) => {
        if (typeof option === 'string') return option;
        return option?.label || '';
      }}
      isOptionEqualToValue={(option, value) => {
        if (typeof option === 'string' && typeof value === 'string') {
          return option === value;
        }
        return option?.value === value?.value;
      }}
      loading={loading}
      freeSolo={freeSolo}
      multiple={multiple}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={typeof option === 'string' ? option : option.label}
            {...getTagProps({ index })}
            key={index}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={field.label}
          error={error}
          helperText={helperText}
          variant={field.variant}
          placeholder={field.placeholder}
          {...muiProps}
        />
      )}
    />
  );
};

export default FieldRenderer;
