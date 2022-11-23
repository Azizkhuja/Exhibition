import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

type DataTypes = {
  policies?: string[];
  services?: string[];
};

const FooterListItem = ({ policies, services }: DataTypes) => {
  const belowXsSize = useMediaQuery("(max-width:600px)");
  return (
    <List sx={{ fontSize: belowXsSize ? 16 : 12 }}>
      {policies?.map((item: string) => {
        return (
          <ListItem disablePadding>
            <NewsletterItem>{item}</NewsletterItem>
          </ListItem>
        );
      })}
      {services?.map((item: string) => {
        return (
          <ListItem disablePadding>
            <NewsletterItem>{item}</NewsletterItem>
          </ListItem>
        );
      })}
    </List>
  );
};

const NewsletterItem = styled(ListItemButton)`
  padding: 1px;
`;

export default FooterListItem;
