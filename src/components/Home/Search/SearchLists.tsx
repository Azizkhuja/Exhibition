import { ListItemButton, List, ListItem, ListItemText } from "@mui/material";

// Refactor list and import above
const searchTypes: string[] = [
  "Classification",
  "Work Type",
  "Period",
  "Place",
  "Century",
  "Gallery",
  "On View",
];

const SearchLists = () => {
  return (
    <List sx={{ display: "flex" }}>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Classification" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Work Type" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Period" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Place" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Century" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Culture" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Gallery" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="On View" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SearchLists;
