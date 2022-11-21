import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Data type
type MenuItemTypes = string[];
type SocialAccTypes = {
  link: string;
  icon: any;
}[];

export const policies: MenuItemTypes = [
  "Terms of Use",
  "Privacy Statement",
  "Digital Accessibility",
  "FAQs",
];
export const services: MenuItemTypes = [
  "Special Event Rentals",
  "Comment Card",
  "Image Licensing",
  "API",
];
export const addressInfo: MenuItemTypes = [
  "Harvard Art Museums",
  "32 Quincy Street",
  "Cambridge, MA 02138",
  "1 (617) 495-9400",
];

export const socialAccInfo: SocialAccTypes = [
  {
    link: "https://github.com/Azizkhuja",
    icon: <GitHubIcon />,
  },
  {
    link: "https://azeezkhujaev.netlify.app",
    icon: <LanguageIcon />,
  },
  {
    link: "https://twitter.com/aziz_ipro",
    icon: <TwitterIcon />,
  },
  {
    link: "https://www.linkedin.com/in/azizkhujakhujaev",
    icon: <LinkedInIcon />,
  },
];
