import { Ipost } from "@/interface/PostItem";

export enum DialogViews {
  MODEL_CARD_DIALOG = "model-card",
  MODEL_CREATE_DIALOG = "model-create",
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
