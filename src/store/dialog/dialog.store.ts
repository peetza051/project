import { create, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";

import { DialogViews, IDialog } from "./dialog.type";
import { Ipost } from "@/interface/PostItem";

const initialState = {
  displayDialog: false,
  dialogView: DialogViews.MODEL_CARD_DIALOG,
  itemPost: {
    tarvel: {
        image: "",
        name: "",
        description: "",
      },
      opentime: "",
      address: "",
      category: ""
  },
};

const initialState2 = {
  displayDialog: false,
  dialogView: DialogViews.MODEL_CREATE_DIALOG,
  itemPost: {
    tarvel: {
        image: "",
        name: "",
        description: "",
      },
      opentime: "",
      address: "",
      category: ""
  },
};

const useDialog = create(
  devtools((set: StoreApi<IDialog>["setState"]) => ({
    ...initialState,...initialState2, 
    openDialog: () => {
      set({ displayDialog: true });
    },
    closeDialog: () => {
      set({ displayDialog: false });
    },

    setDialogView: (view: DialogViews) => {
      set({ dialogView: view });
    },
    setItemPost: (item: Ipost) => {
      set({ itemPost: item });
    },
  }))
);



export default useDialog;
