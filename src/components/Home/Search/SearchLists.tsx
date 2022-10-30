import { ListItemButton, List, ListItem, ListItemText } from "@mui/material";

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
