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
