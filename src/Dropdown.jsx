import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const dropdownOptions = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "Python" },
];

function Dropdown() {
  const [selected, setSelected] = useState("Languages");

  return (
    <Menu>
      <MenuButton
        colorScheme="blue"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {selected}
      </MenuButton>
      <MenuList>
        {dropdownOptions.map((item) => (
          <MenuItem key={item.id} onClick={() => setSelected(item.label)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default Dropdown;
