import { ListItemButton, List, ListItem, ListItemText } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

enum SearchType {
  Classification = "Classification",
  WorkType = "Work Type",
  Period = "Period",
  Place = "Place",
  Century = "Century",
  Gallery = "Gallery",
  onView = "On View",
}

const SearchLists = () => {
  const belowMdSize = useMediaQuery("(max-width:900px)");
  return (
    <List sx={{ display: "flex" }}>
      {Object.values(SearchType).map((item) => (
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
