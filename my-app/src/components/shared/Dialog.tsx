import "./dialog.css";

function Dialog({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref: React.Ref<HTMLDialogElement>;
}) {
  return (
    <dialog className="dialog" closedby="any" ref={ref}>
      {children}
    </dialog>
  );
}

export default Dialog;
