import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemButton } from "@mui/material";

type DataTypes = {
  policies?: string[];
  services?: string[];
};

const FooterListItem = ({ policies, services }: DataTypes) => {
  return (
    <List>
      {policies?.map((item: string) => {
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
