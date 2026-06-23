type ModalProps = {
  open: boolean;
  children: React.ReactNode;
};

export default function Modal({
  open,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow w-96">
        {children}
      </div>
    </div>
  );
}