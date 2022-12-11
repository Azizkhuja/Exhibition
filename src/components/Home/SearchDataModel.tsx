export interface MainPageData {
  copyright: null;
  contextualtextcount: number;
  creditline: string;
  accesslevel: number;
  dateoflastpageview: Date;
  classificationid: number;
  division: Division;
  markscount: number;
  publicationcount: number;
  totaluniquepageviews: number;
  contact: Contact;
  colorcount: number;
  rank: number;
  details: Details;
  state: null;
  id: number;
  verificationleveldescription: string;
  period: null | string;
  images: Image[];
  worktypes: WorktypeElement[];
  imagecount: number;
  totalpageviews: number;
  accessionyear: number;
  standardreferencenumber: string;
  signed: null;
  classification: Classification;
  relatedcount: number;
  verificationlevel: number;
  primaryimageurl: string;
  titlescount: number;
  peoplecount: number;
  style: null;
  lastupdate: Lastupdate;
  commentary: null;
  periodid: number | null;
  technique: Technique;
  edition: null;
  description: null;
  medium: Medium;
  lendingpermissionlevel: number;
  title: string;
  accessionmethod: Accessionmethod;
  colors: Color[];
  provenance: null;
  groupcount: number;
  dated: string;
  department: Department;
  dateend: number;
  url: string;
  dateoffirstpageview: Date;
  century: null;
  objectnumber: string;
  labeltext: null;
  datebegin: number;
  culture: Culture;
  exhibitioncount: number;
  imagepermissionlevel: number;
  mediacount: number;
  objectid: number;
  techniqueid: number;
  dimensions: string;
  seeAlso: SeeAlso[];
}

export enum Accessionmethod {
  Bequest = "Bequest",
}

export enum Classification {
  Seals = "Seals",
}

export interface Color {
  color: string;
  spectrum: string;
  hue: Hue;
  percent: number;
  css3: string;
}

export enum Hue {
  Black = "Black",
  Brown = "Brown",
  Green = "Green",
  Grey = "Grey",
  Yellow = "Yellow",
}

export enum Contact {
  AmAsianmediterraneanHarvardEdu = "am_asianmediterranean@harvard.edu",
}

export enum Culture {
  Byzantine = "Byzantine",
}

export enum Department {
  DepartmentOfAncientAndByzantineArtNumismatics = "Department of Ancient and Byzantine Art & Numismatics",
}

export interface Details {
  coins: Coins;
}

export interface Coins {
  reverseinscription: null;
  dieaxis: null;
  metal: Metal;
  obverseinscription: null;
  denomination: null;
  dateonobject: null;
}

export enum Metal {
  Pb = "Pb",
}

export enum Division {
  AsianAndMediterraneanArt = "Asian and Mediterranean Art",
}

export interface Image {
  date: Date;
  copyright: Copyright;
  imageid: number;
  idsid: number;
  format: ImageFormat;
  description: null;
  technique: null;
  renditionnumber: string;
  displayorder: number;
  baseimageurl: string;
  alttext: null;
  width: number;
  publiccaption: null;
  iiifbaseuri: string;
  height: number;
}

export enum Copyright {
  PresidentAndFellowsOfHarvardCollege = "President and Fellows of Harvard College",
}

export enum ImageFormat {
  ImageJPEG = "image/jpeg",
}

export enum Lastupdate {
  The20221210T0529350500 = "2022-12-10T05:29:35-0500",
  The20221210T0529360500 = "2022-12-10T05:29:36-0500",
}

export enum Medium {
  Lead = "Lead",
  MediumLead = "lead",
}

export interface SeeAlso {
  id: string;
  type: Type;
  format: SeeAlsoFormat;
  profile: string;
}

export enum SeeAlsoFormat {
  ApplicationJSON = "application/json",
}

export enum Type {
  IIIFManifest = "IIIF Manifest",
}

export enum Technique {
  Struck = "Struck",
}

export interface WorktypeElement {
  worktypeid: string;
  worktype: WorktypeEnum;
}

export enum WorktypeEnum {
  Seal = "seal",
}
