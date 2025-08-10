# MUI Smart Form Builder

A powerful and flexible React component for dynamically rendering Material-UI forms from JSON configuration with Formik integration.

## Features

- 🎯 **Formik Integration**: Seamless integration with Formik for form state management
- 🎨 **Material-UI Components**: Built with MUI components for consistent design
- 📱 **Responsive Layout**: Grid-based responsive layout system
- 🔧 **Flexible Configuration**: JSON-driven form configuration
- 🎭 **Custom Rendering**: Support for custom field renderers
- 🔍 **Dynamic Search**: Autocomplete fields with async search capabilities
- 📝 **Rich Field Types**: Support for 15+ field types
- 💪 **TypeScript**: Full TypeScript support with comprehensive types
- 🌳 **Tree Shakeable**: Optimized for tree shaking

## Installation

```bash
npm install mui-smart-form-builder
```

### Peer Dependencies
```bash
npm install @mui/material @emotion/react @emotion/styled formik
```

### Optional Dependencies (for date/time fields)
```bash
npm install @mui/x-date-pickers dayjs
```

> **Note**: When using date/time fields, you must wrap your app with `LocalizationProvider`:
```tsx
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <YourApp />
</LocalizationProvider>
```

```bash
npm install mui-smart-form-builder

# Peer dependencies (if not already installed)
npm install react react-dom @mui/material @emotion/react @emotion/styled formik
```

For date/time pickers, also install:
```bash
npm install @mui/x-date-pickers dayjs
```

## Quick Start

```tsx
import React from 'react';
import { useFormik } from 'formik';
import { SmartFormBuilder } from 'mui-smart-form-builder';

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: 0,
      gender: '',
      newsletter: false
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  });

  const fields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email',
      grid: { xs: 12 }
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      min: 0,
      max: 120,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
        { label: 'Other', value: 'O' }
      ],
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'newsletter',
      label: 'Subscribe to newsletter',
      type: 'checkbox',
      grid: { xs: 12 }
    }
  ];

  const buttons = [
    {
      label: 'Reset',
      variant: 'outlined',
      onClick: (formik) => formik.resetForm()
    },
    {
      label: 'Submit',
      variant: 'contained',
      type: 'submit'
    }
  ];

  return (
    <SmartFormBuilder
      formik={formik}
      title="User Registration Form"
      fields={fields}
      buttons={buttons}
      gridSpacing={2}
    />
  );
};

export default MyForm;
```

## Supported Field Types

### Text Fields
- `text` - Standard text input
- `textarea` - Multi-line text input
- `number` - Numeric input with min/max/step support
- `password` - Password input

### Selection Fields
- `checkbox` - Single checkbox
- `multiCheckbox` - Multiple checkboxes
- `radio` - Radio button group
- `select` - Dropdown select (single/multiple)
- `autocomplete` - Autocomplete with async search

### Date/Time Fields
- `date` - Date picker
- `time` - Time picker
- `dateTime` - Date and time picker

### Interactive Fields
- `switch` - Toggle switch
- `slider` - Range slider
- `file` - File upload

### Layout
- `empty` - Empty space for layout purposes

## API Reference

### SmartFormBuilderProps

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `formik` | `FormikProps<any>` | ✅ | Formik instance |
| `fields` | `FieldConfig[]` | ✅ | Array of field configurations |
| `buttons` | `ButtonConfig[]` | ❌ | Form buttons configuration |
| `title` | `string` | ❌ | Form title |
| `className` | `string` | ❌ | CSS class name |
| `sx` | `SxProps` | ❌ | MUI sx prop for styling |
| `gridSpacing` | `number` | ❌ | Grid spacing (default: 2) |

### FieldConfig

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ❌ | Field name (formik key) |
| `label` | `string` | ❌ | Field label |
| `type` | `FieldType` | ✅ | Field type |
| `placeholder` | `string` | ❌ | Placeholder text |
| `options` | `FieldOption[]` or `string[]` | ❌ | Options for select/radio/checkbox |
| `grid` | `GridBreakpoint` | ❌ | Grid responsive breakpoints |
| `required` | `boolean` | ❌ | Required field validation |
| `variant` | `'outlined'` \| `'filled'` \| `'standard'` | ❌ | MUI variant |
| `muiProps` | `Record<string, any>` | ❌ | Additional MUI props |
| `onChange` | `(value: any, formik: FormikProps) => void` | ❌ | Custom change handler |
| `onSearch` | `(searchTerm: string) => Promise<FieldOption[]>` | ❌ | Async search for autocomplete |
| `render` | `(props) => ReactNode` | ❌ | Custom render function |

#### Field-specific Properties

| Property | Applicable Types | Description |
|----------|------------------|-------------|
| `min`, `max`, `step` | `number`, `slider` | Numeric constraints |
| `marks` | `slider` | Show marks on slider |
| `freeSolo` | `autocomplete` | Allow free text input |
| `multiple` | `select`, `autocomplete` | Multiple selection |
| `accept` | `file` | File type filter |

### ButtonConfig

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | ✅ | Button text |
| `variant` | `'text'` \| `'outlined'` \| `'contained'` | ❌ | Button variant |
| `color` | MUI color | ❌ | Button color |
| `type` | `'submit'` \| `'button'` \| `'reset'` | ❌ | Button type |
| `onClick` | `(formik: FormikProps) => void` | ❌ | Click handler |
| `muiProps` | `Record<string, any>` | ❌ | Additional MUI props |

## Advanced Usage

### Custom Field Rendering

```tsx
const customField = {
  name: 'customField',
  type: 'text',
  render: ({ fieldProps, formik }) => (
    <CustomComponent 
      {...fieldProps}
      onCustomAction={() => {
        // Custom logic
        formik.setFieldValue('customField', 'new value');
      }}
    />
  )
};
```

### Async Autocomplete

```tsx
const asyncAutocomplete = {
  name: 'skills',
  label: 'Skills',
  type: 'autocomplete',
  freeSolo: true,
  multiple: true,
  onSearch: async (searchTerm) => {
    const response = await fetch(`/api/skills?q=${searchTerm}`);
    const data = await response.json();
    return data.map(skill => ({ label: skill.name, value: skill.id }));
  }
};
```

### Dynamic Field Updates

```tsx
const conditionalField = {
  name: 'country',
  label: 'Country',
  type: 'select',
  options: countries,
  onChange: (value, formik) => {
    // Reset state field when country changes
    formik.setFieldValue('state', '');
    
    // Fetch states for selected country
    fetchStates(value).then(states => {
      // Update form configuration dynamically
    });
  }
};
```

## Validation

The component works seamlessly with Formik's validation. You can use Yup schema or custom validation:

```tsx
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number().min(18, 'Must be at least 18').required()
});

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: handleSubmit
});
```

## Styling

### Global Styling

```tsx
<SmartFormBuilder
  formik={formik}
  fields={fields}
  sx={{
    '& .MuiTextField-root': {
      marginBottom: 2
    },
    '& .MuiFormControl-root': {
      width: '100%'
    }
  }}
/>
```

### Per-field Styling

```tsx
const styledField = {
  name: 'specialField',
  type: 'text',
  muiProps: {
    sx: { 
      backgroundColor: 'primary.light',
      '& .MuiInputBase-root': {
        borderRadius: 2
      }
    }
  }
};
```

## Examples

See the `/demo` folder for a complete example application showcasing all features.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 1.0.0
- Initial release
- Support for 15+ field types
- Formik integration
- TypeScript support
- Responsive grid layout
- Custom rendering capabilities
