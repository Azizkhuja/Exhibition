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
      {searchTypes.map((item) => (
        <ListItem>
          <ListItemButton>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchLists;
