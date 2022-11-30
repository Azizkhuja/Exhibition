import { Fragment } from "react";
import { styled } from "@mui/material/styles";
// Material UI
import { List, ListItem, ListItemButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

type DataTypes = {
  policies?: string[];
  services?: string[];
};

// Getting data from Footer component as props
const FooterListItem = ({ policies, services }: DataTypes) => {
  // Get responsive size
  const belowMdSize = useMediaQuery("(max-width:900px)");

  return (
    <List sx={{ fontSize: belowMdSize ? 16 : 12 }}>
      {policies?.map((item: string) => (
        <Fragment key={item}>
          <ListItem disablePadding>
            <NewsletterItem>{item}</NewsletterItem>
          </ListItem>
        </Fragment>
      ))}
      {services?.map((item: string) => (
        <Fragment key={item}>
          <ListItem disablePadding>
            <NewsletterItem>{item}</NewsletterItem>
          </ListItem>
        </Fragment>
      ))}
    </List>
  );
};

// Styled components
const NewsletterItem = styled(ListItemButton)`
  padding: 1px;
`;

export default FooterListItem;
