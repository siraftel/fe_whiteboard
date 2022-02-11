import { forwardRef } from 'react';
import { CloseButton, MultiSelect, Box } from '@mantine/core';
import PriorityIcon from "./PriorityIcon";

function Value({ value, label, onRemove, classNames, ...others }) {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          border: `1px solid ${theme.colors.gray[4]}`,
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <div style={{ marginRight: 10 }}>
          <PriorityIcon />
        </div>
        <div style={{ lineHeight: 1, fontSize: 12 }}>{label}</div>
        <CloseButton onMouseDown={onRemove} variant="transparent" size={22} iconSize={14} tabIndex={-1} />
      </Box>
    </div>
  );
}

const countriesData = [
  {
    label: "Highest",
    value: "Highest"
  },
  {
    label: "High",
    value: "High"
  },
  {
    label: "Low",
    value: "Low"
  },
  {
    label: "Lowest",
    value: "Lowest"
  }
]

const Item = forwardRef(({ label, value, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Box sx={{ display: 'flex' }}>
      <Box mr={10}>
        <PriorityIcon />
      </Box>
      <div>{label}</div>
    </Box>
  </div>
));

export function InputPriority() {
  return (
    <MultiSelect
      size="sm"
      zIndex={9999}
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      defaultValue={['US', 'DE']}
      placeholder="Pick countries"
    />
  );
}

export default InputPriority;