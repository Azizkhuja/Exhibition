// Material UI icons
import { ListItemButton, List, ListItem, ListItemText } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// Enums
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
      {!belowMdSize
        ? Object.values(SearchType).map((item, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))
        : null}
    </List>
  );
};

export default SearchLists;
