// I TikTokUrlInput.jsx
import React from 'react';
import { FormBuilderInput } from '@sanity/form-builder';
import { setIfMissing, unset } from '@sanity/form-builder/PatchEvent';
import TikTokVideoPreview from '../components/TikTokVideoPreview';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : setIfMissing(value));

export const TikTokUrlInput = React.forwardRef((props, ref) => {
  const { type, value, onChange } = props;

  return (
    <div>
      <FormBuilderInput type={type} value={value} onChange={onChange} ref={ref} />
      <TikTokVideoPreview value={value} />
    </div>
  );
});
