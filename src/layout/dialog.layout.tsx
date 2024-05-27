'use client';

import ModelCard from "@/components/dialog/modelCard";
import { Dialog } from "@/components/ui/dialog";
import useDialog from "@/store/dialog/dialog.store";
import { DialogViews } from "@/store/dialog/dialog.type";

function DialogUI() {
  const { displayDialog, dialogView, closeDialog } = useDialog();
  return (
    <Dialog open={displayDialog} onOpenChange={closeDialog}>
      {dialogView === DialogViews.MODEL_CARD_DIALOG && (
        <ModelCard />
      )}

    </Dialog>
  );
}
export default function DialogLayout() {
  return <DialogUI />;
}