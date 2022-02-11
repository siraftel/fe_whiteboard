import { forwardRef } from 'react';
import { Group, Avatar, Text, MultiSelect } from '@mantine/core';
import profile from "../../Assets/Icons/default pofile picture.png";

const data = [
  {
    image: (profile),
    label: 'Adam Akbar',
    value: 'Adam Akbar',
  },

  {
    image: (profile),
    label: 'Fakhri Al Fatah',
    value: 'Fakhri Al Fatah',
  },
  {
    image: (profile),
    label: 'Hamdani Abdullah',
    value: 'Hamdani Abdullah',
  },
  {
    image: (profile),
    label: 'John Doe',
    value: 'John Doe',
  },
];

// !important: Forwarding ref is required
const SelectItem = forwardRef(
  ({ image, label, ...others }, ref) => {
    console.log(image, label)
    return (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{label}</Text>
        </div>
      </Group>
    </div>
    )
  }
);

function InputMember() {
  return (
    <MultiSelect
      zIndex={9999}
      size="sm"
      placeholder="Pick member"
      itemComponent={SelectItem}
      data={data}
      searchable
      nothingFound="Nobody here"
      filter={(value, selected, item) =>
        !selected &&
        (item.label.toLowerCase().includes(value.toLowerCase().trim()))
      }
    />
  );
}

export default InputMember;