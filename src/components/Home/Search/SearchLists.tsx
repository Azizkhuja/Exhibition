import { ListItemButton, List, ListItem, ListItemText } from "@mui/material";

enum Data {
  Classification = "Classification",
  WorkType = "Work Type",
  Period = "Period",
  Place = "Place",
  Century = "Century",
  Gallery = "Gallery",
  onView = "On View",
}

const SearchLists = () => {
  return (
    <List sx={{ display: "flex" }}>
      {Object.values(Data).map((item) => (
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
