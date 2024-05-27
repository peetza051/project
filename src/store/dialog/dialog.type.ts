import { Ipost } from "@/interface/PostItem";

export enum DialogViews {
  MODEL_CARD_DIALOG = "model-card",
}

export interface IDialog {
  itemPost: Ipost;
  displayDialog: boolean;
  dialogView: DialogViews;
  openDialog: () => void;
  closeDialog: () => void;
  setDialogView: (view: DialogViews) => void;
  setItemPost: (item: Ipost) => void;
}
